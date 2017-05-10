module.exports = {

  words: (word) => {
    //let list = string.replace(/ {2}/g, ' ').replace(/\n/g, ' ').replace(/\t/g, ' ');


    let array = word.split(' ');// splits the string into an array

    let results = {};

    for (let count = 0; count < array.length; count++) {//loops through the array

      if (array[i] in res===true){ 

        if (res[array[i]] >= 1) {

          res[array[i]]++;

        } else { 

          res[array[i]] = 1;

        }

      } else { 

        res[array[i]] = 1;

      }

    }

    return res;
  }
}