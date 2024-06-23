import { useState } from "react";
import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import Page from "./components/Page.jsx";
import ManageContents from "./components/ManageContents.jsx";

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

  const [page, setPage] = useState(0);
  function changeCurrentPage(number) {
    setPage(number);
  }

  return (
    <>
      <Header
        siteLang={siteLanguage}
        onUpdatePage={changeCurrentPage}
        page={page}
      />
      <ManageContents page={page}>
        <Content siteLang={siteLanguage} />
        <Page
          title="About Ths Project"
          contentStyle="left"
          content="This project is a basic front-end implementation of a multilingual website/blog.\n\nThe idea is to create a platform where you can share your knowledge and ideas with multiple audiences and seamlessly connect different languages.\n\nThis allows users to share and read ideas without the language barrier\n\nIn the future, I plan to implement a backend to enhance the user experience and improve the loading time.Until then, thank you for being here! :D"
        />
        <Page
          title="Source Code"
          content="You can find the source code for this project at: "
          links={["github/moekm", "https://github.com/moekm/multilingual-blog"]}
        />
        <Page title="Contact Me" content="Say hi:\n funblog@moekm.com" />
      </ManageContents>
    </>
  );
}

export default App;
