import {
  WAIFU_LOADED_SUCCESS,
  WAIFU_LOADED_FAILED,
  ADD_WAIFU,
  FIND_ONE_WAIFU,
  EDIT_WAIFU,
  DELETE_WAIFU,
} from "../contexts/constants";

export const waifuReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case WAIFU_LOADED_SUCCESS:
      return {
        ...state,
        waifus: payload,
        waifusLoading: false,
      };
    case WAIFU_LOADED_FAILED:
      return {
        ...state,
        waifus: [],
        waifusLoading: false,
      };
    case ADD_WAIFU:
      return {
        ...state,
        waifus: [...state.waifus, payload],
      };
    case FIND_ONE_WAIFU:
      return {
        ...state,
        waifu: {...payload},
        waifuLoading: false,
      };
    case EDIT_WAIFU:
      return {
        ...state,
        waifu: {...state.waifu, ...payload},
      }
    case DELETE_WAIFU:
      return {
        ...state,
        waifus: state.waifus.filter(waifu => waifu.waifuid !== payload),
      }
    default:
      return state;
  }
};
