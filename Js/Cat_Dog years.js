// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

const years = 5;
let catYear = 15
let dogYear = 15

function catAndDogYears(humanYears,catYears,dogYears){
//  if(let i = 5; i >= catAndDogYears.length; i++ ){

//  }
// }

// Solution

const humanYearsCatYearsDogYears = (humanYears) => {
    let catYears = 0;
    let dogYears = 0;
    
    for (let i = 1; i <= humanYears; i++) {
      if (i === 1) {
        catYears += 15;
        dogYears += 15;
      }
      else if (i === 2) {
        catYears += 9;
        dogYears += 9;
      }
      else {
        catYears += 4;
        dogYears += 5;
      }
    }
    return [humanYears,catYears,dogYears];
}

//Another 

var humanYearsCatYearsDogYears = function(humanYears){
    var catYears = 0;
    var dogYears = 0;
    
    if (humanYears === 1) {
      catYears = 15;
      dogYears = 15;
    } else if (humanYears === 2) {
      catYears = 24;
      dogYears = 24;
    } else if (humanYears > 2) {
      catYears = 24 + (humanYears - 2) * 4;
      dogYears = 24 + (humanYears - 2) * 5;
    }
  
    return [humanYears, catYears, dogYears];
}

// Another

var humanYearsCatYearsDogYears = function(humanYears) {
    if(humanYears >= 2) {
      return [humanYears, 24 + (humanYears - 2) * 4, 24 + (humanYears - 2) * 5];
    }
    return [humanYears, 15, 15];
  };

  // Another

  var humanYearsCatYearsDogYears = function(humanYears) {
    let CatYears
    let DogYears
    if(humanYears==1){
      CatYears = 15
      DogYears = 15
    }
    else if(humanYears==2){
      CatYears = 24
      DogYears = 24
    }
    else if(humanYears>2){
      CatYears = 15 + 9 + ((humanYears-2)*4)
      DogYears = 15 + 9 + ((humanYears-2)*5)
    }
    
    return [humanYears,CatYears,DogYears];
  }