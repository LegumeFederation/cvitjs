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
                            <p>
                              <b>Title</b> <i>Default: blank</i> Title shown on the display. 
                            </p>
                            <p> 
                              <b>Bin Size</b> <i>Default: 500000bp</i> Because the data 
                              on a whole genome display is highly condensed, it must be 
                              divided into bins, with the data within each bin averaged,
                              counted, or otherwise combined into one value. Large 
                              genomes and/or very dense data sets suggest smaller bin 
                              sizes. However, setting the bin size too small will slow 
                              down rendering of the image to the point it may not display 
                              at all or it may become difficult or impossible to see 
                              differences in the data. For large genomes, it is 
                              recommended to not set the bin size much lower than 
                              500000.
                            </p>
                            <p> 
                              <b>Ruler Display</b> <i>Default: left</i> Where ruler is placed on the image. 
                            </p>
                            <p> 
                              <b>Ruler Interval</b> <i>Default: 5000000</i> Measured in
                              bp, indicates how often to draw tic marks on the ruler. 
                              Each major tic mark will be labeled with a number and have 
                              one minor division between. Any value below 1000000 is 
                              likely to cause labels to overlap and be unreadable.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}