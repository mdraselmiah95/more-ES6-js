const numbers = [4, 6, 2, 9, 3];


/* function doubleOld(number) {
    return number * 2;
}; */

const doubleIt = num => num * 3;

const output2 = [];
for (const number of numbers) {
    // const result = number * 2;
    const result = doubleIt(number);
    output2.push(result);
}

// console.log(output2);

//1 loop through each element 
//2 for each element call the provided function
//3 result for each element will be stored in an array


// const output = numbers.map(doubleIt);
// const output = numbers.map(num => num * 4);
const output = numbers.map(x => x * 5);
console.log(output);

const squares = numbers.map(x => x * x);
console.log(squares);