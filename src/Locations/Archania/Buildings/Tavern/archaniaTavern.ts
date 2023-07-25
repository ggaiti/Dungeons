import { building } from "../../../../Models/Master";
import { mainRoom } from "./rooms";

export const archaniaTavern: building = {
  class: "Building",
  name: "Archania Tavern",
  message: "Archania Tavern",
  room: () => mainRoom,
};
