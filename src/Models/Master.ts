import prompts from "prompts";
import argv from "yargs";
import { watchTower } from "../Locations/WatchTower/watchTower";
import { helmCaves } from "../Locations/HelmCave/helmCave";
import { helmTown } from "../Locations/HelmTown/helmTown";
import { darkWoods } from "../Locations/DarkWoods/darkwoods";
prompts.override(argv);

interface player {
  name: string;
  location: Function;
}

let PLAYER: player = {
  name: "ALEX",
  location: () => {},
};

interface intanceInfo {
  class: string;
  name: string;
  message: string;
  description?: string;
  preRequisites?: Function;
}

interface choice {
  title: string; //choice text
  description?: string; // dsiplayed next to title
  value: Function;
  hidden?: boolean;
}

interface menu {
  class: string;
  name: string;
  message: string;
  menuOptions: Function;
}

interface map {
  class: string;
  name: string;
  message: string;
  locations: Function;
}

const worldMap: map = {
  class: "Map",
  name: "World Map",
  message: "World Map",
  locations: () => [watchTower],
};

const startMenu: menu = {
  class: "Menu",
  name: "Start Menu",
  message: "Start Menu",
  menuOptions: () => [worldMap],
};

const createInfo = (obj: any): intanceInfo => {
  return {
    class: obj.class,
    name: obj.name,
    message: obj.message,
    description: obj.description,
  };
};

abstract class Instance {
  info: intanceInfo;
  menu: choice[] = [];
  currentObj: object = {};
  constructor(info: intanceInfo, obj: object) {
    this.info = info;
    this.currentObj = obj;
  }
  getInfo() {
    return this.info;
  }
  getClass() {
    return this.info.class;
  }

  updatePlayer() {
    PLAYER.location = () => this.currentObj;
    console.log(this);
    console.log(PLAYER.location());
  }

  loadNpc() {}
  loadItem() {}

  createChoices(array: any[]) {
    console.log("CREATING CHOICES");
    if (!this.menu) this.menu = [];
    array?.forEach((obj) => {
      console.log(obj.preRequisites);
      if (obj.preRequisites !== undefined) {
        console.log("CHECKING PREREQUISITES");
        if (obj.preRequisites()) {
          this.menu?.push({
            title: obj.name,
            value: () => obj,
          });
        }
      } else {
        this.menu?.push({
          title: obj.name,
          value: () => obj,
        });
      }
    });
    // this.menu.push({
    //   title: "Start Menu",
    //   value: () => startMenu,
    // });
    // console.log(this.menu)
  }

  async displayOptions(choices: choice[]) {
    const response = await prompts([
      {
        type: "select",
        name: "choice",
        message: this.info.message,
        choices: choices,
      },
    ]);
    this.updatePlayer();
    console.log("CHOICE");
    generateObj(response.choice());
  }
}

class Menu extends Instance {
  menuOptions: [];
  constructor(menu: menu) {
    const info = createInfo(menu);
    super(info, menu);
    this.menuOptions = menu.menuOptions();
  }

  load() {
    console.log("LOAD MENU");
    if (this.menuOptions) this.createChoices(this.menuOptions);
    this.menu.push({
      title: "Close " + this.info.name,
      value: () => PLAYER.location(),
    });
    if (this.menu === undefined) {
      console.log("Could not generate menu please make sure object is valid: ");
      console.log(this.info);
    } else {
      this.displayOptions(this.menu);
    }
  }
}

// Types of items
// consumables
// Equipables
// Quest items

class Item extends Instance {
  stats?: stats;
  constructor(item: item) {
    const info = createInfo(item);
    super(info, item);
    this.stats = item.stats;
  }
}

class Consumables extends Item {
  constructor(item: item) {
    super(item);
  }

  useItem() {
    console.log("Using " + this.getInfo().name);
  }
}

class Map extends Instance {
  locations: location[];
  constructor(map: map) {
    const info = createInfo(map);
    super(info, map);
    this.locations = map.locations();
  }
  load() {
    console.log("LOAD MAP");
    this.createChoices(this.locations);
    if (this.menu === undefined) {
      console.log("Could not generate menu please make sure object is valid: ");
      console.log(this.info);
    } else {
      this.displayOptions(this.menu);
    }
  }
}

class Location extends Instance {
  area?: area;
  constructor(location: location) {
    const info = createInfo(location);
    super(info, location);
    this.area = location.area();
  }

  load() {
    console.log("LOAD LOCATION");
    generateObj(this.area);
  }
}

class Area extends Instance {
  buildings?: building[];
  connectedAreas?: area[];
  constructor(area: area) {
    const info = createInfo(area);
    super(info, area);
    this.buildings = area.buildings();
    this.connectedAreas = area.connectedAreas();
  }

  load() {
    console.log("LOAD AREA");
    if (this.buildings) this.createChoices(this.buildings);
    if (this.connectedAreas) this.createChoices(this.connectedAreas);
    if (!this.menu) {
      console.log(
        "Could not generate menu please make sure object is valid. " + this.info
      );
      return;
    } else {
      this.displayOptions(this.menu);
    }
  }
}

class Building extends Instance {
  room: room;
  constructor(building: building) {
    const info = createInfo(building);
    super(info, building);
    this.room = building.room();
  }

  load() {
    console.log("LOAD BUILDING");
    generateObj(this.room);
  }
}

class Room extends Instance {
  connectedAreas?: area[];
  connectedRooms?: room[];
  constructor(room: room) {
    const info = createInfo(room);
    super(info, room);
    this.connectedRooms = room.connectedRooms();
    this.connectedAreas = room.connectedAreas();
  }
  load() {
    console.log("LOAD ROOM");
    if (this.connectedRooms) this.createChoices(this.connectedRooms);
    if (this.connectedAreas) this.createChoices(this.connectedAreas);

    if (!this.menu) {
      console.log(
        "Could not generate menu please make sure object is valid. " + this.info
      );
      return;
    } else {
      this.displayOptions(this.menu);
    }
  }
}

export interface location {
  name: string;
  message: string;
  class: string;
  area: Function;
  preRequisites?: Function;
}
export interface area {
  name: string;
  message: string;
  class: string;
  buildings: Function;
  connectedAreas: Function;
}

export interface building {
  name: string;
  message: string;
  class: string;
  room: Function;
}
export interface room {
  name: string;
  message: string;
  class: string;
  // items: Function;
  // npcs: Function;
  connectedAreas: Function;
  connectedRooms: Function;
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
  class: string;
  name: string;
  description: string;
  message: string;
  stats: stats;
}

const potion: item = {
  class: "Consumables",
  name: "Potion",
  message: "Place Holder Text",
  description: "Red small vile filled with liquid",
  stats: {
    HP: 20,
  },
};

const InstanceMap: any = {
  Menu: Menu,
  Location: Location,
  Area: Area,
  Building: Building,
  Room: Room,
  Map: Map,
  Consumables: Consumables,
};

function generateObj(obj: any) {
  const Instance = InstanceMap[obj.class];
  console.log(obj);
  if (!Instance)
    throw new Error(
      `\u001b[33m Could not generate object please make sure your object has a class property associated with it! If the object has no class associated with it\u001b[31m DO NOT\u001b[33m use the generateObj() funtion. \u001b[0m`
    );
  const instance = new Instance(obj);
  instance.load();
}

generateObj(helmCaves); ///test objects

// if (myObj.error) {
//   console.error(myObj.error.message);
// } else {
//   console.log("Object created using the " + myObj.getClass() + " class");
//   console.log(myObj);
//   myObj.useItem()
// }
