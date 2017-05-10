const request = require('request');

const baseUrl = "http://swapi.co/api/";

const prompt = require('prompt');

console.log("Welcome to Star Wars CLI wiki \n You can search for 'people','films'");
prompt.get(("search"),function (err,answers) {
  	request(baseUrl + answers.search, function(error, response, body) {
  		if(error) throw error;
  		if(response.headers["content-type"] === "application/json"){
  			console.log(body);
  		}
  		else{
  			console.log("resource not available");
  		}
  		
	});  
});

