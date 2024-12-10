// Home renovation

let area = {
  livingroom: 200,
  kitchen: 150,
  bathroom: 100,
};
let cost_per_area = {
  per_livingroom: 15,
  per_kitchen: 20,
  per_bathroom: 25,
};

let cost_each_area = {
  livingroom_cost: area.livingroom * cost_per_area.per_livingroom,
  kitchen_cost: area.kitchen * cost_per_area.per_kitchen,
  bathroom_cost: area.bathroom * cost_per_area.per_bathroom,
};
console.log(cost_each_area);
let total_cost =
  cost_each_area.livingroom_cost +
  cost_each_area.kitchen_cost +
  cost_each_area.bathroom_cost;
console.log("The total renovation cost= " + total_cost + "$");
