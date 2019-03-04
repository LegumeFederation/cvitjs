import {h, Component} from 'preact';
import paper from 'paper';
import GroupToggle from './GroupToggle';


export default class CvitFooter extends Component{
  constructor(){
    super();
    this.state = {visible:true, maxHeight:undefined};
  }

  componentDidMount() {
    console.log('ss',this.refs );
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
            <GroupToggle
              groupType={'chromosome'}
              targetChr={name}
              cvitModel={this.props.cvitModel}
            />
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
    //for(let i=0; i<backbone.length; i++){
    // let bb = backbone.slice(i,1);
    // console.log('slice',bb,backbone);
    //}
  let groupToggles = groups.map(group => {
    return (
      <tr>
        <td><span> {group}: </span></td>
        <td>
          <GroupToggle
            groupType={group}
            targetChr={''}
            cvitModel={this.props.cvitModel}
          />
        </td>
      </tr>
    )
  })

  return(
<tbody>
{groupToggles}
</tbody>
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
          cvit-js
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