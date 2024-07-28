import { useRef } from "react";
import { postTemplate } from "../../data/posts.js";

export default function NewPost({
  onDispatch,
  onAfterPosted,
  user,
  lastPostID,
}) {
  const title = useRef(null);
  const description = useRef(null);
  const content = useRef(null);

  if (user.username == null) {
    return (
      <p id="default-text">
        Oops! You're not logged in. Please <a href="/">login</a> to continue
      </p>
    );
  } else if (user.isAdmin == false) {
    return <p id="default-text">Only admins can create posts at the moment</p>;
  }

  return (
    <div id="login" className="new-post">
      <h3>New Post</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onDispatch({
            type: "new",
            payload: createNewPost(
              {
                title: title.current.value,
                description: description.current.value,
                content: content.current.value,
                author: user.username,
              },
              lastPostID
            ),
          });
          onAfterPosted();
        }}
      >
        <input required ref={title} type="text" placeholder="Post Title..." />
        <input
          required
          ref={description}
          type="text"
          placeholder="Post Description..."
        />
        <textarea
          required
          ref={content}
          placeholder="This post\n is about"
        ></textarea>
        <input type="text" placeholder="Authour, Authours..." />
        <div id="submit">
          <button type="submit">Create</button>
          <button disabled>Add Language</button>
        </div>
      </form>
    </div>
  );
}

function createNewPost(postObject, lastpostID) {
  let template = { ...postTemplate };

  // calculate the current date
  const date = new Date();
  const formattedDate = [
    date.getDate(),
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1,
    date.getFullYear(),
  ]; // DD/MM/YYYY

  template.id = Math.random();
  template.date = formattedDate;
  template.author = [postObject.author];
  template.postLanguages.ENGLISH.title = postObject.title;
  template.postLanguages.ENGLISH.description = postObject.description;
  template.postLanguages.ENGLISH.content = postObject.content;

  return template;
}
