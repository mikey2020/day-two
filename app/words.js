module.exports = {

  //words function
  words: (sentence) => {
    
    //replace all tabs(\t), newlines(\n) , multiple spaces({2}) with one space
    sentence = sentence.replace(/ {2}/g, ' ').replace(/\n/g, ' ').replace(/\t/g, ' ');


    // splits the string into an array
    let words = sentence.split(' ');

    //initialize empty object
    let results = {};
    
    //loops through the array
    for (let count = 0; count < words.length; count++) {

        //checks if value exists and adds one ,else sets value to 1 so 
        if (results[words[count]] >= 1) {

          results[words[count]] += 1 ;

        } 

        else { 

          results[words[count]] = 1;

        }

      } 

    return results;
  }
}