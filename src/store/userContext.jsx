import { createContext } from "react";

export const currentUser = createContext({
  username: "STRING",
  permission: 0, // read-only
});
