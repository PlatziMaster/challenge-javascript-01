const triangleArea = (base, height) => {

    let area = ((base*height) / 2)
    return area;

};

result = triangleArea(2, 4);
console.log(result);

module.exports = triangleArea;