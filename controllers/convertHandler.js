function ConvertHandler() {
  // function to check for division
  this.checkDiv = (input) => {
    const splitStr = input.split("");
    const splitDiv = input.split("/");
    const divCount = splitStr.filter((element) => element === "/").length;
    let num;
    if (!input.includes("/")) {
      return;
    } else {
      if (divCount === 1) {
        if (splitStr.includes("/")) {
          let numsBefore = "";
          let numsAfter = "";
          numsBefore += splitDiv[0];
          const charsAfter = splitDiv[1];
          charsAfter.split("").filter((element) => {
            if (!isNaN(element) || element === ".") {
              numsAfter += element;
            }
          });
          num = numsBefore / numsAfter;
          return num;
        }
      } else {
        return "invalid number";
      }
    }
  };

  this.returnFrac = (input) => {
    const splitStr = input.split("");
    const splitDiv = input.split("/");
    const divCount = splitStr.filter((element) => element === "/").length;
    let num;
    if (!input.includes("/")) {
      return;
    } else {
      if (divCount === 1) {
        if (splitStr.includes("/")) {
          let numsBefore = "";
          let numsAfter = "";
          numsBefore += splitDiv[0];
          const charsAfter = splitDiv[1];
          charsAfter.split("").filter((element) => {
            if (!isNaN(element) || element === ".") {
              numsAfter += element;
            }
          });
          num = numsBefore / numsAfter;
          return `${numsBefore} / ${numsAfter}`;
        }
      } else {
        return "invalid number";
      }
    }
  };

  this.getNum = (input) => {
    // to get number split the string and return only the number
    //Split the string
    let num = "";
    const validUnits = ["gal", "l", "lbs", "kg", "mi", "km"];
    if (validUnits.includes(input.toLocaleLowerCase())) {
      num = 1;
    } else {
      const splitStr = input.split("");
      // Loop through the returned array
      splitStr.forEach((element, index) => {
        // If the current character is a number, then append it to a new string
        if ((!isNaN(element) && element.trim() !== "") || element === ".") {
          num += element;
        }
      });
    }

    return num;
  };

  this.getUnit = (input) => {
    const validUnits = ["gal", "l", "lbs", "kg", "mi", "km"];
    const splitStr = input.split("");
    let unit = "";
    splitStr.forEach((element, index) => {
      // If the current character is a number, then append it to a new string
      if (isNaN(element) && element !== "." && element !== "/") {
        unit += element;
      }
    });
    let lowercaseUnit = unit.toLocaleLowerCase();
    if (lowercaseUnit === "l") {
      unit = "L";
      return unit;
    }
    if (validUnits.includes(lowercaseUnit)) {
      console.log("valid unit");
      return lowercaseUnit;
    } else {
      return "invalid unit";
    }
  };

  this.getReturnUnit = (initUnit) => {
    let unit = initUnit.toLowerCase();
    let result;
    switch (unit) {
      case "km":
        result = "mi";
        break;
      case "mi":
        result = "km";
        break;
      case "kg":
        result = "lbs";
        break;
      case "lbs":
        result = "kg";
        break;
      case "gal":
        result = "L";
        break;
      case "l":
        result = "gal";
        break;
      default:
        result = "invalid unit";
    }
    return result;
  };

  this.spellOutUnit = (unit) => {
    let fullUnit = unit.toLowerCase();
    let result;
    switch (fullUnit) {
      case "km":
        result = "kilometers";
        break;
      case "mi":
        result = "miles";
        break;
      case "kg":
        result = "kilograms";
        break;
      case "lbs":
        result = "pounds";
        break;
      case "gal":
        result = "gallons";
        break;
      case "l":
        result = "liters";
        break;
      default:
        result = "invalid unit";
    }
    return result;
  };

  this.convert = (initNum, initUnit) => {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let unit = initUnit.toLowerCase();
    let result;

    switch (unit) {
      case "mi":
        result = initNum * miToKm;
        break;
      case "km":
        result = initNum / miToKm;
        break;
      case "gal":
        result = initNum * galToL;
        break;
      case "l":
        result = initNum / galToL;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
    }
    return parseFloat(result.toFixed(5));
  };

  this.getString = (initNum, initUnit, returnNum, returnUnit) => {
    initUnit = this.spellOutUnit(initUnit);
    returnUnit = this.spellOutUnit(returnUnit);
    console.log(returnUnit);
    const str = `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`;
    return str;
  };
}

module.exports = ConvertHandler;
