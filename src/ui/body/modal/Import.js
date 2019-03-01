import {h, Component} from 'preact';

export default class ImportModal extends Component {
  constructor(){
    super();
    this.state = {
      name: 'cvit',
      format: 'svg',
      quality: .95
    };
  }

  render(props,state){
    return(
      <div class={'twelve columns cvit cvit-modal'} id={'export-modal'} >
        <h4> Import Data </h4>
        <p> Import your data locally to view it alongside the current image.</p>
        <hr />
        <h4> This Feature Is Under Development </h4>
      </div>
    );
  }
}