// Mark and Jane are very happy after having their first child. Their son loves toys, so Mark wants to buy some. 
// There are a number of different toys lying in front of him, tagged with their prices. Mark has only a certain 
// amount to spend, and he wants to maximize the number of toys he buys with this money. Given a list of toy prices 
// and an amount to spend, determine the maximum number of gifts he can buy.

const prices = [1, 12, 5, 111, 200, 1000, 10];
const k = 50;

function maximumToys(prices, k) {
    // Write your code here
    console.log("Original:", prices);
    
    // THIS IS TOO SLOW!!!
    // for(let i=0, n = prices.length; i < n; i++){
    //     for(let j = 0, nx = prices.length-1; j < nx ; j++){
    //         if(prices[j] > prices[j+1]){
    //             let temp = prices[j];
    //             prices[j] = prices[j+1]
    //             prices[j+1] = temp
    //         }
    //     }
    // }
    
    // THIS IS WAY FASTER SORTING!!
    prices.sort((a, b) => a - b);
    
    let total = k;
    let counter = 0; 
    
    while(0 <= total){
        console.log("total", total);
        
        total -= prices[counter];
        
        counter++;
    }
    console.log("Counter:", counter-1);
    console.log("prices:", prices);
    
    return counter-1
}

console.log("YOU CAN BUY:", maximumToys(prices, k));
