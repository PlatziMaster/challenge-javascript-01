'use strict'

function area(a) {
  const divided = 2
  return function base(b) {
    return (a * b) / divided
  }
}


const triangleArea = (base, height) => {
  const baseTriangule = area(base)
  return baseTriangule(height)
};

module.exports = triangleArea;