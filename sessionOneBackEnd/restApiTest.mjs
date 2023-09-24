import express from "express";


const PORT = 8000;
const app = express();


// app.get(
//   "/apitupulu",
//   (req, res, next) => {
//     res.send("Hi there, this is expressjs API");
//     next();
//   });

//   app.get ("/brudubu",(req,res)=>{

//         res.send("The Next response");

//   });



app.get(
      "/apitupullllu",
      (req, res, next) => {
        console.log("Hi there, this is expressjs API");
        next();
      },(req,res)=>{
    
        res.send("The Next response");

  });
    
app.get("/ab+cd", (req,res)=>{

  res.send("ab+cd, realy worked huh");

});

app.get("/c(ab)+cd", (req,res)=>{

  res.send("ab+cd, realy worked huh");

});

app.get("/abz*cd", (req,res)=>{

  res.send("ab+cd, realy worked huh");

});

app.post("/posting",(req,res)=>{

  const requestBody = req.body;

  res.json({message : "data received succesfully", data : requestBody});


})


// app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`server started on port : ${PORT}`);
});

// const http = require ('http');
// const PORT = 8000;

// const server = http.createServer (async (req,res)=> {

//     if (req.url === "/api" && req.method === "GET")
//     {
//         res.writeHead(200,{"Content-Type" : "application/json"});

//         res.write("Hi there, This is a Vanilla Node.js API");

//         res.end();
//     }
//     else {

//         res.writeHead (404, {"Content-Type ": "application/json"});
//         res.end(JSON.stringify({message : "Route not Found"}))
//     }
// })

// server.listen(PORT,()=>{

//     console.log(`server started on port : ${PORT}`)
// });
