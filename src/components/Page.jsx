export default function Page({
  title,
  content,
  contentStyle = "",
  links = [],
}) {
  return (
    <section id="about">
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
      {links.length > 0 ? (
        <a href={links[1]} style={{ cursor: "pointer", fontWeight: 500 }}>
          {links[0]}
        </a>
      ) : (
        ""
      )}
    </section>
  );
}
