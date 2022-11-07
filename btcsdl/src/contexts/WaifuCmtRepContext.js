import { createContext, useReducer } from "react";
import { waifuCommentReplyReducer } from "../reducers/waifuCmtRepReducer";
import axios from "axios"
import {
    apiUrl, DELETE_WAIFU_CMT_REP, EDIT_WAIFU_CMT_REP, GET_ALL_WAIFU_CMT_REP, LIKE_WAIFU_CMT_REP, UNLIKE_WAIFU_CMT_REP, UPLOAD_WAIFU_CMT_REP,

} from "./constants";

export const WaifuCommentReplyContext = createContext();

const WaifuCommentReplyContextProvider = ({ children }) => {
	const [waifuCommentReplyState, dispatch] = useReducer(
		waifuCommentReplyReducer,
		{
			replies: [],
			repliesLoading: true,
		}
	)

	// Get all replies
	const getAllWaifuCommentReplies = async () => {
		try {
			const response = await axios.get(`${apiUrl}/comment/waifu/reply/all`);
			if (response.data.success) {
				dispatch({
					type: GET_ALL_WAIFU_CMT_REP,
					payload: response.data.allWaifuCommentReplies,
				})
			}
		} catch (err) {
			console.log(err);
		}
	}

	// Upload a reply
	const uploadWaifuCommentReply = async (newCommentReply) => {
		try {
			const response = await axios.post(
				`${apiUrl}/comment/waifu/reply/new`,
				newCommentReply,
			)
			if (response.data.success) {
				dispatch({
					type: UPLOAD_WAIFU_CMT_REP,
					payload: response.data.newReply,
				})
				return response.data;
			}
		} catch (err) {
			console.log(err);
		}
	}

	// Like
	const likeWaifuCommentReply = async (waifuReplyId) => {
		try {
			const response = await axios.patch(
				`${apiUrl}/comment/waifu/reply/like`,
				waifuReplyId,
			)
			if (response.data.success) {
				dispatch({
					type: LIKE_WAIFU_CMT_REP,
					payload: response.data.updatedReply,
				})
				return response.data;
			}
		} catch (err) {
			console.log(err);
		}
	}

	// Unlike
	const unlikeWaifuCommentReply = async (waifuReplyId) => {
		try {
			const response = await axios.patch(
				`${apiUrl}/comment/waifu/reply/unlike`,
				waifuReplyId,
			)
			if (response.data.success) {
				dispatch({
					type: UNLIKE_WAIFU_CMT_REP,
					payload: response.data.updatedReply,
				})
				return response.data;
			}
		} catch (err) {
			console.log(err);
		}
	}

	// Edit
	const editWaifuCommentReply = async (replyEdit) => {
		try {
			const response = await axios.patch(
				`${apiUrl}/comment/waifu/reply/edit/${replyEdit.replyid}`,
				replyEdit,
			)
			if (response.data.success) {
				dispatch({
					type: EDIT_WAIFU_CMT_REP,
					payload: response.data.updatedReply,
				})
				return response.data;
			}
		} catch (err) {
			console.log(err);
		}
	}

	// Delete
	const deleteWaifuCommentReply = async (replyId) => {
		try {
			const response = await axios.delete(
				`${apiUrl}/comment/waifu/reply/delete`,
				{
					data: { replyid: replyId },
				}
			)
			if (response.data.success) {
				dispatch({
					type: DELETE_WAIFU_CMT_REP,
					payload: replyId,
				})
				return response.data;
			}
		} catch (err) {
			console.log(err);
		}
	}

	// Context data
	const waifuCommentReplyContextData = {
		waifuCommentReplyState,
		getAllWaifuCommentReplies,
		likeWaifuCommentReply,
		unlikeWaifuCommentReply,
		uploadWaifuCommentReply,
		editWaifuCommentReply,
		deleteWaifuCommentReply,
	}

	// Return provider
	return (
		<WaifuCommentReplyContext.Provider value={waifuCommentReplyContextData}>
			{children}
		</WaifuCommentReplyContext.Provider>
	)
}

export default WaifuCommentReplyContextProvider;