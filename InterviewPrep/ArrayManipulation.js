// Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

let onex = [9,2,3,4]

function printArray(arr, n =-1){
  if(arr.length > 0){
    if(n < 0){
      return arr[0];
    }else{
      return arr.slice(0,n);
    }
  }else{
    return [];
  }
  

}

console.log(printArray(onex));
console.log(printArray(onex,3));
console.log(printArray([],3));