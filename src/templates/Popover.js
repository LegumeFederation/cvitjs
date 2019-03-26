import {h} from 'preact'; //needed to parse JSX properly

export function popoverContents(data) {

  let attributeContents = data.map((feature, i) => {
    let attributes = [];
    for (let key in feature.attribute) {
      if (feature.attribute.hasOwnProperty(key)) {
        attributes.push((<tr>
          <th>{key}</th>
          <th>{feature.attribute[key]}</th>
        </tr>));
      }
    }
    return (
      <div className={'popover-contents'}>
        <table>
          <thead>
            <tr>
              <th> Name:</th>
              <th> {feature.name || feature.attribute.id} </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th> Start:</th>
              <th> {feature.start} </th>
            </tr>
            <tr>
              <th> End:</th>
              <th> {feature.end} </th>
            </tr>
            <tr>
              <th> Strand:</th>
              <th> {feature.strand} </th>
            </tr>
            <tr>
              <th> Score:</th>
              <th> {feature.strand} </th>
            </tr>
            {attributes}
          </tbody>
        </table>
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

