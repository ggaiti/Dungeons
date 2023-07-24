import { building } from "../../../../Models/Master";
import { mainRoom } from "./rooms";

export const hiddenCottage: building = {
  class: "Building",
  name: "Hidden Cottage",
  message: "Hidden Cottage",
  room: () => [mainRoom],

  //   npc: [dryad],
  //   connectedAreas: [deepGrotto],
  // interactables: "",
};
