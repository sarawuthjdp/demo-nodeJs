const http = require('http')

http.createServer((req,res)=>{
  const myHtml=`
    <h1>Hello World!</h1>
    <p>Test demo node.js</p>
  `
  res.write(myHtml)
  res.end()
}).listen(8080,'localhost',()=>{
  console.log('start server in port 8080')
})