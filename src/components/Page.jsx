export default function Page({
  title,
  content,
  contentStyle = "",
  links = [],
}) {
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

  return (
    <section id="pageNav">
      <h1>{title}</h1>
      <p style={{ textAlign: contentStyle }}>
        {content.split("\\n").map((string, index) => {
          return (
            <span key={index}>
              {string}
              <br />
            </span>
          );
        })}
      </p>
      {/* {links.length > 0 ? (
        <a href={links[1]} style={{ cursor: "pointer", fontWeight: 500 }}>
          {links[0]}
        </a>
      ) : (
        ""
      )} */}
      {renderedLinks}
    </section>
  );
}
