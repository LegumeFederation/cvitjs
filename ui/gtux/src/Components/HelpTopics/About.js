import React from 'react';

export default class About extends React.Component {
    render () {
        return (
            <div>
                <div className={'row'}>
                    <h6> About </h6>
                </div>
                <div className={'row'}>
                    <div className={'u-full-width modal-section'}>
                        <p> GCViT: a multiple chromosome visualisation tool for the comparison of multiple accessions from a single dataset. </p>
                    </div>
                </div>
            </div>
        );
    }
}