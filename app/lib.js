// Dependencies 
var helpers = require('./helpers.js');

var lib = {};

// Functions to calculate area of different type of 2d shapes.
// Should return -1 if parameters are invalid
lib.triangleArea = function (base, height) {
    var base = helpers.numberIsPositive(base);
    var height = helpers.numberIsPositive(height);

    return (base && height) ? (base * height) / 2 : -1;
}

lib.rectangleArea = function (length, width) {
    var length = helpers.numberIsPositive(length);
    var width = helpers.numberIsPositive(width);

    return (length && width) ? length * width : -1;
}

lib.trapezoidArea = function (baseA, baseB, height) {
    var baseA = helpers.numberIsPositive(baseA);
    var baseB = helpers.numberIsPositive(baseB);
    var height = helpers.numberIsPositive(height);

    return (baseA && baseB && height) ? (baseA + baseB) * height * 0.5 : -1;
}

lib.circleArea = function (radius) {
    var radius = helpers.numberIsPositive(radius);
    return (radius) ? Number.parseFloat((Math.PI * Math.pow(radius, 2)).toFixed(2)) : -1;
}

module.exports = lib;



