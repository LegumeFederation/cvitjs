import {h, Component} from 'preact';
import Dropdown from "./dropdown";
/**
 * A counter button: tap the button to increase the count.
 */
export default class CompareForm extends Component {
    constructor() {
        super();
        this.state = {
            options: [],
            count: 0
        };
    }

    removeOption(option){
        this.setState({ options: this.state.options.filter(opt => { return opt.attributes.name !== option.props.name;})});
    }

    render(props,state) {
        return (
            <form>
                <fieldset className={"genotype-field"}>
                    <legend> Comparison Genotypes </legend>
                    {state.options}
                    <div className={'fake-button'}
                        onClick={() => {
                            this.setState({
                                options: state.options.concat([<Dropdown name={`compare-${state.count}`} removable={true} removeOption={(option)=>this.removeOption(option)} />]),
                                count: state.count +1
                            });
                        }}
                    >
                        Add Comparison
                    </div>
                </fieldset>
            </form>
        );
    }
}