import site from "../fullSiteTranslations.js";

function RenderSiteLanguages({ siteLang }) {
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
}

export default function Header({ siteLang }) {
  const [siteLanguage] = siteLang;
  const navArray = site[siteLanguage].header.navmenu;

  return (
    <>
      <header>
        <div id="site-information">
          <span>
            <a href="/">MOEKM Blog</a>
          </span>
          <p>{site[siteLanguage].header.tagline}</p>
        </div>
        <div id="site-navigation">
          <RenderSiteLanguages siteLang={siteLang} />

          <ul>
            {navArray.map((item, index) => (
              <li>
                <a>{index == 3 ? <button>{item}</button> : item}</a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <div className="mobile-menu">
        <ul>
          <li className="active">
            <svg
              width="35px"
              height="35px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 3.1875L21.4501 10.275L21.0001 11.625H20.25V20.25H3.75005V11.625H3.00005L2.55005 10.275L12 3.1875ZM5.25005 10.125V18.75H18.75V10.125L12 5.0625L5.25005 10.125Z"
                fill="#080341"
              />
            </svg>
          </li>
          <li>
            <svg
              width="35px"
              height="35px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.68393 9.10852C4.91598 11.8505 5.24227 15.3057 6.0784 17.9623L4.64759 18.4127C3.75268 15.5693 3.37082 11.8057 4.23951 8.70398C4.67664 7.14317 5.44272 5.70877 6.66305 4.66294C7.89353 3.60841 9.52687 3 11.5948 3C12.7741 3 14.3733 3.31478 16.1632 4.4996L15.3353 5.7504C13.8016 4.73522 12.4928 4.5 11.5948 4.5C9.83865 4.5 8.56461 5.00878 7.63915 5.8019C6.70354 6.60373 6.06512 7.74745 5.68393 9.10852ZM17.6243 10.9248C17.5868 9.24047 17.5585 7.97426 16.6049 7.02479L17.6633 5.96181C19.054 7.34653 19.0902 9.18617 19.1197 10.6847C19.1213 10.7641 19.1228 10.8426 19.1246 10.9199C19.1613 12.568 19.261 13.8481 20.3669 14.8088L19.3831 15.9412C17.7193 14.4957 17.6604 12.5414 17.6249 10.9534L17.6243 10.9248ZM11.5948 7.9375C10.0919 7.9375 8.88269 9.14577 8.88269 10.625H7.38269C7.38269 8.30728 9.27356 6.4375 11.5948 6.4375C13.916 6.4375 15.8069 8.30727 15.8069 10.625C15.8069 11.5439 15.9393 13.0207 16.3327 14.4178C16.7359 15.8495 17.3628 17.017 18.222 17.5502L17.4311 18.8248C16.0746 17.983 15.3166 16.3433 14.8889 14.8244C14.4514 13.271 14.3069 11.654 14.3069 10.625C14.3069 9.14577 13.0977 7.9375 11.5948 7.9375ZM11.269 15.3401C10.8583 13.465 10.7847 11.678 10.846 10.5831L12.3437 10.6669C12.2895 11.6345 12.3544 13.285 12.7343 15.0192C13.116 16.7621 13.7982 18.5085 14.9202 19.7463L13.8088 20.7537C12.4381 19.2415 11.6778 17.2066 11.269 15.3401ZM7.38269 12.0016V12H8.88269C8.88269 12.4489 8.883 13.7749 9.13271 15.3177C9.38505 16.8766 9.87875 18.5672 10.8084 19.7979L9.6115 20.7021C8.46389 19.1828 7.91896 17.2067 7.65199 15.5573C7.38269 13.8936 7.38269 12.471 7.38269 12.0016Z"
                fill="#080341"
              />
            </svg>
          </li>
          <li>
            <svg
              width="35px"
              height="35px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
                fill="#080341"
              />
            </svg>
          </li>
          <li>EN</li>
        </ul>
      </div>
    </>
  );
}
