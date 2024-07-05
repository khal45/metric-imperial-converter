"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  let convertHandler = new ConvertHandler();

  app.route("/api/convert").get((req, res) => {
    // get the value in the input field
    const input = req.query.input;
    let checkDiv = convertHandler.checkDiv(input);
    let initNum = convertHandler.getNum(input);
    let initUnit = convertHandler.getUnit(input);
    let finalUnit;
    let finalNum;
    // check if unit is valid
    // if unit is valid check if it has a division sign and run logic if true
    // if it doesn't have a division sign get the number and unit

    let returnUnit;
    let convertFunction;
    let getString;

    if (initUnit === "invalid unit" && checkDiv === "invalid number") {
      res.json("invalid number and unit");
    }

    if (initUnit !== "invalid unit") {
      console.log(`The unit is valid check for div`);
      if (checkDiv) {
        if (checkDiv === "invalid number") {
          res.json("invalid number");
        } else {
          finalUnit = initUnit;
          finalNum = checkDiv;
          returnUnit = convertHandler.getReturnUnit(finalUnit);
          convertFunction = convertHandler.convert(finalNum, finalUnit);
          getString = convertHandler.getString(
            finalNum,
            finalUnit,
            convertFunction,
            returnUnit
          );
          res.json({
            initNum: finalNum,
            initUnit,
            returnNum: convertFunction,
            returnUnit,
            string: getString,
          });
        }
      } else {
        finalUnit = initUnit;
        finalNum = initNum;
        returnUnit = convertHandler.getReturnUnit(finalUnit);
        convertFunction = convertHandler.convert(finalNum, finalUnit);
        getString = convertHandler.getString(
          finalNum,
          finalUnit,
          convertFunction,
          returnUnit
        );
        res.json({
          initNum: finalNum,
          initUnit,
          returnNum: convertFunction,
          returnUnit,
          string: getString,
        });
      }
    } else {
      res.json(`invalid unit`);
    }
  });
};
