import { useState, useRef } from "react";
import {
  Header,
  RenderSiteLanguages,
} from "./components/navigations/Header.jsx";
import MobileMenu from "./components/navigations/MobileMenu.jsx";
import BlogPosts from "./components/blog/BlogPosts.jsx";
import Page from "./components/Page.jsx";
import ManageContents from "./components/ManageContents.jsx";
import { siteLanguage } from "./store/siteLanguageContext.jsx";
import pages from "./data/pages.js";
import Login from "./components/user/Login.jsx";
import NewPost from "./components/blog/NewPost.jsx";

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
  const newPost = useRef(null);
  const isAdmin = user.username == "admin" ? true : false;

  function changeCurrentPage(number) {
    setPage(number);
  }

  function updateCurrentUser(userLoggedIn) {
    setUser(userLoggedIn);
  }

  function handleNewPost(post) {
    newPost.current = post;
  }

  return (
    <siteLanguage.Provider value={language}>
      <Header onUpdatePage={changeCurrentPage} page={page} />
      <MobileMenu onUpdatePage={changeCurrentPage} page={page} />
      <ManageContents page={page}>
        <BlogPosts newPost={newPost} isAdmin={isAdmin} />
        <Page {...pages.ABOUT[language[0]]} align={pages.ABOUT.align} />
        <Page {...pages.SOURCE[language[0]]} links={pages.SOURCE.links} />
        <NewPost
          onNewPost={handleNewPost}
          onAfterPosted={() => setPage(0)}
          isAdmin={isAdmin}
          user={user}
        />
        <section id="mobile-change-language">
          <RenderSiteLanguages />
        </section>
        <Login onUpdateUser={updateCurrentUser} user={user} />
      </ManageContents>
    </siteLanguage.Provider>
  );
}

export default App;
