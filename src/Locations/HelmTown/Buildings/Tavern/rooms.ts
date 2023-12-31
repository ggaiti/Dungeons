import { room } from "../../../../Models/Master";
import { helmFountain } from "../../Areas/helmTownAreas";

export const mainRoom: room = {
  class: "Room",
  name: "Main Room",
  message:
    "Welcome Traveler, if you need a room just ask, or would you preffer something to drink?",
  connectedAreas: () => [helmFountain],
  connectedRooms: () => [],
};
