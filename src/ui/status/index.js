import {h, Component} from 'preact';

export default class CvitStatus extends Component {
  render(props,state){
    let status = props.status;
    // loading spinner is pure css
    if (status !== '') {
      return (
        <div className={'row cvit'} id={'cvit-status'}>

          <div>
            <div className={'one column cvit-loading-spinner'} />
            <div className={'eleven columns'} id={'loading-div'}> {status.toString()} </div>
          </div>
        </div>
      );
    } else {
      return null
    }
  }
}