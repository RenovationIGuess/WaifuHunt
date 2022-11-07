import { createContext, useReducer } from "react";
import { postCommentReducer } from "../reducers/postCommentReducer";
import {
  apiUrl,
  DELETE_POST_CMT,
  EDIT_POST_CMT,
  GET_ALL_POST_CMT,
  LIKE_POST_CMT,
  UNLIKE_POST_CMT,
  UPLOAD_POST_CMT,
} from "./constants";
import axios from "axios";

export const PostCommentContext = createContext();

const PostCommentContextProvider = ({ children }) => {
  const [postCommentState, dispatch] = useReducer(postCommentReducer, {
    comments: [],
    commentsLoading: true,
  });

  // GET: get all the post comments
  const getAllPostComments = async () => {
    try {
      const response = await axios.get(`${apiUrl}/comment/post/all`);
      if (response.data.success) {
        dispatch({
          type: GET_ALL_POST_CMT,
          payload: response.data.allPostComments,
        });
      }
    } catch (err) {
      return err.response.data
        ? err.response.data
        : { success: false, message: "Server error" };
    }
  };

  // Upload a comment
  const uploadPostComment = async (newComment) => {
    try {
      const response = await axios.post(
        `${apiUrl}/comment/post/new`,
        newComment
      );
      if (response.data.success) {
        dispatch({ type: UPLOAD_POST_CMT, payload: response.data.newComment });
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

  // Like a comment
  const likePostComment = async (commentId) => {
    try {
      const response = await axios.patch(
        `${apiUrl}/comment/post/like`,
        commentId
      );
      if (response.data.success) {
        dispatch({
          type: LIKE_POST_CMT,
          payload: response.data.updatedComment,
        });
        return response.data;
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Unlike a comment
  const unlikePostComment = async (commentId) => {
    try {
      const response = await axios.patch(
        `${apiUrl}/comment/post/unlike`,
        commentId
      );
      if (response.data.success) {
        dispatch({
          type: UNLIKE_POST_CMT,
          payload: response.data.updatedComment,
        });
        return response.data;
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Edit post content
  const editPostComment = async (commentEdit) => {
    try {
      const response = await axios.patch(
        `${apiUrl}/comment/post/edit/${commentEdit.postcommentid}`,
        commentEdit
      );
      if (response.data.success) {
        dispatch({
          type: EDIT_POST_CMT,
          payload: response.data.updatedComment,
        });
        return response.data;
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Delete a post comment
  const deletePostComment = async (commentId) => {
    try {
      const response = await axios.delete(`${apiUrl}/comment/post/delete`, {
        data: { postcommentid: commentId },
      });
      if (response.data.success) {
        dispatch({ type: DELETE_POST_CMT, payload: commentId });
        return response.data;
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Context data
  const postCommentContextData = {
    postCommentState,
    getAllPostComments,
    uploadPostComment,
    likePostComment,
    unlikePostComment,
    editPostComment,
    deletePostComment,
  };

  // Return the provider
  return (
    <PostCommentContext.Provider value={postCommentContextData}>
      {children}
    </PostCommentContext.Provider>
  );
};

export default PostCommentContextProvider;
