import {h, Component} from 'preact';
import {popoverContents} from '../../templates/Popover';

export default class InformationPopover extends Component {
  constructor(props) {
    super(props);
  }

  render(props,state){
    return (
      <div
        id={'cvit-popover'}
        style={{top:props.popoverData.position.y, left:props.popoverData.position.x}}
      >
        {popoverContents(props.popoverData.data)}
      </div>
    );
  }
}