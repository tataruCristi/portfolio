import { createContext } from "react";

export const ActiveLinksContext = createContext({
  home: true,
  about: false,
  projects: false,
  contact: false,
});
