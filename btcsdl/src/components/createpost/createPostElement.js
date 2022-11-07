import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { HiPlusSm, HiCheck } from "react-icons/hi";
import { RiImageAddFill } from "react-icons/ri";

export const AllContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const LoadingContainer = styled.div`
  /* width: 100%;
	height: 625px; */
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 16px;
`;

export const StickyNavLeft = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  margin-right: 16px;
`;

export const StickyNavLeftHolder = styled.div`
  width: 232px;
`;

export const StickyNavFixed = styled.div`
  position: fixed;
  top: 105px;
  height: auto;
  z-index: 800;
`;

export const StickyNavScroll = styled.div`
  /* height: 100%; */
  overflow-y: auto;
  overflow-x: hidden;
`;

export const SideMenu = styled.div`
  border-radius: 16px;
  background-color: #fff;
  padding: 4px;
  width: 232px;
`;

export const MenuItem = styled(LinkRouter)`
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 48px;
  border-radius: 16px;
  color: #8592a3;
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
  pointer-events: ${(props) => (props.disabled ? "none" : "")};

  &:hover {
    color: #657ef8;
    background-color: #eff2ff;
  }
`;

export const MenuItemNotLink = styled.div`
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 48px;
  border-radius: 16px;
  color: #8592a3;
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
  pointer-events: ${(props) => (props.disabled ? "none" : "")};

  &:hover {
    color: #657ef8;
    background-color: #eff2ff;
  }
`;

export const RootPageContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-start;
  padding-top: 105px;
`;

export const RootPageLayout = styled.div`
  width: 896px;
  display: flex;
  justify-content: space-between;
`;

export const MainPage = styled.div`
  width: 608px;
  /* background-color: #fff; */
  border-radius: 16px;
  margin-bottom: 60px;
`;

export const MainPageWrp = styled.div`
  width: 608px;
  background-color: #fff;
  border-radius: 16px;
  margin-bottom: 60px;
`;

export const NewArticleHeader = styled.div`
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #f1f4f9;
  margin: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderH1 = styled.h1`
  font-size: 16px;
  font-weight: bold;
`;

export const NewArticleEditor = styled.div`
  width: 608px;
  padding: 8px 24px 16px;
  border-radius: 16px;
  background-color: #fff;
`;

export const FormItemContainer = styled.div`
  margin-top: 24px;
  color: #2f3f56;
`;

export const FormItemLabel = styled.span`
  color: #8592a3;
  margin-bottom: 8px;
  line-height: 20px;
  display: flex;
  align-items: center;
  font-size: 14px;
`;

export const InputDiv = styled.div`
  height: 48px;
  font-size: 16px;
  position: relative;
  line-height: 20px;
`;

export const InputDivContainer = styled.div`
  display: flex;
  border: ${(props) =>
    props.borderChange ? "1px solid #657ef8" : "1px solid #f1f4f9"};
  border-radius: 8px;
  position: relative;
  height: 100%;
  transition: 0.3s border-color;

  &:hover {
    border-color: #657ef8;
  }
`;

export const InputText = styled.input`
  padding-left: 24px;
  padding-right: 16px;
  border: none;
  flex-grow: 1;
  z-index: 2;
  background-color: #fff;
  outline: none;
  border-radius: 8px;
  height: 100%;
`;

export const InputMaxCount = styled.span`
  color: #b2bdce;
  line-height: 48px;
  margin-right: 24px;
  font-size: 14px;
`;

export const EditorContainer = styled.div`
  height: 200px;
  border: ${(props) =>
    props.borderChange ? "1px solid #657ef8" : "1px solid #f1f4f9"};
  border-radius: 8px;
  position: relative;
  transition: 0.3s border-color;

  &:hover {
    border-color: #657ef8;
  }
`;

export const EditorInput = styled.textarea`
  padding: 16px 24px 0;
  border: none;
  z-index: 2;
  background-color: #fff;
  outline: none;
  border-radius: 8px;
  width: 100%;
  height: calc(100% - 40px);
  overflow-x: hidden;
  overflow-y: auto;
  resize: none;
`;

export const EditorMaxCount = styled.div`
  position: absolute;
  bottom: 0px;
  right: 12px;
  color: #b2bdce;
  line-height: 40px;
  font-size: 14px;
  z-index: 100;
`;

export const PostImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 8px;
`;

export const PostImageTitle = styled.div`
  color: #8592a3;
  font-size: 14px;
`;

export const ImageShowTitle = styled.div`
  font-size: 14px;
  color: #8592a3;
  line-height: 20px;
  margin: 4px 0;
`;

export const PreviewPostImage = styled.img`
  width: 100%;
`;

export const CreatePostFooter = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  padding: 16px 0;
  border-top: 1px solid #f1f4f9;
