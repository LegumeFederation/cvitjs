import {h, Component} from 'preact';
import HeaderOption from './HeaderOption';

export default class CvitHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {active:'none'};
  }

  render(props,state){
    return (
      <header class={'row cvit'} id={'cvit-header'} >
        <HeaderOption cvitModel={this.props.cvitModel} option={'canvas'} />
        <HeaderOption cvitModel={this.props.cvitModel} option={'export'} />
        <HeaderOption cvitModel={this.props.cvitModel} option={'import'} />
        <HeaderOption cvitModel={this.props.cvitModel} option={'help'} />
      </header>
    );
  }
}