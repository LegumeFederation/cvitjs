/**
 * Control for editing LHS/RHS comparison options
 * for display in CViT canvas
 */

import React from 'react';
import Select from 'react-select';
import {heatConfig} from './HeatConfig';
import {histConfig} from './HistConfig';
import {haploConfig} from './HaploConfig';

// Display format dropdown values
const displayFormats = [
    {
        value: 'none',
        label: 'None'
    },
    {
        value: 'hist',
        label: 'Histogram'
    },
    {
        value: 'heat',
        label: 'Heatmap'
    },
    {
        value: 'haplo',
        label: 'Haplotype',
    },
];

// Comparison format dropdown values
const comparisonFormats = [
    {
        value: 'diff',
        label: 'Different'
    },
    {
        value: 'same',
        label: 'Same'
    },
    {
        value: 'total',
        label: 'Total'
    },
];

// heatmap direction dropdown values
const heatFormat = [
    {
        value: 'low',
        label: 'Min-Max'
    },
    {
        value: 'high',
        label: 'Max-Min'
    },
];

// heatmap color dropdown values
const heatColorFormat = [
    {
        value: 'white',
        label: 'White'
    },
    {
        value: 'black',
        label: 'Black'
    },
];

export default class TrackOptions extends React.Component {
    state = {
        displayAs: displayFormats[0],
        compare: comparisonFormats[0],
        filters: [],
        heat: heatFormat[0],
        heatColor: heatColorFormat[0],
        viewConfig: {},
        maxValue: 0,
        minValue: 0,
    }

    /**
     * set configuration on display type change from defaults
     */
    setConfiguration = (format) => {
        const {compare,filters, maxValue, minValue} = this.state;
        const side = this.props.side === 'Right';
        let count = 1;
        this.props.genotypes.forEach(gt => {if(gt !== null) count++;});
        switch (format) {
            case 'heat':
               return heatConfig(compare,side,minValue,maxValue,filters);
            case 'hist':
               return histConfig(compare,side,minValue,maxValue,filters,count);
            case 'haplo':
                return haploConfig(compare,side,minValue,maxValue,filters,count);
            case 'none':
            default:
                return {'feature':'none'};
        }
    };


    /**
     * update selected options in parents
     */
    optionsUpdate = (value) => {
        this.props.optionsUpdate(this.props.side.toLowerCase(),value);
    }

    /**
     * Action on changing DisplayAs dropdown
     */
    displayChange = (displayAs) => {
        let viewConfig = this.setConfiguration(displayAs.value);
        if(displayAs.value === 'haplo'){ // make sure haplotype block gets configured correctly
            const maxValue = this.state.maxValue > 0 ? this.state.maxValue : 1;
            const minValue = maxValue - 1;
            this.setState({ displayAs,maxValue,minValue,viewConfig});
        } else {
            this.setState({displayAs, viewConfig});
        }
        this.optionsUpdate(viewConfig);
    }

    /**
     * Update options on comparison type change
     */
    compareChange = (compare) => {
        let viewConfig = this.state.viewConfig;
        viewConfig.feature = compare.value;
        this.setState({ compare, viewConfig });
        this.optionsUpdate(viewConfig);
    }


    /**
     * Update filter whitelist for features
     */
    filterChange = (filters) => {
        let viewConfig = this.state.viewConfig;
        viewConfig.class_filter = filters.map(filter => {if(filter!== null) return filter.value; return false;});
        this.setState({ filters, viewConfig });
        this.optionsUpdate(viewConfig);
    }

    /**
     * Update heatcolor from dropdown
     */
    heatColorChange = (heatColor) => {
        let viewConfig = this.state.viewConfig;
        viewConfig.class_heat = [heatColor.value];
        this.setState({ heatColor, viewConfig });
        this.optionsUpdate(viewConfig);
    }

    /**
     * Update direction from dropdown
     */
    heatChange = (heat) => {
        let viewConfig = this.state.viewConfig;
        viewConfig.invert_value = heat.value === 'low' ? 0 : 1;
        this.setState({ heat, viewConfig });
        this.optionsUpdate(viewConfig);
    }
    
