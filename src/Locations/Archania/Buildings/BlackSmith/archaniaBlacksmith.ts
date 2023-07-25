import { building } from "../../../../Models/Master";
import { mainRoom } from "./rooms";

export const archaniaBlacksmith: building = {
  class: "Building",
  name: "Archania Blacksmith",
  message: "Archania Black Smith",
  room: () => mainRoom,
};
