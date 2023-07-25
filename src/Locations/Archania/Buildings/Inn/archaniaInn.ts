import { building } from "../../../../Models/Master";
import { mainRoom } from "./rooms";

export const archaniaInn: building = {
  class: "Building",
  name: "Archania Inn",
  message: "Archania Inn",
  room: () => mainRoom,
};
