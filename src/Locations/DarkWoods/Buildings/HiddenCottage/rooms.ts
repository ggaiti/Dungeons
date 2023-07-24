import { room } from "../../../../Models/Master";
import { deepGrotto } from "../../Areas/darkWoodsAreas";

export const mainRoom: room = {
  class: "Room",
  name: "Main Room",
  message: "The hidden cottage",
  connectedAreas: () => [deepGrotto],
  connectedRooms: () => [],
};