`;

export const SavePostButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 32px;
  color: #657ef8;
  font-weight: bold;
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

export const CancelPostButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 32px;
  font-weight: bold;
  font-size: 14px;
  color: #8592a3;
  background-color: #f1f4f9;
  border: none;
  border-radius: 24px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #657ef8;
    color: #fff;
    cursor: pointer;
  }
`;

export const CancelImage = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  color: #8592a3;
  background: #f1f4f9;
  font-size: 14px;
  border: none;
  border-radius: 16px;
  transition: all 0.2s ease-in-out;
  margin-left: 8px;

  &:hover {
    background-color: #8592a3;
    color: #000;
    cursor: pointer;
  }
`;

export const RightPart = styled.div`
  /* width: 272px; */
  background: #fff;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  word-break: break-word;
  padding: 4px 16px;
  height: 215px;
`;

export const RightItem = styled.div`
  background: #fff;
  border-radius: 16px;
  /* display: flex;
  flex-direction: column;
  word-wrap: break-word;
  word-break: break-word;
  padding: 4px 16px 16px; */
  margin-top: 16px;
`;

export const UserSearch = styled.input`
  /* margin-top: 12px; */
  width: 100%;
  padding: 8px;
  outline: none;
  border: 2px solid #8592a3;
  border-radius: 10px;
  /* box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2); */
`;

export const RightSectionHeader = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 0 16px;
  border-bottom: 1px solid #f1f4f9;
  margin-bottom: 8px;
`;

export const RightSectionH2 = styled.h2`
  flex-grow: 1;
  font-size: 16px;
  line-height: 24px;
  color: #8592a3;
  font-weight: normal;
`;

export const RightContainer = styled.div`
  width: 272px;
`;

export const TopicSectionBody = styled.div`
  position: relative;
  padding: 0 4px;
`;

export const TopicCard = styled.div`
  padding: 8px 12px;
  margin: 0 4px;
  width: auto;
  height: auto;
  border-radius: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #eff2ff;
  }
`;

export const TopicCardContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const TopicCardBase = styled.div`
  min-height: 42px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  flex: 1;
  width: 0;
  overflow: hidden;
`;

export const TopicCardHeader = styled.div`
  display: flex;
  align-items: center;
  color: #2f3f56;
`;

export const TopicCardHeaderWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: bold;
  position: relative;
  flex: 1;
`;

export const TopicList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TopicCardStats = styled.p`
  color: #8592a3;
  font-size: 12px;
  line-height: 16px;
`;

export const RightScroll = styled.div`
  height: 1000px;
`;

export const SideSectionFooter = styled.div`
  height: 44px;
  padding: 0 16px;
  display: flex;
  align-items: center;
`;

export const SideSectionMore = styled(LinkRouter)`
  color: #657ef8;
  font-size: 14px;
  line-height: 20px;
  font-weight: bold;
`;

export const InputSearchContainer = styled.div`
  display: flex;
  padding: 4px 16px 16px;
  align-items: center;
  justify-content: center;
`;

export const SideSectionBody = styled.div`
  padding: 0;
  position: relative;
`;

export const RecommendUserList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RecommendUserCard = styled.div`
  margin: 0 8px;
  padding: 0 8px;
  border-radius: 12px;
  background: #fff;

  &:hover {
    background: #f0f2fe;
    cursor: pointer;
  }
