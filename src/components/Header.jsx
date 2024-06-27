import site from "../data/site.js";

export const RenderSiteLanguages = ({ siteLang }) => {
  const [siteLanguage, updateSiteLanguage] = siteLang;
  const langsArray = site.English.header.langs;

  return (
    <ul>
      <li style={{ cursor: "default" }}>
        {site[siteLanguage].header.language}:
      </li>
      {langsArray.map((lang, index) => (
        <li
          key={index}
          className={siteLanguage == lang ? "active" : ""}
          onClick={() => updateSiteLanguage(lang)}
        >
          <a>{site[siteLanguage].header.langs[index]}</a>
        </li>
      ))}
    </ul>
  );
};

export default function Header({ siteLang, onUpdatePage, page }) {
  const [siteLanguage] = siteLang;
  const navArray = site[siteLanguage].header.navmenu;

  return (
    <header>
      <div id="site-information">
        <span>
          <a href="#">MOEKM Blog</a>
        </span>
        <p>{site[siteLanguage].header.tagline}</p>
      </div>
      <div id="site-navigation">
        <RenderSiteLanguages siteLang={siteLang} />

        <ul>
          {navArray.map((item, index) => (
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
