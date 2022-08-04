export const apiUrl =
  /* "http://localhost:8000/api" */
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8000/api"
    : "https://secret-shore-34531.herokuapp.com/api";
/* ? "http://localhost:8000/api"
    : "https://enigmatic-tor-59304.herokuapp.com/api"; */
/* ? "https://enigmatic-tor-59304.herokuapp.com/api"
    : "http://localhost:8000/api"; */
// https://enigmatic-tor-59304.herokuapp.com/api
// https://enigmatic-tor-59304.herokuapp.com/
// http://localhost:8000/api

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
