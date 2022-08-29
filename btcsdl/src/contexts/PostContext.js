import { createContext, useReducer } from "react";
import { postReducer } from "../reducers/postReducer";
import {
  apiUrl,
  POST_LOADED_SUCCESS,
  POST_LOADED_FAILED,
  CREATE_POST,
  LIKE_POST,
  UNLIKE_POST,
  COMMENT_POST,
  DELETE_POST,
  EDIT_POST,
  /* DELETE_POST, */
} from "./constants";
import axios from "axios";

export const PostContext = createContext();

const PostContextProvider = ({ children }) => {
  // State
  // The change state is use to cause re-fetch when delete/create is proc
  const [postState, dispatch] = useReducer(postReducer, {
    post: {},
    postLoading: true,
    posts: [],
    postsLoading: true,
  });

  // Get all posts
  const getPosts = async () => {
    try {
      const response = await axios.get(`${apiUrl}/post`);
      if (response.data.success) {
        dispatch({
          type: POST_LOADED_SUCCESS,
          payload: response.data.posts,
        });
      }
    } catch (err) {
      dispatch({ type: POST_LOADED_FAILED });
      return err.response.data
        ? err.response.data
        : { success: false, message: "Server error" };
    }
  };

  // Create a new post
  const createPost = async (newPost) => {
    try {
      const response = await axios.post(`${apiUrl}/post/create`, newPost);
      if (response.data.success) {
        dispatch({ type: CREATE_POST, payload: response.data.newPost });
        return response.data;
      }
    } catch (err) {
      if (err.response.data) return err.response.data;
      else {
        return {
          success: false,
          message: err.message,
        };
      }
    }
  };

  // handle like post action
  const likePost = async (postId) => {
    try {
      const response = await axios.patch(
        `${apiUrl}/post/like/${postId}`,
        postId
      );

      if (response.data.success) {
        dispatch({ type: LIKE_POST, payload: response.data.updatedPost });
        return response.data;
      }
    } catch (err) {
      console.log(err);
    }
  };

  // handle unlike post action
  const unlikePost = async (postId) => {
    try {
      const response = await axios.patch(
        `${apiUrl}/post/unlike/${postId}`,
        postId
      );

      if (response.data.success) {
        dispatch({ type: UNLIKE_POST, payload: response.data.updatedPost });
        return response.data;
      }
    } catch (err) {
      console.log(err);
    }
  };

  // handle comment
  const commentPost = async (postComment) => {
    try {
      const response = await axios.patch(
        `${apiUrl}/post/comment/${postComment.postid}`,
        postComment
      );

      if (response.data.success) {
        dispatch({ type: COMMENT_POST, payload: response.data.updatedPost });
        return response.data;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const editPost = async (editedPost) => {
    try {
      const response = await axios.patch(`${apiUrl}/post/edit/${editedPost.postid}`, editedPost)
      if (response.data.success) {
        dispatch({ type: EDIT_POST, payload: response.data.updatedPost })
        return response.data
      }
    } catch (err) {
      if (err.response.data) return err.response.data;
      else {
        return {
          success: false,
          message: err.message,
        };
      }
    }
  };

  const deletePost = async (postId) => {
    try {
      const response = await axios.delete(
        `${apiUrl}/post/delete/${postId}`,
        { data: { postid: postId } }
      );
      if (response.data.success) {
        dispatch({ type: DELETE_POST, payload: postId });
        return response.data;
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Context data
  const postContextData = {
    postState,
    getPosts,
    createPost,
    likePost,
    unlikePost,
    commentPost,
    editPost,
    deletePost,
  };

  // Return provider
  return (
    <PostContext.Provider value={postContextData}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
