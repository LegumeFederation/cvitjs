import {h, Component} from 'preact';

export default class CvitControls extends Component{
  constructor(){
    super();
  }
  render(props,state){
    return (
      <div
        class={'one column'}
        id={'cvit-controls'}
      >
        <button
          style={{
            display: 'block',
            position: 'absolute',
            float: 'left'
          }}
        > + </button>
      </div>
    );
  }
}