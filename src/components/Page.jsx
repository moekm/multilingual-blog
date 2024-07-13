import contentParser from "../utils/contentParser.jsx";

export default function Page({ title, content, align = null, links = [] }) {
  let renderedLinks = [];
  if (links.length > 0) {
    links.map((linkArray) => {
      renderedLinks.push(
        <p key={linkArray[0]}>
          <a href={linkArray[1]} style={{ cursor: "pointer", fontWeight: 500 }}>
            {linkArray[0]}
          </a>
        </p>
      );
    });
  }

  // Language not supported? fallback to english with an error
  if (title == null || content == null) {
    return (
      <section id="pageNav" style={{ margin: "2em" }}>
        <span id="no-lang-err">
          This page isn't available in your selected language
        </span>
      </section>
    );
  }

  return (
    <section id="pageNav">
      <h1>{title}</h1>
      <p style={{ textAlign: align }}>
        {/* {content.split("\n").map((string, index) => {
          return (
            <span key={index}>
              {string}
              <br />
            </span>
          );
        })} */}
        {contentParser(content)}
      </p>
      {renderedLinks}
    </section>
  );
}
