import { area } from "../../../Models/Master";
import { helmTownBlackSmith } from "../Buildings/BlackSmith/helmTownBlackSmith";
import { helmTownShop } from "../Buildings/Shop/helmTownShop";
import { helmTownTavern } from "../Buildings/Tavern/helmTownTavern";

export const helmFountain: area = {
  class: "Area",
  name: "Helm Central Fountain",
  message: "Helm Central Fountain",
  buildings: () => [helmTownTavern, helmTownShop, helmTownBlackSmith],
  // npcs:()=> [],
  connectedAreas: () => [helmPark],
  // interactables: ["toss a coin"],
};

export const helmPark: area = {
  class: "Area",
  name: "Helm Park",
  message:
    "A nice Green Space with a few outdoor lanterns to light up the area at night as well as sitting spaces and a gazebo",
  buildings: () => [],
  connectedAreas: () => [helmFountain],
  // interactables: [],
};
