const triangleArea = (base, height) => {
	let area = (base * height)/2;
	return `El area del triangulo es ${area}`;
};

console.log(triangleArea(5,3))

module.exports = triangleArea;
