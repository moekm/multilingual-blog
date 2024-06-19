import { postData } from "../postData";

function RenderBlogContent({ posts, siteLang }) {
  let renderedPosts = [];

  posts.map((post) => {
    let err;
    const { id, img, date, author, language } = post;
    const [siteLangText] = siteLang;

    let { title, description } =
      language[siteLangText] != undefined
        ? language[siteLangText]
        : {
            title: language.English.title,
            description: language.English.description,
          };

    if (language[siteLangText] == undefined) {
      // fallback to English (will change later)
      err = (
        <p id="no-lang-err">
          {`This post dosen't support "${siteLangText}" language. but you can still view it in `}
          <strong>English</strong>
        </p>
      );
    }

    renderedPosts.push(
      <div key={id} className={`blog-overview id-${id}`}>
        <img src={img} alt="a placeholder img blog-id" />
        <h2>{title}</h2>
        <p>{description}</p>
        {err ? err : ""}
        <button>Read More</button>
      </div>
    );
  });

  return renderedPosts;
}

export default function Content({ siteLang }) {
  return (
    <section id="blog-content">
      <RenderBlogContent posts={postData} siteLang={siteLang} />
    </section>
  );
}
