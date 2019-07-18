import React from 'react';

export default class GeneralOptions extends React.Component {
    state= {hideInfo:true};
    render () {
        const {hideInfo} = this.state;
        return (
            <div>
                <div className={'row'}>
                    <div
                        className={'u-full-width fake-button'}
                        onClick={()=>{this.setState({hideInfo:!hideInfo})}}
                    >
                        <div className={'row'}>
                            <div className={'one column'} > <div className={hideInfo ? 'arrow-down rotate':'arrow-down'}/> </div>
                            <div className={'ten columns'}> General Options </div>
                            <div className={'one column'} > <div className={hideInfo ? 'arrow-down rotate':'arrow-down'}/> </div>
                        </div>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'help-text row'} style={{maxHeight: hideInfo ? '0px' : '50%'}}>
                        <div className={'u-full-width modal-section'}>
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