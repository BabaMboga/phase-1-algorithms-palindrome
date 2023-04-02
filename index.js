function isPalindrome(word) {
  // Write your algorithm here
  
    word = word.toLowerCase();
    let reversedString = "";
    for (let i = word.length - 1; i >= 0; i--) {
    reversedString += word[i];
    }
    return word === reversedString;
    }


/* 
  Add your pseudocode here

  Pseudocode:

1. Define a function isPalindrome that takes a string as an argument.
2. Convert the string to lowercase to ignore case sensitivity.
3. Create a new string variable called reversedString and initialize it as an empty string.
4. Loop through the original string from the end to the beginning, adding each character to the reversedString variable.
5. Compare the original string with the reversedString variable.
6. If they are the same, return true. Otherwise, return false.
*/

/*
  Add written explanation of your solution here
  The task is to create a function that checks whether a given string is a palindrome or not. 
  A palindrome is a word or phrase that reads the same way backward as forwards.
  The function should only accept lowercase strings containing only letters, ignoring spaces or special characters.
   If the input string is a palindrome, the function should return true, otherwise, it should return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true"); 
  console.log("=>",isPalindrome("noon"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: false");
  console.log("=>",isPalindrome("hello"));

  console.log("Expecting: false");
  console.log("=>",isPalindrome("1231"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
