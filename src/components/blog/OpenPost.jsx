import { useContext, useRef } from "react";
import { createPortal } from "react-dom";
import PostAdminControls from "./PostAdminControls.jsx";
import { siteLanguage } from "../../store/siteLanguageContext";
import contentParser from "../../utils/contentParser.jsx";

export default function OpenPost({ post, onDispatch, isAdmin }) {
  const [language] = useContext(siteLanguage);
  const { postList, pindex, isEditing } = post;

  if (pindex == null || postList[pindex] == null)
    throw new Error("Post not found and/or invalid index");

  const { postLanguages, img, author, date } = postList[pindex];
  const { title, content } = postLanguages[language || "ENGLISH"];

  // Handles post data and state
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  let authorElement, titleElement, contentElement;
  //   let inputData;

  if (isEditing) {
    authorElement = (
      <input type="text" defaultValue={author[0]} placeholder="Author.." />
    );
    titleElement = (
      <input ref={titleRef} type="text" defaultValue={title}></input>
    );
    contentElement = (
      <textarea ref={contentRef} defaultValue={content}></textarea>
    );
  } else {
    authorElement = <li>Author: {author[0]}</li>;
    titleElement = <h1>{title}</h1>;
    contentElement = <div id="inner-content">{contentParser(content)}</div>;
  }

  return createPortal(
    <div id="post-content">
      <span id="exit">
        <a onClick={() => onDispatch({ type: "click", index: null })}>X</a>
      </span>
      <img src={img} alt={title} />
      {isAdmin && (
        <PostAdminControls
          onDelete={() => onDispatch({ type: "delete", index: post.pindex })}
          onEdit={
            isEditing
              ? null
              : () => onDispatch({ type: "edit", index: post.pindex })
          }
          onSave={
            isEditing
              ? () => {
                  const payload = {
                    title: titleRef.current.value,
                    content: contentRef.current.value,
                  };
                  onDispatch({
                    type: "save",
                    language,
                    payload,
                  });
                }
              : null
          }
        />
      )}
      <ol>
        <li>Published: {`${date[0]}/${date[1]}/${date[2]}`}</li>
        {authorElement}
      </ol>
      {titleElement}
      {contentElement}
    </div>,
    document.getElementById("overlay")
  );
}
