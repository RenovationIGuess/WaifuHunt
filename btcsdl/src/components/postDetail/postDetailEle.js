import styled from "styled-components";
import {
  AiOutlineLike,
  AiFillLike,
  AiOutlineComment,
  AiFillEyeInvisible,
} from "react-icons/ai";
import { RiUserUnfollowLine } from "react-icons/ri";
import { TiArrowSortedDown } from "react-icons/ti";
import { TbDotsVertical } from "react-icons/tb";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";
import { TbEdit } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";

export const PostDetailHeader = styled.div`
  margin-bottom: 8px;
  height: 56px;
`;

export const PostHeaderMask = styled.div`
  position: ${props => props.isFixed ? 'fixed' : ''};
	top: ${props => props.isFixed ? '105px' : ''};
  z-index: 200;
  width: 608px;
  background-color: #f5f6fb;
`;

export const PostHeaderWrap = styled.div`
  background-color: #fff;
  border-radius: ${(props) => (props.isLined ? "16px 16px 0 0" : "16px")};
`;

export const PostHeaderContent = styled.div`
  padding: 0 16px;
  font-weight: bold;
  height: 56px;
  display: flex;
  flex-direction: column;
  border-bottom: ${props => props.isLined ? '1px solid #f1f4f9' : ''};
`;

export const PostHeaderMain = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
`;

export const PostHeaderLeft = styled.div`
  flex: 1;
  max-width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

export const PostHeaderLeftH1 = styled.h1`
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
  margin: 0;
  padding-right: 24px;
`;

export const PostHeaderRight = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
`;

export const PostHeaderRightList = styled.div`
  margin-left: 16px;
  display: inline-flex;
`;

// PostHeaderRight = PHR
export const PHRSelect = styled.div`
  height: 24px;
  position: relative;
`;

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
`;

export const PHRSpan = styled.span`
  line-height: 16px;
  display: inline-flex;
  flex-grow: 1;
  font-weight: bold;
`;

export const PHRArrowIcon = styled(TiArrowSortedDown)`
  transform: ${(props) =>
    props.isSelected ? "rotate(0deg)" : "rotate(-90deg)"};
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
`;

export const PHRSelectMenu = styled.div`
  position: absolute;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 12px 24px rgba(47, 63, 86, 0.2);
  bottom: -24px;
  right: -16px;
  z-index: 110;
  transform: translateY(100%);
  display: ${(props) => (props.isSelected ? "block" : "none")};
`;

export const PHRUl = styled.ul`
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  overscroll-behavior: contain;
  list-style: none;
`;

export const PHRLi = styled.li`
  // #657ef8
  color: ${(props) => (props.isSelected ? "#657ef8" : "rgba(0,0,0,0.65)")};
  background-color: ${(props) => (props.isSelected ? "#eff2ff" : "#fff")};
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
`;

export const PHRLiSpan = styled.span`
  flex-grow: 1;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ArticlePostStats = styled.div`
  display: flex;
  border-top: 1px solid #f1f4f9;
  margin-top: 16px;
  padding: 16px 0 4px;
  justify-content: space-evenly;
`;

export const PostStatsItem = styled.div`
  display: flex;
  justify-content: center;
  width: 102px;
`;

export const PostStatsIconLike = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  justify-content: center;
  position: relative;
  color: ${(props) => (props.isLiked ? "#657ef8" : "#b2bdce")};

  &:hover {
    color: #657ef8;
    cursor: pointer;
  }
`;

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
`;

export const PostIconLiked = styled(AiFillLike)`
  font-size: 30px;
  line-height: 1;
`;

export const PostIconLike = styled(AiOutlineLike)`
  font-size: 30px;
  line-height: 1;
`;

export const PostIconComment = styled(AiOutlineComment)`
  font-size: 30px;
  line-height: 1;
`;

export const PostStatsSpan = styled.span`
  font-size: 12px;
  line-height: 16px;
`;

export const PostReplyContainer = styled.div`
  margin-top: 16px;
  background: #fff;
  border-radius: 16px;
`;

export const UserReplySection = styled.div`
  padding: 24px 16px 0;
`;

export const UserReplyLabel = styled.span`
  color: #8592a3;
  margin-bottom: 8px;
  line-height: 20px;
  display: flex;
  align-items: center;
  font-size: 14px;
`;

export const UserReplyBody = styled.div`
  height: 80px;
  border: ${(props) =>
    props.borderChange ? "1px solid #657ef8" : "1px solid #f1f4f9"};
  border-radius: 8px;
  position: relative;
  transition: 0.3s border-color;
  background-color: #fff;

  &:hover {
    border-color: #657ef8;
  }
`;

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
`;

