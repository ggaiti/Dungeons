import { building } from "../../../../Models/Master";
import { mainRoom } from "./rooms";

export const archaniaPalace: building = {
  class: "Building",
  name: "Archania Royale Palace",
  message: "Archania Royale Palace",
  room: () => mainRoom,
};
