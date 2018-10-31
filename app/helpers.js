var helpers = {}

// Returns the number if positive else it returns false
helpers.numberIsPositive = function (number) {
    return typeof number == 'number' && number > 0 ? number : false;
}

module.exports = helpers;