const isNumber = require('is-number');

const triangleArea = (base, height) => {
    if (validNumber(base) && validNumber(height)) {
        return ((base * height) / 2);
    } else {
        throw new Error('Is not valid input');
    }
};

function validNumber(number) {
    if (isNumber(number) && number > 0) {
        return true;
    }
    return false;
}

module.exports = triangleArea;