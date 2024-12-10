// fuel-trip

let distance = 300;
let efficiency = 25;
let cost_per_gallon = 3.75;

let fuel_needed = distance / efficiency;
console.log("Fuel Needed= " + fuel_needed + "gal");
let total_cost = fuel_needed * cost_per_gallon;
console.log("Total cost of the trip= " + total_cost + "$");
