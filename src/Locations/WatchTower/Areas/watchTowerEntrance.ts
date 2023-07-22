import { area } from "../../../Models/Master";
import { watchTowerBuilding } from "../Buildings/WatchTower/watchTowerBuildings";

export const watchTowerEntrance: area = {
  class: "Area",
  name: "Watch Tower Entrance",
  message: "Watch Tower Entrance",
  // npcs: [],
  buildings: () => [watchTowerBuilding],
  // interactables: [],
};
