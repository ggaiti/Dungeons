import { building } from "../../../../Models/Master";
import { mainRoom } from "./rooms";

export const archMageAcademy: building = {
  class: "Building",
  name: "Arch Mage Academy",
  message: "Arch Mage Academy",
  room: () => mainRoom,
};
