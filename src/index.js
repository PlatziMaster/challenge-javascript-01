// const prompt = require('prompt');

// En caso de querer perdir los datos de base y altura por consola usar las lineas comentadas

const triangleArea = (base, height) => {
//  const area = (base*height)/2
//  return console.log(`Area = ${area}`)
 return (base*height)/2
};

// const schema = [
//   {
//     name: 'base',
//   },
//   {
//     name: 'height',
//   }
// ]

// prompt.start();

// prompt.get(schema, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   triangleArea(result.base, result.height)
// })

module.exports = triangleArea;
