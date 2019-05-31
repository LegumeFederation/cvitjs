import React from 'react';
import ReferenceForm from './Components/ReferenceForm';
import CompareForm from './Components/CompareForm';
import OptionsForm from './Components/OptionsForm';

export default class App extends React.Component {
    state = {
        "datasets":[],
        "genotypes": {},
        "referenceDataset": null
    }

    loadDatasets = () => {
        fetch('/api/experiment')
            .then( response => response.json())
            .then( datasets => {
                this.setState({datasets});
            })
    }

    setDataset = (referenceDataset) => {
        let val = referenceDataset.value;
        if( !this.state.genotypes[val]){
            fetch(`/api/experiment/${val}`)
                .then(result => result.json())
                .then( genotype => {
                    let genotypes = JSON.parse(JSON.stringify(this.state.genotypes));
                    genotypes[val] = genotype;
                    console.log('gt',genotypes);
                    this.setState({referenceDataset, genotypes})
                })
        } else {
            this.setState({referenceDataset})
        }
    }

    componentDidMount() {
        this.loadDatasets()
    }

    render() {
        let gts = this.state.referenceDataset !== null && this.state.genotypes[this.state.referenceDataset.value] !== undefined
            ? this.state.genotypes[this.state.referenceDataset.value]
            : [];
        return (
            <div>
                <h3>Genome Investigation Tool</h3>
                <div className={'u-full-width fake-button'}> Configure View </div>
                <form>
                    <ReferenceForm datasets={this.state.datasets} setDataset={this.setDataset} genotypes={gts} />
                    {this.state.referenceDataset
                        ? <CompareForm selected={this.state.referenceDataset} genotypes={gts} />
                        : null
                    }
                    <OptionsForm />
                    <div className={'row'}>
                        <button className={'three columns button-primary'}> Display </button>
                        <div className={'three columns'}><br /></div>
                        <button className={'three columns'}> Download </button>
                        <button className={'three columns'}> Help </button>
                    </div>
                </form>
            </div>
        );
    }
}