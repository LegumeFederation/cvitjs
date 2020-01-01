/**
 * Options configuration for rulers, bins and other general display.
 */

import React from 'react';
import Select from 'react-select';
import {rulerDisplayDefault, binSizeDefault,rulerIntervalDefault,titleDefault} from './DefaultConfiguration';

/**
 * Quick setup for defining ruler options
 * @type {*[]}
 */

const rulerDisplayOptions = [
    {
        value: 'L',
        label: 'Left'
    },
    {
        value: 'R',
        label: 'Right'
    },
    {
        value: '1',
        label: 'Both'
    },
    {
        value: '0',
        label: 'None'
    },
];

export default class BaseOptions extends React.Component {
    state = {
        rulerDisplay : rulerDisplayDefault(), // Display ruler on LHS
        binSize : binSizeDefault(),   // Default binsize of 500000 bp
        rulerInterval: rulerIntervalDefault(), // Default interval of 5000000 bp
        title: titleDefault(),  // Blank default title
    }

    /**
     * Pass updated options back to model
     * @param value
     */
    optionsUpdate = (value) => {
        this.props.optionsUpdate('general',value);
    }

    rulerChange = (rulerDisplay) => {
        let values = this.state;
        values.rulerDisplay = rulerDisplay;
        this.setState({rulerDisplay});
        this.optionsUpdate(values);
    }

    titleChange = (e) => {
        const title = e.target.value;
        let values = this.state;
        values.title = title;
        this.setState({title});
        this.optionsUpdate(values);
    }

    binChange = (e) => {
        const binSize = parseInt(e.target.value) || 1;
        let values = this.state;
        values.binSize = binSize;
        this.setState({binSize});
        this.optionsUpdate(values);
    }

    intervalChange = (e) => {
        const rulerInterval = parseInt(e.target.value) || 1;
        let values = this.state;
        values.rulerInterval = rulerInterval;
        this.setState({rulerInterval});
        this.optionsUpdate(values);
    }

    render(props,state) {
        const { rulerDisplay, binSize, rulerInterval, title } = this.state;
        return (
            <fieldset className={'genotype-field'}>
                <legend> General Options </legend>
                <div className={'pure-g genotype-select'}>
                    <div className={'pure-u-1-2 l-box'}>
                        <span> Title </span>
                        <input type={'text'} value={title} className={'pure-u-1-1 l-box git-option'} id={`title-gen`} placeholder={''} onInput={e=>this.titleChange(e)} />
                    </div>
                    <div className={'pure-u-1-6 l-box'}>
                        <span> Bin Size </span>
                        <input type={'text'} value={binSize} className={'pure-u-1-1 l-box git-option'} id={`binsize-gen`} placeholder={'500000'} onInput={e=>this.binChange(e)}/>
                    </div>
                    <div className={'pure-u-1-6 l-box'}>
                        <span> Ruler Display </span>
                        <Select
                            defaultValue={rulerDisplayOptions[0]}
                            className="basic-single git-option"
                            classNamePrefix="select"
                            value={rulerDisplay}
                            label={"Comparison"}
                            onChange={this.rulerChange}
                            options={rulerDisplayOptions}
                        />
                    </div>
                    {rulerDisplay.value !== '0'
                        ?
                        <div className={'pure-u-1-6 l-box'}>
                            <span> Ruler Interval </span>
                            <input type={'text'} value={rulerInterval} className={'pure-u-1-1 l-box git-option'} id={`rulertic-gen`}
                                   placeholder={'5000000'} onInput={e=> this.intervalChange(e)}/>
                        </div>
                        : null
                    }
                </div>
            </fieldset>
        );
    }
}