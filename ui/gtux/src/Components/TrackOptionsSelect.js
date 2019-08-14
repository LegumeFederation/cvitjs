import React from 'react';
import Select from 'react-select';

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

    setConfiguration = (format) => {
        const {compare,filters, maxValue, minValue} = this.state;
        const side = this.props.side === 'Right';
        let count = 1;
        this.props.genotypes.forEach(gt => {if(gt !== null) count++;});
        switch (format) {
            case 'heat':
                return {
                    feature: compare.value,
                    glyph: 'measure',
                    display: 'heat',
                    draw_as: 'range',
                    invert_value: 0,
                    min: 0,
                    max: 0,
                    width: 10,
                    offset:  side ? 0 : -0,
                    bin_size: 500000,
                    bin_min: minValue,
                    bin_max: maxValue,
                    by_class: 1,
                    class_filter: filters.map( filter => filter.value),
                    class_offset: 2,
                    class_heat : ['#fff'],
                    draw_label: 0,
                    max_distance: 5,
                    border: 0,
                    value_base: 10,
                    generate_bins: 0,
                    count_classes: 0,
                    transparent: 0,
                    transparent_percent: 0.0
                };
            case 'hist':
                return {
                    feature: compare.value,
                    glyph: 'measure',
                    display: 'histogram',
                    count_classes: 0,
                    enable_pileup: 0,
                    generate_bins: 0,
                    offset: side ? 0 : -0,
                    width: 3,
                    bin_min: minValue,
                    bin_max: maxValue,
                    bin_size: 500000,
                    by_class: 1,
                    class_offset : 0,
                    class_filter: filters.map( filter => filter.value),
                    draw_label: 0,
                    max_distance: count*25,
                    border: 1,
                    border_width :0,
                };
            case 'haplo':
                return {
                    feature : compare.value,
                    glyph: 'measure',
                    display: 'histogram',
                    count_classes: 0,
                    class_offset: 0,
                    class_space : 1,
                    enable_pileup: 0,
                    generate_bins: 0,
                    offset: side ? 0 : -0,
                    width: 3,
                    bin_min: maxValue -1 > 0 ? maxValue - 1 : 0 ,
                    bin_max: maxValue > 0 ?  maxValue : 1,
                    bin_size: 500000,
                    by_class: 1,
                    class_filter: filters.map( filter => filter.value),
                    draw_label: 0,
                    max_distance: 5,
                    border: 1,
                    border_width: 0,
                };
            case 'none':
            default:
                return {'feature':'none'};
        }
    };

    optionsUpdate = (value) => {
        this.props.optionsUpdate(this.props.side.toLowerCase(),value);
    }

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

    compareChange = (compare) => {
        let viewConfig = this.state.viewConfig;
        viewConfig.feature = compare.value;
        this.setState({ compare, viewConfig });
        this.optionsUpdate(viewConfig);
    }

    filterChange = (filters) => {
        let viewConfig = this.state.viewConfig;
        viewConfig.class_filter = filters.map(filter => {if(filter!== null) return filter.value});
        this.setState({ filters, viewConfig });
        this.optionsUpdate(viewConfig);
    }

    heatColorChange = (heatColor) => {
        let viewConfig = this.state.viewConfig;
        viewConfig.class_heat = [heatColor.value];
        this.setState({ heatColor, viewConfig });
        this.optionsUpdate(viewConfig);
    }

    heatChange = (heat) => {
        let viewConfig = this.state.viewConfig;
        viewConfig.invert_value = heat.value === 'low' ? 0 : 1;
        this.setState({ heat, viewConfig });
        this.optionsUpdate(viewConfig);
    }

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

        let filter = displayAs.value !== 'none'
            ? (<div className={'four columns'}>
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
                <div className={'row genotype-select'}>
                    <div className={'two columns'}>
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
                        <div className={'two columns'}>
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
                        <div className={'two columns'}>
                            <span>{displayAs.value === 'heat' || displayAs.value === 'hist' ? 'Max Value' : 'Threshold' }</span>
                            <input type={'text'} value={maxValue} className={'u-full-width git-option'} id={`max-${side}`} placeholder={'0'} onInput={(e) => this.maxChange(e)}/>

                        </div>
                    }
                    {displayAs.value !== 'none' && displayAs.value !== 'haplo'
                        ?
                        <div className={'two columns'}>
                            <span>Min Value</span>
                            <input type={'text'} value={minValue} className={'u-full-width git-option'} id={`min-${side}`} placeholder={'0'} onInput={(e) => this.minChange(e)}/>
                        </div>
                        :
                        null
                    }
                </div>
                {displayAs.value === 'heat'
                    ?
                    <div className={'row genotype-select'}>
                        <div className={'two columns'}>
                            <div className={'u-full-width'}> <br/> </div>
                        </div>
                        <div className={'two columns'}>
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
                        <div className={'two columns'}>
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