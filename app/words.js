module.exports = {

  words: (sentence) => {
    //sentence = sentence.replace(/ {2}/g, ' ').replace(/\n/g, ' ').replace(/\t/g, ' ');


    let words = sentence.split(' ' || '\n');// splits the string into an array

    let results = {};

    for (let count = 0; count < words.length; count++) {//loops through the array

      //if (words[count] in res===true){ 

        if (results[words[count]] >= 1) {

          results[words[count]] += 1 ;

        } else { 

          results[words[count]] = 1;

        }

      } //else { 

        //results[words[count]] = 1;

      //}

    //}

    return results;
  }
}