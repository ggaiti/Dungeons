import { building } from "../../../../Models/Master";
import { mainRoom } from "./rooms";

export const helmTownTavern: building = {
  class: "Building",
  name: "Helm Town Tavern",
  message: "Helm Town Tavern",
  //   npcs: [alex, aaron],
  // areas:()=> [],
  room: () => mainRoom,
  // interactables: [],
};
