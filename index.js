const fs = require('fs')

const data = fs.readFileSync('./myFile/input.txt','utf-8')
console.log(data)

const outputText = `${data}\nทำไรวัยรุ่น`
fs.writeFileSync('./myFile/input.txt',outputText)