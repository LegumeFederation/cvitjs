import React from 'react';

export default class DataModal extends React.Component {
    state = {
        name: 'cvit',
        format: 'svg',
        quality: .95
    }

    exportImage = (blob) => {
        let url = URL.createObjectURL(blob);
        this.saveImage(url);
    }

    saveImage = (url) => {
        let name = this.state.name !== '' ? this.state.name : 'cvit';
        name += `.${this.state.format}`;
        let link = document.createElement('a');
        link.download = name;
        link.href = url;
        document.body.appendChild(link);
        link.click();
    }

    onClickImage = () => {
        let paper = window.cvit.model.paper;
        console.log(paper);
        if(this.state.format === 'svg'){
            let url = 'data:image/svg+xml;utf8,' +
                encodeURIComponent(paper.project.exportSVG({asString:true}));
            this.saveImage(url);
        } else {
            paper.project.view.element.toBlob((blob) => this.exportImage(blob));
        }
    }

    onClickData = () => {
        let gff = '##gff-version 3.2.1';
        let data = window.cvit.model.data;
        for (let group in data) {
            if(data.hasOwnProperty(group)) {
                let dataGroup = data[group];
                if( dataGroup.hasOwnProperty('features')) {
                    dataGroup.features.forEach(feature => {
                        let line = `${feature.seqName}\t${feature.source}\t${feature.feature}\t${feature.start}\t${feature.end}\t${feature.score}\t${feature.strand}\t${feature.frame}`;
                        let attributes = '';
                        for (let key in feature.attribute) {
                            if (feature.attribute.hasOwnProperty(key)) {
                                attributes += `${key}=${feature.attribute[key]};`
                            }
                        }
                        gff +=`\n${line}\t${attributes}`;
                    });
                }
            }
        }
        let url = 'data:text/plain;utf8,' +
            encodeURIComponent(gff);
        let win = window.open();
       win.document.write('<iframe src="' + url  + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');
       win.download('gcvit.gff');
        // link.href = url;
        // document.body.appendChild(link);
        // link.click();
    }

    onInput = (evt) =>{
        this.setState({name:evt.target.value});
    }

    onSelect = (evt) => {
        this.setState({format:evt.target.value});
    }

    render(props,state){
        let {name,format} = this.state;
        return(
            <div>
                <h5> Downloads </h5>
                <hr />
                <div className={'row'}>
                    <div className={'twelve columns cvit cvit-modal'} id={'export-modal'} >
                        <h5> Download Image </h5>
                        <p> Download the current view as an image.</p>

                        <form style={{width:'100%'}}>
                            <h6> Image Settings: </h6>
                            <tbody>
                            <tr>
                                <td><span>File Name: </span></td>
                                <td>
                                    <input
                                        type={'text'}
                                        value={name}
                                        onInput={(evt)=>this.onInput(evt)}
                                        placeholder={'cvit'}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td> <span> File Type: </span> </td>
                                <td>
                                    <label>
                                        <input
                                            id={'opt-svg'}
                                            type={'radio'}
                                            value={'svg'}
                                            onChange={(evt)=>this.onSelect(evt)}
                                            checked={format === 'svg'} />
                                        <span> svg </span>
                                    </label>
                                </td>
                                <td>
                                    <label>
                                        <input
                                            id={'opt-png'}
                                            type={'radio'}
                                            value={'png'}
                                            onChange={(evt)=>this.onSelect(evt)}
                                            checked={format === 'png'}
                                        />
                                        <span> png </span>
                                    </label>
                                </td>
                            </tr>
                            </tbody>
                        </form>
                        <button className={'modal-confirm'}
                                onClick={()=>this.onClickImage()}
                        > Export Image </button>
                    </div>
                </div>
                <div className={'row'}>
                    <hr />
                    <div className={'twelve columns cvit cvit-modal'} id={'export-modal'} >
                        <h5> Download Data </h5>
                        <button className={'modal-confirm'}
                                onClick={()=>this.onClickData()}
                        > Download Data </button>
                    </div>
                </div>
            </div>
        );
    }
}