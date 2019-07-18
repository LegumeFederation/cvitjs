import React from 'react';
import About from "./HelpTopics/About";
import ReferenceGenotype from "./HelpTopics/ReferenceGenotype";
import ComparisonGenotype from "./HelpTopics/ComparisonGenotype";
import GeneralOptions from "./HelpTopics/GeneralOptions";
import DisplayNone from "./HelpTopics/DisplayNone";
import DisplayHaplotype from "./HelpTopics/DisplayHaplotype";
import DisplayHistogram from "./HelpTopics/DisplayHistogram";
import DisplayHeat from "./HelpTopics/DisplayHeat";

export default class HelpModal extends React.Component {
    render () {
        return (
            <div>
                <div className={'row'}>
                    <h5> GCViT - Genotype Comparison Visualisation Tool</h5>
                </div>
                <div id={'help-contents'}>
                    <About/>
                    <h6> Genotypes </h6>
                    <ReferenceGenotype/>
                    <ComparisonGenotype/>
                    <h6> Options </h6>
                    <GeneralOptions/>
                    <DisplayNone/>
                    <DisplayHistogram/>
                    <DisplayHeat/>
                    <DisplayHaplotype/>
                </div>
            </div>
        );
    }
}