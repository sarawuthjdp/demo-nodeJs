const http = require('http')

http.createServer((req,res)=>{
  const myHtml=`
    <h1>Hello World!</h1>
    <p style="color:green">Test demo node.js</p>
  `
  res.write(myHtml)
  res.end()
}).listen(8080,'localhost',()=>{
  console.log('start server in port 8080')
})