export const UserReplyMaxCount = styled.span`
  position: absolute;
  bottom: 0px;
  right: 12px;
  color: #b2bdce;
  line-height: 20px;
  font-size: 14px;
  z-index: 100;
`;

export const ReplyBoxFooter = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: flex-end; */
  margin-top: 8px;
  position: relative;
  height: 30px;
  z-index: 120;
`;

export const CommentButtonWrap = styled.div`
  display: flex;
  align-items: center;
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
`;

export const CancelEditCmtButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  color: #8592a3;
  font-weight: bold;
  line-height: 30px;
  font-size: 14px;
  background-color: #dde3ec;
  border: none;
  border-radius: 24px;
  transition: all 0.2s ease-in-out;
  margin-right: 8px;

  &:hover {
    background-color: #8592a3;
    color: #fff;
    cursor: pointer;
  }
`;

export const PostReplyList = styled.div`
  margin-top: 8px;
  background-color: #fff;
  border-radius: 16px;
`;

export const ReplyListHeader = styled.div`
  padding: 10px 0;
  display: flex;
  align-items: center;
  margin: 0 16px;
  border-bottom: 1px solid #f1f4f9;
`;

export const ReplyListItem = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #2f3f56;
  margin-right: 16px;
`;

export const CommendCard = styled.div`
  display: flex;
  padding: 16px 16px 0;
  overflow: visible;
`;

export const NoCommentsImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
`;

export const NoCommentsImg = styled.img`
  width: 364px;
`;

export const CommentCardAvatar = styled.div`
  width: 48px;
  height: 48px;
  margin-right: 12px;
  position: relative;
  display: inline-block;
`;

export const RepliesAvatar = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 8px;
  margin-top: 4px;
  position: relative;
  display: inline-block;
`;

export const CommentAvatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid #f1f4f9;
  vertical-align: top;
  background-color: #fff;
`;

export const CommentCardContainer = styled.div`
  flex: 1;
  width: 0;
  position: relative;
  overflow: visible;
  border-bottom: 1px solid #f1f4f9;
  padding-bottom: 16px;
`;

export const RepliesContainer = styled.div`
  flex: 1;
  width: 0;
  position: relative;
  overflow: visible;
`;

// CC === Comment Card for shortcut
export const CCHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 0;
`;

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
`;

export const ReplyCardAccount = styled.div`
  flex-grow: 1;
  width: 0;
`;

export const ReplyCardRouter = styled(LinkRouter)`
  max-width: 350px;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  outline: none;
`;

export const RCRouterSpan = styled.span`
  color: #2f3f56;
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:hover {
    cursor: pointer;
    color: #657ef8;
  }
`;

export const CommentHostSpan = styled.span`
  color: #f3bb46;
  border: 1px solid #ffcf39;
  display: inline-flex;
  flex-shrink: 0;
  border-radius: 3px;
  padding: 0 4px;
  font-size: 12px;
  margin-left: 8px;
  height: 16px;
  align-items: center;
`;

export const RCReplyRouterSpan = styled.span`
  font-size: 14px;
  font-weight: bold;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  color: #657ef8;
`;

export const RCFloor = styled.div`
  margin-top: 4px;
  font-size: 12px;
  line-height: 16px;
  color: #b2bdce;
  display: flex;
`;

export const RCFloorTags = styled.div`
  flex: 1;
  width: 0;
  padding-right: 16px;
  margin-top: -6px;
  margin-left: 4px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  border: 0 solid rgba(0, 0, 0, 0);
`;

export const RCOpBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* margin-bottom: 12px; */
`;

export const RCTime = styled.span`
  color: #b2bdce;
  font-size: 12px;
`;

export const RCBottomRight = styled.div`
  display: flex;
  align-items: center;
`;

export const RCItem = styled.div`
  display: flex;
  align-items: center;
  line-height: 14px;
  margin-right: 12px;
  color: rgba(0, 0, 0, 0.45);

  &:hover {
    cursor: pointer;
    color: #657ef8;
  }
`;

export const RCItemIconLike = styled(AiOutlineLike)`
  font-size: 20px;
  margin-right: 4px;
  display: inline-block;
  line-height: 1;
`;

export const RCItemIconLiked = styled(AiFillLike)`
  font-size: 20px;
  margin-right: 4px;
  display: inline-block;
  line-height: 1;
`;

export const RCItemIconComment = styled(AiOutlineComment)`
  font-size: 20px;
  margin-right: 4px;
  display: inline-block;
  line-height: 1;
`;

export const RCItemSpan = styled.span`
  display: inline-block;
  line-height: 16px;
  font-size: 12px;
