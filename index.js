const http = require('http')

http.createServer((req,res)=>{
  const pathName = req.url;
  if(pathName==='/'||pathName==='/home'){
    res.end(`<h1>Hello homepage!</h1>`)
  }else if(pathName === '/product'){
    res.end(`<h1>Hello product!</h1>`)
  }else{
    res.writeHead(404)
    res.end(`<h1>not found!</h1>`)
  }
}).listen(3000,'localhost',()=>{
  console.log('start server in port 3000')
})