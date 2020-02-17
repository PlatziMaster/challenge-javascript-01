const triangleArea = require('../utils/triangleArea');

describe('Test Triangle Area Function', () => {
  test('Calculate Area', () => {
    expect(triangleArea(7, 4)).toEqual(14);
  });
});
