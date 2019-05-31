import React, {Fragment} from 'react';
import Select from 'react-select';
import {SketchPicker} from 'react-color';

const popover = {
	position: 'absolute',
	zIndex: '2'
}

const cover = {
	position: 'fixed',
	top: '0px',
	right: '0px',
	bottom: '0px',
	left: '0px',
}

export default class GenotypeSelector extends React.Component {

	state = {
		selectedDataset: null,
		selectedGenotype: null,
		displayColorPicker: false,
		color: '#19741A'
	}

	datasetChange = (selectedDataset) => {
		this.setState({ selectedDataset, selectedGenotype: null });
		this.props.setDataset(selectedDataset);
		console.log(`Option selected:`, selectedDataset);
	}

	gtChange = (selectedGenotype) => {
		this.setState({ selectedGenotype });
		console.log(`Option selected:`, selectedGenotype);
	}

	colorClick = () => {
		this.setState({displayColorPicker : true})
	}

	colorClose = () => {
		this.setState({displayColorPicker : false})
	}

	colorSet = (color) => {
		this.setState({color: color.hex})
	}

	componentDidMount() {
		if(this.props.selected){
			this.setState({'selectedDataset':this.props.selected})
		}
	}
	render() {
		const { selectedDataset } = this.state;
		const { selectedGenotype } = this.state;
		const gtOpt = this.props.genotypes !== null ? this.props.genotypes : [];
		console.log(this.state);
		return (
			<div className={'row genotype-select'}>
				<div className={'one column fake-button'} onClick={this.colorClick} style={{background:this.state.color, zIndex:1 }} />
				{ this.state.displayColorPicker
					?<div>
						<div style={ cover } onClick={this.colorClose} />
						<div style={ popover }>
							<SketchPicker color={ this.state.color } onChange={ this.colorSet } />
						</div>
					</div>
					: null
				}
				<div className={'five columns'}>
					<Fragment>
						<Select
							defaultValue={this.props.selected || null}
							className="basic-single"
							classNamePrefix="select"
							value={selectedDataset}
							isClearable
							isDisabled={this.props.selected}
							onChange={this.datasetChange}
							options={this.props.datasets}
						/>
					</Fragment>
				</div>
				<div className={'four columns'}>
					<Fragment>
						<Select
							className="basic-single"
							classNamePrefix="select"
							value={selectedGenotype}
							isClearable
							isDisabled={gtOpt.length === 0}
							onChange={this.gtChange}
							options={gtOpt}
						/>
					</Fragment>
				</div>
				{this.props.removeOption !== undefined
					? <div className={'one column fake-button'} onClick={()=> this.props.removeOption(this.props.count)} > X </div>
					: null
				}
			</div>
		);
	}
}