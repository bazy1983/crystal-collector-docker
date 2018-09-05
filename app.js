const express = require("express");
const app = express();

app.use(express.static("public"));

// app.get("/",(req, res)=>{
//     res.sendFile("./public/index.html")
// })

let port = 3000;

app.listen(port, ()=>{
    console.log(`app is working on port ${port}`)
})