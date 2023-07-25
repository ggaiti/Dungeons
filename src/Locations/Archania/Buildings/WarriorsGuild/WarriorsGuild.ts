import { building } from "../../../../Models/Master";
import { mainRoom } from "./rooms";

export const warriorsGuild: building = {
  class: "Building",
  name: "Warriors Guild",
  message: "Warriors Guild",
  room: () => mainRoom,
};
