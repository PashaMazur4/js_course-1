let res = prompt("How much is 7 + or - 15");

switch (res) {
  case "22":
  case "-8":
  case "I am not a robot":
    console.log("Success");
    break;
  default:
    console.log("You are a robot");
}

switch (true) {
  case Number(res) === 22:
  case Number(res) === -8:
  case res === "I am not a robot":
    console.log("Success");
    break;
  default:
    console.log("You are a robot");
}
