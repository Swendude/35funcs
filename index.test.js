const index = require("./index");

test("Double1 returns double the value", () => {
  expect(index.double1(1)).toBe(2);
});
