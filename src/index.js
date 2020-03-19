const triangleArea = (base, height) => {
    let area = base * height / 2
    let result = `Èl area de su triaángulo es: ${area}`
    return result
};

console.log(triangleArea(3, 98));

module.exports = triangleArea;