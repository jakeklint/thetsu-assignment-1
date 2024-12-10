// Grocery Shopping Budget
let bread = 2.5;
let milk = 3.0;
let eggs = 2.0;
let cheese = 4.5;
let apples = 5.0;
let chicken = 8.0;
let rice = 3.5;
let butter = 2.75;
let juice = 3.25;
let total =
  bread + milk + eggs + cheese + apples + chicken + rice + butter + juice;
console.log("Total cost= " + total + "$");

let discount_rate = 0.1;
let discount_amount = total * discount_rate;
let discount_applied = total - discount_amount;
console.log("Discount Applied= " + discount_applied + "$");

let tax_rate = 0.07;
let tax_amount = discount_applied * tax_rate;
console.log("Tax Amount= " + tax_amount);

let final_cost = (discount_applied + tax_amount).toFixed(2);
console.log("Final cost= " + final_cost + "$");
