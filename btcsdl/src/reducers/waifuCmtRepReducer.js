import {
  DELETE_WAIFU_CMT_REP,
  EDIT_WAIFU_CMT_REP,
  GET_ALL_WAIFU_CMT_REP,
  LIKE_WAIFU_CMT_REP,
  UNLIKE_WAIFU_CMT_REP,
  UPLOAD_WAIFU_CMT_REP,
} from "../contexts/constants";

export const waifuCommentReplyReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_WAIFU_CMT_REP:
      return {
        ...state,
        replies: payload,
        repliesLoading: false,
      };
    case UPLOAD_WAIFU_CMT_REP:
      return {
        ...state,
        replies: [...state.replies, payload],
      };
    case LIKE_WAIFU_CMT_REP:
      return {
        ...state,
        replies: state.replies.map((item) => {
          if (item.replyid === payload.replyid) {
            item = { ...item, ...payload };
          }
          return item;
        }),
      };
    case UNLIKE_WAIFU_CMT_REP:
      return {
        ...state,
        replies: state.replies.map((item) => {
          if (item.replyid === payload.replyid) {
            item = { ...item, ...payload };
          }
          return item;
        }),
      };
    case EDIT_WAIFU_CMT_REP:
      return {
        ...state,
        replies: state.replies.map((item) => {
          if (item.replyid === payload.replyid) {
            item = { ...item, ...payload };
          }
          return item;
        }),
      };
    case DELETE_WAIFU_CMT_REP:
      return {
        ...state,
        replies: state.replies.filter((r) => r.replyid !== payload),
      };
  }
};
