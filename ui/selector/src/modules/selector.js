import {h, Component} from 'preact';
import ReferenceForm from "../components/referenceForm";
import CompareForm from "../components/compareForm";
import OptionsForm from "../components/optionsForm";
/**
 * A counter button: tap the button to increase the count.
 */
export default class Selector extends Component {
    render(props,state) {
        return (
            <div>
                <div className={'u-full-width fake-button'}> Configure View </div>
                <ReferenceForm/>
                <CompareForm/>
                <OptionsForm/>
                <div className={'row'}>
                    <button className={'three columns button-primary'}> Display </button>
                    <div className={'three columns'}><br/></div>
                    <button className={'three columns'}> Download </button>
                    <button className={'three columns'}> Help </button>
                </div>
            </div>
        )
    }
}
