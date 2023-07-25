import { location } from "../../Models/Master";
import { centralSquare } from "./Areas/centralSquare";

//Second city
export const archania: location = {
  class: "Location",
  name: "Archania",
  message: "Archania",
  area: () => centralSquare,
};
