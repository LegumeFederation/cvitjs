import React from 'react';

export default class About extends React.Component {
    render () {
        return (
            <div>
                <div className={'pure-g'}>
                    <h6> About </h6>
                </div>
                <div className={'pure-g'}>
                    <div className={'pure-u-1-1 l-box modal-section'}>
                        <p> 
                          GCViT: a multiple chromosome visualisation tool for 
                          visualizing resequencing or SNP array data. GCViT permits 
                          comparison of multiple accessions to a reference accession 
                          within a single dataset, to visually identify regions of 
                          similarities and differences across the genome. 
                        </p>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/B2gPVUipWo0" frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen title="Introduction to GCViT">
                        </iframe>
                    </div>
                </div>
            </div>
        );
    }
}
