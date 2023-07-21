import { Class_Example} from "./Models/Location";


interface Building {
    name: string ,
    message: string,
    npcs: Array<string>,
    connectedAreas: Array<string>,
    interactables: Array<string>,
    rooms?: Array<string>,
}

interface Area {
    name: string,
    message: string,
    npcs: Array<string>,
    connectedAreas: Array<string>,
    interactables: Array<string>,
}

interface Location {
    name: string,
    buildings: Building[],
    npcs: Array<Building>,
    npmc: [],
    connectedAreas: Array<Area>,
    interactables: [],
}

const watchTower: Location = {
    name: "Watch Tower",
    buildings: [],
    npcs: [],
    npmc: [],
    connectedAreas: [],
    interactables: [],
};

 const watchTowerEntrance: Area = {
    name: "Watch Tower Entrance",
    message: "",
    npcs: [],
    connectedAreas: [],
    interactables: [],
};

const watchTowerBuilding: Building = {
    message: "",
    name: "",
    npcs: [],
    connectedAreas: [],
    interactables: [],
}


const tavern = {
    name: ""
}

console.log(watchTowerBuilding)

console.log(watchTowerEntrance)

console.log(watchTower)




// const myCar = new car ("Tpyota", 1234,4,"Regular")

// console.log(myCar)

