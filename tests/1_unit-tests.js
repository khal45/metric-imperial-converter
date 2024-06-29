const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", () => {
  // convertHandler should correctly read a whole number input.
  suite("convertHandler.getNum(input)", () => {
    test("read whole number input", () => {
      let input = "32L";
      assert.equal(
        convertHandler.getNum(input),
        32,
        "the input is a whole number"
      );
    });
  });
});
