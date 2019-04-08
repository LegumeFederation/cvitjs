export default function transformValue(value,transform,base=Math.E){
  switch (transform) {
    case 'exponential' :
      return Math.log(value)/Math.log(base);
    case 'log' :
      return Math.pow(value,base);
    default:
      return value;
  }
}