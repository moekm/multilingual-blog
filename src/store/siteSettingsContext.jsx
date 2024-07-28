import { createContext } from "react";

export const siteSettingsContext = createContext({
  language: "STRING",
  updateLanguage: () => {},
  user: {
    username: null,
    permission: 0, // read-only
    isAdmin: false,
  },
});
