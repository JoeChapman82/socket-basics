var moment = require('moment');
var now = moment();

// format outputs a string, not a number
// valueOf outputs a number

console.log(now.format());
// X for unix timestamp(seconds) javascript stamps use milliseconds
console.log(now.format('X'));
// x for milliseconds since 1 jan 1970
console.log(now.valueOf('x'));

var timestamp = (now.valueOf('x'));
var timestampMoment = moment.utc(timestamp);

console.log(timestampMoment.local().format('h:mma'));



// now.subtract(1, 'year');
// console.log(now.format());

// console.log(now.format('MMM Do YYYY, h:mma'));
// eg Jan 1st 2017, time
