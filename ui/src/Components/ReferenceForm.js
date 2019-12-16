import React from 'react';
import GenotypeSelector from './GenotypeSelect';

/**
 * Select reference genotype
 */
export default class ReferenceForm extends React.Component {
	render() {

		return (
			<fieldset className={'genotype-field'}>
				<legend> Reference Genotype</legend>
				<GenotypeSelector
					datasets={this.props.datasets}
					setDataset={this.props.setDataset}
					appendDataset={this.props.appendDataset}
					genotypes={this.props.genotypes}
					idx={0}
				/>
			</fieldset>
		);
	}
}
