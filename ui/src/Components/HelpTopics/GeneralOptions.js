import React from 'react';

export default class GeneralOptions extends React.Component {
    state= {hideInfo:true};
    render () {
        const {hideInfo} = this.state;
        return (
            <div>
                <div className={'pure-g'}>
                    <div
                        className={'pure-u-1-1 l-box fake-button'}
                        onClick={()=>{this.setState({hideInfo:!hideInfo})}}
                    >
                        <div className={'pure-g'}>
                            <div className={'pure-u-1-12 l-box'} > <div className={hideInfo ? 'arrow-down rotate':'arrow-down'}/> </div>
                            <div className={'pure-u-5-6 l-box'}> General Options </div>
                            <div className={'pure-u-1-12 l-box'} > <div className={hideInfo ? 'arrow-down rotate':'arrow-down'}/> </div>
                        </div>
                    </div>
                </div>
                <div className={'pure-g'}>
                    <div className={'help-text pure-g'} style={{maxHeight: hideInfo ? '0px' : '50%'}}>
                        <div className={'pure-u-1-1 l-box modal-section'}>
                            <p> <b>Title</b> <i>Default: blank</i>  Title included on the display. </p>
                            <p> <b>Bin Size</b> <i>Default: 500000bp</i> Each chromosome is broken down into bins for calculating the requested data. This is the size per bin in base pairs.
                            It is recommended to not go much lower than this default, as it becomes harder to see differences in the displayed data.</p>
                            <p> <b>Ruler Display</b> <i>Default: left</i> Where ruler is placed on the generated image. </p>
                            <p> <b>Ruler Interval</b> <i>Default 5000000</i> Distance in bp between major divisions on the ruler. Each major division will have one minor division between. Any value under 1000000 can lead to a rather cramped display.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}