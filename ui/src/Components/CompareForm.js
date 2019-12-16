import React from 'react';
import GenotypeSelector from './GenotypeSelect';

/**
 * Select comparison genotypes
 */
export default class CompareForm extends React.Component {

	state = {
		options: [],
		count: 1
	};

	removeOption = (rm) => {
		let options = this.state.options.filter(opt => {
			return opt.key !== `${rm}`;
		});
		this.props.appendDataset(rm,null);
		this.setState({options});
	}

	addOption = () => {
		let options = this.state.options.concat([
			<GenotypeSelector
				key={this.state.count}
				idx={this.state.count}
				selected={this.props.selected}
				genotypes={this.props.genotypes}A
				appendDataset={this.props.appendDataset}
				removeOption={this.removeOption}
			/>
		]);
		this.setState({options,count:this.state.count+1});
	};

	componentDidUpdate(prevProps, prevState, snapshot) {
		if(this.props.selected !== prevProps.selected){
			this.setState({'count':1, 'options':[]})
		}
	}

	render() {
		return (
			<fieldset className={'genotype-field'}>
				<legend> Comparison Genotypes </legend>
				{this.state.options}
				<div
					className={'fake-button'}
					onClick={this.addOption}
				>
					Add Comparison
				</div>
			</fieldset>
		);
	}
}