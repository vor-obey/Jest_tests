const _ = require('lodash')
const sum = (a, b) => a + b;

const chunk = (arr, num) => _.chunk(arr, num)

module.exports = { sum, chunk }