'use strict'

function area(a) {
  const dividedNumber = 2
  return function base(b) {
    const mult = Math.imul(a, b)
    return mult / dividedNumber
  }
}


const triangleArea = (base, height) => {
  const baseTriangule = area(base)
  return baseTriangule(height)
};

module.exports = triangleArea;