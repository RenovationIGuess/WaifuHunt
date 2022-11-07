import {
  POST_LOADED_SUCCESS,
  POST_LOADED_FAILED,
  CREATE_POST,
  UNLIKE_POST,
  LIKE_POST,
  /* COMMENT_POST, */
  EDIT_POST,
  DELETE_POST,
  /* DELETE_POST_CMT, */
} from "../contexts/constants";

export const postReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case POST_LOADED_SUCCESS:
      return {
        ...state,
        posts: payload,
        postsLoading: false,
      };
    case POST_LOADED_FAILED:
      return {
        ...state,
        posts: [],
        postsLoading: false,
      };
    case CREATE_POST:
      return {
        ...state,
        posts: [...state.posts, payload],
      };
    case LIKE_POST:
      return {
        ...state,
        post: { ...state.post, ...payload },
        posts: state.posts.map((item) => {
          if (item.postid === payload.postid) {
            item = { ...item, ...payload };
          }
          return item;
        }),
      };
    case UNLIKE_POST:
      return {
        ...state,
        post: { ...state.post, ...payload },
        posts: state.posts.map((item) => {
          if (item.postid === payload.postid) {
            item = { ...item, ...payload };
          }
          return item;
        }),
      };
    /* case COMMENT_POST:
      return {
        ...state,
        post: { ...state.post, ...payload },
        posts: state.posts.map((item) => {
          if (item.postid === payload.postid) {
            item = { ...item, ...payload };
          }
          return item;
        }),
      }; */
    case EDIT_POST:
      return {
        ...state,
        post: { ...state.post, ...payload },
        posts: state.posts.map((item) => {
          if (item.postid === payload.postid) {
            item = { ...item, ...payload };
          }
          return item;
        }),
      };
    /* case DELETE_POST_CMT:
      return {
        ...state,
        post: { ...state.post, ...payload },
        posts: state.posts.map((item) => {
          if (item.postid === payload.postid) {
            item = { ...item, ...payload };
          }
          return item;
        }),
      }; */
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.postid !== payload),
      };
    default:
      return state;
  }
};
