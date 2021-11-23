// Add all state population

let states = [
    {"California": 1200},
    {"Seatle": 2300},
    {"Texas": 3004},
    {"Ohio": 4300},
];

console.log("States:", states);

let populationSum = 0;

for(let i = 0; i < states.length; i++){
  for (let key in states[i]){
    populationSum += states[i][key];
  }
}

console.log("populationSum:", populationSum);