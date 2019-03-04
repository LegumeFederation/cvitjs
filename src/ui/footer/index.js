import {h, Component} from 'preact';
import paper from 'paper';
import GroupToggle from './GroupToggle';


export default class CvitFooter extends Component{
  constructor(){
    super();
    this.state = {visible:false};
  }

  onClick(){
    this.setState({visible:!this.state.visible});
  }

  generateToggles(){
    let backbone = [];
    let groups = [];
    if(paper.project){
      paper.project.getActiveLayer().children['cvitView'].children.forEach(child =>{
        let name = child.name;
        let bbItem = (
          <td>
            <td>
              {name}
            </td>
            <td>
              <GroupToggle
                groupType={'chromosome'}
                target={name}
                cvitModel={this.props.cvitModel}
              />
            </td>
          </td>
        );
        backbone.push(bbItem);
        child.children.forEach(bbchild =>{
          let cname = bbchild.name;
          if(cname !== name && !cname.match(/.*-label/g) && groups.indexOf(cname) === -1) {
            groups.push(bbchild.name);
          }
        });
      });
    }
    let bbToggles=[];
    for(let i=0; i<backbone.length; i+=5){
      let bb = backbone.slice(i,i+5);
      bbToggles.push((<tr>{bb}</tr>));
    }
    let groupToggles = groups.map(group => {
      return (
        <tr>
          <td><span> {group}: </span></td>
          <td>
            <GroupToggle
              groupType={group}
              target={group}
              cvitModel={this.props.cvitModel}
            />
          </td>
        </tr>
      )
    })

    return(
      <div>
        <h5> Backbone </h5>
        <tbody>
        {bbToggles}
        </tbody>
        <h5> Feature Groups </h5>
        <tbody>
        {groupToggles}
        </tbody>
      </div>
    )
  }

  render(props,state){
    return (
      <footer className={'cvit'} id={'cvit-footer'}>
        <div className={'row'} >
          <div
            class={'twelve columns'}
            id={'footer-toggle'}
            onClick={()=> this.onClick()}
          >
            <div id="toggle-title">
              <i className={'material-icons'}> {state.visible ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }</i>
              <span>View Control</span>
              <i className={'material-icons'}> {state.visible ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }</i>
            </div>
          </div>

        </div>
        <div className={'row collapsible'} id={'cvit-toggle'}
             style={{maxHeight:state.visible ? 200 : 0}}
        >
          <div class={'twelve columns content'}
               style={{maxHeight:state.visible ? 200 : 0}}
          >
            {this.generateToggles()}
          </div>
        </div>
      </footer>
    );
  }
}