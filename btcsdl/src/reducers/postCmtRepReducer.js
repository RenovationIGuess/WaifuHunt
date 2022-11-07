import {
  DELETE_POST_CMT_REP,
  EDIT_POST_CMT_REP,
  GET_ALL_POST_CMT_REP,
  LIKE_POST_CMT_REP,
  UNLIKE_POST_CMT_REP,
  UPLOAD_POST_CMT_REP,
} from "../contexts/constants";

export const postCommentReplyReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_POST_CMT_REP:
      return {
        ...state,
        replies: payload,
        repliesLoading: false,
      };
    case UPLOAD_POST_CMT_REP:
      return {
        ...state,
        replies: [...state.replies, payload],
      };
    case LIKE_POST_CMT_REP:
      return {
        ...state,
        replies: state.replies.map((item) => {
          if (item.postreplyid === payload.postreplyid) {
            item = { ...item, ...payload };
          }
          return item;
        }),
      };
    case UNLIKE_POST_CMT_REP:
      return {
        ...state,
        replies: state.replies.map((item) => {
          if (item.postreplyid === payload.postreplyid) {
            item = { ...item, ...payload };
          }
          return item;
        }),
      };
    case EDIT_POST_CMT_REP:
      return {
        ...state,
        replies: state.replies.map((item) => {
          if (item.postreplyid === payload.postreplyid) {
            item = { ...item, ...payload };
          }
          return item;
        }),
      };
    case DELETE_POST_CMT_REP:
      return {
        ...state,
        replies: state.replies.filter((r) => r.postreplyid !== payload),
      };
    default:
      return state;
  }
};
