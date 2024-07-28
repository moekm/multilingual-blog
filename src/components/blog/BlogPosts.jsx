import { useContext, useReducer } from "react";
import PostAdminControls from "./PostAdminControls.jsx";
import OpenPost from "./OpenPost.jsx";
import { siteSettingsContext } from "../../store/siteSettingsContext.jsx";
import site from "../../data/site.js";

export default function BlogPosts({ postState, onDispatch }) {
  const { language, user } = useContext(siteSettingsContext);

  if (postState.posts == null) postState.posts = [];
  if (postState.posts.length <= 0) {
    return <p id="default-text">0 Posts Found</p>;
  }

  const renderPosts = postState.posts.map((post, index) => {
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
        <button onClick={() => onDispatch({ type: "click", index: index })}>
          {site[language].body.readMore}
        </button>
        {user.isAdmin && (
          <PostAdminControls
            onDelete={() =>
              onDispatch({
                type: "delete",
                index: index,
              })
            }
            onEdit={() => onDispatch({ type: "edit-outside", index: index })}
          />
        )}
      </div>
    );
  });

  return (
    <section id="blog-content">
      {postState.isOpen && (
        <OpenPost
          language={language}
          onDispatch={onDispatch}
          isAdmin={user.isAdmin}
          postState={postState}
        />
      )}
      {renderPosts}
    </section>
  );
}
