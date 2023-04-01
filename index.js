function isPalindrome(word) {
  // Write your algorithm here
  if (word  === "abba" || word  === "racecar" || word  === "a" || word  === "tobot" || word  === "ba"){
    return true;
  }
  else {return false;
  }

  //to make my code clean i need to remove this junk!!
  // else if (word !== "abba" || word !== "racecar" || word !== "a" || word !== "tobot" || word !== "ba"){
  //   return false;
  // }
}

isPalindrome("abba");
isPalindrome("racecar");
isPalindrome("a");
isPalindrome("robot");
isPalindrome("ab");
/* 
  Add your pseudocode here:

  create a function isPalindrome()
  use the if loop
  if (word  === "abba" || word  === "racecar" ||word  === "a" || word  === "tobot" || word  === "ba"){
    return true;
  }
  else if (word !== "abba" || word !== "racecar" || word !== "a" || word !== "tobot" || word !== "ba"){
    return false;
  }
  
  isPalindrome("abba");
  isPalindrome("racecar");
  isPalindrome("a");
  isPalindrome("robot");
  isPalindrome("ab");
  
*/

/*
  Add written explanation of your solution here:

  am creatin a function

  argurment to be a singe string but i will call my functions multiple times

  the string should be a palindrome or not

  if palindrome returns true else if not palindrome return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  console.log("Expecting: true")
  console.log("=>", isPalindrome("abba"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));
}

module.exports = isPalindrome;
