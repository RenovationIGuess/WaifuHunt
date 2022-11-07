import {
  CHANGE_AVA,
  CHANGE_BG,
  CHANGE_INFO,
  ROLL_N_GET,
  ADD_WISHLIST,
  REMOVE_WISHLIST,
  DEL_WAIFULIST,
  INC_ROLL,
  FOLLOW_USER,
  UNFOLLOW_USER,
  GET_ALL_USERS,
  CHANGE_ROLE,
  DELETE_USER,
} from "../contexts/constants";

export const authReducer = (state, action) => {
  const {
    type,
    /* payload: { isAuthenticated, user }, */
    payload,
  } = action;

  switch (type) {
    case "SET_AUTH":
      return {
        ...state,
        authLoading: false,
        isAuthenticated: payload.isAuthenticated,
        user: payload.user,
      };
    case GET_ALL_USERS:
      return {
        ...state,
        usersLoading: false,
        users: payload,
      };
    case CHANGE_AVA:
      return {
        ...state,
        /* user: { ...state.user, ...payload }, */
        users: state.users.map((item) => {
          if (item.userid === payload.userid) {
            item = { ...item, ...payload };
          }
          return item;
        }),
      };
    case CHANGE_BG:
      return {
        ...state,
        /* user: { ...state.user, ...payload }, */
        users: state.users.map((item) => {
          if (item.userid === payload.userid) {
            item = { ...item, ...payload };
          }
          return item;
        }),
      };
    case CHANGE_INFO:
      return {
        ...state,
        /* user: { ...state.user, ...payload }, */
        users: state.users.map((item) => {
          if (item.userid === payload.userid) {
            item = { ...item, ...payload };
          }
          return item;
        }),
      };
    case ROLL_N_GET:
      return {
        ...state,
        /* user: { ...state.user, ...payload }, */
        users: state.users.map((item) => {
          if (item.userid === payload.userid) {
            item = { ...item, ...payload };
          }
          return item;
        }),
      };
    case ADD_WISHLIST:
      return {
        ...state,
        /* user: { ...state.user, ...payload }, */
        users: state.users.map((item) => {
          if (item.userid === payload.userid) {
            item = { ...item, ...payload };
          }
          return item;
        }),
      };
    case REMOVE_WISHLIST:
      return {
        ...state,
        /* user: { ...state.user, ...payload }, */
        users: state.users.map((item) => {
          if (item.userid === payload.userid) {
            item = { ...item, ...payload };
          }
          return item;
        }),
      };
    case DEL_WAIFULIST:
      return {
        ...state,
        /* user: { ...state.user, ...payload }, */
        users: state.users.map((item) => {
          if (item.userid === payload.userid) {
            item = { ...item, ...payload };
          }
          return item;
        }),
      };
    case INC_ROLL:
      return {
        ...state,
        /* user: { ...state.user, ...payload }, */
        users: state.users.map((item) => {
          if (item.userid === payload.userid) {
            item = { ...item, ...payload };
          }
          return item;
        }),
      };
    case FOLLOW_USER:
      return {
        ...state,
        /* user: { ...state.user, ...payload }, */
        users: state.users.map((item) => {
          if (item.userid === payload.userid) {
            item = { ...item, ...payload };
          }
          return item;
        }),
      };
    case UNFOLLOW_USER:
      return {
        ...state,
        /* user: { ...state.user, ...payload }, */
        users: state.users.map((item) => {
          if (item.userid === payload.userid) {
            item = { ...item, ...payload };
          }
          return item;
        }),
      };
    case CHANGE_ROLE:
      return {
        ...state,
        users: state.users.map((item) => {
          if (item.userid === payload.userid) {
            item = { ...item, ...payload };
          }
          return item;
        }),
      }
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((u) => u.userid !== payload),
      }
    default:
      return state;
  }
};
