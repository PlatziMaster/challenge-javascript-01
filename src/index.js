const triangleArea = (base, height) => {
  const divider = 2;
  let area = (base * height) / divider;
  return area;
};

triangleArea(4, 8);

module.exports = triangleArea;
