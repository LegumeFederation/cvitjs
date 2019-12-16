import React from 'react';
import ReactModal from 'react-modal';

import ReferenceForm from './Components/ReferenceForm';
import CompareForm from './Components/CompareForm';
import OptionsForm from './Components/OptionsForm';
import HelpModal from './Components/HelpModal'
import DataModal from "./Components/DownloadModal";
import DisplayButton from "./Components/DisplayButton";

export default class App extends React.Component {
    state = {
        datasets:[], //Datasets available from service
        genotypes: {}, //All genotypes available in selected dataset
        referenceDataset: null, //Dataset reference was chosen from
        selected:[], //All selected datasets+genotypes for comparison
        options: { //General configuration for selected data options
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
        hideOptions: false, //show/hide the gcvit configuration UI
        showModal: '', //show/hide overlay modals (dl/help)
    };

    /**
     * GET request to API to fetch the available datasets to populate options
     **/
    loadDatasets = () => {
        fetch('api/experiment')
            .then( response => response.json())
            .then( datasets => {
                this.setState({datasets});
            })
    };

    /**
     * Append a new comparison set to the display array
     * @param idx  index to add value to array
     * @param value color+dataset+genotype object to append
     */
    appendDataset = (idx,value) => {
        let selected = this.state.selected.slice();
        selected[idx]=value;
        this.setState({selected});
    };

    /**
     * GET request to populate the genotype array
     * @param referenceDataset dataset to draw genotypes from
     */

    setDataset = (referenceDataset) => {
        let val = referenceDataset.value;
        if( !this.state.genotypes[val]){
            fetch(`api/experiment/${val}`)
                .then(result => result.json())
                .then( genotype => {
                    let genotypes = JSON.parse(JSON.stringify(this.state.genotypes));
                    genotypes[val] = genotype;
                    this.setState({referenceDataset, genotypes, selected:[]})
                })
        } else {
            this.setState({referenceDataset,selected:[]})
        }
    };

    /**
     * Edit display options
     * @param options display options
     */
    setOptions = (options) => {
        this.setState(options);
    };

    /**
     * Hide help/download modal at close
     */
    handleCloseModal = () => this.setState({ showModal: '' });

    /**
     * Display help/download modal at open
     * @param showModal
     */
    handleOpenModal = (showModal) => this.setState({showModal});

    /**
     * After UI mounts, hide cvit-app until first comparison request is made, and populate
     * list of available datasets
     */
    componentDidMount() {
        document.getElementById('cvit-app').style.visibility = 'hidden';
        this.loadDatasets()
    };

    render() {
        const { selected,options,hideOptions,showModal } = this.state;
        let gts = this.state.referenceDataset !== null && this.state.genotypes[this.state.referenceDataset.value] !== undefined
            ? this.state.genotypes[this.state.referenceDataset.value]
            : [];
        return (
            <div className={'selector-container'}>
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

                <div
                    className={'pure-u-1-1 l-box fake-button'}
                    onClick={()=>{this.setState({hideOptions:!hideOptions})}}
                >
                    <div className={'pure-g'}>
                        <div className={'pure-u-1-12 l-box'} > <div className={hideOptions ? 'arrow-down rotate':'arrow-down'}/> </div>
                        <div className={'pure-u-5-6 l-box'}> Configure View </div>
                        <div className={'pure-u-1-12 l-box'} > <div className={hideOptions ? 'arrow-down rotate':'arrow-down'}/> </div>
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
                <div className={'pure-g'}>
                    <DisplayButton selected={selected} options={options} hide={()=>{this.setState({hideOptions:true});}}/>
                    <div className={'pure-u-5-24 '}><br /></div>
                    <button className={'pure-u-1-4  pure-button button-display'} onClick={()=>this.handleOpenModal('data')}> Download </button>
                    <div className={'pure-u-1-24'} />
                    <button className={'pure-u-1-4  pure-button button-display'} onClick={()=>this.handleOpenModal('help')}> Help </button>
                </div>
            </div>
        );
    };
}