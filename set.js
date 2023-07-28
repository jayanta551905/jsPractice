let countries = new Set();


countries.add('Bangladesh');
countries.add('India');
countries.add('Nepal');
countries.add('Bhutan');
countries.add('Bangladesh'); // set does not count duplicate value
countries.add('Sreelanka');
countries.add('China');


// countries.clear();
// countries.delete('India');

// console.log(countries);

// console.log(countries.size);

// console.log(countries.values());

if(countries.has('Bangladesh')){
    console.log("Country found");
}
else{
    console.log('Country not found');
}