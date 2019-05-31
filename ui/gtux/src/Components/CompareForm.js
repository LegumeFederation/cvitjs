import React from 'react';
import GenotypeSelector from './GenotypeSelect';
/**
 * A counter button: tap the button to increase the count.
 */
export default class CompareForm extends React.Component {

	state = {
		options: [],
		count: 0
	};

	removeOption = (rm) => {
		let options = this.state.options.filter(opt => {
			return opt.key !== `${rm}`;
		});
		this.setState({options});
	}

	addOption = () => {
		let options = this.state.options.concat([
			<GenotypeSelector
				key={this.state.count}
				count={this.state.count}
				selected={this.props.selected}
				genotypes={this.props.genotypes}
				removeOption={this.removeOption}
			/>
		]);
		this.setState({options,count:this.state.count+1});
	};

	componentDidUpdate(prevProps, prevState, snapshot) {
		if(this.props.selected !== prevProps.selected){
			this.setState({'count':0, 'options':[]})
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