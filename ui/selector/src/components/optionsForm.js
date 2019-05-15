import {h, Component} from 'preact';
/**
 * A counter button: tap the button to increase the count.
 */
export default class OptionsForm extends Component {
    constructor() {
        super();
    }
    render(props,state) {
        return (
            <form>
                <fieldset className={"genotype-field"}>
                    <legend>Options </legend>
                    <div className={'row genotype-select'}>
                        <div className={'two columns'}> Left Side: </div>
                        <div className={'two columns'}>
                            <label for={`option-dropdown-LHS`}>Type:</label>
                            <select className={'u-full-width'} id={`option-dropdown-LHS`}>
                                <option value={'none'}> None </option>
                                <option value={'haplotype'}>Haplotype</option>
                                <option value={'heat'}>Heat</option>
                                <option value={'histogram'}>Histogram</option>
                            </select>
                        </div>
                        <div className={'two columns'}>
                            <label for={`comparison-dropdown-LHS`}>Comparison:</label>
                            <select className={'u-full-width'} id={`comparison-dropdown-LHS`}>
                                <option value={'different'}>Different</option>
                                <option value={'same'}>Same</option>
                                <option value={'total'}>Total</option>
                            </select>
                        </div>
                        <div className={'two columns'}>
                            <label for={`binsize-LHS`}>Bin Size:</label>
                            <input type={'text'} className={'u-full-width'} id={`binsize-LHS`} placeholder={'500000'}/>
                        </div>
                        <div className={'two columns'}>
                            <label for={`max-RHS`}>Max Count:</label>
                            <input type={'text'} className={'u-full-width'} id={`max-RHS`} placeholder={'0'}/>
                        </div>
                        <div className={'two columns'}>
                            <label for={`min-RHS`}>Min Count:</label>
                            <input type={'text'} className={'u-full-width'} id={`min-RHS`} placeholder={'0'}/>
                        </div>
                    </div>
                    <div className={'row genotype-select'}>
                        <div className={'two columns'}> Right Side: </div>
                        <div className={'two columns'}>
                            <label for={`option-dropdown-RHS`}>Type:</label>
                            <select className={'u-full-width'} id={`option-dropdown-RHS`}>
                                <option value={'none'}> None </option>
                                <option value={'haplotype'}>Haplotype</option>
                                <option value={'heat'}>Heat</option>
                                <option value={'histogram'}>Histogram</option>
                            </select>
                        </div>
                        <div className={'two columns'}>
                            <label for={`comparison-dropdown-RHS`}>Comparison:</label>
                            <select className={'u-full-width'} id={`comparison-dropdown-RHS`}>
                                <option value={'different'}>Different</option>
                                <option value={'same'}>Same</option>
                                <option value={'total'}>Total</option>
                            </select>
                        </div>
                        <div className={'two columns'}>
                            <label for={`binsize-RHS`}>Bin Size:</label>
                            <input type={'text'} className={'u-full-width'} id={`binsize-RHS`} placeholder={'500000'}/>
                        </div>
                        <div className={'two columns'}>
                            <label for={`max-RHS`}>Max Count:</label>
                            <input type={'text'} className={'u-full-width'} id={`max-RHS`} placeholder={'0'}/>
                        </div>
                        <div className={'two columns'}>
                            <label for={`min-RHS`}>Min Count:</label>
                            <input type={'text'} className={'u-full-width'} id={`min-RHS`} placeholder={'0'}/>
                        </div>
                    </div>
                </fieldset>
            </form>
        );
    }
}