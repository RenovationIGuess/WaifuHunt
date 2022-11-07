import { createContext, useReducer } from "react";
import { waifuReducer } from "../reducers/waifuReducer";
import {
  apiUrl,
  WAIFU_LOADED_SUCCESS,
  WAIFU_LOADED_FAILED,
  ADD_WAIFU,
  FIND_ONE_WAIFU,
  EDIT_WAIFU,
  RATE_WAIFU,
  DELETE_WAIFU,
  LOADING_NEW_WAIFU,
} from "./constants";
import axios from "axios";

export const WaifuContext = createContext();

const WaifuContextProvider = ({ children }) => {
  // State
  const [waifuState, dispatch] = useReducer(waifuReducer, {
    waifu: {},
    waifuLoading: true,
    waifus: [],
    waifusLoading: true,
  });

  const setLoadingChange = () => {
    dispatch({ type: LOADING_NEW_WAIFU });
  }

  // Get all waifus
  const getWaifus = async () => {
    try {
      const response = await axios.get(`${apiUrl}/waifu`);
      if (response.data.success) {
        dispatch({
          type: WAIFU_LOADED_SUCCESS,
          payload: response.data.waifus,
        });
      }
    } catch (err) {
      dispatch({ type: WAIFU_LOADED_FAILED });
      return err.response.data
        ? err.response.data
        : { success: false, message: "Server error" };
    }
  };

  // Get waifu using id
  const getCertainWaifus = async (waifuId) => {
    try {
      const response = await axios.get(`${apiUrl}/waifu/${waifuId}`, waifuId);
      dispatch({
        type: FIND_ONE_WAIFU,
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const createWaifu = async (newWaifu) => {
    try {
      const response = await axios.post(`${apiUrl}/waifu/create`, newWaifu);
      if (response.data.success) {
        dispatch({ type: ADD_WAIFU, payload: response.data.newWaifu });
        return response.data;
      }
      /* await getWaifus(); */
    } catch (err) {
      if (err.response.data) return err.response.data;
      else {
        return {
          success: false,
          message: err.message,
        };
      }
    }
  };

  const editWaifu = async (editedWaifu, waifuId) => {
    try {
      const response = await axios.patch(
        `${apiUrl}/waifu/edit/${waifuId}`,
        editedWaifu
      );
      if (response.data.success) {
        dispatch({ type: EDIT_WAIFU, payload: response.data.updatedWaifu });
        return response.data;
      }
      /* await getWaifus(); */
    } catch (err) {
      if (err.response.data) return err.response.data;
      else {
        return {
          success: false,
          message: err.message,
        };
      }
    }
  };

  const rateWaifu = async (waifuId) => {
    try {
      const response = await axios.patch(
        `${apiUrl}/waifu/rating/${waifuId.waifuid}`,
        waifuId
      );
      if (response.data.success) {
        dispatch({ type: RATE_WAIFU, payload: response.data.updatedWaifu });
        return response.data;
      }
    } catch (err) {
      console.log(err);
    }
  }

  const deleteWaifu = async (waifuId) => {
    try {
      const response = await axios.delete(
        `${apiUrl}/waifu/delete/${waifuId}`,
        { data: { waifuid: waifuId } }
      );
      if (response.data.success) {
        dispatch({ type: DELETE_WAIFU, payload: waifuId });
        /* console.log(response.data) */
        return response.data;
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Context data
  const waifuContextData = {
    waifuState,
    getWaifus,
    createWaifu,
    getCertainWaifus,
    editWaifu,
    deleteWaifu,
    rateWaifu,
    setLoadingChange,
  };

  // Return provider
  return (
    <WaifuContext.Provider value={waifuContextData}>
      {children}
    </WaifuContext.Provider>
  );
};

export default WaifuContextProvider;
