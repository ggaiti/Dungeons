class Person {
  constructor(private firstName: string, private lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getName(): string {
    return `I am ${this.firstName} ${this.lastName}.`;
  }
}
export class Employee extends Person {
  constructor(firstName: string, lastName: string, private jobTitle: string) {
    // Invoking the constructor of the Person class
    super(firstName, lastName);
  }
  displayInfo(): string {
    return this.jobTitle;
  }
}

// interface Example {
//     Name_should: string;
//     Number_should: number;
// }

export class Class_Example {
  Name_should: string;
  Number_should: number;
  constructor(Name_should: string, Number_should: number) {
    this.Name_should = Name_should;
    this.Number_should = Number_should;
  }
}

class vehicle {
  Company_Name: string;
  Number: number;

  constructor(Company_Name: string, Number: number) {
    this.Company_Name = Company_Name;
    this.Number = Number;
  }
}

export class car extends vehicle {
    wheel: number;
    fuel: string;
    constructor(name: string, Number: number,
        wheel: number, fuel: string) {
        super(name, Number);
        this.wheel = wheel;
        this.fuel = fuel;
    }
}


