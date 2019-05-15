import {h, Component} from 'preact';
/**
 * A counter button: tap the button to increase the count.
 */
export default class Dropdown extends Component {
    constructor() {
        super();
        this.state = {
            ds: ['one','two'],
            dt: ['one','two','five','three']
        };
    }
    render(props,state) {
        let dsOptions = state.ds.map(dataSet =>{
            return <option value={dataSet}>{dataSet}</option>
        });
        let dOptions = state.dt.map(dataSet =>{
            return <option value={dataSet}>{dataSet}</option>
        });
        return (
            <div className={'row genotype-select'}>
                <div className={'five columns'}>
                    <label for={`dataset-dropdown${props.name}`}>Dataset:</label>
                    <select className={'u-full-width'} id={`dataset-dropdown-${props.name}`}>
                        {dsOptions}
                    </select>
                </div>
                <div className={'five columns'}>
                    <label for={`genotype-dropdown-${props.name}`}>Genotype:</label>
                    <select className={'u-full-width'} id={`genotype-dropdown-${props.name}`}>
                        {dOptions}
                    </select>
                </div>
                {props.removable ?
                    <div className={'two columns remove-genotype'} onClick={() => props.removeOption(this)}> X </div>
                    :
                    null
                }
            </div>
        );
    }
}
