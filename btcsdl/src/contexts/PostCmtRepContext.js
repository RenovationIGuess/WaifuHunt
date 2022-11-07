import { createContext, useReducer } from "react";
import { postCommentReplyReducer } from "../reducers/postCmtRepReducer";
import axios from "axios";
import {
  apiUrl,
  DELETE_POST_CMT_REP,
  EDIT_POST_CMT_REP,
  GET_ALL_POST_CMT_REP,
  LIKE_POST_CMT_REP,
  UNLIKE_POST_CMT_REP,
  UPLOAD_POST_CMT_REP,
} from "./constants";

export const PostCommentReplyContext = createContext();

const PostCommentReplyContextProvider = ({ children }) => {
  const [postCommentReplyState, dispatch] = useReducer(
    postCommentReplyReducer,
    {
      replies: [],
      repliesLoading: true,
    }
  );

  // GET all the replies of a post comment
  const getAllPostCommentReplies = async () => {
    try {
      const response = await axios.get(`${apiUrl}/comment/post/reply/all`);
      if (response.data.success) {
        dispatch({
          type: GET_ALL_POST_CMT_REP,
          payload: response.data.allPostCommentReplies,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Upload a reply
  const uploadPostCommentReply = async (newCommentReply) => {
    try {
      const response = await axios.post(
        `${apiUrl}/comment/post/reply/new`,
        newCommentReply
      );
      if (response.data.success) {
        dispatch({
          type: UPLOAD_POST_CMT_REP,
          payload: response.data.newReply,
        });
        return response.data;
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Like
  const likePostCommentReply = async (postReplyId) => {
    try {
      const response = await axios.patch(
        `${apiUrl}/comment/post/reply/like`,
        postReplyId
      );
      if (response.data.success) {
        dispatch({
          type: LIKE_POST_CMT_REP,
          payload: response.data.updatedReply,
        });
        return response.data;
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Unlike
  const unlikePostCommentReply = async (postReplyId) => {
    try {
      const response = await axios.patch(
        `${apiUrl}/comment/post/reply/unlike`,
        postReplyId
      );
      if (response.data.success) {
        dispatch({
          type: UNLIKE_POST_CMT_REP,
          payload: response.data.updatedReply,
        });
        return response.data;
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Edit reply content
  const editPostCommentReply = async (replyEdit) => {
    try {
      const response = await axios.patch(
        `${apiUrl}/comment/post/reply/edit/${replyEdit.postreplyid}`,
        replyEdit
      );
      if (response.data.success) {
        dispatch({
          type: EDIT_POST_CMT_REP,
          payload: response.data.updatedReply,
        });
        return response.data;
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Delete
  const deletePostCommentReply = async (replyId) => {
    try {
      const response = await axios.delete(
        `${apiUrl}/comment/post/reply/delete`,
        {
          data: { postreplyid: replyId },
        }
      );
      if (response.data.success) {
        dispatch({
          type: DELETE_POST_CMT_REP,
          payload: replyId,
        });
        return response.data;
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Context data
  const postCommentReplyContextData = {
    postCommentReplyState,
    getAllPostCommentReplies,
    likePostCommentReply,
    unlikePostCommentReply,
    uploadPostCommentReply,
    deletePostCommentReply,
    editPostCommentReply,
  };

  // Return provider
  return (
    <PostCommentReplyContext.Provider value={postCommentReplyContextData}>
      {children}
    </PostCommentReplyContext.Provider>
  );
};

export default PostCommentReplyContextProvider;
