const request = require('request');

const baseUrl = "http://www.anapioficeandfire.com/api/";

const prompt = require('prompt');

console.log("Welcome to Fire and Ice CLI Wiki ");

console.log("You can search 'list books => list of all books','list houses => list of all houses'");
console.log("Input your choice below ==>");

/*prompt.get("query",function(err,results){
	if(results.query === "list books"){
		listAllBooks();
	}

	else if(results.query === "list houses"){
		listAllHouses();
	}

	else{
		console.log(results.query + " is not a valid search ");
	}

})*/

request("http://www.anapioficeandfire.co/api/books",function(err,res,body){
	if(err){
		console.log(err);
	} 
	console.log(body);
});

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

let listAllHouses =  () =>{
	let count = 1;
	while(count < 10){
		count = count.toString();
		request(baseUrl + "houses" + count,function(err,res,body){
			if(err) throw err;
			//console.log(body);
			let data = JSON.parse(body);
			console.log(data);
			/*for(let counter in data){
				console.log(data[counter].name);
			}*/
		});

		count++;
	}
	
};