`;

export const RecommandUserCardWrap = styled.div`
  /* padding-bottom: 20px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RecommandUserCardItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const RecommandAuthor = styled.div`
  border-radius: 8px;
  margin: 4px 0;
  padding: 8px 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  max-width: 100%;
`;

export const AuthorAvatar = styled.div`
  display: inline-block;
  position: relative;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
`;

export const AuthorAvatarImage = styled.img`
  vertical-align: top;
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid #f1f4f9;
  background: #fff;
`;

export const ToUserPageLink = styled(LinkRouter)`
  color: #b2bdce;
  display: inline-flex;
  align-items: center;
`;

export const UserCardInfo = styled.div`
  margin-left: 12px;
  display: inline-flex;
  flex-grow: 1;
  overflow: hidden;
  flex-direction: column;
`;

export const UserCardName = styled.div`
  display: flex;
  align-items: center;
`;

export const AccountTitleName = styled.span`
  max-width: 100px;
  color: #2f3f56;
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:hover {
    color: #657ef8;
  }
`;

export const UserCardFollow = styled.div`
  flex-shrink: 0;
  margin-left: 8px;
`;

export const UserFollowButton = styled.div`
  font-size: 16px;
  min-width: 52px;
  background: #e1e7ff;
  border-radius: 15px;
  height: 30px;
  line-height: 30px;
  padding: 0 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #657ef8;
  cursor: pointer;
  flex-shrink: 0;
  transition-duration: 0.2s;
  transition-property: background-color, color;

  &:hover {
    background-color: #657ef8;
    color: #fff;
  }
`;

export const UserUnfollowButton = styled.div`
  font-size: 16px;
  min-width: 52px;
  background: #f1f4f9;
  border-radius: 15px;
  height: 30px;
  line-height: 30px;
  padding: 0 26px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #8592a3;
  cursor: pointer;
  flex-shrink: 0;
  transition-duration: 0.2s;
  transition-property: background-color, color;

  &:hover {
    background-color: #8592a3;
    color: #fff;
  }
`;

export const HiFollowIcon = styled(HiPlusSm)`
  font-size: 24px;
  line-height: 1;
`;

export const HiFollowedIcon = styled(HiCheck)`
  font-size: 20px;
  line-height: 1;
`;

export const FormItemContainerLabel = styled.span`
  color: rgba(0, 0, 0, 0.65);
  margin-bottom: 8px;
  line-height: 20px;
  display: flex;
  align-items: center;
`;

export const FormUploadTip = styled.div`
  color: rgba(0, 0, 0, 0.45);
  font-size: 12px;
  line-height: 16px;
`;

export const FormUploadImg = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 16px;
  margin-right: -16px;
  margin-bottom: -16px;
`;

export const CommentUploadImg = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 12px;
  margin-right: -8px;
  margin-bottom: -8px;
`;

export const FormUploadImgAdd = styled.div`
  background-color: #b2bdce;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  width: 160px;
  height: 160px;
  border-radius: 8px;
  text-align: center;
  font-size: 14px;
  /* background: no-repeat center #fff;
  background-size: cover; */
  margin: 0 16px 16px 0;
  position: relative;
  cursor: pointer;
  box-shadow: inset 0 0 5px 0 rgb(0 0 0 / 4%);
`;

export const IconImageAdd = styled(RiImageAddFill)`
  font-size: 85px;
  color: #fff;
  line-height: 1;

  /* &::before {
    content: "";
  } */
`;

export const IconSrcImageAdd = styled(RiImageAddFill)`
  font-size: 55px;
  color: #fff;
  line-height: 1;

  /* &::before {
    content: "";
  } */
`;

export const FormImgUploaded = styled.div`
  background-image: url(${(props) =>
    props.image ? props.image : "no-repeat center #fff"});
  width: 160px;
  height: 160px;
  border-radius: 8px;
  text-align: center;
  font-size: 14px;
  background-size: cover;
  margin: 0 16px 16px 0;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  box-shadow: inset 0 0 5px 0 rgb(0 0 0 / 4%);
`;

export const CommentImgUploaded = styled.div`
  background-image: url(${(props) =>
    props.image ? props.image : "no-repeat center #fff"});
  width: 72px;
  height: 72px;
  border-radius: 8px;
  text-align: center;
  font-size: 14px;
  background-size: cover;
  margin: 0 8px 8px 0;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  box-shadow: inset 0 0 5px 0 rgb(0 0 0 / 4%);
`;

export const FormImgUploadDelete = styled.div`
  position: absolute;
  right: 4px;
  top: 4px;
  z-index: 10;
  cursor: pointer;
`;

export const CmtImgUploadDelete = styled.div`
  position: absolute;
  right: -4px;
  top: -4px;
  z-index: 10;
  cursor: pointer;
`;

export const FormImgUploadDeleteIcon = styled.img`
  height: 24px;
  /* overflow: hidden;
  fill: currentColor; */
  border-style: none;
`;

export const CmtImgUploadDeleteIcon = styled.img`
  height: 20px;
  /* overflow: hidden;
  fill: currentColor; */
  border-style: none;
`;

export const FormImgUploadCover = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 32px;
  line-height: 32px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  z-index: 5;
`;

export const NewVideoArticlePreview = styled.div`
	position: relative;
	display: flex;
`;

export const NewVideoPreviewWrap = styled.div`
  position: relative;
`;

export const NewVideoPreview = styled.div`
	width: 560px;
	height: calc(560px * 56.2 / 100);
  position: relative;
  background-color: #f5f6fb;
  border-radius: 8px;
  overflow: hidden;
`;

export const VideoPlayer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;
`;

export const IframeVideo = styled.iframe`
  width: 100%;
  height: 100%;
`;

export const ConfirmVidContainer = styled.div`
	display: flex;
	margin-top: 8px;
	align-items: center;
	justify-content: center;
`

export const RemoveVideo = styled.div`
  background-color: #e1e7ff;
  color: #657ef8;
  min-width: 40px;
  height: 20px;
  line-height: 20px;
  padding: 0 14px;
  font-size: 12px;
  border-radius: 10px;
  font-weight: 400;
  max-width: 400px;
  position: absolute;
  top: -28px;
  right: 0;
  text-align: center;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

	&:hover {
		background-color: #657ef8;
		color: #fff;
	}
`;
