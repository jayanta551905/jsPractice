function sumCalculation (...numbers) {
    let sum = 0;
    for (let i of numbers) {
        sum = sum + i;
    }
    console.log(sum);

}

sumCalculation(1,2,3);
