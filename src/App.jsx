import { useState } from "react";
import {
  Header,
  RenderSiteLanguages,
} from "./components/navigations/Header.jsx";
import MobileMenu from "./components/navigations/MobileMenu.jsx";
import BlogContent from "./components/BlogContent.jsx";
import Page from "./components/Page.jsx";
import ManageContents from "./components/ManageContents.jsx";
import { siteLanguage } from "./store/siteLanguageContext.jsx";
import pages from "./data/pages.js";
import Login from "./components/user/Login.jsx";

function App() {
  const [page, setPage] = useState(5);
  const [user, setUser] = useState({
    username: null,
    permission: 0, // read-only
  });
  const [language, setLanguage] = useState([
    "ENGLISH",
    function (newLang) {
      setLanguage(() => [newLang, language[1]]); // change by reference
    },
  ]);

  function changeCurrentPage(number) {
    setPage(number);
  }

  function updateCurrentUser(userLoggedIn) {
    setUser(userLoggedIn);
  }

  return (
    <siteLanguage.Provider value={language}>
      <Header onUpdatePage={changeCurrentPage} page={page} />
      <MobileMenu onUpdatePage={changeCurrentPage} page={page} />
      <ManageContents page={page}>
        <BlogContent />
        <Page {...pages.ABOUT[language[0]]} align={pages.ABOUT.align} />
        <Page {...pages.SOURCE[language[0]]} links={pages.SOURCE.links} />
        <Page {...pages.CONTACT[language[0]]} />
        <section id="mobile-change-language">
          <RenderSiteLanguages />
        </section>
        {user.username == null ? (
          <Login onUpdateUser={updateCurrentUser} />
        ) : (
          <p style={{ textAlign: "center" }}>
            Logged in as:
            <strong style={{ fontWeight: "500" }}> {user.username}</strong>
            <p>
              With:
              <strong style={{ fontWeight: "500" }}>
                {user.permission == 1 ? " Full Access" : " Default Access"}
              </strong>
            </p>
          </p>
        )}
      </ManageContents>
    </siteLanguage.Provider>
  );
}

export default App;
