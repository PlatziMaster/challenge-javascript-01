
function calcularAreaTriangulo(base, altura){
    area = (base * altura)/2;
    return area;
}
 
base = prompt("Reto Area Triangulo: \n Por favor ingresa la base del traingulo: ");
altura = prompt("Ingresar la altura del triangulo: ");
x =parseInt(base);
y =parseInt(altura);

let areaFinal;

areaFinal = calcularAreaTriangulo(x,y);
alert ("El area final del triangunlo es: " +areaFinal);

