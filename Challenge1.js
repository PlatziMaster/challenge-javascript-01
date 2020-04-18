//alert ("Hola mundo")

var areatriangulo = function (){
    var base = document.getElementById("base").value
    var altura = document.getElementById("altura").value

    var area = (base * altura)/2
    return alert("El área del triángulo es: "+area+" metros cuadrados")
}