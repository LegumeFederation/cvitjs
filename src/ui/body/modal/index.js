import {h, Component} from 'preact';
import ExportModal from './Export';

export default class CvitModal extends Component {
  static chooseModal(active){
    switch(active){
      case 'export':
        return <ExportModal />;
      default:
        return (<div> This Menu Is Under Development </div>)
    }
  }

  render(props,state){
    return (
      CvitModal.chooseModal(props.active)
    );
  }
};