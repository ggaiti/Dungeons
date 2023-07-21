const car = {
  color: "blue",
  year: 1990,
  model: "toyota",
};

// car.color = 3;

const carInfo = (car) => {
  console.log(car);
};
// carInfo(car);

const carYear = (year) => {
  console.log(year);
};
// carYear();

const carInfo2 = (year, model) => {
  console.log(`the year of the car is ${year} and the model is ${model}`);
};
carInfo2(car.year);
