let bill = 430;

let tip = bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);

console.log(`
The Bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}
`)