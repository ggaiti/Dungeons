const car = {
  color: "blue",
  year: 1990,
  model: "toyota",
};
car.color = "red"; // can only change to whatever type is set

const carInfo = (car: object) => {
  //must define all parameter types
  console.log(car);
};
// carInfo(car); // must pass called parameters with defined types

const carYear = (year: number) => {
  // all paramenters are required unless its set to optional --- set parameter to optional => (year?: number)
  console.log(year);
};
// carYear(car.year);

const carInfo2 = (year: number, model: string = "unknown") => {
  // function with optional parameters and default settings... (model: string = "unknown")
  console.log(`the year of the car is ${year} and the model is ${model}`);
};
// carInfo2(car.year, car.model);

interface fruit {
  //define structure of objects
  name: String;
  color: String;
  weight: Number;
  seeds: boolean;
}
interface vegetable {
  //define structure of objects
  name: String;
  color: String;
  weight: Number;
  fruit: boolean;
}
const banana: fruit = {
  name: "banana",
  color: "yellow",
  weight: 0.5,
  seeds: true,
};
const apple: fruit = {
  name: "apple",
  color: "red",
  weight: 0.2,
  seeds: true,
};
const orange: fruit = {
  name: "orange",
  color: "orange",
  weight: 0.3,
  seeds: true,
};

const lettuce: vegetable = {
  name: "lettuce",
  color: "green",
  weight: 0.2,
  fruit: false,
};

const fruitBasket = (fruit: fruit) => {
  console.log(fruit);
};
// fruitBasket(lettuce);

interface basket {
  name: string;
  list: fruit[];
  list2: string[];
}

const myBasket: basket = {
  name: "bluebasket",
  list: [banana, apple, orange],
  list2: ["gian"],
};

const basketDetail = (basket: basket) => {
  for (let i = 0; i < basket.list.length; i++) {
    console.log(`${basket.list[i].name} ${basket.list[i].weight}`);
  }
};
// basketDetail(myBasket);

const addition = (number1: number, number2: number): void => {
  console.log("hello");
};
