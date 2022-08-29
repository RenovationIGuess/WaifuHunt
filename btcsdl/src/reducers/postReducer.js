import {
  POST_LOADED_SUCCESS,
  POST_LOADED_FAILED,
  CREATE_POST,
  UNLIKE_POST,
  LIKE_POST,
  COMMENT_POST,
  EDIT_POST,
  DELETE_POST,
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
      };
    case UNLIKE_POST:
      return {
        ...state,
        post: { ...state.post, ...payload },
      };
    case COMMENT_POST:
      return {
        ...state,
        post: { ...state.post, ...payload },
      };
    case EDIT_POST:
      return {
        ...state,
        post: { ...state.post, ...payload },
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.postid !== payload),
      };
    default:
      return state;
  }
};
