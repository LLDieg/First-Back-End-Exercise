console.log(process.argv.slice(2));

let addition = process.argv.slice(2);

console.log(addition, "test1");

console.log(addition[0]);

switch (addition[0]) {
  case "sum":
    console.log(
      parseInt(addition[1]) +
        parseInt(addition[2]) +
        parseInt(addition[3]) +
        parseInt(addition[4])
    );
    break;
  case "average":
    console.log(
      (parseInt(addition[1]) +
        parseInt(addition[2]) +
        parseInt(addition[3]) +
        parseInt(addition[4])) /
        (addition.length - 1)
    );
    break;
  default:
    console.log(
      'I cannot calculate that, please type either "sum" (to calculate the sum) or "avg" (To calculate the Average)'
    );
    break;


}

let sum =0 

for (let i=1; 1< addition.length; i++){
    let num= parseInt(addition[i]);
    if(!isNaN(num)) {
        sum += num;
    } else {
        console.log("Sorry, the argument 'hello' is not a number, please try again")
        break;
    }
    }

