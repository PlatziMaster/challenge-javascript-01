// const triangleArea = (base, height) => {
//     var multiplication = base * height;
//     var result = multiplication / 2;
//     return result;
// };

const triangleArea = (base, height) => {
    var result = (base * height)/2;
    console.log(`El area de un taringulo con ${base}m de base y ${height}m de altura, es igual a ${result}m`);
};

triangleArea(8, 4);

module.exports = triangleArea;