import {h, Component} from 'preact';

export default class HelpModal extends Component {
  constructor(){
    super();
  }

  render(props,state){
    return(
      <div class={'twelve columns cvit cvit-modal'} id={'export-modal'} >
        <h4> Help and About </h4>
        <hr />
        <h5>About</h5>
        <p>
          <strong>CViTjs</strong> - Chromosome Viewing Tool
        </p>
        <p>
          Enabling quick visualizations of features on linkage groups, pseudochromosomes or cytogenic maps.
          Intended to be used for whole-genome visualisations.
        </p>
        <p>
          Development supported by the USDA-ARS, Corn Insects and Crop Genomics Research Unit.
        </p>
        <h5>Additional Help</h5>
        <p>
          Additional help and source may be found <a href={'https://github.com/LegumeFederation/cvitjs'}>here</a>
        </p>
      </div>
    );
  }
}