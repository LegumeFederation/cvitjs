import {h, Component} from 'preact';
import paper from 'paper';

export default class ExportModal extends Component {
  constructor(){
    super();
    this.state = {
      name: 'cvit',
      format: 'svg',
      quality: .95
    };
  }

  exportImage(blob){
    let url = URL.createObjectURL(blob);
    this.saveImage(url);
  }

  saveImage(url){
    let name = this.state.name !== '' ? this.state.name : 'cvit';
    name += `.${this.state.format}`;
    let link = document.createElement('a');
    link.download = name;
    link.href = url;
    document.body.appendChild(link);
    link.click();
  }

  onClick(){

    if(this.state.format === 'svg'){
      let url = 'data:image/svg+xml;utf8,' +
        encodeURIComponent(paper.project.exportSVG({asString:true}));
      this.saveImage(url);
    } else {
      paper.project.view.element.toBlob((blob) => this.exportImage(blob));
    }
  }

  onInput(evt){
    this.setState({name:evt.target.value});
  }

  onSelect(evt){
    this.setState({format:evt.target.value});
  }


  render(props,state){
    return(
      <div className={'twelve columns cvit cvit-modal'} id={'export-modal'} >
        <h4> Export Image </h4>
        <p> Export the current view as an image.</p>
        <hr />
        <form style={{width:'100%'}}>
          <h5> Export Settings: </h5>
          <tbody>
            <tr>
              <td><span>File Name: </span></td>
              <td>
                <input
                  type={'text'}
                  value={state.name}
                  onInput={(evt)=>this.onInput(evt)}
                  placeholder={'cvit'}
              />
              </td>
            </tr>

            <tr>
              <td> <span> File Type: </span> </td>
              <td>
                <label>
                  <input
                    id={'opt-svg'}
                    type={'radio'}
                    value={'svg'}
                    onChange={(evt)=>this.onSelect(evt)}
                    checked={state.format === 'svg'}
                />
                  <span> svg </span>
                </label>
              </td>
              <td>
                <label>
                  <input
                    id={'opt-png'}
                    type={'radio'}
                    value={'png'}
                    onChange={(evt)=>this.onSelect(evt)}
                    checked={state.format === 'png'}
                />
                  <span> png </span>
                </label>
              </td>
            </tr>
          </tbody>
        </form>
        <button className={'modal-confirm'}
          onClick={()=>this.onClick()}
        > Export Image </button>
      </div>
    );
  }
}