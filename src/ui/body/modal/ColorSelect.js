import {h, Component} from 'preact';
import paper from 'paper';

export default class ColorModal extends Component {
  constructor() {
    super();
    this.state = {
      pointer:null,
      pGra: null,
      sSlide:null,
      sGra:null,
      aSlide:null,
      aGra:null,
      sRad: null,
      colPrev:'black',
    };
    this.onConfirm = this.onConfirm.bind(this);
    this.onCancel = this.onCancel.bind(this);

  }

  componentDidUpdate(previousProps, previousState, previousContext) {
    if(previousProps.target !== this.props.target) {
      let s = this.state;
      this.setPosition(s.pointer, s.pGra, s.sSlide, s.sGra, s.aSlide, s.aGra, this.props.cColors[this.props.target]);
      this.changeColor(s.pointer, s.pGra, s.sSlide, s.sGra, s.aSlide, s.aGra, s.sRad, s.colPrev);
    }
  }

  componentDidMount() {
    if(paper.projects[1]) paper.projects[1].remove();
    paper.setup(document.querySelector('#select-canvas'));
    let topLeft = new paper.Point(10, 10);
    let bottomRight = new paper.Point(240, 120);
    let topRight = new paper.Point(240, 10);
    let leftOffset = [20, 0];
    let rightOffset = [40, 0];
    new paper.Path.Rectangle({
      topLeft: topLeft,
      bottomRight: bottomRight,
      fillColor: {
        gradient: {
          stops: ['#F00', '#FF0', '#0F0', '#0FF', '#00F', '#F0F', '#F00']
        },
        origin: topLeft,
        destination: topRight
      },
      strokeColor: 'black',
      strokeWidth: 1
    });

    let pGra = new paper.Path.Rectangle({
      topLeft: topLeft,
      bottomRight: bottomRight,
      fillColor: {
        gradient: {
          stops: [new paper.Color(0, 0, 0, 0), new paper.Color(0, 0, 0, 1)]
        },
        origin: topRight,
        destination: bottomRight
      }
    });

    topLeft = topRight.add(leftOffset);
    bottomRight = bottomRight.add(rightOffset);
    topRight = topRight.add(rightOffset);
    let sRad = new paper.Path.Rectangle({
      topLeft: topLeft,
      bottomRight: bottomRight,
      fillColor: 'black',
      strokeColor: 'black',
      strokeWidth: 1
    });
    let sGra = sRad.clone();
    sGra.fillColor = {
      gradient: {
        stops: [new paper.Color(1, 1, 1, 0), new paper.Color(1, 1, 1, 1)]
      },
      origin: topRight,
      destination: bottomRight
    };

    topLeft = topRight.add(leftOffset);
    bottomRight = bottomRight.add(rightOffset);
    topRight = topRight.add(rightOffset);
    let aGra = new paper.Path.Rectangle({
      topLeft: topLeft,
      bottomRight: bottomRight,
      fillColor: {
        gradient: {
          stops: [new paper.Color(1, 1, 1, 1), new paper.Color(1, 1, 1, 0)]
        },
        origin: topRight,
        destination: bottomRight
      },
      strokeColor: 'black',
      strokeWidth: 1
    });

    let colBox = new paper.Path.Rectangle({
      topLeft: [10, 140],
      bottomRight: bottomRight.add([0, 60]),
      fillColor: 'white',
      strokeColor: 'black',
      strokeWidth: 1

    });
    new paper.CompoundPath({
      children: [
        new paper.Path.Circle({
          center: colBox.position,
          radius: 20
        }),
        new paper.Path.Circle({
          center: colBox.position,
          radius: 10
        })
      ],
      fillColor: 'black'
    });

    let colPrev = new paper.Path.Rectangle({
      topLeft: [10, 140],
      bottomRight: bottomRight.add([0, 60]),
      fillColor: 'black',
      strokeColor: 'black',
      strokeWidth: 1

    });

    //// setup colorbox pointer for hue and brightness selection
    let pointer = new paper.CompoundPath({
      children: [
        new paper.Path.Line({
          from: [25, 20],
          to: [25, 30]
        }),
        new paper.Path.Line({
          from: [20, 25],
          to: [30, 25]
        })
      ]
    });
    pointer.strokeColor = new paper.Color(0.6);
    pointer.position = pGra.bounds.bottomRight;

    //// Setup sliders for saturation and alpha sliders
    let q = new paper.Point(10, 10);
    let w = new paper.Size(25, 10);
    let sSlide = new paper.Path.Rectangle(q, w);
    sSlide.fillColor = new paper.Color(0.6);
    sSlide.strokeColor = 'black';
    sSlide.strokeWidth = 1;
    sSlide.position = sGra.position;
    sSlide.position.y = sGra.bounds.topLeft.y;
    let aSlide = sSlide.clone();
    aSlide.position = aGra.position;
    aSlide.position.y = aGra.bounds.topLeft.y;

    ///** set pointer position and box colors */
    //this.setPosition(pointer,pGra,sSlide,sGra,aSlide,aGra,this.props.cColors[this.props.target]);
    //this.changeColor(pointer,pGra,sSlide,sGra,aSlide,aGra,sRad,colPrev);
    //this.changeColor(pointer,pGra,sSlide,sGra,aSlide,aGra,sRad,colPrev);

    //paper.view.draw();
    //let s = this.state;

    //pGra.onMouseDown = (e) => {
    //  pointer.position = e.point;
    //  this.changeColor(s.pointer,s.pGra,s.sSlide,s.sGra,s.aSlide,s.aGra,s.sRad,s.colPrev);
    //};
    //pGra.onMouseDrag =  pGra.onMouseDown;

    //// Mouse control for sliders
    //sGra.onMouseDown = (e) => {
    //  if (sGra.bounds.topLeft.y <= e.point.y &&
    //    e.point.y <= sGra.bounds.bottomLeft.y) {
    //    sSlide.position.y = e.point.y;
    //  }
    //  this.changeColor(s.pointer,s.pGra,s.sSlide,s.sGra,s.aSlide,s.aGra,s.sRad,s.colPrev);
    //};

    //sGra.onMouseDrag = sGra.onMouseDown;
    //sSlide.onMouseDown = sGra.onMouseDown;
    //sSlide.onMouseDrag = sGra.onMouseDown;

    //aGra.onMouseDown = (e) => {
    //  if (aGra.bounds.topLeft.y <= e.point.y &&
    //    e.point.y <= aGra.bounds.bottomLeft.y) {
    //    aSlide.position.y = e.point.y;
    //  }
    //  this.changeColor(s.pointer,s.pGra,s.sSlide,s.sGra,s.aSlide,s.aGra,s.sRad,s.colPrev);
    //};

    //aGra.onMouseDrag = aGra.onMouseDown;
    //aSlide.onMouseDown = aGra.onMouseDown;
    //aSlide.onMouseDrag = aGra.onMouseDown;

    this.setState({
      pointer: pointer,
      pGra: pGra,
      sSlide: sSlide,
      sGra: sGra,
      aSlide: aSlide,
      aGra: aGra,
      sRad: sRad,
      colPrev: colPrev
    });
  }

