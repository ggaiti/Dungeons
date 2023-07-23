import { location } from "../../Models/Master";
import { caveEntrance } from "./Areas/helmCaveAreas";

//caves outside of helm
export const helmCaves: location = {
  class: "Location",
  name: "Helm Outer Caves",
  message: "Helm Outer Caves",
  // npcs: [],
  area: () => caveEntrance,
  // interactables: [],
};
