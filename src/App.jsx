import { useState } from "react";
import { Header } from "./components/navigations/Header.jsx";
import MobileMenu from "./components/navigations/MobileMenu.jsx";
import Contents from "./components/Contents.jsx";
import { siteSettingsContext } from "./store/siteSettingsContext.jsx";

function App() {
  const pageHandler = useState(5);
  const [siteSettings, setSiteSettings] = useState({
    language: "ENGLISH",
    updateLanguage: handleLanguageChange,
    user: {
      username: null,
      permission: 0, // read-only
      isAdmin: false,
    },
  });

  function handleLanguageChange(newLanguage) {
    setSiteSettings((prevState) => {
      return { ...prevState, language: newLanguage };
    });
  }

  function handleLogin(inputObject) {
    setSiteSettings((prevState) => {
      return {
        ...prevState,
        user: {
          username: inputObject.username,
          permission: inputObject.permission,
          isAdmin: inputObject.permission == 1 ? true : false,
        },
      };
    });
  }

  return (
    <siteSettingsContext.Provider value={siteSettings}>
      <Header page={pageHandler} />
      <MobileMenu page={pageHandler} />
      <Contents page={pageHandler} onLogin={handleLogin} />
    </siteSettingsContext.Provider>
  );
}

export default App;
