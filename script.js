
// exercise 1 - 100-Addition.md
console.log('exercise 1 - 100-Addition.md');

function add(num1,num2) {
  return num1 + num2;
}

console.log(add(4,3));

// exercise 2 - 110-Conditional.md
console.log('exercise 2 - 110-Conditional.md');

function compare(num1,num2) {
  if (num1 > num2) {
    return "The first # was bigger!";
  }
  else if (num1<num2) {
    return "The second # was bigger!";
  }
  else {
    return "The #'s are the same!";
  }
}

console.log(compare(5,4));

// exercise 3 - 120-Arrays.md
console.log('exercise 3 - 120-Arrays.md');

var myArray = [];
function myFunction(anArray) {
  var answer = anArray[0] + anArray[3];
  return answer;
}
console.log(myFunction([1,2,3,4,5]));
console.log(myFunction([6,7,8,9,10,11,12]));

// exercise 4 - 130-LoopsArraysAndConcatenation

console.log('exercise 4 - 130-LoopsArraysAndConcatenation.md');

function joiner(words, indexNum) {
  var arrayOfWords = [];
    for (i = indexNum ; i < words.length; i ++) {
      arrayOfWords.push(words[i]);
    }
  var sentence = arrayOfWords.join(' ');
  return sentence;
}

console.log(joiner(["ASDF", "BLAH", "Oh!", "Hi", "There!"], 3)); // Should Log Hi There!
console.log(joiner(["ASDF", "BLAH", "Oh!", "Hi", "There!"], 2)); // Should log Oh! Hi There!

// exercise 5 - 140-LoopsAndTwoDimensionalArray
console.log('exercise 5');

function yourFunction(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'object')
      sum += yourFunction(arr[i]);
    else
      sum += arr[i];
  }
  return sum;
}

console.log(yourFunction([ [1, 2], [3, 4, 5] ])); // should log 15
console.log(yourFunction([ [1, 2], [3, 4, 5], [6] ])); //should log 21

// exercise 6 - 150-LoopsArrayOfObjects

// exercise 7 - 160-selector.jQuery.md

// exercise 8 - 170-onClick.jQuery.md

// exercise 9 - 180-appendList.jQuery.md

// exercise 10 - 190-appendOnClick.jQuery.md
