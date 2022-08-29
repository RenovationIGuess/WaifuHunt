import { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import { userReducer } from "../reducers/usersReducer";
import { apiUrl, GET_ALL_USERS } from "./constants";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [userState, dispatch] = useReducer(userReducer, {
    users: [],
    usersLoading: true,
  });

  const loadAllUser = async () => {
    try {
      const response = await axios.get(`${apiUrl}/user/edit/allusers`);
      if (response.data.success) {
        dispatch({
          type: GET_ALL_USERS,
          payload: response.data.users,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => loadAllUser(), []);

  // Context data
  const userContextData = {
    loadAllUser,
    userState,
  };

  // Return provider
  return (
    <UserContext.Provider value={userContextData}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
