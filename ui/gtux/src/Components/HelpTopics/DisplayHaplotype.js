import React from 'react';

export default class DisplayHaplotype extends React.Component {
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
                            <div className={'pure-u-5-6 l-box'}> Display Type: Haplotype </div>
                            <div className={'pure-u-1-12 l-box'} > <div className={hideInfo ? 'arrow-down rotate':'arrow-down'}/> </div>
                        </div>
                    </div>
                </div>
                <div className={'pure-g'}>
                    <div className={'help-text pure-g'} style={{maxHeight: hideInfo ? '0px' : '50%'}}>
                        <div className={'pure-u-1-1 l-box modal-section'}>
                            <p>Shows SNPs as block regions that only display if the count in the bin meets the provided threshold.</p>
                            <p>
                                This Display is good for:
                                <ul>
                                    <li> Viewing inheritance when comparing a line with its parents.</li>
                                </ul>
                            </p>
                            <p> <b>Comparison</b> <i>Default: different</i>  Which comparison with the reference to display.
                                <ul>
                                    <li><b>Different</b>: Positions where reference and comparison line have different alleles.</li>
                                    <li><b>Same</b>: Positions where reference and comparison line have the same alleles.</li>
                                    <li><b>Total</b>: Total number of SNPs for reference and comparison, alongside a count for locations where the allele was undefined.</li>
                                </ul>
                            </p>
                            <p> <b>Filter Genotypes</b> <i>Default: all [blank]</i> Allows the restriction of the displayed genotypes when more-than-one is available,
                            due to either more-than-one comparison, or using the total comparison. If not empty, only the selected genotypes will display.  This option is useful if the user would like to see the differences between the reference and each comparison on opposite sides of the chromosome.
                            </p>
                            <p> <b>Threshold</b> <i>Default: 1</i> The glyph is only drawn if the count matches or exceeds this number.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}