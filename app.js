const price = 80;
const period = 11;
const requestedTime = 40;
let timeNeeded = requestedTime / 5;
let daysNeeded = timeNeeded + 2;
let isPossible = daysNeeded < period;
let cost = price * requestedTime;

console.log (isPossible);
console.log (cost);