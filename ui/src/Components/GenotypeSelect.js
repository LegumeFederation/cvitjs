/**
 * Selector dropdown for a new genotype option
 */

import React  from 'react';
import Select, {createFilter, components} from 'react-select';
import {SketchPicker} from 'react-color';
import {colorDefault} from './DefaultConfiguration';

// placement of color select popup
const popover = {
	position: 'absolute',
	zIndex: '2'
};

const cover = {
	position: 'fixed',
	top: '0px',
	right: '0px',
	bottom: '0px',
	left: '0px',
};

export default class GenotypeSelector extends React.Component {

	state = {
		selectedDataset: null,
		selectedGenotype: null,
		displayColorPicker: false,
		color: colorDefault
	};

	/**
	 * Set up genotype value from form options
	 */
	formatDatasetValue(){
		return {
			dataset: this.state.selectedDataset || null,
			genotype: this.state.selectedGenotype || null,
			color: this.state.color || null
		}
	};

	/**
	 * Change dataset source if enabled
	 */
	datasetChange = (selectedDataset) => {
		this.setState({ selectedDataset, selectedGenotype: null });
		this.props.setDataset(selectedDataset);
		let append = { dataset: selectedDataset, genotype:null, color: this.state.color||null};
		this.props.appendDataset(this.props.idx, append)
	};

	/**
	 * Change genotype if enabled
	 */
	gtChange = (selectedGenotype) => {
		this.setState({ selectedGenotype });
		let append = { dataset: this.state.selectedDataset, genotype: selectedGenotype, color: this.state.color||null};
		this.props.appendDataset(this.props.idx, append);
	};

	/**
	 * Display color picker
	 */
	colorClick = () => {
		this.setState({displayColorPicker : true})
	};

	/**
	 * hide color picker
	 */
	colorClose = () => {
		this.setState({displayColorPicker : false});
		this.props.appendDataset(this.props.idx, this.formatDatasetValue())
	};

	/**
	 * set chosen color
	 */
	colorSet = (color) => {
		this.setState({color: color.hex})
	};


	/**
	 * Set dataset if component is for a variant
	 */
	componentDidMount() {
		if(this.props.selected){
			this.setState({'selectedDataset':this.props.selected})
		}
	};

	render() {
		const { selectedDataset, selectedGenotype } = this.state;
		const { idx } = this.props;
		const gtOpt = this.props.genotypes !== null ? this.props.genotypes : [];
		return (
			<div>
			<div className={'pure-g genotype-select'}>
				<div className={'pure-u-1-12 l-box '}>
					<span> Color </span><br/>
					<div className={'fake-button git-option'} onClick={this.colorClick} style={{background:this.state.color, zIndex:1 }} />
					{ this.state.displayColorPicker
						?<div>
							<div style={ cover } onClick={this.colorClose} />
							<div style={ popover }>
								<SketchPicker color={ this.state.color } onChange={ this.colorSet } />
							</div>
						</div>
						: null
					}
				</div>
				<div className={'pure-u-5-12 l-box'}>
					<span> Dataset </span><br/>
					<Select
						defaultValue={this.props.selected || null}
						label="Dataset"
						className="basic-single git-option"
						classNamePrefix="select"
						value={selectedDataset}
						isClearable
						isDisabled={this.props.selected}
						onChange={this.datasetChange}
						filterOption={createFilter({ignoreAccents: false})}
						options={this.props.datasets}
						components={{Option: CustomOption}}
					/>
				</div>
				<div className={'pure-u-1-3 l-box'}>
					<span> Genotype </span><br/>
					<Select
						className="basic-single git-option"
						classNamePrefix="select"
						value={selectedGenotype}
						isClearable
						isDisabled={gtOpt.length === 0}
						onChange={this.gtChange}
						filterOption={createFilter({ignoreAccents: false})}
						options={gtOpt}
						components={{Option: CustomOption}}
					/>
				</div>
				{this.props.removeOption !== undefined
					? <div className={'pure-u-1-12 l-box'}>
						<span>Remove</span>
						<div className={'fake-button git-option'} onClick={()=> this.props.removeOption(idx)} > X </div>
						</div>
					: null
				}
			</div>
			</div>
		);
	}
}

/**
 * custom rendering options for react-select (select dropdown) component
 */
class CustomOption extends React.Component {
	render() {
		const {innerProps, isFocused, ...otherProps} = this.props;
		const {onMouseMove, onMouseOver, ...otherInnerProps} = innerProps;
		const newProps = {innerProps: {...otherInnerProps}, ...otherProps};
		return (
			<components.Option {...newProps} className="git-option-component">{this.props.children}
			</components.Option>
		);
	}
}
