import { useReducer, useContext, act } from "react";
import ManageContents from "./ManageContents.jsx";
import BlogPosts from "./blog/BlogPosts.jsx";
import Page from "./Page.jsx";
import Login from "./user/Login.jsx";
import NewPost from "./blog/NewPost.jsx";
import { RenderSiteLanguages } from "./navigations/Header.jsx";
import { siteSettingsContext } from "../store/siteSettingsContext.jsx";
import pages from "../data/pages.js";
import { posts as staticPosts } from "../data/posts.js";

function handlePostActions(state, action) {
  switch (action.type) {
    case "click":
      return {
        ...state,
        pindex: action.index,
        isOpen: !state.isOpen,
        isEditing: false,
      };
      break;
    case "new":
      return {
        ...state,
        posts: [...state.posts, action.payload],
        pindex: null,
        isOpen: false,
        isEditing: false,
      };
      break;
    case "first-delete":
      // Modal confirm delete..
      break;
    case "delete":
      return {
        ...state,
        posts: state.posts.filter((p, index) => index !== action.index),
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
      let statePostsCopy = [...state.posts];
      let post = statePostsCopy[state.pindex].postLanguages;
      post[action.language].title = action.payload.title;
      post[action.language].content = action.payload.content;

      return {
        ...state,
        posts: statePostsCopy,
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

export default function Contents({ page, onLogin }) {
  const { language, user } = useContext(siteSettingsContext);
  const [pageNumber, setPageNumber] = page;
  const [postState, dispatch] = useReducer(handlePostActions, {
    posts: staticPosts,
    pindex: null,
    isOpen: false,
    isEditing: false,
  });

  return (
    <ManageContents page={pageNumber}>
      <BlogPosts postState={postState} onDispatch={dispatch} />
      <Page {...pages.ABOUT[language]} align={pages.ABOUT.align} />
      <Page {...pages.SOURCE[language]} links={pages.SOURCE.links} />
      <NewPost
        onDispatch={dispatch}
        onAfterPosted={() => setPageNumber(0)}
        user={user}
        lastPostID={postState.posts.length + 1}
      />
      <section id="mobile-change-language">
        <RenderSiteLanguages />
      </section>
      <Login onLogin={onLogin} user={user} />
    </ManageContents>
  );
}
