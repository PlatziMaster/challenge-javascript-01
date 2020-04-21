
// import { triangleArea } from '../index.js';

// let describe = ('Test Triangle Area Function', () => {
//   test('Calculate Area', () => {
//     expect(triangleArea(7, 4)).toEqual(14);
//   });
// });
// console.log(`Èl área de un triangulo es: ${describe(test)}`);





let base
let heigth 


base=prompt('Ingrese su base:','');
heigth=prompt('Ingrese altura:','');

console.log(`ingrese la base ${base}`);
console.log(` ingrese altura ${heigth} ` );


function triangleArea(base, heigth) {
  return base * heigth / 2 

}

console.log(`El área de un triángulo de base ${base} y altura ${heigth} es:
${triangleArea(base, heigth)}`)




