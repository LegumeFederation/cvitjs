import {h, Component} from 'preact';
import paper from 'paper';
import {spreadBackbones} from '../../canvas/Utilities';

export default class GroupToggle extends Component{
  constructor() {
    super();
    this.state = {'active': true};
  }

  toggleVisible(){
    let vis = !this.state.active;
    let group = this.props.groupType;
    let target = this.props.target;
    let active = paper.projects[0].getActiveLayer().children['cvitView'];
    if(group === 'chromosome'){
      active.children[target].visible = vis;
    } else {
      active.children.forEach(child => {
        if(child.children.hasOwnProperty(group)) child.children[group].visible = vis;
      });
    }
   // this.props.setRedraw(true);
    spreadBackbones(this.props.cvitModel.config,this.props.cvitModel.view);
    this.setState({active:vis});
  }

  render(props,state){
    return (
      <div className={'group-toggle'}>
        <input
          type={'checkbox'}
          className={'group-toggle-checkbox'}
          id={`${props.target}-toggle`}

          onInput={()=>this.toggleVisible()}
          checked={state.active}
        />
        <label
          className={'group-toggle-label'}
          htmlFor={`${props.target}-toggle`}
        >
          <span
            className={'group-toggle-inner'}
            content={state.active ? 'ON' : 'OFF'}
          />
          <span className={'group-toggle-switch'} />
        </label>
      </div>
    );
  }
}