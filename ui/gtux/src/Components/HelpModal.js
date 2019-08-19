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
        return(
            <div className={"modal-area"}>
                <div className={"modal-content"} >
                    <h5> GCViT - Genotype Comparison Visualisation Tool </h5>
                    <hr />
                    <div className={'modal-contents'}>
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
                <div className={'modal-close'}>
                    <button className={'modal-confirm'}
                            onClick={()=>this.props.closeAction()}
                    > Close </button>
                </div>
            </div>
        );
    }
}
