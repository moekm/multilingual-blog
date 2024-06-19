import { useState } from "react";
import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";

function App() {
  const [siteLanguage, setSiteLanguage] = useState([
    "English",
    function (newLang) {
      setSiteLanguage((prevState) => {
        let newState = [...prevState];
        newState[0] = newLang;
        return newState;
      });
    },
  ]);

  return (
    <>
      <Header siteLang={siteLanguage} />
      <Content siteLang={siteLanguage} />
    </>
  );
}

export default App;
