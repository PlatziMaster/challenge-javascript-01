const triangleArea = require('../index');

describe('Test Triangle Area Function', () => {
  test('Calculate Area', () => {
    expect(triangleArea(7, 4)).toEqual(14);
  });

  test('Calculate Area string number', () => {
    expect(triangleArea('7', '4')).toEqual(14);
  });

  test('Calculate Area negative', () => {
    expect(triangleArea(-2,-6)).toEqual(false);
  });

  test('Calculate Area string', () => {
    expect(triangleArea('qweqwe', 'qweqwe')).toEqual(false);
  });

  test('Calculate Area Null', () => {
    expect(triangleArea(null, '1')).toEqual(false);
  });

  test('Calculate Area empty', () => {
    expect(triangleArea(1, '')).toEqual(false);
  });
});
