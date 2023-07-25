import { building } from "../../../../Models/Master";
import { mainRoom } from "./rooms";

export const archaniaGeneralGoods: building = {
  class: "Building",
  name: "Archania General Goods",
  message: "Archania General Goods",
  room: () => mainRoom,
};
