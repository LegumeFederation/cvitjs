import {h, Component} from 'preact';
import HeaderOption from './HeaderOption';

export default class CvitHeader extends Component {
  render(props,state){
    return (
      <header className={'row cvit'} id={'cvit-header'} >
        <HeaderOption cvitModel={this.props.cvitModel} option={'canvas'} />
        <HeaderOption cvitModel={this.props.cvitModel} option={'export'} />
        <HeaderOption cvitModel={this.props.cvitModel} option={'import'} />
        <HeaderOption cvitModel={this.props.cvitModel} option={'help'} />
      </header>
    );
  }
}