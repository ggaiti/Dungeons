interface intanceInfo {
  name: string;
  message: string;
  class: string;
  description?: string;
}

class Instance {
  info: intanceInfo;
  constructor(info: intanceInfo) {
    this.info = info;
  }
  getInfo() {
    return this.info;
  }
  getClass() {
    return this.info.class;
  }
}


class Person extends Instance {
  age: number;
  constructor(person: person) {
    const info: intanceInfo = {
      name: person.name,
      message: person.message,
      class: person.class,
    };
    super(info);

    this.age = person.age;
  }
}


// Types of items
  // consumables
  // Equipables
  // Quest items

class Item extends Instance {
  stats?: stats;
  constructor(item: item) {
    const info: intanceInfo = {
      name: item.name,
      message: item.message,
      class: item.class,
      description: item.description,
    };
    super(info);
    this.stats = item.stats;
  }
}

class Consumables extends Item {
  constructor(item: item) {
    super(item)
  }

  useItem(){
    console.log("Using "+ this.getInfo().name)
  }

}

interface person {
  name: string;
  message: string;
  age: number;
  class: string;
}

interface stats {
  HP?: number;
  MP?: number;
  STR?: number;
  DEX?: number;
  INT?: number;
  DEF?: number;
  LCK?: number;
  ELE?: number;
}

interface item {
  name: string;
  description: string;
  message: string;
  stats: stats;
  class: string;
}

const alex: person = {
  class: "Person",
  name: "alex",
  message: "Talking to alex",
  age: 23,
};

const potion: item = {
  class: "Consumables",
  name: "Potion",
  message: "Place Holder Text",
  description: "Red small vile filled with liquid",
  stats: {
    HP: 20,
  },
};

function generateObj(obj: any): object {
  switch (obj.class) {
    case "Person":
      return new Person(obj);
    case "Consumables":
      return new Consumables(obj);

    default:
      break;
  }
  return {
    error: {
      message:
        "\u001b[33m Could not generate object please make sure your object has a class property associated with it! If the object has no class associated with it\u001b[31m DO NOT\u001b[33m use the generateObj() funtion. \u001b[0m",
    },
  };
}

const myObj: any = generateObj(potion);

if (myObj.error) {
  console.error(myObj.error.message);
} else {
  console.log("Object created using the " + myObj.getClass() + " class");
  console.log(myObj);
  myObj.useItem()
}
