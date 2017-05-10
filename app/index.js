const request = require('request');

const baseUrl = "http://www.anapioficeandfire.com/api/";

const prompt = require('prompt');

console.log("Welcome to Fire and Ice CLI Wiki \n");

console.log("Enter '1' => 'list of all fire and ice books'");
console.log("Enter '2' => 'list of 100 characters in fire and ice books'");
console.log("Enter '3' => 'list of 100 houses in fire and ice books'");

console.log("Input your choice below ==>");

prompt.get("query",function(err,results){
  if(results.query === "1"){
    listBooks();
  }

  else if(results.query === "2"){
    listHouses();
  }

  else if(results.query === "3"){
    listCharacters();
  }
  else{
    console.log(results.query + " is not a valid input ");
    console.log("Please read application instructions and try again");
  }

});


let listBooks =  () =>{
  request(baseUrl + "books",function(err,res,body){
    if(err){
      console.log("There was problem during connection");
    }
    let data = JSON.parse(res.body);
    for(let count in data){
      console.log("Book Name : " + data[count].name );
      console.log("ISBN : " + data[count].isbn + "\n")
    }
  });
};

let listHouses =  () =>{
  let count = 1;
  while(count <= 100){
    request(baseUrl + "houses/" + count,function(err,res,body){
      if(err) {
        console.log("There was problem during connection \n please check connection and try again");
      }
      let data = JSON.parse(body);
      if(data.name && data.region){
        console.log("House Name : " + data.name );
        console.log("Region : " + data.region + "\n");
      }
      
    });

    count++;
  }
  
};

let listCharacters = () =>{
  let count = 1;
  while(count <= 100){
    request(baseUrl + "characters/" + count  ,function(err,res,body){
      if(err){
        console.log("There was problem during connection \n please check connection and try again");
      } 
      let data = JSON.parse(body);
      console.log("List of 100 characters : \n")
      if(data.name){
        console.log("Character Name : " + data.name + "\n");
      }   
    });
    
    count++;
  }
  
};



