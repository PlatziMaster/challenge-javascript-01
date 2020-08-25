"use strict";
var triangleArea = function (base, height) {
    if (base < 0)
        throw new Error("Negative base incorrect");
    if (height < 0)
        throw new Error("Negative height incorrect");
    return (base * height) / 2;
};
module.exports = triangleArea;
