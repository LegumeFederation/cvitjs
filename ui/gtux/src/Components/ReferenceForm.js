import React from 'react';
import GenotypeSelector from './GenotypeSelect';

export default class ReferenceForm extends React.Component {
	render() {

		return (
			<fieldset className={'genotype-field'}>
				<legend> Reference Genotype</legend>
				<GenotypeSelector datasets={this.props.datasets} setDataset={this.props.setDataset} genotypes={this.props.genotypes} />
			</fieldset>
		);
	}
}
