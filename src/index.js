const isNumber = require('is-number');

const triangleArea = (base, height) => {

    if(!validNumber(base)){
        return false;
    }

    if(!validNumber(height)){
        return false;
    }
    
    return ((base * height) / 2);
};

function validNumber(number){
    if(!isNumber(number)){
        return false;
    }else if(number < 1){
        return false;
    }

    return true;
}

module.exports = triangleArea;