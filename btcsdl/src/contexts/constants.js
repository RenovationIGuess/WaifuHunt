export const apiUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8000/api"
    : "https://secret-shore-34531.herokuapp.com/api";

export const LOCAL_STORAGE_TOKEN_NAME = "waifu-hunt";
export const TIME_STORAGE = "time-counter";
export const ROLL_STORAGE = "roll-counter";

export const WAIFU_LOADED_SUCCESS = "WAIFU_LOADED_SUCCESS";
export const WAIFU_LOADED_FAILED = "WAIFU_LOADED_FAILED";
export const ADD_WAIFU = "ADD_WAIFU";
export const FIND_ONE_WAIFU = "FIND_ONE_WAIFU";
export const EDIT_WAIFU = "EDIT_WAIFU";
export const DELETE_WAIFU = "DELETE_WAIFU";
export const INTERVAL_ID = "INTERVAL_ID";
export const CREATE_POST = "CREATE_POST";
export const POST_LOADED_SUCCESS = "POST_LOADED_SUCCESS";
export const POST_LOADED_FAILED = "POST_LOADED_FAILED";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = "DELETE_POST";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const LIKE_POST = "LIKE_POST";
export const UNLIKE_POST = "UNLIKE_POST";
export const COMMENT_POST = "COMMENT_POST";
