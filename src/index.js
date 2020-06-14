/* const readline = require('readline');
let base = 0;
let altura = 0;

/* let base = ("Ingresa la base del triangulo"));
let altura = parseInt(prompt("Ingresa la altura del triangulo")); */

/* const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('cual es el base del triangulo? ', (respuesta) => {
    console.log(respuesta)
    base = +respuesta



rl.question('cual es el altura del triangulo? ', (respuesta) => {
    console.log(respuesta)
    altura = +respuesta
    console.log("El area del triangulo es: " + ((base * altura) / 2))
    rl.close();
}) 
})  */ 


const triangleArea = (base, altura) => {
    return((base * altura) / 2)
}; 

module.exports = triangleArea; 