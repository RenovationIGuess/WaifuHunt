export const apiUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8000/api"
    : "https://secret-shore-34531.herokuapp.com/api";

// Roll
export const LOCAL_STORAGE_TOKEN_NAME = "waifu-hunt";
export const TIME_STORAGE = "time-counter";
export const ROLL_STORAGE = "roll-counter";

// User
export const CHANGE_BG = "CHANGE_BG";
export const CHANGE_INFO = "CHANGE_INFO";
export const CHANGE_AVA = "CHANGE_AVA";
export const ROLL_N_GET = "ROLL_N_GET";
export const ADD_WISHLIST = "ADD_WISHLIST";
export const REMOVE_WISHLIST = "REMOVE_WISHLIST";
export const DEL_WAIFULIST = "DEL_WAIFULIST";
export const INC_ROLL = "INC_ROLL";
export const FOLLOW_USER = "FOLLOW_USER";
export const UNFOLLOW_USER = "UNFOLLOW_USER";
export const CHANGE_ROLE = "CHANGE_ROLE";
export const DELETE_USER = "DELETE_USER";

// Waifu
export const WAIFU_LOADED_SUCCESS = "WAIFU_LOADED_SUCCESS";
export const WAIFU_LOADED_FAILED = "WAIFU_LOADED_FAILED";
export const ADD_WAIFU = "ADD_WAIFU";
export const FIND_ONE_WAIFU = "FIND_ONE_WAIFU";
export const EDIT_WAIFU = "EDIT_WAIFU";
export const DELETE_WAIFU = "DELETE_WAIFU";
export const RATE_WAIFU = "RATE_WAIFU";
export const INTERVAL_ID = "INTERVAL_ID";
export const LOADING_NEW_WAIFU = "LOADING_NEW_WAIFU";

// Post
export const CREATE_POST = "CREATE_POST";
export const POST_LOADED_SUCCESS = "POST_LOADED_SUCCESS";
export const POST_LOADED_FAILED = "POST_LOADED_FAILED";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = "DELETE_POST";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const LIKE_POST = "LIKE_POST";
export const UNLIKE_POST = "UNLIKE_POST";

// WaifuComment
export const GET_ALL_WAIFU_CMT = "GET_ALL_WAIFU_CMT";
export const CREATE_WAIFU_CMT = "CREATE_WAIFU_CMT";
export const LIKE_WAIFU_CMT = "LIKE_WAIFU_CMT";
export const UNLIKE_WAIFU_CMT = "UNLIKE_WAIFU_CMT";
export const REPLY_WAIFU_CMT = "REPLY_WAIFU_CMT";
export const DELETE_WAIFU_CMT = "DELETE_WAIFU_CMT";
export const EDIT_WAIFU_CMT = "EDIT_WAIFU_CMT";

// WaifuCommentReply
export const GET_ALL_WAIFU_CMT_REP = "GET_ALL_WAIFU_CMT_REP";
export const UPLOAD_WAIFU_CMT_REP = "UPLOAD_WAIFU_CMT_REP";
export const LIKE_WAIFU_CMT_REP = "LIKE_WAIFU_CMT_REP";
export const UNLIKE_WAIFU_CMT_REP = "UNLIKE_WAIFU_CMT_REP";
export const DELETE_WAIFU_CMT_REP = "DELETE_WAIFU_CMT_REP";
export const EDIT_WAIFU_CMT_REP = "EDIT_WAIFU_CMT_REP";

// PostComment
export const GET_ALL_POST_CMT = "GET_ALL_POST_CMT";
export const UPLOAD_POST_CMT = "UPLOAD_POST_CMT";
export const LIKE_POST_CMT = "LIKE_POST_CMT";
export const UNLIKE_POST_CMT = "UNLIKE_POST_CMT";
export const DELETE_POST_CMT = "DELETE_POST_CMT";
export const EDIT_POST_CMT = "EDIT_POST_CMT";

// PostCommentReply
export const GET_ALL_POST_CMT_REP = "GET_ALL_POST_CMT_REP";
export const UPLOAD_POST_CMT_REP = "UPLOAD_POST_CMT_REP";
export const LIKE_POST_CMT_REP = "LIKE_POST_CMT_REP";
export const UNLIKE_POST_CMT_REP = "UNLIKE_POST_CMT_REP";
export const DELETE_POST_CMT_REP = "DELETE_POST_CMT_REP";
export const EDIT_POST_CMT_REP = "EDIT_POST_CMT_REP";
