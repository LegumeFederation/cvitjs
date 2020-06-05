import React from 'react';

export default class DisplayHeat extends React.Component {
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
                            <div className={'pure-u-5-6 l-box'}> Display Type: Heatmap </div>
                            <div className={'pure-u-1-12 l-box'} > <div className={hideInfo ? 'arrow-down rotate':'arrow-down'}/> </div>
                        </div>
                    </div>
                </div>
                <div className={'pure-g'}>
                    <div className={'help-text pure-g'} style={{maxHeight: hideInfo ? '0px' : '50%'}}>
                        <div className={'pure-u-1-1 l-box modal-section'}>
                            <p>Shows SNPs as block regions with a color that is proportional to the count in the bin and the provided min and max values.
                                Similar to the heat map option, but color instead of volume to indicate bin density.</p>
                            <p> <b>Comparison</b> <i>Default: different</i>  Which comparison with the reference to display.
                                <ul>
                                    <li><b>Different</b>: Positions where reference and comparison line have different alleles.</li>
                                    <li><b>Same</b>: Positions where reference and comparison line have the same alleles.</li>
                                    <li><b>Total</b>: Total number of SNPs for reference and comparison, alongside a count for locations where the allele was undefined.</li>
                                </ul>
                            </p>
                            <p> 
                              <b>Filter Genotypes</b> <i>Default: all [blank]</i> Select 
                              one or more genotypes or leave blank for all comparison 
                              genotypes.
                            </p>
                            <p> 
                              <b>Min Value</b> <i>Default: 0</i> Cutoff value for 
                              displaying any height on the glyph. Any count equal to or 
                              smaller than this number will not be displayed.
                            </p>
                            <p> 
                              <b>Max Value</b> <i>Default: 0</i> Cutoff value for 
                              displaying maximum height on the glyph. Any count equal to 
                              or larger than this number will be displayed as the full 
                              height. Here, 0 is shorthand for the largest count in the 
                              reference across all bins. 
                            </p>
                            <p> 
                              <b>Heat Base Color</b> <i>Default: white</i> Choose to 
                              go from white -> color or black -> color 
                            </p>
                            <p> 
                              <b>Heat Direction</b> <i>Default: Min-Max</i> Render heat 
                              low-to-high as  base -> color (Min-Max) or color -> base (Max-Min) 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}