import styled from "styled-components";
import { AiOutlineLike, AiFillLike, AiOutlineComment, AiFillEyeInvisible } from "react-icons/ai"
import { TiArrowSortedDown } from "react-icons/ti"
import { TbDotsVertical } from 'react-icons/tb'
import { Link as LinkScroll } from 'react-scroll'
import { Link as LinkRouter } from 'react-router-dom'

export const PostDetailHeader = styled.div`
  margin-bottom: 8px;
  height: 56px;
`

export const PostHeaderMask = styled.div`
	/* position: fixed;
	top: 105px; */
	z-index: 300;
	width: 608px;
`

export const PostHeaderWrap = styled.div`
	background-color: #fff;
	border-radius: 16px;
`

export const PostHeaderContent = styled.div`
	padding: 0 16px;
	font-weight: bold;
	height: 56px;
	display: flex;
	flex-direction: column;
`

export const PostHeaderMain = styled.div`
	display: flex;
	justify-content: space-between;
	flex: 1;
`

export const PostHeaderLeft = styled.div`
	flex: 1;
	max-width: 100%;
	overflow: hidden;
	display: flex;
	align-items: center;
`

export const PostHeaderLeftH1 = styled.h1`
	font-size: 16px;
	line-height: 24px;
	font-weight: bold;
	margin: 0;
	padding-right: 24px;
`

export const PostHeaderRight = styled.div`
	flex-shrink: 0;
	display: flex;
	align-items: center;
`

export const PostHeaderRightList = styled.div`
	margin-left: 16px;
	display: inline-flex;
`

// PostHeaderRight = PHR
export const PHRSelect = styled.div`
	height: 24px;
	position: relative;
`

export const PHRSelectContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	font-size: 14px;
	color: #8592a3;

	&:hover {
		color: #657ef8;
		cursor: pointer;
	}
`

export const PHRSpan = styled.span`
	line-height: 16px;
	display: inline-flex;
	flex-grow: 1;
	font-weight: bold;
`

export const PHRArrowIcon = styled(TiArrowSortedDown)`
	transform: ${props => props.isSelected ? 'rotate(0deg)' : 'rotate(-90deg)'};
	transition: all 0.3s ease;
	margin-left: 4px;
	line-height: 1;
	font-size: 16px;

	/* @keyframes rotate {
		0% {
			transform: rotate(-90deg);
		}
		100% {
			transform: rotate(0deg);
		}
	} */
`

export const PHRSelectMenu = styled.div`
	position: absolute;
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0px 12px 24px rgba(47, 63, 86, 0.2);
	bottom: -24px;
	right: -16px;
	z-index: 110;
	transform: translateY(100%);
	display: ${props => props.isSelected ? 'block' : 'none'};
`

export const PHRUl = styled.ul`
	padding: 8px 0;
	display: flex;
	flex-direction: column;
	overflow-y: auto;
  overflow-x: hidden;
  overscroll-behavior: contain;
	list-style: none;
`

export const PHRLi = styled.li`
	// #657ef8
	color: ${props => props.isSelected ? '#657ef8' : 'rgba(0,0,0,0.65)'};
	background-color: ${props => props.isSelected ? '#eff2ff' : '#fff'};
	display: flex;
	align-items: center;
	padding: 10px 12px;
	cursor: pointer;
	white-space: nowrap;
	margin: 4px;
	line-height: 20px;
	font-size: 14px;
	border-radius: 8px;
	list-style: none;

	&:hover {
		background-color: #eff2ff;
    color: #657ef8;
	}
`

export const PHRLiSpan = styled.span`
	flex-grow: 1;
	font-weight: 500;
	overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const ArticlePostStats = styled.div`
	display: flex;
	border-top: 1px solid #f1f4f9;
	margin-top: 16px;
	padding: 16px 0 4px;
	justify-content: space-evenly;
`

export const PostStatsItem = styled.div`
	display: flex;
	justify-content: center;
	width: 102px;
`

export const PostStatsIconLike = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2px;
	justify-content: center;
	position: relative;
	color: ${props => props.isLiked ? '#657ef8' : '#b2bdce'};

  &:hover {
    color: #657ef8;
    cursor: pointer;
  }
`

export const PostStatsIconComment = styled(LinkScroll)`
	display: flex;
	flex-direction: column;
	gap: 2px;
	align-items: center;
	justify-content: center;
	position: relative;
	color: #b2bdce;

  &:hover {
    color: #657ef8;
    cursor: pointer;
  }
`

export const PostIconLiked = styled(AiFillLike)`
  font-size: 30px;
  line-height: 1;
`

export const PostIconLike = styled(AiOutlineLike)`
  font-size: 30px;
  line-height: 1;
`

export const PostIconComment = styled(AiOutlineComment)`
  font-size: 30px;
  line-height: 1;
`

export const PostStatsSpan = styled.span`
	font-size: 12px;
	line-height: 16px;
`

export const PostReplyContainer = styled.div`
	margin-top: 16px;
	background: #fff;
	border-radius: 16px;
`

export const UserReplySection = styled.div`
	padding: 24px 16px 0;
`

export const UserReplyLabel = styled.span`
	color: #8592a3;
	margin-bottom: 8px;
	line-height: 20px;
	display: flex;
	align-items: center;
	font-size: 14px;
