const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req,res)=>{
   if (req.url==='/') {
    res.statusCode=200
    res.setHeader('Content-Type','text/plain')  
    res.end('hello world')
   }else if(req.url==='/user'){
    res.statusCode=200
    res.setHeader('Content-Type','text/plain')  
    res.end('welcome user')
   }else{
    res.statusCode=404
    res.setHeader('Content-Type','text/plain')  
    res.end('page not found')
   }
 })

 server.listen(port,hostname,()=>{
    console.log(`server is connected to port: http://${hostname}:${port}`);
 })