  componentWillUnmount() {
    paper.projects[0].activate();
    if (paper.projects[1]) paper.projects[1].remove();
  }

  setPosition (pointer,pGra,sSlide,sGra,aSlide,aGra,color){
    pointer.position.x = ((pGra.bounds.width * color.hue)/360) +  pGra.topLeft.x;
    pointer.position.y = pGra.bounds.height*-color.brightness + pGra.bounds.height + pGra.bounds.topLeft.y;
    sSlide.position.y = sGra.bounds.height*-color.saturation + sGra.bounds.height + sGra.bounds.topLeft.y;
    aSlide.position.y = aGra.bounds.height*-color.alpha + aGra.bounds.height + aGra.bounds.topLeft.y;
    this.setState({
      pointer: pointer,
      sSlide: sSlide,
      aSlide: aSlide
    });
  }

  changeColor (pointer,pGra,sSlide,sGra,aSlide,aGra,sRad,colPrev){
    let h = ((pointer.position.x - pGra.topLeft.x) / pGra.bounds.width) * 360;
    let b = 1 - ((pointer.position.y - pGra.topLeft.y) / pGra.bounds.height);
    let s = 1 - (sSlide.position.y - sGra.bounds.topLeft.y) / sGra.bounds.height;
    let a = 1 - (aSlide.position.y - aGra.bounds.topLeft.y) / aGra.bounds.height;
    sRad.fillColor.hue = h;
    sRad.fillColor.brightness = b;
    sRad.fillColor.saturation = 1;

    let sG1 = new paper.Color(sRad.fillColor);
    sG1.saturation = 1;
    let sG2 = new paper.Color(sG1);
    sG2.saturation = 0;
    sGra.fillColor.gradient.stops = [sG1, sG2];
    let aG1 = new paper.Color(sG1);
    aG1.saturation = s;
    let aG2 = new paper.Color(aG1);
    aG2.alpha = 0;
    aGra.fillColor.gradient.stops = [aG1, aG2];
    let prev = new paper.Color(aG1);
    prev.alpha = a;
    colPrev.fillColor = prev;
    paper.view.draw();
    this.setState({
      pointer: pointer,
      pGra: pGra,
      sSlide: sSlide,
      sGra: sGra,
      aSlide: aSlide,
      aGra: aGra,
      sRad: sRad,
      colPrev: colPrev
    });
  }

  onCancel(e){
    e.preventDefault();
    let s = this.state;
    this.setPosition(s.pointer, s.pGra, s.sSlide, s.sGra, s.aSlide, s.aGra, this.props.cColors[this.props.target]);
    this.changeColor(s.pointer, s.pGra, s.sSlide, s.sGra, s.aSlide, s.aGra, s.sRad, s.colPrev);
  }

  onConfirm(e){
    e.preventDefault();
    this.props.setColor(this.props.target, this.state.colPrev.fillColor);
  }

  render(props, state) {
    return (
      <div className={'eleven columns cvit cvit-modal'} id={'export-modal'}>
        <h4> Color Select </h4>
        {props.target === 'color1' ?
          <p> Change the stroke color and width of the freedraw and rectangle tools.</p>
          :
          <p> Change the fill color of the rectangle tool.</p>
        }
        <hr />
        <div>
          <canvas id={'select-canvas'} width={500} height={200} />
        </div>
        <div>
          <button
            className={'modal-confirm'}
            onClick={this.onConfirm}
          >
            Select Color
          </button>
          <button
            className={'modal-confirm'}
            onClick={this.onCancel}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}
