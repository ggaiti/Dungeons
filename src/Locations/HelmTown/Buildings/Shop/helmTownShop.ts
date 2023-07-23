import { building } from "../../../../Models/Master";
import { mainRoom } from "./rooms";

export const helmTownShop: building = {
  class: "Building",
  name: "Helm Town General Goods",
  message: "Helm Town General Goods",
  room: () => mainRoom,
  //   areas: ()=> [],
  // npcs: [shopkeeper],
  // interactables: [buy, sell, talk, quest],
};
