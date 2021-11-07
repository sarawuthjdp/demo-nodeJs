const http = require('http')
const fs = require('fs')
const url = require('url')
http.createServer((req,res)=>{
  const {pathname,query} = url.parse(req.url,true);
  console.log(pathname)
  if(pathname==='/'||pathname==='/home'){
    res.end(fs.readFileSync(`${__dirname}/templates/index.html`,'utf-8'))
  }else if(pathname === '/product'){
    if(query.id === '1'){
      res.end(fs.readFileSync(`${__dirname}/templates/product1.html`,'utf-8'))
    }else if(query.id === '2'){
      res.end(fs.readFileSync(`${__dirname}/templates/product2.html`,'utf-8'))
    }else if(query.id === '3'){
      res.end(fs.readFileSync(`${__dirname}/templates/product3.html`,'utf-8'))
    }else{
      res.writeHead(404)
      res.end(`<h1>not found!</h1>`)
    }
  }else{
    res.writeHead(404)
    res.end(`<h1>not found!</h1>`)
  }
}).listen(3000,'localhost',()=>{
  console.log('start server in port 3000')
})