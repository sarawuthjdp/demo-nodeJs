const express = require('express')
const app = express()

app.get(`/`,(req,res)=>{
  res.send('<h1>Hello Express.js</h1>')
})

app.get(`/product`,(req,res)=>{
  res.send('<h1>Hello product</h1>')
})

app.listen(8080,()=>{
  console.log('Start server at port 8080.')
})
