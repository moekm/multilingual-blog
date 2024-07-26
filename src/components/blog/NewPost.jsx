import { useRef } from "react";

export default function NewPost({ onNewPost, onAfterPosted, user, isAdmin }) {
  const title = useRef(null);
  const description = useRef(null);
  const content = useRef(null);

  if (user.username == null) {
    return (
      <p id="default-text">
        Oops! You're not logged in. Please <a href="/">login</a> to continue
      </p>
    );
  } else if (isAdmin == false) {
    return <p id="default-text">Only admins can create posts at the moment</p>;
  }

  return (
    <div id="login" className="new-post">
      <h3>New Post</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onNewPost({
            title: title.current.value,
            description: description.current.value,
            content: content.current.value,
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
