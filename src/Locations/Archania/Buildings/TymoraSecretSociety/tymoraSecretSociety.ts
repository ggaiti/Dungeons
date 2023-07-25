import { building } from "../../../../Models/Master";
import { mainRoom } from "./rooms";

export const tymoraSecretSociety: building = {
  class: "Building",
  name: "Tymora Secret Society",
  message: "Tymora Secret Society",
  room: () => mainRoom,
};
