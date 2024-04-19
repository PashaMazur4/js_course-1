const name = 'Peter';
const deposit = 12000;
const houseCost = 13500;
const period = 24;
const yearRate = 0.07;

let withrawed = deposit * (1 + yearRate/12) ** 24;

if (houseCost < withrawed) {
    console.log(`${name} earned ${withrawed} and he can buy the house. Balance is ${withrawed - houseCost}`);
} else {
    console.log(`${name} earned ${withrawed} and he can't buy the house.`);
}