let myMap = new Map();


myMap.set('key1', 'Jhalokati')
myMap.set('key2', 'Dhaka')
myMap.set('key3', 'Barisal')
myMap.set('key4', 'Jessore')

myMap.set('key5', 'Dhaka');


// console.log(myMap.keys());

// myMap.delete('key1');

// myMap.clear();


// for(let myValues of myMap.values()){
//     console.log(myValues)
// }



if(myMap.has('key')){
    console.log("Key found");
}
else{
    console.log("Key not found");
}