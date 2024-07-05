const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", () => {
  suite("convertHandler.getNum(input)", () => {
    // convertHandler should correctly read a whole number input.
    test("read whole number input", () => {
      let input = "32L";
      assert.equal(
        convertHandler.getNum(input),
        32,
        "the input is a whole number"
      );
    });
    // convertHandler should correctly read a decimal number input
    test("read decimal number input", () => {
      let input = "32.2L";
      assert.equal(
        convertHandler.getNum(input),
        32.2,
        "the input is a decimal"
      );
    });
    // convertHandler should correctly read a fractional input.
    test("read fractional input", () => {
      let input = "32/3";
      assert.equal(
        convertHandler.returnFrac(input),
        "32 / 3",
        "the input is a fraction"
      );
    });
    // convertHandler should correctly read a fractional input with a decimal.
    test("read fractional input with a decimal", () => {
      let input = "32/3.4";
      assert.equal(
        convertHandler.returnFrac(input),
        "32 / 3.4",
        "the input is a fraction with a decimal"
      );
    });
    // convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3
    test("return error on double fraction", () => {
      let input = "3/2/3";
      assert.equal(
        convertHandler.returnFrac(input),
        "invalid number",
        "error: the input is a a double fraction"
      );
    });
    // convertHandler should correctly default to a numerical input of 1 when no numerical input is provided
    test("read fractional input", () => {
      let input = "L";
      assert.equal(convertHandler.getNum(input), "1");
    });
    // convertHandler should correctly read each valid input unit
    test("read valid unit", () => {
      let input = [
        "gal",
        "l",
        "lbs",
        "kg",
        "mi",
        "km",
        "GAL",
        "L",
        "LBS",
        "KG",
        "MI",
      ];

      let output = [
        "gal",
        "L",
        "lbs",
        "kg",
        "mi",
        "km",
        "gal",
        "L",
        "lbs",
        "kg",
        "mi",
      ];

      // for each of these inputs get corresponding output
      // 1. loop through the input with a for loop
      // 2. assert that each input produces the corresponding output
      input.forEach((input, index) => {
        assert.equal(convertHandler.getUnit(input), output[index]);
      });
    });

    // convertHandler should correctly return an error for an invalid input unit
    test("read invalid unit", () => {
      let input = "32cm";
      assert.equal(convertHandler.getUnit(input), "invalid unit");
    });
    // convertHandler should return the correct return unit for each valid input unit
    test("read return unit", () => {
      let input = [
        "gal",
        "l",
        "lbs",
        "kg",
        "mi",
        "km",
        "GAL",
        "L",
        "LBS",
        "KG",
        "MI",
      ];

      let output = [
        "L",
        "gal",
        "kg",
        "lbs",
        "km",
        "mi",
        "L",
        "gal",
        "kg",
        "lbs",
        "km",
        "mi",
      ];

      input.forEach((input, index) => {
        assert.equal(convertHandler.getReturnUnit(input), output[index]);
      });
    });
    // convertHandler should correctly return the spelled-out string unit for each valid input unit
    test("spell out unit", () => {
      let input = [
        "gal",
        "l",
        "lbs",
        "kg",
        "mi",
        "km",
        "GAL",
        "L",
        "LBS",
        "KG",
        "MI",
      ];

      let output = [
        "gallons",
        "liters",
        "pounds",
        "kilograms",
        "miles",
        "kilometers",
        "gallons",
        "liters",
        "pounds",
        "kilograms",
        "miles",
        "kilometers",
      ];

      input.forEach((input, index) => {
        assert.equal(convertHandler.spellOutUnit(input), output[index]);
      });
    });
    // convertHandler should correctly convert gal to L.
    test("convert gal to L", () => {
      let num = 10;
      let unit = "gal";
      assert.equal(convertHandler.convert(num, unit), "37.85410");
    });
    // convertHandler should correctly convert L to gal.
    test("convert L to gal", () => {
      let num = 10;
      let unit = "l";
      assert.equal(convertHandler.convert(num, unit), "2.64172");
    });
    // convertHandler should correctly convert mi to km
    test("convert mi to km", () => {
      let num = 10;
      let unit = "mi";
      assert.equal(convertHandler.convert(num, unit), "16.0934");
    });
    // convertHandler should correctly convert km to mi
    test("convert km to mi", () => {
      let num = 10;
      let unit = "km";
      assert.equal(convertHandler.convert(num, unit), " 6.21373");
    });
    // convertHandler should correctly convert lbs to kg.
    test("convert lbs to kg", () => {
      let num = 10;
      let unit = "lbs";
      assert.equal(convertHandler.convert(num, unit), "4.53592");
    });
    // convertHandler should correctly convert kg to lbs
    test("convert kg to lbs", () => {
      let num = 10;
      let unit = "kg";
      assert.equal(convertHandler.convert(num, unit), " 22.04624");
    });
  });
});
