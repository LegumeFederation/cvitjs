import {h, Component} from 'preact';
import ExportModal from './Export';
import ImportModal from './Import';
import HelpModal from './Help';
import ColorModal from './ColorSelect';

export default class CvitModal extends Component {
  static chooseModal(active){
    let test = active;
    if(/color.*/.test(test)) test = 'color';
    switch(test){
      case 'export':
        return <ExportModal />;
      case 'import':
        return <ImportModal />;
      case 'help':
        return <HelpModal />;
      case 'color':
        return <ColorModal
          target={active}
        />;
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