// Display summation of all nested arrays

const NestedArrays = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

let summation = 0;

for(let i = 0; i < NestedArrays.length; i++){
    for(let j=0; j < NestedArrays[i].length; j++){
        summation += NestedArrays[i][j];
    }
}

console.log("Nested Arrays; ", NestedArrays);
console.log("Summation:", summation);