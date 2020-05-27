import React from 'react';

export default class ComparisonGenotype extends React.Component {
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
                            <div className={'pure-u-5-6 l-box'}> Comparison Genotype </div>
                            <div className={'pure-u-1-12 l-box'} > <div className={hideInfo ? 'arrow-down rotate':'arrow-down'}/> </div>
                        </div>
                    </div>
                </div>
                <div className={'pure-g'}>
                    <div className={'help-text pure-g'} style={{maxHeight: hideInfo ? '0px' : '50%'}}>
                        <div className={'pure-u-1-1 l-box modal-section'}>
                            <p>
                                One or more comparison genotypes can be specified. Note
                                that Comparisons can only be made within the same dataset.
                            </p>
                            <p>
                                <ul>
                                    <li> 
                                      Pick a Color that will represent the comparison
                                      genome. If comparing multiple genotypes it will be
                                      important to pick distinct colors for each.
                                    </li>
                                    <li> 
                                      Select a reference genotype by either typing in 
                                      the name of the genotype or using the pull down 
                                      menu to see available genotypes. 
                                    </li>
                                    <li> 
                                      Remove a comparison genotype by clicking on the 
                                      <b>X</b>. 
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}