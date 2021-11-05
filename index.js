const util = require('./module/mymodule')
const minus = require('./module/mymodule').minus

console.log(util.getCurrentTime())
console.log(util.add(10,2))
console.log(minus(5,2))
