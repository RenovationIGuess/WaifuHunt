import { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import { authReducer } from "../reducers/authReducer";
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from "./constants";
import setAuthToken from "../utils/setAuthToken";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {
    authLoading: true,
    isAuthenticated: false,
    user: null,
  });

  // Authenticated User
  const loadUser = async () => {
    if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
      setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME]);
    }

    try {
      const response = await axios.get(`${apiUrl}/auth`);
      await axios.patch(`${apiUrl}/user/edit/title`);
      if (response.data.success) {
        dispatch({
          type: "SET_AUTH",
          payload: {
            isAuthenticated: true,
            user: response.data.user,
          },
        });
      }
    } catch (err) {
      localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
      setAuthToken(null);
      dispatch({
        type: "SET_AUTH",
        payload: {
          isAuthenticated: false,
          user: null,
        },
      });
    }
  };

  useEffect(() => loadUser(), []);

  // Login
  const loginUser = async (userForm) => {
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, userForm);
      if (response.data.success) {
        localStorage.setItem(
          LOCAL_STORAGE_TOKEN_NAME,
          response.data.accessToken
        );
      }
      await loadUser();
      return response.data;
    } catch (err) {
      // Loi co chu dich - success, message
      if (err.response.data) return err.response.data;
      else
        return {
          success: false,
          message: err.message,
        };
    }
  };

  // Register
  const registerUser = async (userForm) => {
    try {
      const response = await axios.post(`${apiUrl}/auth/register`, userForm);
      if (response.data.success) {
        localStorage.setItem(
          LOCAL_STORAGE_TOKEN_NAME,
          response.data.accessToken
        );
      }
      await loadUser();
      return response.data;
    } catch (err) {
      // Loi co chu dich - success, message
      if (err.response.data) return err.response.data;
      else
        return {
          success: false,
          message: err.message,
        };
    }
  };

  // Log out
  const logoutUser = () => {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
    dispatch({
      type: "SET_AUTH",
      payload: { isAuthenticated: false, user: null },
    });
  };

  // const change avatar
  const changeAva = async (userAva) => {
    try {
      const response = await axios.patch(`${apiUrl}/user/edit/ava`, userAva);
      await loadUser();
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  // change Background
  const changeBg = async (userBg) => {
    try {
      const response = await axios.patch(
        `${apiUrl}/user/edit/background`,
        userBg
      );
      await loadUser();
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  const changeInfo = async (userInfo) => {
    try {
      const response = await axios.patch(`${apiUrl}/user/edit/info`, userInfo);
      await loadUser();
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  const rollAndGetWaifu = async (waifuId) => {
    try {
      const response = await axios.patch(
        `${apiUrl}/user/edit/getwaifu`,
        waifuId
      );
      await loadUser();
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  const addWishlist = async (waifuId) => {
    try {
      const response = await axios.patch(
        `${apiUrl}/user/edit/wishwaifu`,
        waifuId
      );
      await loadUser();
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  const removeWishlist = async (waifuId) => {
    console.log(waifuId);
    try {
      const response = await axios.patch(`${apiUrl}/user/edit/unwish`, waifuId);
      await loadUser();
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  const deleteWaifu = async (waifuId) => {
    try {
      const response = await axios.patch(
        `${apiUrl}/user/edit/delwaifu`,
        waifuId
      );
      await loadUser();
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  const increaseRoll = async () => {
    try {
      const response = await axios.patch(`${apiUrl}/user/edit/incroll`);
      await loadUser();
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  const followUser = async (followId) => {
    try {
      const response = await axios.patch(
        `${apiUrl}/user/edit/follow/${followId.followid}`,
        followId
      );
      await loadUser();
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  const unfollowUser = async (followId) => {
    try {
      const response = await axios.patch(
        `${apiUrl}/user/edit/unfollow/${followId.followid}`,
        followId
      );
      await loadUser();
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  // Context data
  const authContextData = {
    loginUser,
    registerUser,
    logoutUser,
    changeAva,
    changeBg,
    changeInfo,
    rollAndGetWaifu,
    addWishlist,
    removeWishlist,
    deleteWaifu,
    increaseRoll,
    followUser,
    unfollowUser,
    authState,
  };

  // Return provider
  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
