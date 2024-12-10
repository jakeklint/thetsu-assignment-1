// Restaurant Bill Calculator

let burger = 8.5;
let fries = 3.25;
let soda = 2.0;
let dessert = 5.75;
let total_bill = burger + fries + soda + dessert;
console.log("Total Bill= " + total_bill + "$");

let serviceCharge_rate = 0.1;
let serviceCharge_amount = total_bill * serviceCharge_rate;
console.log("Service Charge= " + serviceCharge_amount + "$");

let tax_rate = 0.07;
let tax_amount = serviceCharge_amount * tax_rate;
console.log("Tax Amount= " + tax_amount + "$");
let final_bill = total_bill + serviceCharge_amount + tax_amount;

let numOfPeople = 4;
let amountPerPerson = (final_bill / numOfPeople).toFixed(2);
console.log("The amount per person= " + amountPerPerson + "$");
