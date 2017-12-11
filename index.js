var express = require("express");
var request = require("request");
var bodyparser = require("body-parser");


var app =express();
app.use(bodyparser.urlencoded({extended: true}));

var webhook = "https://discordapp.com/api/webhooks/389547295114526722/UvKJlBkhJRpDRaJELEoUW5doc0RPQSr4cVeCEvewnpCZ-t01vsjU2WkLCNwStnlzhN_o";

app.get("/",(req,res,next)=>{
	
});



app.post("/webhook",(req,res)=>{
	request({
		method:"POST",
		url:webhook,
		json:{
			"content":req.body.msg,
			"username":"Piggy"
		}
	});

	res.redirect('/');
})



app.listen(80,() =>{
	console.log("Server started");

})
