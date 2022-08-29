import { GET_ALL_USERS } from "../contexts/constants";

export const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_USERS:
      return {
        ...state,
        usersLoading: false,
        users: payload,
      };
    default:
      return state;
  }
};
