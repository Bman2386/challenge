console.log('hello');
// ROT-N 0-25
// abc -> ROT-1 -> bcd
// abc -> ROT-2 -> cde
// xyz -> ROT-1 -> yza
// adz -> ROT-3 -> dgc
 //
// Given a list, find groups of strings that are rotations of each other.
// Input: ["abbc", "bccd", "cat", "zaab", "yell", "bzs", "catch"]
 
// Output: [ ["abbc", "bccd", "zaab"], ["cat", "bzs"] ]
/*
string - function each letter rotates by %26
if length of string !== next string
*/
function rotationSets(array){
  const answerArray = [];
  i = 0;
  j= 1;
  let setOfMatches = new Set;

  while (i < array.length && array.length > 1 && j < array.length){

    if (array[j] && isRotationMatch(array[i], array[j]) && i !== j){
      setOfMatches.add(array[i]);
      setOfMatches.add(array[j]);
      // answerArray.splice(array[j], 1) //remove array[i] & array[j]
      array.splice(j, 1);
      i = 0;
      j = 1;
    }
    if (j === array.length - 1){
      
      if (setOfMatches.size > 1){
        answerArray.push(Array.from(setOfMatches));
        setOfMatches = new Set;
      }
      j = 1;
      i++;
    } 
   
    j++
    // i++
  }
  return answerArray
}

const isRotationMatch = (string1, string2) => {
  const alphabet = {
    'a': 0,
    'b': 1,
    'c': 2,
    'd': 3,
    'e:': 4,
    'f' : 5,
    'g': 6,
    'h': 7,
    'i': 8,
    'j':9,
    'k':10,
    'l':11,
    'm': 12,
    'n': 13,
    'o': 14,
    'p': 15,
    'q': 16,
    'r': 17,
    's': 18,
    't': 19,
    'u': 20,
    'v': 21,
    'w': 22,
    'x': 23,
    'y': 24,
    'z': 25
    }


  if (string1.length !== string2.length || typeof string1 !== 'string' || typeof string2 !== 'string')  return false;
  if (string1 === string2) return true

  const difference = alphabet[string1[0].toLowerCase()] - alphabet[string2[0].toLowerCase()];
  const splitString = string1.split('');

  splitString.forEach((letter, idx) =>{
    let testLetter = alphabet[letter.toLowerCase()] + difference
    if (alphabet[string2[idx].toLowerCase()] !== testLetter ) return false
  })
  return true
}

console.log(rotationSets(["abbc", "bccd", "cat", "zaab", "yell", "bzs", "catch"]));
console.log(rotationSets(['aaa', 'bbb', 'c']));
console.log(rotationSets([]));
console.log(rotationSets(['eee', 'zzzzzzzzzz', 'BBB', 'd', 'zz', 'AAAA', 'CCC', 'dd']));

                                  
// console.log(isRotationMatch('cat', 'bzs'))
// console.log(isRotationMatch('d', 'zz'))
