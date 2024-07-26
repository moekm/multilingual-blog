import { useContext, useReducer } from "react";
import PostAdminControls from "./PostAdminControls.jsx";
import OpenPost from "./OpenPost.jsx";
import { siteLanguage } from "../../store/siteLanguageContext.jsx";
import site from "../../data/site.js";
import { posts as postList, postTemplate } from "../../data/posts.js";

/**
 * TODO:
 * ADD DELETE FUNCTIONALITY
 * ADD MODAL BEFORE DELETE
 */

function handelPostActions(state, action) {
  switch (action.type) {
    case "click":
      return {
        ...state,
        pindex: action.index,
        isOpen: !state.isOpen,
        isEditing: false,
      };
      break;
    case "first-delete":
      // Modal confirm delete..
      break;
    case "delete":
      return {
        ...state,
        postList: state.postList.filter((p, index) => index !== action.index),
        pindex: null,
        isOpen: false,
        isEditing: false,
      };
      break;

    case "edit":
      return {
        ...state,
        pindex: action.index,
        isOpen: true,
        isEditing: true,
      };
      break;
    case "save":
      let newPostList = [...state.postList];
      let post = newPostList[state.pindex].postLanguages;
      post[action.language].title = action.payload.title;
      post[action.language].content = action.payload.content;

      return {
        ...state,
        postList: newPostList,
        isOpen: true,
        isEditing: false,
      };
      break;
    case "edit-outside":
      return {
        ...state,
        pindex: action.index,
        isOpen: true,
        isEditing: true,
      };
      break;
  }
}

export default function BlogPosts({ newPost, isAdmin }) {
  const [language] = useContext(siteLanguage);
  const [posts, dispatch] = useReducer(handelPostActions, {
    postList: postList,
    pindex: null,
    isOpen: false,
    isEditing: false,
  });

  if (newPost.current !== null) {
    const listLastID = posts.postList[posts.postList.length - 1].id;
    const formattedPost = createNewPost(newPost.current, listLastID);
    posts.postList.push(formattedPost);
    newPost.current = null;
  }

  if (posts.postList.length <= 0) {
    return <p id="default-text">0 Posts Found</p>;
  }

  const renderPosts = posts.postList.map((post, index) => {
    let err, title, description;
    const { id, img, postLanguages } = post;

    if (postLanguages[language] !== undefined) {
      title = postLanguages[language].title;
      description = postLanguages[language].description;
    } else {
      // fallback to english by default
      title = postLanguages.ENGLISH.title;
      description = postLanguages.ENGLISH.description;
      err = <p id="no-lang-err">{site[language].body.postErr}</p>;
    }

    return (
      <div key={id} className="blog-overview">
        <img src={img} alt="a placeholder img with grey background" />
        <h2>{title}</h2>
        <p>{description}</p>
        {err && err}
        <button onClick={() => dispatch({ type: "click", index: index })}>
          {site[language].body.readMore}
        </button>
        {isAdmin && (
          <PostAdminControls
            onDelete={() => dispatch({ type: "delete", index: index })}
            onEdit={() => dispatch({ type: "edit-outside", index: index })}
          />
        )}
      </div>
    );
  });

  return (
    <section id="blog-content">
      {posts.isOpen && (
        <OpenPost post={posts} onDispatch={dispatch} isAdmin={isAdmin} />
      )}
      {renderPosts}
    </section>
  );
}

function createNewPost(postObject, lastpostID) {
  let template = { ...postTemplate };

  template.id = lastpostID + 1;
  template.postLanguages.ENGLISH.title = postObject.title;
  template.postLanguages.ENGLISH.description = postObject.description;
  template.postLanguages.ENGLISH.content = postObject.content;

  return template;
}
