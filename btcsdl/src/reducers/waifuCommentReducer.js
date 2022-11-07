import {
  GET_ALL_WAIFU_CMT,
  CREATE_WAIFU_CMT,
  LIKE_WAIFU_CMT,
  UNLIKE_WAIFU_CMT,
  /* REPLY_WAIFU_CMT, */
  DELETE_WAIFU_CMT,
  EDIT_WAIFU_CMT,
} from "../contexts/constants";

export const waifuCommentReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_WAIFU_CMT:
      return {
        ...state,
        comments: payload,
        commentsLoading: false,
      };
    case CREATE_WAIFU_CMT:
      return {
        ...state,
        comments: [...state.comments, payload],
      };
    case LIKE_WAIFU_CMT:
      return {
        ...state,
        comments: state.comments.map((item) => {
          if (item.commentid === payload.commentid) {
            item = { ...item, ...payload };
          }
          return item;
        }),
      };
    case UNLIKE_WAIFU_CMT:
      return {
        ...state,
        comments: state.comments.map((item) => {
          if (item.commentid === payload.commentid) {
            item = { ...item, ...payload };
          }
          return item;
        }),
      };
    /* case REPLY_WAIFU_CMT:
      return {
        ...state,
        comment: { ...state.comment, ...payload },
        comments: state.comments.map((item) => {
          if (item.commentid === payload.commentid) {
            item = { ...item, ...payload }
          }
          return item;
        })
      }; */
    case EDIT_WAIFU_CMT:
      return {
        ...state,
        comments: state.comments.map((item) => {
          if (item.commentid === payload.commentid) {
            item = { ...item, ...payload };
          }
          return item;
        }),
      };
    case DELETE_WAIFU_CMT:
      return {
        ...state,
        comments: state.comments.filter((c) => c.commentid !== payload),
      };
    default:
      return state;
  }
};
