import React from 'react';

export default class ReferenceGenotype extends React.Component {
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
                            <div className={'ten columns'}> Reference Genotype </div>
                            <div className={'one column'} > <div className={hideInfo ? 'arrow-down rotate':'arrow-down'}/> </div>
                        </div>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'help-text row'} style={{maxHeight: hideInfo ? '0px' : '50%'}}>
                        <div className={'u-full-width modal-section'}>
                            <p>
                                <ul>
                                    <li> Pick a Color that will represent the reference genome. Please note that this color will only show up when “total” is indicated in the display options. </li>
                                    <li> Pick the dataset that has your genotype of interest and will be used in this comparison. All of these datasets (VCF files) can be found at the SoyBase data store located at <a href="https://soybase.org/data/public/Glycine_max"> soybase.org/data/public/Glycine_max </a>
                                        <br/> Please note this is dataset will also be used in the next section “Add a Comparison.” </li>
                                    <li>Select which genotype will be the reference by either typing in the name of the genotype or using the pull down menu to see available genotypes. For comparisons, each selected genotyped with be compared against this reference.</li>
                                </ul>
                                *(note for the 50K dataset, it will take a few seconds for the lines to pop up since there are over 20,000 lines in the dataset.)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}