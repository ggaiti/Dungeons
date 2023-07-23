import { location } from "../../Models/Master";
import { helmTownBlackSmith } from "./Buildings/BlackSmith/helmTownBlackSmith";
import { helmTownShop } from "./Buildings/Shop/helmTownShop";
import { helmTownTavern } from "./Buildings/Tavern/helmTownTavern";
import { helmFountain } from "./Areas/helmTownAreas";

//starting town
export const helmTown: location = {
  class: "Location",
  name: "Helm Town",
  message: "Helm Town",
  area: () => helmFountain,
  // npcs: [beggar, brian],
  // safeZone: true,
  // interactables: [potion],
};
