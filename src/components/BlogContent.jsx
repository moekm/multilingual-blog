import { useState, useContext } from "react";
import { createPortal } from "react-dom";
import { siteLanguage } from "../store/siteLanguageContext.jsx";
import contentParser from "../utils/contentParser.jsx";
import site from "../data/site.js";
import { posts } from "../data/posts.js";

export default function BlogContent() {
  const [post, setPost] = useState({
    id: 0,
    isOpen: false,
    update: updateContentDisplay,
  });

  function updateContentDisplay(postID = null) {
    setPost((prevState) => {
      return {
        ...prevState,
        id: postID,
        isOpen: !prevState.isOpen,
      };
    });
  }

  return (
    <section id="blog-content">
      <PostContent postData={post} />
      <Posts onPostClick={post.update} />
    </section>
  );
}

/**
 * Displays all the blogs post in the database (posts.js)
 **/
function Posts({ onPostClick }) {
  const [language] = useContext(siteLanguage);
  let renderedPosts = [];

  posts.map((post) => {
    let err;
    let title, description;
    const { id, img, postLanguages } = post;

    if (postLanguages[language] == undefined) {
      // fallback to english by default
      title = postLanguages.ENGLISH.title;
      description = postLanguages.ENGLISH.description;
      err = <p id="no-lang-err">{site[language].body.postErr}</p>;
    } else {
      title = postLanguages[language].title;
      description = postLanguages[language].description;
    }

    renderedPosts.push(
      <div key={id} className={`blog-overview id-${id}`}>
        <img src={img} alt="a placeholder img blog-id" />
        <h2>{title}</h2>
        <p>{description}</p>
        {err ? err : ""}
        <button onClick={() => onPostClick(id - 1)}>
          {site[language].body.readMore}
        </button>
      </div>
    );
  });

  return renderedPosts;
}

function PostContent({ postData }) {
  const [language] = useContext(siteLanguage);
  const { id, isOpen, update } = postData;
  if (id == null) return null;
  if (posts[id] == undefined) return null;

  const { postLanguages, img, author, date } = posts[id];
  const { title, content } = postLanguages[language] || postLanguages.ENGLISH;

  return createPortal(
    <div id="post-content" className={isOpen ? "show" : ""}>
      <span id="exit">
        <a onClick={() => update(null)}>X</a>
      </span>
      <img src={img} alt={title} />
      <ol>
        <li>Published: {`${date[0]}/${date[1]}/${date[2]}`}</li>
        <li>Author: {author[0]}</li>
      </ol>
      <h1>{title}</h1>
      <div id="inner-content">{contentParser(content)}</div>
    </div>,
    document.getElementById("overlay")
  );
}
