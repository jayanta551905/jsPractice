// const str = "How are you";

// function reverseArray(data) {
//   const dataArray = data.split(" ");
//   const result = dataArray.map((item) => {
//     return item.split("").reverse().join("");
//   });

//   return result.join(" ");
// }

// console.log(reverseArray(str));

const name = "I love Bangladesh";
function reverseName(data) {
  const dataArray = data.split(" ");
  const result = dataArray.reverse();

  return result.join(" ");
}

console.log(reverseName(name));
