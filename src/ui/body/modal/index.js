import {h, Component} from 'preact';
import ExportModal from './Export';
import ImportModal from './Import';
import HelpModal from './Help';

export default class CvitModal extends Component {
  static chooseModal(active){
    switch(active){
      case 'export':
        return <ExportModal />;
      case 'import':
        return <ImportModal />;
      case 'help':
        return <HelpModal />;
      default:
        return (<div> This Menu Is Under Development </div>);
    }
  }

  render(props,state){
    return (
      CvitModal.chooseModal(props.active)
    );
  }
}