`;

export const ReplyCardReplies = styled.div`
  padding: 0 12px;
  background-color: #f5f6fb;
  border-radius: 8px;
  margin-top: 12px;
`;

export const RCInnerReply = styled.div`
  border-top: ${(props) => (props.isBottom ? "1px solid #eceff4" : "none")};
  font-size: 14px;
  padding: 12px 0;
  display: flex;
  overflow: visible;
`;

export const ReplyCardInnerDetail = styled.div`
  color: #8592a3;
  line-height: 20px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-bottom: 12px;
`;

export const ReplyCardInnerDetailIcon = styled(IoIosArrowForward)`
  font-size: 14px;
  margin-left: 4px;
  line-height: 1;
`;

export const CommentReplyWrap = styled.div`
  display: ${(props) => (props.isAppear ? "block" : "none")};
  margin-top: 12px;
`;

export const CCOperation = styled.div`
  display: flex;
`;

export const CCAction = styled.div`
  margin-left: 16px;
  position: relative;
  /* z-index: 100; */
`;

export const CCActionIcon = styled(TbDotsVertical)`
  font-size: 24px;
  color: ${(props) => (props.isSelected ? "#657ef8" : "rgba(0,0,0,0.45)")};
  /* color: rgba(0, 0, 0, 0.45); */
  pointer-events: ${(props) => (props.isUnClickable ? "none" : "")};

  &:hover {
    cursor: pointer;
    color: #657ef8;
  }
`;

export const CCSelectMenu = styled.div`
  display: ${(props) => (props.isOn ? "block" : "none")};
  min-width: 200px;
  top: 35px;
  right: -6px;
  border-radius: 12px;
  padding: 0 8px;
  position: absolute;
  background-color: #fff;
  box-shadow: 0px 12px 24px rgba(47, 63, 86, 0.2);
  z-index: 100;
`;

export const CCSelectMenuTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  padding: 10px 16px;
  line-height: 20px;
  /* border-bottom: 1px solid #f1f4f9; */
`;

export const CCUl = styled.ul`
  padding: 0 0 8px 0;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  overscroll-behavior: contain;
  list-style: none;
`;

export const CCLi = styled.li`
  padding: 8px 12px;
  margin: 0;
  border-radius: 12px;
  display: flex;
  align-items: center;
  white-space: no-wrap;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.65);
  list-style: none;

  &:hover {
    background-color: #eff2ff;
    color: #657ef8;
    cursor: pointer;
  }
`;

export const NotVisible = styled(AiFillEyeInvisible)`
  font-size: 20px;
  margin-right: 8px;
  /* color: rgba(0,0,0,0.45); */
`;

export const BlockUser = styled(RiUserUnfollowLine)`
  font-size: 20px;
  margin-right: 8px;
`;

export const EditComment = styled(TbEdit)`
  font-size: 20px;
  margin-right: 8px;
`;

export const CCLiSpan = styled.span`
  font-size: 14px;
  line-height: 22px;
`;

export const CCContent = styled.div`
  padding: 8px 0 12px;
  font-size: 0;
  line-height: 22px;
  color: #2f3f56;
  word-wrap: break-word;
  word-break: break-word;
  font-size: 14px;
  /* display: inline; */
`;

export const CCReplyContent = styled.div`
  padding: 4px 0 8px;
  line-height: 20px;
  color: #2f3f56;
  word-wrap: break-word;
  word-break: break-word;
  font-size: 14px;
  /* display: inline; */
`;

export const EndOfCommentSection = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Nomore = styled.div`
  font-size: 14px;
  font-weight: normal;
  color: #b2bdce;
`;

export const ReplyCardContent = styled.div`
  padding: 8px 0 12px;
  font-size: 0;
  line-height: 22px;
  color: rgba(0,0,0,0.85);
  word-wrap: break-word;
  word-break: break-word;
`

export const ReplyCardReplyTo = styled.span`
  font-size: 14px;
  margin-right: 3px;
  color: rgba(0,0,0,0.65);
`

export const RouterLinkAccount = styled(LinkRouter)`
  display: inline;
  text-decoration: none;
  outline: none;
  background-color: rgba(0,0,0,0);
  cursor: pointer;
`

export const LinkAccountTitleName = styled.span`
  font-size: 14px;
  color: #657ef8;
  white-space: normal;
  word-wrap: break-word;
  word-break: break-word;
  line-height: 20px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ReplyColon = styled.span`
  font-size: 14px;
`

export const ReplyContentWrap = styled.pre`
  display: inline;
  line-height: 22px;
  font-size: 14px;
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-word;
  color: rgba(0,0,0,0.85);
`

// Swiper in a post detail
export const ArticleThumbsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 16px -3px 0 -3px;
  position: relative;
`

