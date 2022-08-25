function isPalindrome(word) {
  //Write your algorithm here
  for (let m = 0; m < word.length / 2; m++) {
    const n = word.length - 1 - m;
    if (word[m] !== word[n]) {
      return false;
    }
  }

  return true;
}


/* 
  Add your pseudocode here
  write a function tat retursn true if the word is a palidrome
  if the first and last letters  are the same and if the second letter and the second last letter are the same 
  and so on it should return true else should return false.
*/

/*
  Add written explanation of your solution here
  It should return if the same and false if not.
  iterate from the beginning to the middle when comparing
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));

}

    module.exports = isPalindrome;
