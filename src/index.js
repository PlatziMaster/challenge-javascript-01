//const readline = require("readline-sync")

const triangleArea = (base, height) => {
  const area = (base * height)/2
  console.log("El area del triangulo es: "+ area)
  return area
  //
}
// base = parseFloat(readline.question("Base: "))
// height= parseFloat(readline.question("height: "))
// triangleArea(base, height);
module.exports = triangleArea;
