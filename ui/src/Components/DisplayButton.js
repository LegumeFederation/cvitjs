import React from 'react';
import {binSizeDefault} from "./DefaultConfiguration";

/**
 * Button to send request for gff to server and add results to cvit image.
 */

export default class DisplayButton extends React.Component {
    state = {
        priorRequest:{
            request:'',
            interval:50000,
            response:{},
            refMax: 0,
        },
    };

    onSubmit = () => {
        const { selected, options } = this.props;
        const {priorRequest} = this.state;
        let {headers} = this.props
        let requestString = '';
        let classes = {};
        let count = 0;
        selected.forEach((query, i) => {
            if (query !== null && query.hasOwnProperty('dataset') && query.hasOwnProperty('genotype')
                && query.dataset != null && query.genotype != null){
                count++;
                requestString =  i === 0 ? requestString+'Ref=' : requestString+'&Variant=';
                requestString = requestString+encodeURIComponent(`${query.dataset.value}:${query.genotype.value}`);
                classes[query.genotype.value] = query.color;
            } else if(i === 0){
                throw new Error('Reference must be selected.')
            }
        });
        classes['undefined'] = 'black';
        // Configure cvit model for new view
        let cvit = window.cvit;
        let model = cvit.model;
        model._viewConfig.classes = classes;

        const binSize = options.left.hasOwnProperty('bin_size') ? options.left.bin_size :
            options.right.hasOwnProperty('bin_size') ? options.right.bin_size : binSizeDefault;
        requestString = requestString + "&Bin=" + encodeURIComponent(binSize);
        this.props.hide();
        //fetch new data
        if( (priorRequest.request !== requestString) ||
            (binSize !== priorRequest.interval )
        ) {
            document.getElementById('cvit-app').style.visibility = 'visible';
            this.setState({hideOptions:true});
            model._viewData.same = {};
            model._viewData.diff = {};
            model._viewData.total = {};

            headers.append("Content-Type", "application/x-www-form-urlencoded")
            console.log('auth-header', headers)

            model.appendData('api/generateGFF', {
                method: 'POST',
                headers: headers,
                body: requestString,
            })
                .then(() =>{
                    model._viewLayout.chrOrder = model._setChrOrder(model._viewData);
                    let refMax = 0;
                    let vd = model._viewData;
                    Object.keys(vd.total).forEach(key => {
                        let chr = vd.total[key];
                        if (chr.hasOwnProperty('maxScore') && chr.maxScore.value > refMax) refMax = chr.maxScore.value;
                    });
                    this.setState({priorRequest:{response: model._viewData, request:requestString, interval:binSize, refMax}});
                    this.setView(options, model, count,refMax);
                })
                .catch(e => {
                    console.error('cvit.js: Error requesting data: ', e);
                });
        } else {
            this.setView(options, model,count,priorRequest.refMax);
        }
    };
    setView = (options,model,count,refMax) =>{
    //  let vd = model._viewData;
    //  Object.keys(vd.total).forEach(key => {
    //      let chr = vd.total[key];
    //      if (chr.hasOwnProperty('maxScore') && chr.maxScore.value > max) max = chr.maxScore.value;
    //  });
    if(options.left.bin_max === 0){
        options.left.bin_max = options.left.display === 'heat' ? refMax : refMax*count;
    }
    if(options.right.bin_max === 0){
        options.right.bin_max = options.right.display === 'heat' ? refMax : refMax*count;
    }
    model._viewConfig.left.class_heat = [];
    model._viewConfig.right.class_heat = [];
    model._viewConfig.left.class_filter = [];
    model._viewConfig.right.class_filter = [];
    model._viewConfig = model._combineObjects(model._viewConfig, options);
    model._redraw = true;
    model.setDirty(true);
    model._inform();
};
    render () {
        return(
            <button className={'pure-u-1-4 pure-button-primary button-action pure-button'} onClick={this.onSubmit}> Display </button>
        );
    }

}
