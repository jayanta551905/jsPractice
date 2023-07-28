const str = "Java is a programming language";

function sortArray(data) {
  const dataArray = data.split(" ");
  dataArray.sort((a, b) => {
    return a.length - b.length;
  });
  return dataArray.join(" ");
}

console.log(sortArray(str));
