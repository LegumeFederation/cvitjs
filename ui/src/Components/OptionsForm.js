import React from 'react';
import TrackOptions from "./TrackOptionsSelect";
import BaseOptions from "./BaseOptionsSelect";
import {binSizeDefault} from "./DefaultConfiguration";

/**
 * Form for controlling LHS/RHS display options
 */
export default class OptionsForm extends React.Component {
	state = {
		'binSize': binSizeDefault,
	}

	optionsUpdate = (group,value) => {
		let options = this.props.options;

		let binSize = this.state.binSize;
		switch (group) {
			case 'left':
				options.left = value;
				options.left.bin_size = binSize;
				break;
			case 'right':
				options.right = value;
				options.right.bin_size = binSize;
				break;
			case 'general':
			default:
				binSize = value.binSize;
				options.general.title = value.title;
				options.general.tick_interval = value.rulerInterval;
				options.general.display_ruler = value.rulerDisplay.value;
				options.left.bin_size = binSize;
				options.right.bin_size = binSize;
				this.setState({binSize});
		}
		this.props.setOptions(options);
	}

	render(props,state) {
		const { genotypes } = this.props;
		return (
			<fieldset className={'genotype-field'} >
				<legend>Options </legend>
				<BaseOptions optionsUpdate={(group,value)=>this.optionsUpdate(group,value)} />
				<TrackOptions side={'Left'} genotypes={genotypes} optionsUpdate={(group,value)=>this.optionsUpdate(group,value)}/>
				<TrackOptions side={'Right'} genotypes={genotypes} optionsUpdate={(group,value)=>this.optionsUpdate(group,value)}/>
			</fieldset>
		);
	}
}