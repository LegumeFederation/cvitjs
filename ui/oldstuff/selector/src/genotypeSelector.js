import {h, render} from 'preact';
import Selector from "./modules/selector";

export default class Select {
  constructor(){
    this.ui = render( <Selector />, document.querySelector('#selector-app'));
  }
}