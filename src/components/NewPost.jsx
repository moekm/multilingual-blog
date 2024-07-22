import { useContext } from "react";
import { currentUser } from "../store/userContext";

export default function NewPost() {
  const user = useContext(currentUser);

  if (user.username == null) {
    return (
      <p id="default-text">
        Oops! You're not logged in. Please <a href="/">login</a> to continue
      </p>
    );
  }

  return (
    <div id="login" className="new-post">
      <h3>New Post</h3>
      <input type="text" placeholder="Post Title..." />
      <input type="text" placeholder="Post Description..." />
      <textarea placeholder="This post\n is about"></textarea>
      <input type="text" placeholder="Authour, Authours..." />
      <div id="submit">
        <button>Create</button>
        <button disabled>Add Language</button>
      </div>
    </div>
  );
}