export const ImageArticleContainer = styled.div`
  height: 95px;
  display: inline-flex;
  max-width: 100%;
  padding: 3px;
  margin: 0;
  position: relative;
  overflow: hidden;
  list-style: none;
  z-index: 1;
`

export const SwiperWrapper = styled.div`
  transition-duration: 300ms;
  transform: translate3d(${props => props.transform},0px,0px);
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
`

export const ImageSwiperItem = styled.div`
  background-image: url(${ props => props.image });
  display: inline-block;
  width: 89px;
  height: 89px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-right: 8px;
  position: relative;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: inset 0 0 6px 0 rgb(0 0 0 / 10%);
  flex-shrink: 0;

  &::after {
    content: ${props => props.isChosen ? '""' : 'none' };
    display: block;
    position: absolute;
    left: -3px;
    top: -3px;
    bottom: -3px;
    right: -3px;
    border: 2px solid #657ef8;
    border-radius: 12px;
    pointer-events: none;
  }

  &::before {
    content: ${props => props.isChosen ? 'none' : '""' };
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 12px;
    pointer-events: none;
    background-color: rgba(221, 227, 236, 0.5);
  }

  &:hover::after {
    content: "";
  }

  &:hover::before {
    content: none;
  }
`

export const SwiperButtonNext = styled.div`
  position: absolute;
  right: 4px;
  top: 0;
  left: auto;
  margin-top: 0;
  width: 24px;
  height: 100%;
  opacity: ${props => props.isEnd ? '.35' : '1'};
  pointer-events: ${props => props.isEnd ? 'none' : 'auto'};
  transition: .2s;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${props => props.isEnd ? 'auto' : 'pointer'};
  /* color: #fff; */
`

export const SwiperButtonPrev = styled.div`
  opacity: ${props => props.isFirst ? '.35' : '1'};
  position: absolute;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 3px;
  right: auto;
  top: 0;
  margin-top: 0;
  width: 24px;
  height: 100%;
  transition: .2s;
  cursor: ${props => props.isFirst ? 'auto' : 'pointer'};
  pointer-events: ${props => props.isFirst ? 'none' : 'auto'};
`

export const SwiperButtonArrow = styled.div`
  width: 24px;
  height: 24px;
  margin-top: 0px;
  font-size: 16px;
  background-color: rgba(0,0,0,.5);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover { 
    background-color: #657ef8;
  }
`

export const SwiperNotification = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
  opacity: 0;
  z-index: -1000;
`

export const ArticleListSwiper = styled.div`
  max-height: 768px;
  margin-top: 6px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
`

export const ArticleSlideImageBig = styled.div`
  width: 576px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  height: 100%;
  position: relative;
  transition-property: transform;
`

export const ArticleImageWrap = styled.div`
  height: ${props => props.currentSlide ? 'auto' : '0'};
  width: 100%;
  position: relative;
`

export const ImgArticle = styled.img`
  width: 100%;
  /* max-width: 100%; */
  max-height: 768px;
  display: block;
  height: auto;
  box-shadow: inset 0 0 6px 0 rgb(0 0 0 / 10%);
  object-fit: cover;
  object-position: top;
  border-radius: 12px;
`

export const ArticlePostTitle = styled.div`
  font-size: 0;
  padding-bottom: 14px;
  border-bottom: 1px solid #f1f4f9;
`

export const ArticlePostType = styled.div`
  height: 26px;
  display: inline-flex;
  align-items: center;
  float: left;
  flex-shrink: 0;
  color: #fff;
`

export const ArticlePostH1 = styled.h1`
  display: inline;
  font-size: 20px;
  line-height: 26px;
  margin: 0;
  font-weight: bold;
  word-wrap: break-word;
  word-break: break-word;
`

export const ArticlePageContent = styled.div`
  margin-top: 16px;
  padding: 0;
`

export const ArticlePostDesc = styled.p`
  white-space: pre-wrap;
  color: rgba(0,0,0,.85);
  font-size: 14px;
  line-height: 22px;
  margin-top: 16px;
  margin-bottom: 24px;
  word-wrap: break-word;
  word-break: break-word;
`

export const ArticlePostFooter = styled.div`
  margin-top: 16px;
  padding: 0;
`

export const ArticleCardVideo = styled.div`
  margin-top: 8px;
  position: relative;
  width: 62.2%;

  &::before {
    content: "";
    padding-top: 56.2%;
    display: block;
  }
`

export const YoutubePlayer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000;
`

export const ArticlePageVideo = styled.div`
  height: 25vw;
  border-radius: 8px;
  overflow: hidden;
`

export const ArticlePageYtbPlayer = styled.div`
  height: 100%;
  background-color: #000;
`
