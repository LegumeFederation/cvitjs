import {h, Component} from 'preact';
import Dropdown from "./dropdown";
/**
 * A counter button: tap the button to increase the count.
 */
export default class ReferenceForm extends Component {
    constructor() {
        super();
    }
    render(props,state) {
        return (
            <form>
                <fieldset className={"genotype-field"}>
                    <legend> Reference Genotype </legend>
                    <Dropdown name={'reference'} removable={false}/>
                </fieldset>
            </form>
        );
    }
}