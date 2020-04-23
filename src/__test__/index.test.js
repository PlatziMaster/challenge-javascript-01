const triangleArea = require('../index');

describe('Test Triangle Area Function', () => {
  test('Calculate Area', () => {
    expect(triangleArea(7, 4)).toEqual(14);
  });

  test('Calculate Area string number', () => {
    expect(triangleArea('7', '4')).toEqual(14);
  });

  test('Calculate Area negative', () => {
    function testArea() {
      triangleArea(-2, -6);
    }
    expect(testArea).toThrow(Error);
  });

  test('Calculate Area string', () => {
    function testArea() {
      triangleArea('qweqwe', 'qweqwe');
    }
    expect(testArea).toThrow(Error);
  });

  test('Calculate Area Null', () => {
    function testArea() {
      triangleArea(null, '1');
    }
    expect(testArea).toThrow(Error);
  });

  test('Calculate Area empty', () => {
    function testArea() {
      triangleArea(1, '');
    }
    expect(testArea).toThrow(Error);
  });
});
