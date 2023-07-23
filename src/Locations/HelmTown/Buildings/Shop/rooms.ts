import { room } from "../../../../Models/Master";
import { helmFountain } from "../../Areas/helmTownAreas";
import { helmTown } from "../../helmTown";

export const mainRoom: room = {
  class: "Room",
  name: "Main Room",
  message: "Welcome to the shop, Please have a look around.",
  connectedAreas: () => [helmFountain],
  connectedRooms: () => [],
};
