import paper from 'paper';

export default function paperTest() {
  console.log('test of paperJS', paper.project);
  let testPoint = new paper.Point(10,10);
  let testRectSize = new paper.Size(200,100);
  let testRect = new paper.Rectangle(testPoint, testRectSize);
  let testRectPath = new paper.Path.Rectangle(testRect);
  testRectPath.fillColor = 'red';
  console.log(testRectPath);
}