const prompt = require('prompt');

const prompt_attributes = [
  {
    name: 'base',
    validator: /^[0-9]+([.][0-9]+)?$/,
    warning: 'Inavalid Base value, please enter a number'
  },
  {
    name: 'height',
    validator: /^[0-9]+([.][0-9]+)?$/,
    warning: 'Inavalid Height value, please enter a number'
  }
]

prompt.start()
const triangleArea = (base, height) => {
  
  if( Math.pow(base/2, 2) + Math.pow(height, 2) === Math.pow(height, 2) ) {
    console.log('The triangle is Equilateral ')
    const area1 = (Math.sqrt(3)/4) * Math.pow(base, 2)
    console.log(area1)
    return area1


  } else {
    const area2 = base * height / 2;
    console.log(area2);
    return area2
  }
};
prompt.get(prompt_attributes, (err, result)=>{
  
  if(err) {
    console.log(err)
    return null
  } else {
    console.log('The result is: ');

    let base = result.base;
    let height = result.height
    triangleArea(base, height)
  }
})


module.exports = triangleArea;