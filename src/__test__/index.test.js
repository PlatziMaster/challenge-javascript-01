const triangleArea = require("../index");

describe("Test Triangle Area Function", () => {
  test("Calculate Area", () => {
    expect(triangleArea(7, 4)).toEqual(14);
  });
});

describe("Test Triangle Area Function", () => {
  test("Calculate Area", () => {
    expect(triangleArea(15, 8)).toEqual(60);
  });
});

describe("Test Triangle Area Function", () => {
  test("Calculate Area", () => {
    expect(triangleArea(12, 100)).toEqual(600);
  });
});
