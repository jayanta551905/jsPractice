// function countVowels(string) {
//   // Create a list of vowels
//   const vowels = ["a", "e", "i", "o", "u"];

//   // Initialize a counter
//   let count = 0;

//   // Iterate over each character in the string
//   for (const char of string) {
//     // Convert the character to lowercase
//     const lowercaseChar = char.toLowerCase();

//     // Check if the lowercase character is a vowel
//     if (vowels.includes(lowercaseChar)) {
//       // Increment the counter
//       count++;
//     }
//   }

//   // Return the number of vowels
//   return count;
// }


// const string = "Hello World!";
// const numberOfVowels = countVowels(string);

// console.log(numberOfVowels); // 3


function countVowels(string){
    let vowel = ["a", "e", "i", "o", "u"];
    let count = 0;

    for(let char of string){
        let lowerCase = char.toLowerCase();
        if(vowel.includes(lowerCase)){
            count++;
        }
    }
    return count;
}

const numberOfVowels = countVowels("Jayanta Mondal");
console.log(`Number of vowels: ${numberOfVowels}`);

