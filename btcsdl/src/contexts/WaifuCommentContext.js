import { createContext, useReducer } from "react";
import { waifuCommentReducer } from "../reducers/waifuCommentReducer";
import {
  apiUrl,
  GET_ALL_WAIFU_CMT,
  CREATE_WAIFU_CMT,
  LIKE_WAIFU_CMT,
  UNLIKE_WAIFU_CMT,
  REPLY_WAIFU_CMT,
  DELETE_WAIFU_CMT,
  EDIT_WAIFU_CMT,
} from "./constants";
import axios from "axios";

export const WaifuCommentContext = createContext();

const WaifuCommentContextProvider = ({ children }) => {
  // State
  // The change state is use to cause re-fetch when delete/create is proc
  const [waifuCommentState, dispatch] = useReducer(waifuCommentReducer, {
    comments: [],
    commentsLoading: true,
  });

  // Get all waifu comments
  const getAllWaifuComments = async () => {
    try {
      const response = await axios.get(`${apiUrl}/comment/waifu/all`);
      if (response.data.success) {
        dispatch({
          type: GET_ALL_WAIFU_CMT,
          payload: response.data.allWaifuComments,
        });
      }
    } catch (err) {
      return err.response.data
        ? err.response.data
        : { success: false, message: "Server error" };
    }
  };

  // Create a new comment
  const postNewComment = async (newWaifuComment) => {
    try {
      const response = await axios.post(
        `${apiUrl}/comment/waifu/new`,
        newWaifuComment
      );
      if (response.data.success) {
        dispatch({ type: CREATE_WAIFU_CMT, payload: response.data.newComment });
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

  // handle like comment action
  const likeComment = async (commentId) => {
    try {
      const response = await axios.patch(
        `${apiUrl}/comment/waifu/like`,
        commentId
      );
      if (response.data.success) {
        dispatch({
          type: LIKE_WAIFU_CMT,
          payload: response.data.updatedComment,
        });
        return response.data;
      }
    } catch (err) {
      console.log(err);
    }
  };

  // handle unlike post action
  const unlikeComment = async (commentId) => {
    try {
      const response = await axios.patch(
        `${apiUrl}/comment/waifu/unlike`,
        commentId
      );

      if (response.data.success) {
        dispatch({
          type: UNLIKE_WAIFU_CMT,
          payload: response.data.updatedComment,
        });
        return response.data;
      }
    } catch (err) {
      console.log(err);
    }
  };

  // handle reply comment
  /* const replyComment = async (commentReply) => {
    try {
      const response = await axios.patch(
        `${apiUrl}/comment/waifu/reply`,
        commentReply
      );

      if (response.data.success) {
        // dispatch({ type: REPLY_WAIFU_CMT, payload: response.data.updatedComment });
        return response.data;
      }
    } catch (err) {
      console.log(err);
    }
  }; */

  const editWaifuComment = async (commentEdit) => {
    try {
      const response = await axios.patch(
        `${apiUrl}/comment/waifu/edit/${commentEdit.commentid}`,
        commentEdit
      );
      if (response.data.success) {
        dispatch({
          type: EDIT_WAIFU_CMT,
          payload: response.data.updatedComment,
        });
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

  const deleteComment = async (commentId) => {
    try {
      const response = await axios.delete(`${apiUrl}/comment/waifu/delete`, {
        data: { commentid: commentId },
      });
      if (response.data.success) {
        dispatch({ type: DELETE_WAIFU_CMT, payload: commentId });
        return response.data;
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Context data
  const waifuCommentContextData = {
    waifuCommentState,
    /* replyComment, */
    likeComment,
    unlikeComment,
    getAllWaifuComments,
    postNewComment,
    deleteComment,
    editWaifuComment,
  };

  // Return provider
  return (
    <WaifuCommentContext.Provider value={waifuCommentContextData}>
      {children}
    </WaifuCommentContext.Provider>
  );
};

export default WaifuCommentContextProvider;
