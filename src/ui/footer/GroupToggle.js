import {h, Component} from 'preact';
import paper from 'paper';

export default class GroupToggle extends Component{
  constructor() {
    super();
    this.state = {'active': true};
  }

  toggleVisible(){
    let vis = !this.state.active;
    let group = this.props.groupType;
    let target = this.props.targetChr;
    let active = paper.project.getActiveLayer().children['cvitView'];
    if(group === 'chromosome'){
      active.children[target].visible = vis;
    } else {
      active.children.forEach(child => {
        if(child.children.hasOwnProperty(group)) child.children[group].visible = vis;
      });
    }
    //this.props.cvitModel.setRedraw(true);
    this.setState({active:vis});
  }

  render(props,state){
    return (
      <div className={'group-toggle'}>
        <input
          type={'checkbox'}
          className={'group-toggle-checkbox'}
          id={`${props.groupType}-toggle`}
          onInput={()=>this.toggleVisible()}
          checked={state.active}
        />
        <label
          className={'group-toggle-label'}
          htmlFor={`${props.groupType}-toggle`}
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