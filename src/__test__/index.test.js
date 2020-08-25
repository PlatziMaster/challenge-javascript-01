const triangleArea = require('../index');

describe('Test Triangle Area Function', () => {

  test('Calculate Area', () => {
    expect(triangleArea(7, 4)).toEqual(14);
  });

  test('Calculate Area with decimals', () => {
    expect(triangleArea(7.6, 4)).toEqual(15.2);
  });  

  test('Do not calculate area if negative number is passed on base argument', () => {
    expect(() =>  triangleArea(-3, 5)).toThrowError("Negative base incorrect");
  })

  test('Do not calculate area if negative number is passed on height argument', () => {
    expect(() =>  triangleArea(4, -5)).toThrowError("Negative height incorrect");
  })
});
