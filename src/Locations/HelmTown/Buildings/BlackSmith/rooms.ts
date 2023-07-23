import { room } from "../../../../Models/Master";
import { helmFountain } from "../../Areas/helmTownAreas";

export const mainRoom: room = {
  class: "Room",
  name: "Main Room",
  message: "Welcome to the Smithy! you lookin' to sharpen your sword?",
  connectedAreas: () => [helmFountain],
  connectedRooms: () => [],
};
