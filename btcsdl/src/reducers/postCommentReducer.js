import {
  DELETE_POST_CMT,
  EDIT_POST_CMT,
  GET_ALL_POST_CMT,
  LIKE_POST_CMT,
  UNLIKE_POST_CMT,
  UPLOAD_POST_CMT,
} from "../contexts/constants";

export const postCommentReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_POST_CMT:
      return {
        ...state,
        comments: payload,
        commentsLoading: false,
      };
    case UPLOAD_POST_CMT:
      return {
        ...state,
        comments: [...state.comments, payload],
      };
    case LIKE_POST_CMT:
      return {
        ...state,
        comments: state.comments.map((item) => {
          if (item.postcommentid === payload.postcommentid) {
            item = { ...item, ...payload };
          }
          return item;
        }),
      };
    case UNLIKE_POST_CMT:
      return {
        ...state,
        comments: state.comments.map((item) => {
          if (item.postcommentid === payload.postcommentid) {
            item = { ...item, ...payload };
          }
          return item;
        }),
      };
    case EDIT_POST_CMT:
      return {
        ...state,
        comments: state.comments.map((item) => {
          if (item.postcommentid === payload.postcommentid) {
            item = { ...item, ...payload };
          }
          return item;
        }),
      };
    case DELETE_POST_CMT:
      return {
        ...state,
        comments: state.comments.filter((c) => c.postcommentid !== payload),
      };
    default:
      return state;
  }
};
