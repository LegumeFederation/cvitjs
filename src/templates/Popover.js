import {h} from 'preact';

export function popoverContents(data){
  return data.map((feature,i) =>{
    let attributes = [];
    for( let key in feature.attribute){
      if(feature.attribute.hasOwnProperty(key)){
        attributes.push((<tr><th>{key}</th><th>{feature.attribute[key]}</th></tr>))
      }
    }
    return(
      <div>
        <table>
          <thead>
            <tr>
              <th> Name: </th>
              <th> {feature.attribute.id || i} </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th> Start: </th>
              <th> {feature.start} </th>
            </tr>
            <tr>
              <th> End: </th>
              <th> {feature.end} </th>
            </tr>
            <tr>
              <th> Strand: </th>
              <th> {feature.strand} </th>
            </tr>
            <tr>
              <th> Score: </th>
              <th> {feature.strand} </th>
            </tr>
            {attributes}
          </tbody>
        </table>
      </div>
    )
  })
}
