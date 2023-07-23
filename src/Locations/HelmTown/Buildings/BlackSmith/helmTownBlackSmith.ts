import { building } from "../../../../Models/Master";
import { mainRoom } from "./rooms";

export const helmTownBlackSmith: building = {
  class: "Building",
  name: "Helm Town BlackSmith",
  message: "Helm Town BlackSmith",
  room: () => mainRoom,
  //   area:()=> [],
  // npcs: [blacksmith],
  // interactables: [buy, sell, talk, quest],
};
