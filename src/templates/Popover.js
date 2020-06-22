import {h} from 'preact'; //needed to parse JSX properly

export function popoverContents(data) {

    let attributeContents = data.map(feature => {
        let attributes = [];
        for (let key in feature.attribute) {
            if (feature.attribute.hasOwnProperty(key)) {
                attributes.push((<tr>
                    <th>{`${key}:`}</th>
                    <td>{feature.attribute[key]}</td>
                </tr>));
            }
            // GRIN Search
            if(key !== 'id' && key !== 'value' && key !== 'unknown'){
                let searchTerm = key.match(/.*(PI|pi)\s?([0-9]+)\s?([a-zA-Z])?.*/)
                console.log(searchTerm)
                if(searchTerm !== null){
                    let pi = searchTerm[3] ? `PI ${searchTerm[2]} ${searchTerm[3]}` : `PI ${searchTerm[2]}`;
                    attributes.push((<tr>
                            <th colSpan={2} style={{textAlign: 'center'}}>
                                <a href={`https://npgsweb.ars-grin.gov/gringlobal/accessiondetail.aspx?accid=${pi}`}>
                                    {`Search for ${pi} at GRIN` }
                                </a>
                                
                            </th>
                        </tr>));
                } else {
                attributes.push((<tr>
                        <th colSpan={2} style={{textAlign: 'center'}}> 
                            <a href={`https://npgsweb.ars-grin.gov/gringlobal/search.aspx?q="Glycine max" "${key}"&lim=50`}>
                                {`Search for ${key} at GRIN` }
                            </a>
                            
                        </th>
                    </tr>));
                }
            }
        }


        return (
            <div className={'popover-contents'}>
                <table style={{margin:'auto'}}>
                    <thead>
                    <tr>
                        <th colSpan={2} style={{textAlign: 'center'}}> Feature Information </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th> Name: </th>
                        <td> {feature.name || feature.attribute.id} </td>
                    </tr>
                    <tr>
                        <th> Chromosome: </th>
                        <td> {feature.seqName} </td>
                    </tr>
                    <tr>
                        <th> Start:</th>
                        <td> {feature.start} </td>
                    </tr>
                    <tr>
                        <th> End:</th>
                        <td> {feature.end} </td>
                    </tr>
                    {attributes}
                    </tbody>
                </table>
                <br/>
                <a href={`https://soybase.org/gb2/gbrowse/gmax2.0/?name=${feature.seqName}%3A${feature.start}..${feature.end}`}> View Region in Soybase GBrowse </a>
                <br/>
                <a href={`https://legumeinfo.org/lis_context_viewer/search/lis/glyma.${feature.seqName}/${feature.start}-${feature.end}`}> View Region in LIS Context Viewer </a>
            </div>
        );
    });

    return (
        <div id={'popover-contents'}>
            <h5> Selection </h5>
            <hr />
            <div className={'popover-details'}>
                {attributeContents}
            </div>
        </div>
    );
}

