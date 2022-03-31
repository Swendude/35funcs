const index = require("../index.js");
// const jest = require("jest");

test("Double1 logs 2 when the input is 1", () => {
    // console.log = jest.fn();
    expect(index.double1(1)).toBe(2);
});

// test("Double2 returns double the value", () => {
//     expect(index.double2(1)).toBe(2);
//     expect(index.double2(-4)).toBe(-8);
//     expect(index.double2(300)).toBe(600);
// });