`

export const UserReplyBody = styled.div`
	height: 80px;
	border: ${props => props.borderChange ? '1px solid #657ef8' : '1px solid #f1f4f9'};
	border-radius: 8px;
	position: relative;
	transition: .3s border-color;

	&:hover {
		border-color: #657ef8;
	} 
`

export const UserReplyTextArea = styled.textarea`
	padding: 10px 16px 0; 
	border: none;
	z-index: 2;
	background-color: #fff;
	outline: none;
	border-radius: 8px;
	width: 100%;
	height: calc(100% - 20px);
	overflow-x: hidden;
	overflow-y: auto;
	resize: none;
`

export const UserReplyMaxCount = styled.span`
	position: absolute;
	bottom: 0px;
	right: 12px;
	color: #b2bdce;
	line-height: 20px;
	font-size: 14px;
	z-index: 100;
`

export const ReplyBoxFooter = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	margin-top: 8px;
	position: relative;
	/* height: 24px; */
	z-index: 120;
`

export const SendButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 24px;
	color: #657ef8;
	font-weight: bold;
	line-height: 30px;
	font-size: 14px;
	background-color: #e1e7ff;
	border: none;
	border-radius: 24px;
	transition: all 0.2s ease-in-out;

	&:hover {
		background-color: #657ef8;
		color: #fff;
		cursor: pointer;
	}
`

export const PostReplyList = styled.div`
	margin-top: 8px;
	background-color: #fff;
	border-radius: 16px;
`

export const ReplyListHeader = styled.div`
	padding: 10px 0;
	display: flex;
	align-items: center;
	margin: 0 16px;
	border-bottom: 1px solid #f1f4f9;
`

export const ReplyListItem = styled.div`
	font-size: 14px;
	font-weight: bold;
	color: #2f3f56;
	margin-right: 16px;
`

export const CommendCard = styled.div`
	display: flex;
	padding: 16px 16px 0;
	overflow: visible;
`

export const NoCommentsImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
`

export const NoCommentsImg = styled.img`
  width: 364px;
`

export const CommentCardAvatar = styled.div`
	width: 48px;
	height: 48px;
	margin-right: 12px;
	position: relative;
	display: inline-block;
`

export const CommentAvatar = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 50%;
	border: 1px solid #f1f4f9;
	vertical-align: top;
	background-color: #fff;
`

export const CommentCardContainer = styled.div`
	flex: 1;
	width: 0;
	position: relative;
	overflow: visible;
	border-bottom: 1px solid #f1f4f9;
	padding: bottom: 16px;
`

// CC === Comment Card for shortcut
export const CCHeader = styled.div`
	display: flex;
	align-items: center;
	padding: 4px 0;
`

export const CCAcount = styled(LinkRouter)`
	/* max-width: 350px; */
	flex: 1;
	display: inline-flex;
	align-items: center;
	text-decoration: none;
  outline: none;
	font-size: 16px;
	font-weight: bold;
	color: #2f3f56;
	line-height: 20px;
	overflow: hidden;
	text-overflow: ellipsis;
  white-space: nowrap;

	&:hover {
		color: #657ef8;
	}
`

export const CCOperation = styled.div`
	display: flex;
`

export const CCAction = styled.div`
	margin-left: 16px;
	position: relative;
	/* z-index: 100; */
`

export const CCActionIcon = styled(TbDotsVertical)`
	font-size: 24px;
	/* color: ${props => props.isSelected ? '#657ef8' : 'rgba(0,0,0,0.45)'}; */
	color: rgba(0,0,0,0.45);
	&:hover {
		cursor: pointer;
		color: #657ef8;
	}
`

export const CCSelectMenu = styled.div`
	display: ${props => props.isOn ? 'block' : 'none'};
	min-width: 200px;
	top: 35px;
	right: -6px;
	border-radius: 12px;
	padding: 0 8px;
	position: absolute;
	background-color: #fff;
	box-shadow: 0px 12px 24px rgba(47, 63, 86, 0.2);
	z-index: 100;
`

export const CCSelectMenuTitle = styled.div`
	font-size: 16px;
	font-weight: bold;
	padding: 10px 16px;
	line-height: 20px;
	/* border-bottom: 1px solid #f1f4f9; */
`

export const CCUl = styled.ul`
	padding: 0 0 8px 0;
	display: flex;
	flex-direction: column;
	overflow-y: auto;
	overflow-x: hidden;
	overscroll-behavior: contain;
	list-style: none;
`

export const CCLi = styled.li`
	padding: 8px 12px;
	margin: 0;
	border-radius: 12px;
	display: flex;
	align-items: center;
	white-space: no-wrap;
	line-height: 20px;
	color: rgba(0,0,0,0.65);
	list-style: none;

	&:hover {
		background-color: #eff2ff;
		color: #657ef8;
		cursor: pointer;
	}
`

export const NotVisible = styled(AiFillEyeInvisible)`
	font-size: 20px;
	margin-right: 8px;
	/* color: rgba(0,0,0,0.45); */
`

export const CCLiSpan = styled.span`
	font-size: 14px;
	line-height: 22px;
`

export const CCContent = styled.div`
	padding: 8px 0 12px;
	font-size: 0;
	line-height: 22px;
	color: #2f3f56;
	word-wrap: break-word;
  word-break: break-word;
	font-size: 14px;
  /* display: inline; */
`

export const EndOfCommentSection = styled.div`
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const Nomore = styled.div`
	font-size: 14px; 
	font-weight: normal;
	color: #b2bdce;
`