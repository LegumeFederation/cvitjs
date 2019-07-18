import React from 'react';

export default class DisplayNone extends React.Component {
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
                            <div className={'ten columns'}> Display Type: None </div>
                            <div className={'one column'} > <div className={hideInfo ? 'arrow-down rotate':'arrow-down'}/> </div>
                        </div>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'help-text row'} style={{maxHeight: hideInfo ? '0px' : '50%'}}>
                        <div className={'u-full-width modal-section'}>
                            <p>Don't render anything on this side of the chromosome backbone.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}