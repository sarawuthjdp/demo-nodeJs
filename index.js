const http = require('http')
const fs = require('fs')
http.createServer((req,res)=>{
  const pathName = req.url;
  if(pathName==='/'||pathName==='/home'){
    res.end(fs.readFileSync(`${__dirname}/templates/index.html`,'utf-8'))
  }else if(pathName === '/product'){
    res.end(fs.readFileSync(`${__dirname}/template/product1.html`,'utf-8'))
  }else{
    res.writeHead(404)
    res.end(`<h1>not found!</h1>`)
  }
}).listen(3000,'localhost',()=>{
  console.log('start server in port 3000')
})