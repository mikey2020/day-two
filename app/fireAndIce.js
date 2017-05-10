const request = require('request');

const baseUrl = "http://www.anapioficeandfire.com/api/";

const prompt = require('prompt');

console.log("Welcome to Fire and Ice CLI Wiki ");

console.log("You can search 'all books => list of all books','characters => list of all characters'");
console.log("Input your choice below ==>");

prompt.get("query",function(err,results){
	if(results.query === "all books"){
		listAllBooks();
	}

	else if(results.query === "characters"){
		etAllCharacters();
	}

	else if(results.query === "houses"){
		
	}

	else{
		console.log(results.query + " is not a valid search ");
	}

})

let listAllBooks =  () =>{
	request(baseUrl + "books",function(err,res,body){
		if(err){
			console.log(err);
		}
		let data = JSON.parse(res.body);
		//console.log(data);
		for(let count in data){
			console.log(data[count].name);//
		}
	});
};

let getAllCharacters =  () =>{
	request(baseUrl + "characters",function(err,res,body){
		console.log(body);
});
};
