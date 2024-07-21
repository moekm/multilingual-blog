import { useContext } from "react";
import { siteLanguage } from "../../store/siteLanguageContext.jsx";
import site from "../../data/site.js";

export function RenderSiteLanguages() {
  const [language, updateLanguage] = useContext(siteLanguage);
  let avaliableLanguages = [];
  for (let key in site) avaliableLanguages.push(key);

  return (
    <ul>
      <li>{site[language].header.language}:</li>
      {avaliableLanguages.map((lang, index) => (
        <li
          key={index}
          className={language == lang ? "active" : ""}
          onClick={() => updateLanguage(lang)}
        >
          <a>{site[language].header.langs[index]}</a>
        </li>
      ))}
    </ul>
  );
}

export function Header({ onUpdatePage, page }) {
  const [language] = useContext(siteLanguage);
  const navPageLists = site[language].header.navmenu;

  return (
    <header>
      <div id="site-information">
        <h1>
          <a href="#">MOEKM Blog</a>
        </h1>
        <p>{site[language].header.tagline}</p>
      </div>
      <div id="site-navigation">
        <RenderSiteLanguages />
        <ul>
          {navPageLists.map((item, index) => (
            <li key={index} className={page == index ? "active" : ""}>
              <a onClick={() => onUpdatePage(index)}>
                {index == 3 ? <button>{item}</button> : item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
