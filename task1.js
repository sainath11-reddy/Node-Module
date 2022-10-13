// console.log("Hello World");
// const http = require("http");
// const express = require("express");
// // const routes = require("./routes");
// // console.log(routes.someText);
// // const server= http.createServer(routes.handler);
// const app = express();
// const server= http.createServer(app);
// server.listen(3000);

const http = require("http");
const express = require("express");
// const server = http.createServer(app);
// server.listen(3000);
const app = express();
app.use((req,res,next)=>{
    console.log("In the middleware");
    next();
})
app.use((req,res,next)=>{
    console.log("In the second middleware");
    res.send({key1:100});
    
})
app.listen(8080);