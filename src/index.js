const uniqueRandomArray = require('unique-random-array');
const lakersNames = require('./lks-2020-roster-names.json');

module.exports = {
    all: lakersNames,
    random: uniqueRandomArray(lakersNames)
};