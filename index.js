const express = require('express')
const app = express()

app.use((req,res)=>{
  res.send('<h1>Hello Express.js</h1>')
}).listen(8080,()=>{
  console.log('Start server at port 8080.')
})