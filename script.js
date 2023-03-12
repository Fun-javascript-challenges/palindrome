function readForward(word){
  let result="";
  for (let i = 0; i < word.length; i++) {
    result+= word[i]
  }
  return result;
  
}
/* Instead of creating readBackwards function, another way to do it is to use the split(), reverse() and join() methods to get 
the reverse value of a word  */
function readBackwards(wordBackwards){
  let result="";
  for (let i = wordBackwards.length - 1; i >= 0; i--) {
    result+= wordBackwards[i]
  }
  return result;
}

/* function equalBoth(stringg, word='', wordBackwards=''){
  let readWordsForward = readForward(word);
  let readWordsBackwards = readBackwards(wordBackwards);
  stringg = readWordsForward === readWordsBackwards;
  return stringg;
} */

function equalBoth(str){
  let readWordsForward = readForward(str);
  let readWordsBackwards = readForward(str).split('').reverse().join('');
  return readWordsForward === readWordsBackwards;
}

function compare(stringg){
  if(equalBoth(stringg)){
  console.log("it is a palindrome")
  }
  else( console.log("It is not a palidrome"))
}
compare("kabghhyak");


