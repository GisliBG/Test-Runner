/*
 * Unit Tests
 *
 */

// Dependencies
var lib = require('./../app/lib.js');
var helpers = require('./../app/helpers.js');
var assert = require('assert');

// Holder for Tests
var unit = {};

unit['helpers.numberIsPositive should return false if number is negative'] = function (done) {
    var val = helpers.numberIsPositive(-2);
    assert.equal(val, false);
    done();
}

unit['helpers.numberIsPositive should return the number back if its positive'] = function (done) {
    var val = helpers.numberIsPositive(4);
    assert.equal(val, 4);
    done();
}

unit['lib.triangleArea should calculate area of triangle'] = function (done) {
    // triangle with base 4 and height 3 should have area of 6
    var val = lib.triangleArea(4, 3);
    assert.equal(typeof (val), 'number');
    assert.equal(val, 6);
    done();
}

unit['lib.triangleArea should return -1 if parameters are invalid'] = function (done) {
    // test zero value
    var val = lib.triangleArea(0, 2);
    assert.equal(typeof (val), 'number');
    assert.equal(val, -1);
    // test negative value
    val = lib.triangleArea(-1, 2);
    assert.equal(typeof (val), 'number');
    assert.equal(val, -1);
    // test zero value
    val = lib.triangleArea(2, 0);
    assert.equal(typeof (val), 'number');
    assert.equal(val, -1);
    // test negative value
    val = lib.triangleArea(2, -2);
    assert.equal(typeof (val), 'number');
    assert.equal(val, -1);
    done();
}

unit['lib.rectangleArea should calculate area of rectangle'] = function (done) {
    // Rectangle with length 4 and width 3 should have an area of 12
    var val = lib.rectangleArea(4, 3);
    assert.equal(typeof (val), 'number');
    assert.equal(val, 12);
    done();
}

unit['lib.rectangleArea should return -1 if parameters are invalid'] = function (done) {
    // test zero value
    var val = lib.rectangleArea(0, 2);
    assert.equal(typeof (val), 'number');
    assert.equal(val, -1);
    // test negative value
    val = lib.rectangleArea(-1, 2);
    assert.equal(typeof (val), 'number');
    assert.equal(val, -1);
    // test zero value
    val = lib.rectangleArea(2, 0);
    assert.equal(typeof (val), 'number');
    assert.equal(val, -1);
    // test negative value
    val = lib.rectangleArea(2, -2);
    assert.equal(typeof (val), 'number');
    assert.equal(val, -1);
    done();
}

unit['lib.trapezoidArea should calculate area of trapezoid '] = function (done) {
    // Trapezoid with base1 as 4 and base2 as 3 and height 5 should have an area of 17.5
    var val = lib.trapezoidArea(4, 3, 5);
    assert.equal(typeof (val), 'number');
    assert.equal(val, 17.5);
    done();
}

unit['lib.trapezoidArea should return -1 if parameters are invalid'] = function (done) {
    // test zero value
    var val = lib.trapezoidArea(0, 2, -3);
    assert.equal(typeof (val), 'number');
    assert.equal(val, -1);
    // test negative value
    val = lib.trapezoidArea(-1, 2, 3);
    assert.equal(typeof (val), 'number');
    assert.equal(val, -1);
    // test zero value
    val = lib.trapezoidArea(2, 0, 4);
    assert.equal(typeof (val), 'number');
    assert.equal(val, -1);
    // test negative value
    val = lib.trapezoidArea(2, -2, 4);
    assert.equal(typeof (val), 'number');
    assert.equal(val, -1);
    // test zero value
    val = lib.trapezoidArea(2, 4, 0);
    assert.equal(typeof (val), 'number');
    assert.equal(val, -1);
    // test negative value
    val = lib.trapezoidArea(2, 2, -4);
    assert.equal(typeof (val), 'number');
    assert.equal(val, -1);
    done();
}

unit['lib.circleArea should calculate area of circle'] = function (done) {
    // Circle with the radius of 5 should have area of about 78.54
    var val = lib.circleArea(5);
    assert.equal(typeof (val), 'number');
    assert.equal(val, 78.54);
    done();
}

unit['lib.circleArea should return -1 if parameter is invalid'] = function (done) {
    var val = lib.circleArea(-10);
    assert.equal(val, -1);
    val = lib.circleArea(0);
    assert.equal(val, -1);
    done();
}

module.exports = unit;