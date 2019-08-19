import React from 'react';
import ReactModal from 'react-modal';

import ReferenceForm from './Components/ReferenceForm';
import CompareForm from './Components/CompareForm';
import OptionsForm from './Components/OptionsForm';
import HelpModal from './Components/HelpModal'
import DataModal from "./Components/DownloadModal";

export default class App extends React.Component {
    state = {
        datasets:[],
        genotypes: {},
        referenceDataset: null,
        selected:[],
        options: {
            left:{
                feature : 'none',
                offset : -0,
                draw_label : 0,
            },
            right:{
                feature : 'none',
                offset : 0,
                draw_label : 0,
            },
            general:{
                title:'',
                display_ruler: 'L',
                tick_interval: 5000000,
            },
        },
        priorRequest:{
            request:'',
            interval:50000,
            response:{}
        },
        hideOptions: false,
        showModal: '',
        refMax: 0
    }

    loadDatasets = () => {
        fetch('/api/experiment')
            .then( response => response.json())
            .then( datasets => {
                this.setState({datasets});
            })
    }

    appendDataset = (idx,value) => {
        let selected = this.state.selected.slice();
        selected[idx]=value;
        this.setState({selected});
    }

    setDataset = (referenceDataset) => {
        let val = referenceDataset.value;
        if( !this.state.genotypes[val]){
            fetch(`/api/experiment/${val}`)
                .then(result => result.json())
                .then( genotype => {
                    let genotypes = JSON.parse(JSON.stringify(this.state.genotypes));
                    genotypes[val] = genotype;
                    this.setState({referenceDataset, genotypes, selected:[]})
                })
        } else {
            this.setState({referenceDataset,selected:[]})
        }
    }

    setOptions = (options) => {
        this.setState(options);
    }

    onSubmit = () => {
        const { selected, options, priorRequest } = this.state;
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

        const binSize = options.left.hasOwnProperty('binSize') ? options.left.binSize :
            options.right.binSize;
        //fetch new data
        if( (priorRequest.request !== requestString) ||
            (binSize !== priorRequest.interval )
        ) {
            document.getElementById('cvit-app').style.visibility = 'visible';
            this.setState({hideOptions:true});
            model._viewData.same = {};
            model._viewData.diff = {};
            model._viewData.total = {};

            model.appendData('api/generateGff', {
                method: 'POST',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
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
                    console.log('cvit js error: ', e);
                });
        } else {
            this.setView(options, model,count);
        }
    }

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
    }

    handleCloseModal = () => this.setState({ showModal: '' })

    handleOpenModal = (showModal) => this.setState({showModal})

    componentDidMount() {
        document.getElementById('cvit-app').style.visibility = 'hidden';
        this.loadDatasets()
    }

    render() {
        const { selected,options,hideOptions,showModal } = this.state;
        let gts = this.state.referenceDataset !== null && this.state.genotypes[this.state.referenceDataset.value] !== undefined
            ? this.state.genotypes[this.state.referenceDataset.value]
            : [];
        return (
            <div>
                <ReactModal
                    isOpen={showModal === 'data'}
                    onRequestClose={this.handleCloseModal}
                    shouldCloseOnOverlayClick={true}
                >
                    <DataModal closeAction={()=>this.handleOpenModal()} />
                </ReactModal>
                <ReactModal
                    isOpen={showModal === 'help'}
                    onRequestClose={this.handleCloseModal}
                    shouldCloseOnOverlayClick={true}
                >
                        <HelpModal closeAction={()=>this.handleOpenModal()} />
                </ReactModal>

                <h3>Genotype Comparison Visualisation Tool</h3>
                <div
                    className={'u-full-width fake-button'}
                    onClick={()=>{this.setState({hideOptions:!hideOptions})}}
                >
                    <div className={'row'}>
                        <div className={'one column'} > <div className={hideOptions ? 'arrow-down rotate':'arrow-down'}/> </div>
                        <div className={'ten columns'}> Configure View </div>
                        <div className={'one column'} > <div className={hideOptions ? 'arrow-down rotate':'arrow-down'}/> </div>
                    </div>
                </div>
                <form className={'display-options'} style={{maxHeight: hideOptions ? '0px' : '100%', overflow: hideOptions ? 'hidden' : 'visible'}}>
                    <ReferenceForm datasets={this.state.datasets} setDataset={this.setDataset} appendDataset={this.appendDataset} genotypes={gts} />
                    {this.state.referenceDataset
                        ? <CompareForm selected={this.state.referenceDataset} genotypes={gts} appendDataset={this.appendDataset} />
                        : null
                    }
                    <OptionsForm setOptions ={this.setOptions} genotypes={selected} options={options}/>
                </form>
                <div className={'row'}>
                    <button className={'three columns button-primary'} onClick={this.onSubmit}> Display </button>
                    <div className={'three columns'}><br /></div>
                    <button className={'three columns'} onClick={()=>this.handleOpenModal('data')}> Download </button>
                    <button className={'three columns'} onClick={()=>this.handleOpenModal('help')}> Help </button>
                </div>
            </div>
        );
    }
}