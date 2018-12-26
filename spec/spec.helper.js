const  fs = require('fs');
const  chai = require('chai');
global.expect = chai.expect;

let  rPS = fs.readFileSync('./src/js/rps.js');
eval( rPS + `\nexports.RPS = RPS;`)

// rPS = rockPaperScissors
// RPS = RockPaperScissors