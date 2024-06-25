import { postData } from "../data/postData.js";
import site from "../data/site.js";
import { useState } from "react";

function DisplayPostContent({ onPostClick }) {
  const [isPostOpen, setPostToExit, postID] = onPostClick;
  if (postID == null) {
    return null;
  }
  const { language, img, author, date } = postData[postID];
  const { title, content } = language.English;

  return (
    <div id="post-content" className={isPostOpen ? "show" : ""}>
      <span>
        <a onClick={() => setPostToExit(null)}>X</a>
      </span>
      <img src={img} alt={title} />
      <ol>
        <li>Published: {`${date[0]}/${date[1]}/${date[2]}`}</li>
        <li>Author: {author[0]}</li>
      </ol>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}

function DisplayBlogPosts({ siteLang, onPostClick }) {
  let renderedPosts = [];
  const [voided, setPostToOpen] = onPostClick;

  postData.map((post) => {
    let err;
    const { id, img, language } = post;
    const [siteLanguage] = siteLang;

    let title, description;
    if (language[siteLanguage] == undefined) {
      // fallback to english by default
      title = language.English.title;
      description = language.English.description;
      err = <p id="no-lang-err">{site[siteLanguage].body.postErr}</p>;
    } else {
      title = language[siteLanguage].title;
      description = language[siteLanguage].description;
    }

    renderedPosts.push(
      <div key={id} className={`blog-overview id-${id}`}>
        <img src={img} alt="a placeholder img blog-id" />
        <h2>{title}</h2>
        <p>{description}</p>
        {err ? err : ""}
        <button onClick={() => setPostToOpen(id - 1)}>
          {site[siteLanguage].body.readMore}
        </button>
      </div>
    );
  });

  return renderedPosts;
}

export default function Content({ siteLang }) {
  const [postStatus, setPostStatus] = useState([
    false,
    updatePostContentDisplay,
    0, // post id
  ]);
  function updatePostContentDisplay(postID = null) {
    setPostStatus((prevState) => {
      const newState = [...prevState];
      newState[0] = !prevState[0];
      newState[2] = postID;
      return newState;
    });
  }

  return (
    <section id="blog-content">
      <DisplayPostContent onPostClick={postStatus} />
      <DisplayBlogPosts siteLang={siteLang} onPostClick={postStatus} />
    </section>
  );
}
