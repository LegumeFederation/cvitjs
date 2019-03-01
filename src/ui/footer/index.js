import {h, Component} from 'preact';

export default class CvitFooter extends Component{
  render(props,state){
    return (
      <footer className={'row cvit'} id={'cvit-footer'}>
        <div class={'twelve columns'} >cvit-js </div>
      </footer>
    );
  }
}