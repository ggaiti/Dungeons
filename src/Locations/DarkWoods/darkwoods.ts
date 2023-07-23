import { location } from "../../Models/Master";
import { darkWoodsEntrance } from "./Areas/darkWoodsAreas";

//woods outside of helm
export const darkWoods: location = {
  class: "Location",
  name: "Dark Woods",
  message: "Dark Woods",
  area: () => darkWoodsEntrance,
  //   npcs: ()=> [],
  // monsters: [darkMushroom],
  // connectedAreas: [darkWoodsEntrance],
  //   safeZone: false,
  //   interactables: [],
};
