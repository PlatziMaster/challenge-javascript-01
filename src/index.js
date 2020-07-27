const triangleArea = (base, height) => {
	let area = (base * height)/2;
	return area;
};

console.log(triangleArea(5,3));

module.exports = triangleArea;
