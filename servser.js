//install: node js
//install web server package: express >npm install express
var express = require("express");
var server = express();

//web root
server.use(express.static(__dirname+"/AgencyProject"));


server.get("/profolio", (req,res)=>{       
    //DB    
        res.send("Profolio");  
})

var DB = require("nedb-promises"); 
var Profolio = DB.create(__dirname+"/profolio.db");
Profolio.insert({modal: "#portfolioModal1", imgSrc:"roundicons.png", heading:"Round Icons", text:"Graphic Design"})

server.listen(80, ()=>{
    console.log("Server is running at port 80.");
})
