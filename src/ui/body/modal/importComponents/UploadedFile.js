import {h, Component} from 'preact';
import paper from 'paper';

export default class ConfigurationBox extends Component {
  constructor() {
    super();
    this.state = {
        config={}
    };
    this.onConfirm = this.onConfirm.bind(this);
    this.onCancel = this.onCancel.bind(this);

  }
  componentDidMount() {
      t
  }
  render(props, state) {
    return (
      <div className={'eleven columns cvit cvit-modal'} id={'export-modal'}>
        <h4> Color Select </h4>
        {props.target === 'color1' ?
          <p> Change the stroke color and width of the freedraw and rectangle tools.</p>
          :
          <p> Change the fill color of the rectangle tool.</p>
        }
        <hr />
        <div>
          <canvas id={'select-canvas'} width={500} height={200} />
        </div>
        <div>
          <button
            className={'modal-confirm'}
            onClick={this.onConfirm}
          >
            Select Color
          </button>
          <button
            className={'modal-confirm'}
            onClick={this.onCancel}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}
