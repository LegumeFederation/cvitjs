import {h, Component} from 'preact';

export default class HeaderOption extends Component {
  static capitalise(str){
    return str.replace(/\w\S*/g, (word) => {
      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    });
  }
  onClick(){
    this.props.cvitModel.setActive(this.props.option);
  }

  render(props,state){
    let compClass = 'three columns head-item';
    if(props.cvitModel.active === props.option) compClass +=' active';
    return(
      <div className={compClass}
        onClick={() => this.onClick()}
      >
        {HeaderOption.capitalise(props.option)}
      </div>
    );
  }
}