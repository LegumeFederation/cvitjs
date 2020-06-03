/**
 * React component for rendering the comparison genotype selection menu
 */

import React from 'react';
import GenotypeSelector from './GenotypeSelect'; //Generic gt select component

export default class CompareForm extends React.Component {

	state = {
		options: [], // currently selected comparisons
		count: 1 // tracks actual length of non-null entries.
	};
	// remove option selection
	removeOption = (rm) => {
		let options = this.state.options.filter(opt => {
			return opt.key !== `${rm}`;
		});
		this.props.appendDataset(rm,null);
		this.setState({options});
	}
        // add option selection
	addOption = () => {
		let options = this.state.options.concat([
			<GenotypeSelector
				key={this.state.count}
				idx={this.state.count}
				selected={this.props.selected}
				genotypes={this.props.genotypes}
				appendDataset={this.props.appendDataset}
				removeOption={this.removeOption}
			/>
		]);
		this.setState({options,count:this.state.count+1});
	};

	// prevents issues when all options are removed
	componentDidUpdate(prevProps, prevState, snapshot) {
		if(this.props.selected !== prevProps.selected){
			this.setState({'count':1, 'options':[]})
		}
	}

	// render component
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