    /**
     * Update bin count max from form
     */
    maxChange = (max) => {
        const maxValue = parseInt(max.target.value) || 0;
        let viewConfig = this.state.viewConfig;

        if(this.state.displayAs.value === 'haplo'){
            const hapMax = maxValue > 0 ? maxValue : 1;
            const minValue = hapMax -1;
            viewConfig.bin_max = hapMax;
            viewConfig.bin_min = minValue;
            this.setState({maxValue,minValue,viewConfig})
        } else {
            viewConfig.bin_max = maxValue;
            this.setState({maxValue,viewConfig})
        }
        this.optionsUpdate(viewConfig);
    }

    /**
     * Update bin count min from form
     */
    minChange = (min) => {
        const minValue = parseInt(min.target.value) || 0;
        let viewConfig = this.state.viewConfig;
        viewConfig.bin_min = minValue;
        this.setState({minValue,viewConfig});
        this.optionsUpdate(viewConfig);
    }

    render(props,state) {
        const { displayAs, compare, filters, heatColor, heat, maxValue, minValue } = this.state;
        const { side, genotypes } = this.props;
        let filterFormats = [];
        genotypes.forEach( (gt,count) => {
            if((compare.value === 'total' || count > 0) && gt !== null){
                filterFormats = filterFormats.concat( gt.genotype);
            }
        });

	// hide filter dropdown if "none" is selected
        let filter = displayAs.value !== 'none'
            ? (<div className={'pure-u-1-3 l-box'}>
                    <span>Filter Genotypes</span>
                    <Select
                        defaultValue={null}
                        className="basic-multi-select git-option"
                        isMulti
                        isClearable
                        name={"filterGT"}
                        classNamePrefix="select"
                        value={filters}
                        onChange={this.filterChange}
                        options={filterFormats}
                    />
                </div>
            )
            : null; 

        return (
            <fieldset className={'genotype-field'}>
                <legend> {`${side} Options`} </legend>
                <div className={'pure-g genotype-select'}>
                    <div className={'pure-u-1-6 l-box'}>
                        <span>Display Type</span>
                        <Select
                            defaultValue={displayFormats[0]}
                            className="basic-single git-option"
                            classNamePrefix="select"
                            value={displayAs}
                            label={"Display As:"}
                            onChange={this.displayChange}
                            options={displayFormats}
                        />
                    </div>
                    {displayAs.value !== 'none' ?
                        <div className={'pure-u-1-6 l-box'}>
                            <span>Comparison</span>
                            <Select
                                defaultValue={comparisonFormats[0]}
                                className="basic-single git-option"
                                classNamePrefix="select"
                                value={compare}
                                label={`Comparison ${side}`}
                                onChange={this.compareChange}
                                options={comparisonFormats}
                            />
                        </div>
                        : null
                    }
                    {filter}
                    {displayAs.value === 'none'
                        ? null
                        :
                        <div className={'pure-u-1-6 l-box'}>
                            <span>{displayAs.value === 'heat' || displayAs.value === 'hist' ? 'Max Value' : 'Threshold' }</span>
                            <input type={'text'} value={maxValue} className={'pure-u-1-1 l-box git-option'} id={`max-${side}`} placeholder={'0'} onInput={(e) => this.maxChange(e)}/>

                        </div>
                    }
                    {displayAs.value !== 'none' && displayAs.value !== 'haplo'
                        ?
                        <div className={'pure-u-1-6 l-box'}>
                            <span>Min Value</span>
                            <input type={'text'} value={minValue} className={'pure-u-1-1 l-box git-option'} id={`min-${side}`} placeholder={'0'} onInput={(e) => this.minChange(e)}/>
                        </div>
                        :
                        null
                    }
                </div>
                {displayAs.value === 'heat'
                    ?
                    <div className={'pure-g genotype-select'}>
                        <div className={'pure-u-1-6 l-box'}>
                            <div className={'pure-u-1-1 l-box'}> <br/> </div>
                        </div>
                        <div className={'pure-u-1-6 l-box'}>
                            <span>Heat Base Color</span>
                            <Select
                                defaultValue={heatColorFormat[0]}
                                className="basic-single git-option"
                                classNamePrefix="select"
                                value={heatColor}
                                onChange={this.heatColorChange}
                                options={heatColorFormat}
                            />
                        </div>
                        <div className={'pure-u-1-6 l-box'}>
                            <span>Heat Direction</span>
                            <Select
                                defaultValue={heatFormat[0]}
                                className="basic-single git-option"
                                classNamePrefix="select"
                                value={heat}
                                onChange={this.heatChange}
                                options={heatFormat}
                            />
                        </div>
                    </div>
                    :
                    null}
            </fieldset>
        );
    }
}
