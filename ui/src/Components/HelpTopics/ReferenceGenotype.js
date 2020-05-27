import React from 'react';

export default class ReferenceGenotype extends React.Component {
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
                            <div className={'pure-u-5-6 l-box'}> Reference Genotype </div>
                            <div className={'pure-u-1-12 l-box'} > <div className={hideInfo ? 'arrow-down rotate':'arrow-down'}/> </div>
                        </div>
                    </div>
                </div>
                <div className={'pure-g'}>
                    <div className={'help-text pure-g'} style={{maxHeight: hideInfo ? '0px' : '50%'}}>
                        <div className={'pure-u-1-1 l-box modal-section'}>
                            <p>
                                <ul>
                                    <li> 
                                      Pick a Color that will represent the reference 
                                      genotype. Please note that this color will only 
                                      show up when “total” is selected in the display 
                                      options. 
                                    </li>
                                    <li> 
                                      Pick a dataset to explore. Note that comparisons
                                      can only be done within a single dataset.
                                    </li>
                                    <li>
                                      Select which genotype will be the reference by 
                                      either typing in the name of the genotype or using 
                                      the pull down menu to see available genotypes. All
                                      comparison genotypes selected in the next step will
                                      be compared against this genotype.</li>
                                </ul>
                                *(note that large data sets may take a few seconds load,
                                before the accession names to appear in the pull down
                                menu.)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}