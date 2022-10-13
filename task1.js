console.log("Hello World");
const http = require("http");
const fs =require("fs");
const server= http.createServer((req,res)=>{
    const url=req.url;
    const method = req.method;
   if(url==='/'){
    const val=fs.readFileSync("message.txt");
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body>');
    res.write(`<p>${val}</p>`)
    res.write('<form action="/message" method="POST">')
    res.write('<input type="text" name="message"><input type="submit" value="Submit"></form></body>')
    res.write('</html>');
    return res.end();
   }
   if(url ==='/message' && method === "POST"){
        const body=[];
        req.on('data',(chunk)=>{body.push(chunk); console.log(chunk);})
        return req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split("=")[1]
            fs.writeFile("message.txt",message,(err)=>{
            res.statusCode=302;
            res.setHeader("Location","/");
            res.end();
            });
            
        });
        
       

   }



    // res.setHeader('Content-Type','text/html');
    // res.write('<html>');
    // res.write('<head><title>Enter Message</title></head>');
    // res.write( '<body><h1>Welcome home</h1></body>');
    // // if(req.url=='/about')
    // // res.write( '<body><h1>Welcome to About Us page</h1></body>')
    // // if(req.url=='/node')
    // // res.write('<body><h1>Welcome to my Node Js project</h1></body>');
    // res.write('</html>');
    // res.end();
});
server.listen(4000);

