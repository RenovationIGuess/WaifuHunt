import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  Img,
  SearchBarContainer,
  SearchBarIcon,
  SearchBar,
  User,
  UserAva,
  UserName,
  LeftSideNav,
  LeftNavWrap,
  LeftItem,
  LeftImg,
  Database,
  Us,
  Prj,
  ContactHeader,
  ContactTitle,
  MailWrap,
  MailTitle,
  MailCard,
  EmailAdd,
  EmailOwner,
  PaiFace,
  CopyRight,
  ContactFooter,
  ToTopButton,
  EditIcon,
  PostsContainer,
  CardHeader,
  CardUserInfo,
  CardArticle,
  PostAva,
  PostCardInfo,
  PostCardName,
  ArticleCardInfo,
  PostAvaImg,
  PostRouter,
  ArticleCardTitle,
  ArticleCardContent,
  ArticleCardPreview,
  ArticleCardTopic,
  ArticleCardTopicLabel,
  TopicRouter,
  ArticleCardFooter,
  ArticleCardData,
  CardDataItem,
  CardItemLike,
  CardIconLike,
  CardDataSpan,
  CardItemComment,
  CardIconComment,
  CardIconLikeFill,
  ArticleCardAction,
  CardAction,
  PostSelectMenu,
  SelectMenuItem,
  SelectMenuTitle,
  SelectMenuList,
  TrashFillIcon,
  SelectMenuItemSpan,
  EditPostIcon,
  CancelSelectMenuIcon,
  ArticleImage,
  Posting,
  NavRightPart,
  PostIconNavWrap,
  PostIconNav,
  PostIconNavContainer,
  NavPostDialog,
  NavPostNew,
  NavPostNewContent,
  NavPostNewItem,
  DialogPostButton,
  DialogSpan,
  NewPostIconWrap,
  NewPostIcon,
  LeftSideNavLoading,
  LeftSideNavLoadingIcon,
  LeftSideNavLoadingDiv,
  CardItemCommentScroll,
  FollowDiv,
  FollowButton,
  FollowSpan,
  UnfollowButton,
} from "../profile/pfelement";

import { Loading } from "../Loading";

import Chilling from "../../videos/chillin.gif";
import LoadingNav from "../../videos/loadingNav.gif";
import NoComments from "../../videos/fight.gif";
import WebLogo from "../../images/logoweb.png";
import LeftImage from "../../images/logoroll.svg";
import Paimoe from "../../images/paiface.png";
import EditBtn from "../../images/editbtn.png";
import InazumaBg from "../../images/inazuma.jpg";

import ToTopBtn from "../../images/arrow/RArrow.png";

import { RiLogoutBoxLine } from "react-icons/ri";
import { MdKeyboardArrowRight, MdErrorOutline } from "react-icons/md";
import { GrUserSettings } from "react-icons/gr";
/* import Footer from "../footer"; */
import { Link as LinkRouter } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll/modules";
import { AuthContext } from "../../contexts/AuthContext";
import { Toast } from "../toastMsg";

import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineCheckCircle } from "react-icons/ai";

import "../waifudb/waifulist.scss";
import "../profile/profile.scss";
import "../profile/title.scss";

import HutaoAva from "../../images/hutaostick.png";
import RaidenAva from "../../images/raidenfbi.png";
import DoggoAva from "../../images/realdoggo.png";

import { ImgButton, ImgShow } from "../waifudb/waifuElement";

import { ToastMsg } from "../toastMsg";

import { TIME_STORAGE, ROLL_STORAGE } from "../../contexts/constants";

import { WaifuContext } from "../../contexts/WaifuContext";
import { PostContext } from "../../contexts/PostContext";
import { UserContext } from "../../contexts/UsersContext";

import Timer from "../timer";
import {
  AllContainer,
  CancelImage,
  CancelPostButton,
  CreatePostFooter,
  EditorContainer,
  EditorInput,
  EditorMaxCount,
  FormItemContainer,
  FormItemLabel,
  HeaderH1,
  ImageShowTitle,
  InputDiv,
  InputDivContainer,
  InputMaxCount,
  InputText,
  LoadingContainer,
  MainPage,
  MainPageWrp,
  MenuItem,
  NewArticleEditor,
  NewArticleHeader,
  PostImageContainer,
  PostImageTitle,
  PreviewPostImage,
  RightPart,
  RootPageContainer,
  RootPageLayout,
  SavePostButton,
  SideMenu,
  StickyNavFixed,
  StickyNavLeft,
  StickyNavLeftHolder,
  StickyNavScroll,
} from "../createpost/createPostElement";
import {
  ArticlePostStats,
  CCAcount,
  CCAction,
  CCActionIcon,
  CCContent,
  CCHeader,
  CCLi,
  CCLiSpan,
  CCOperation,
  CCSelectMenu,
  CCSelectMenuTitle,
  CCUl,
  CommendCard,
  CommentAvatar,
  CommentCardAvatar,
  CommentCardContainer,
  EndOfCommentSection,
  NoCommentsImg,
  NoCommentsImgContainer,
  Nomore,
  NotVisible,
  PostDetailHeader,
  PostHeaderContent,
  PostHeaderLeft,
  PostHeaderLeftH1,
  PostHeaderMain,
  PostHeaderMask,
  PostHeaderWrap,
  PostIconComment,
  PostIconLike,
  PostIconLiked,
  PostReplyContainer,
  PostReplyList,
  PostStatsIconComment,
  PostStatsIconLike,
  PostStatsItem,
  PostStatsSpan,
  ReplyBoxFooter,
  ReplyListHeader,
  ReplyListItem,
  SendButton,
  UserReplyBody,
  UserReplyLabel,
  UserReplyMaxCount,
  UserReplySection,
  UserReplyTextArea,
} from "./postDetailEle";
import { PostNewArrow } from "../postList/postListEle";

const CreatePost = () => {
  const {
    authState: { user },
    logoutUser,
    increaseRoll,
    followUser,
    unfollowUser,
  } = useContext(AuthContext);

  const {
    waifuState: { waifus, waifusLoading },
    getWaifus,
  } = useContext(WaifuContext);

  const {
    postState: { posts, postsLoading },
    getPosts,
    likePost,
    unlikePost,
    commentPost,
    editPost,
    deletePost,
  } = useContext(PostContext);

  const {
    userState: { users, usersLoading },
  } = useContext(UserContext);

  const postId = useParams();

  let body;
  let left;

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [userAva, setUserAva] = useState(RaidenAva);

  // Ava handler
  const [AvaRaiden, setAvaRaiden] = useState(false);
  const [AvaHutao, setAvaHutao] = useState(false);
  const [AvaDoggo, setAvaDoggo] = useState(false);

  // Controlling preview post image
  const [isPreviewed, setIsPreviewed] = useState(true);

  // Controlling post menu
  const [isSelectMenuOn, setIsSelectMenuOn] = useState(false);

  // Modal message
  const [message, setMessage] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("");

  // Used for searching
  const [searchValue, setSearchValue] = useState("");

  // Control comment
  const [isCommentFocused, setIsCommentFocused] = useState(false);
  const [userComment, setUserComment] = useState("");
  const [commentMenuState, setCommentMenuState] = useState([]);
  const [isCommentMenuOn, setIsCommentMenuOn] = useState(false);

  // Timeout
  const initTimer = 3600000; //in miliseconds, 3600000 = 1 hour

  // Controlling NavPostDialog
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [editPostMode, setEditPostMode] = useState(false);

  // Form Control
  /* const inputFocused = useRef(null) */
  const [isTitleInputFocused, setIsTitleInputFocused] = useState(false);
  const [isTagInputFocused, setIsTagInputFocused] = useState(false);
  const [isContentInputFocused, setIsContentInputFocused] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postTag, setPostTag] = useState("");
  const [postContent, setPostContent] = useState("");
  const [imageUrl, setImageUrl] = useState(null);

  const [rollTimes, setRollTimes] = useState(() => {
    const roll = window.localStorage.getItem(ROLL_STORAGE);
    if (roll) {
      return parseInt(roll);
    } else return 10;
  });
  const [deadline, setDeadline] = useState(() => {
    const dead = window.localStorage.getItem(TIME_STORAGE);
    if (dead) {
      return parseInt(dead);
    } else return null;
  });

  useEffect(() => {
    async function fetchData() {
      await getPosts();
    }
    fetchData();
  }, []);

  const startTimer = () => {
    const deadTime = Date.now() + initTimer;
    window.localStorage.setItem(TIME_STORAGE, deadTime);
    setDeadline(deadTime);
  };

  const handleDead = () => {
    setRollTimes(10);
  };

  const startReset = async () => {
    try {
      const response = await increaseRoll();
      if (response.success) {
        if (rollTimes > 1) {
          setRollTimes(rollTimes - 1);
        } else if (rollTimes === 1) {
          setRollTimes(rollTimes - 1);
          startTimer();
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    window.localStorage.setItem(ROLL_STORAGE, rollTimes);
  }, [rollTimes]);

  useEffect(() => {
    async function fetchData() {
      await getWaifus();
    }
    fetchData();
  }, []);

  const scrollBtn = () => {
    if (window.scrollY >= 80) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollBtn);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleSearch = () => {
    if (searchValue !== "") {
      const searchIndex = waifus.findIndex((item) =>
        item.name.includes(searchValue)
      );
      if (searchIndex !== -1) {
        navigate(`/waifudb/${waifus[searchIndex].waifuid}`);
      } else {
        setMessage("Không tìm thấy tên waifu!");
        setDesc("Hãy nhập đúng tên waifu muốn tìm");
        setType("error");
        myFunction();
        setSearchValue("");
      }
    } else {
      setMessage("Không tìm thấy tên waifu!");
      setDesc("Hãy nhập đúng tên waifu muốn tìm");
      setType("error");
      myFunction();
    }
  };

  const handleCancelImage = () => {
    setImageUrl(null);
  };

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImageUrl(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleLogout = () => logoutUser();

  useEffect(() => {
    switch (user.avatar) {
      case "RaidenAva":
        setAvaRaiden(true);
        setUserAva(RaidenAva);
        break;
      case "DoggoAva":
        setAvaDoggo(true);
        setUserAva(DoggoAva);
        break;
      case "HutaoAva":
        setAvaHutao(true);
        setUserAva(HutaoAva);
        break;
      default:
        setUserAva(RaidenAva);
        break;
    }
  }, [user.avatar]);

  const handleSelectMenuOn = () => {
    setIsSelectMenuOn(!isSelectMenuOn);
  };

  const handleSelectMenuOff = () => {
    setIsSelectMenuOn(false);
  };

  const handleCommentMenu = (index) => {
    commentMenuState[index].state = !commentMenuState[index].state;
    for (let i = 0; i < commentMenuState.length; ++i) {
      if (i !== index) {
        commentMenuState[i].state = false;
      }
    }
    // use to cause rerender
    setIsCommentMenuOn(!isCommentMenuOn);
  };

  const handleLikePost = async (postId) => {
    try {
      const afterLikedPost = await likePost({ postid: postId });
      if (afterLikedPost.success) {
        setMessage("Đã tính like vào post này nha :v!");
        setDesc("Đừng để ý thông báo này :3 :v!");
        setType("success");
        myFunction();
        const newPostIndex = posts.findIndex(
          (p) => p.postid === afterLikedPost.updatedPost.postid
        );
        posts[newPostIndex] = { ...afterLikedPost.updatedPost };
      } else {
        setMessage("Like post thất bại!");
        setDesc(afterLikedPost.message);
        setType("error");
        myFunction();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnlikePost = async (postId) => {
    try {
      const afterUnlikedPost = await unlikePost({ postid: postId });
      if (afterUnlikedPost.success) {
        setMessage("Sao unlike rồi :<!");
        setDesc("...");
        setType("success");
        myFunction();
        const newPostIndex = posts.findIndex(
          (p) => p.postid === afterUnlikedPost.updatedPost.postid
        );
        posts[newPostIndex] = { ...afterUnlikedPost.updatedPost };
      } else {
        setMessage("Unlike post thất bại!");
        setDesc(afterUnlikedPost.message);
        setType("error");
        myFunction();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSendComment = async (postId) => {
    if (userComment === "") {
      setMessage("Đăng comment thất bại!");
      setDesc("Phải có nội dung mới được up comment nha :<");
      setType("error");
      myFunction();
    } else {
      try {
        const commentValue = `${user.userid}:${userComment}`;
        const postComment = await commentPost({
          comment: commentValue,
          postid: postId,
        });

        if (postComment.success) {
          setMessage("Đăng comment thành công!");
          setDesc("Mời bạn tiếp tục... :D");
          setType("success");
          setUserComment("");
          myFunction();
          const newPostIndex = posts.findIndex(
            (p) => p.postid === postComment.updatedPost.postid
          );
          posts[newPostIndex] = { ...postComment.updatedPost };
          commentMenuState.push({ state: false });
        } else {
          setMessage("Đăng comment thất bại!");
          setDesc(postComment.message);
          setType("error");
          myFunction();
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleEditPost = () => {
    setEditPostMode(true);
  };

  const handleSaveEditPost = async (id, index) => {
    if (!postTag && !postContent && !postTitle && !imageUrl) {
      setMessage("Edit post thất bại!");
      setDesc("Không nhập gì sao edit :<");
      setType("error");
      myFunction();
    } else {
      if (postTag !== "") {
        const tags = postTag.split(",");
        const detectFalse = tags.findIndex((t) => t === "");
        if (detectFalse !== -1) {
          setMessage("Edit post thất bại!");
          setDesc("Sai format khi nhập tags :<");
          setType("error");
          myFunction();
        } else {
          try {
            const editedPost = await editPost({
              postid: id,
              postTitle: postTitle,
              postContent: postContent,
              postTag: tags,
              postImage: imageUrl,
            });

            if (editedPost.success) {
              setMessage("Edit post thành công!");
              setDesc("Hãy tạo nhiều content hơn nha :D");
              setType("success");
              myFunction();
              setPostTitle("");
              setPostContent("");
              setPostTag("");
              setImageUrl(null);
              setEditPostMode(false);
              posts[index] = { ...editedPost.updatedPost };
            } else {
              setMessage("Edit post thất bại!");
              setDesc(editedPost.message);
              setType("error");
              myFunction();
            }
          } catch (err) {
            console.log(err);
          }
        }
      } else {
        try {
          const editedPost = await editPost({
            postid: id,
            postTitle: postTitle,
            postContent: postContent,
            postTag: [],
            postImage: imageUrl,
          });

          if (editedPost.success) {
            setMessage("Edit post thành công!");
            setDesc("Hãy tạo nhiều content hơn nha :D");
            setType("success");
            myFunction();
            setPostTitle("");
            setPostContent("");
            setPostTag("");
            setImageUrl(null);
            setEditPostMode(false);
            posts[index] = { ...editedPost.updatedPost };
          } else {
            setMessage("Edit post thất bại!");
            setDesc(editedPost.message);
            setType("error");
            myFunction();
          }
        } catch (err) {
          console.log(err);
        }
      }
    }
  };

  const handleCancelEditPost = () => {
    setPostTitle("");
    setPostContent("");
    setPostTag("");
    setImageUrl(null);
    setEditPostMode(false);
  };

  /* const handleDeletePost = async (id) => {
    try {
      const delResponse = await deletePost(id);
      if (delResponse.success) {
        setMessage("Xóa post thành công!");
        setDesc("Ơ kìa...");
        setType("success");
        myFunction();
      } else {
        setMessage("Xóa post thất bại!");
        setDesc(delResponse.message);
        setType("error");
        myFunction();
      }
    } catch (err) {
      console.log(err);
    }
  }; */

  const handleFollowUser = async (followId) => {
    try {
      const afterFollowed = await followUser({ followid: followId });

      if (afterFollowed.success) {
        setMessage("Follow thành công!");
        setDesc("Cảm ơn vì đã hoạt động sôi nổi!");
        setType("success");
        myFunction();
      } else {
        setMessage("Follow thất bại!");
        setDesc(afterFollowed.message);
        setType("error");
        myFunction();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnfollowUser = async (followId) => {
    try {
      const afterUnfollowed = await unfollowUser({ followid: followId });

      if (afterUnfollowed.success) {
        setMessage("Unfollow thành công!");
        setDesc("Why... :<?");
        setType("success");
        myFunction();
      } else {
        setMessage("Follow thất bại!");
        setDesc(afterUnfollowed.message);
        setType("error");
        myFunction();
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (postsLoading) {
    body = (
      <LoadingContainer>
        <Loading src={Chilling} alt="loading-chilling" />
      </LoadingContainer>
    );
  } else {
    const postIdParam = parseInt(postId.id);
    const findParamIndex = posts.findIndex((p) => p.postid === postIdParam);
    if (findParamIndex === -1) {
      navigate("/404");
    }
    if (usersLoading) {
      body = (
        <LoadingContainer>
          <Loading src={Chilling} alt="loading-chilling" />
        </LoadingContainer>
      );
    } else {
      const postToFind = posts.findIndex(
        (item) => item.postid === parseInt(postId.id)
      );
      const currentPost = posts[postToFind];
      const postAuthorIndex = users.findIndex(
        (u) => u._id === currentPost.postAuthor
      );
      const author = users[postAuthorIndex];
      let displayAva = RaidenAva;
      switch (author.avatar) {
        case "RaidenAva":
          displayAva = RaidenAva;
          break;
        case "DoggoAva":
          displayAva = DoggoAva;
          break;
        case "HutaoAva":
          displayAva = HutaoAva;
          break;
        default:
          displayAva = RaidenAva;
          break;
      }
      const LikedPostIndex = currentPost.postLikes.findIndex(
        (u) => u === user.userid
      );
      const hasLiked = LikedPostIndex !== -1 ? true : false;
      if (commentMenuState.length === 0) {
        currentPost.comment.map((c, i) => {
          commentMenuState.push({
            state: false,
          });
        });
      }
      const hasFollowedIndex = user.follow.findIndex(
        (f) => f === author.userid
      );
      const isFollowed = hasFollowedIndex === -1 ? false : true;
      body = (
        <>
          {editPostMode ? (
            <RootPageLayout>
              <MainPageWrp style={{ marginBottom: "0" }}>
                <NewArticleHeader>
                  <HeaderH1>Edit bài viết</HeaderH1>
                </NewArticleHeader>
                <NewArticleEditor>
                  <FormItemContainer>
                    <FormItemLabel>Title bài viết</FormItemLabel>
                    <InputDiv>
                      <InputDivContainer borderChange={isTitleInputFocused}>
                        <InputText
                          type="text"
                          maxLength="200"
                          placeholder="Nhập title bài viết"
                          value={postTitle}
                          onChange={(e) => setPostTitle(e.target.value)}
                          onBlur={() => setIsTitleInputFocused(false)}
                          onFocus={() => setIsTitleInputFocused(true)}
                        />
                        <InputMaxCount>{postTitle.length}/200</InputMaxCount>
                      </InputDivContainer>
                    </InputDiv>
                  </FormItemContainer>
                  <FormItemContainer>
                    <FormItemLabel>Content bài viết</FormItemLabel>
                    <EditorContainer borderChange={isContentInputFocused}>
                      <EditorInput
                        type="text"
                        maxLength="10000"
                        placeholder="Nhập content bài viết"
                        value={postContent}
                        onChange={(e) => setPostContent(e.target.value)}
                        onBlur={() => setIsContentInputFocused(false)}
                        onFocus={() => setIsContentInputFocused(true)}
                      />
                      <EditorMaxCount>
                        {postContent.length}/10000
                      </EditorMaxCount>
                    </EditorContainer>
                  </FormItemContainer>
                  <FormItemContainer>
                    <FormItemLabel>Hashtag bài viết</FormItemLabel>
                    <InputDiv>
                      <InputDivContainer borderChange={isTagInputFocused}>
                        <InputText
                          type="text"
                          maxLength="200"
                          placeholder="Format: Genshin Impact,Kaguya,..."
                          value={postTag}
                          onChange={(e) => setPostTag(e.target.value)}
                          onBlur={() => setIsTagInputFocused(false)}
                          onFocus={() => setIsTagInputFocused(true)}
                        />
                        <InputMaxCount>{postTag.length}/200</InputMaxCount>
                      </InputDivContainer>
                    </InputDiv>
                  </FormItemContainer>
                  <FormItemContainer>
                    <PostImageContainer>
                      <PostImageTitle>Ảnh đính kèm</PostImageTitle>
                      <ImgButton htmlFor="select-image">
                        <input
                          accept="image/*"
                          type="file"
                          id="select-image"
                          style={{ display: "none" }}
                          onChange={imageHandler}
                        />
                        Upload ảnh
                      </ImgButton>
                      {imageUrl && (
                        <CancelImage onClick={handleCancelImage}>
                          Hủy
                        </CancelImage>
                      )}
                    </PostImageContainer>
                    {imageUrl && (
                      <ImgShow>
                        <ImageShowTitle>Preview ảnh đã chọn:</ImageShowTitle>
                        <PreviewPostImage src={imageUrl} alt="char-image" />
                      </ImgShow>
                    )}
                  </FormItemContainer>
                  <CreatePostFooter>
                    <CancelPostButton onClick={handleCancelEditPost}>
                      Hủy
                    </CancelPostButton>
                    <SavePostButton
                      onClick={() =>
                        handleSaveEditPost(currentPost.postid, postToFind)
                      }
                    >
                      Thay đổi
                    </SavePostButton>
                  </CreatePostFooter>
                </NewArticleEditor>
              </MainPageWrp>
            </RootPageLayout>
          ) : (
            <PostsContainer>
              <CardHeader>
                <CardUserInfo>
                  <CardArticle>
                    <PostAva
                      to={
                        author.userid === user.userid
                          ? `/user/${author.userid}`
                          : `/otheruser/${author.userid}`
                      }
                    >
                      <PostAvaImg src={displayAva} alt="user-post-ava" />
                    </PostAva>
                    <PostCardInfo>
                      <PostCardName
                        to={
                          author.userid === user.userid
                            ? `/user/${author.userid}`
                            : `/otheruser/${author.userid}`
                        }
                      >
                        {author.name}
                      </PostCardName>
                      <ArticleCardInfo>{currentPost.createdAt}</ArticleCardInfo>
                    </PostCardInfo>
                  </CardArticle>
                </CardUserInfo>
                <ArticleCardAction>
                  {user.userid === author.userid ? (
                    <CardAction isActive={isSelectMenuOn}>
                      <EditIcon
                        onClick={handleSelectMenuOn}
                        src={EditBtn}
                        alt="edit-btn"
                      />
                    </CardAction>
                  ) : isFollowed ? (
                    <FollowDiv style={{ marginRight: "16px", marginLeft: "0" }}>
                      <UnfollowButton
                        onClick={() => handleUnfollowUser(author.userid)}
                      >
                        <FollowSpan>Đã theo dõi</FollowSpan>
                      </UnfollowButton>
                    </FollowDiv>
                  ) : (
                    <FollowDiv>
                      <FollowButton
                        onClick={() => handleFollowUser(author.userid)}
                      >
                        <FollowSpan>Theo dõi</FollowSpan>
                      </FollowButton>
                    </FollowDiv>
                  )}
                  <PostSelectMenu isActive={isSelectMenuOn}>
                    <SelectMenuTitle>Khác</SelectMenuTitle>
                    <SelectMenuList>
                      <SelectMenuItem onClick={handleEditPost}>
                        <EditPostIcon src={EditBtn} alt="edit-post" />
                        <SelectMenuItemSpan>
                          Chỉnh sửa bài viết
                        </SelectMenuItemSpan>
                      </SelectMenuItem>
                      {/* <SelectMenuItem
                        onClick={() => handleDeletePost(currentPost.postid)}
                      >
                        <TrashFillIcon />
                        <SelectMenuItemSpan>Xóa bài viết</SelectMenuItemSpan>
                      </SelectMenuItem> */}
                      <SelectMenuItem onClick={handleSelectMenuOff}>
                        <CancelSelectMenuIcon />
                        <SelectMenuItemSpan>Hủy</SelectMenuItemSpan>
                      </SelectMenuItem>
                    </SelectMenuList>
                  </PostSelectMenu>
                </ArticleCardAction>
              </CardHeader>
              <PostRouter to={`/posts/${currentPost.postid}`}>
                <ArticleCardTitle>{currentPost.postTitle}</ArticleCardTitle>
                <ArticleCardContent>
                  {currentPost.postContent}
                </ArticleCardContent>
                {currentPost.postImage && (
                  <ArticleCardPreview>
                    <ArticleImage
                      src={currentPost.postImage}
                      alt="post-image"
                    />
                  </ArticleCardPreview>
                )}
              </PostRouter>
              <ArticleCardTopic>
                {currentPost.hashtag.length !== 0 &&
                  currentPost.hashtag.map((tag) => (
                    <ArticleCardTopicLabel>
                      <TopicRouter to="/">{"#" + tag}</TopicRouter>
                    </ArticleCardTopicLabel>
                  ))}
              </ArticleCardTopic>
              <ArticlePostStats>
                <PostStatsItem>
                  <PostStatsIconLike isLiked={hasLiked}>
                    {hasLiked ? (
                      <PostIconLiked
                        onClick={() => handleUnlikePost(currentPost.postid)}
                      />
                    ) : (
                      <PostIconLike
                        onClick={() => handleLikePost(currentPost.postid)}
                      />
                    )}
                    <PostStatsSpan>
                      {currentPost.postLikes.length}
                    </PostStatsSpan>
                  </PostStatsIconLike>
                </PostStatsItem>
                <PostStatsItem>
                  <PostStatsIconComment
                    to="comment-section"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                  >
                    <PostIconComment />
                    <PostStatsSpan>{currentPost.comment.length}</PostStatsSpan>
                  </PostStatsIconComment>
                </PostStatsItem>
              </ArticlePostStats>
            </PostsContainer>
          )}

          <PostReplyContainer id="comment-section">
            <UserReplySection>
              <UserReplyLabel>Comment</UserReplyLabel>
              <UserReplyBody borderChange={isCommentFocused}>
                <UserReplyTextArea
                  type="text"
                  maxLength="1000"
                  placeholder="Ex: Bài viết rất hay rất cảm xúc..."
                  value={userComment}
                  onChange={(e) => setUserComment(e.target.value)}
                  onBlur={() => setIsCommentFocused(false)}
                  onFocus={() => setIsCommentFocused(true)}
                />
                <UserReplyMaxCount>{userComment.length}/1000</UserReplyMaxCount>
              </UserReplyBody>
              <ReplyBoxFooter>
                <SendButton
                  onClick={() => handleSendComment(currentPost.postid)}
                >
                  Gửi
                </SendButton>
              </ReplyBoxFooter>
            </UserReplySection>
            <PostReplyList>
              <ReplyListHeader>
                <ReplyListItem>Tất cả comments</ReplyListItem>
              </ReplyListHeader>
              <div>
                <div style={{ backgroundColor: "#fff" }}>
                  {currentPost.comment.length === 0 ? (
                    <NoCommentsImgContainer>
                      <NoCommentsImg src={NoComments} alt="no-comment-img" />
                    </NoCommentsImgContainer>
                  ) : (
                    currentPost.comment.map((c, i) => {
                      const commentArray = c.split(":");
                      const commentHost = parseInt(commentArray[0]);
                      const findIndex = users.findIndex(
                        (u) => u.userid === commentHost
                      );
                      const commentHostInfo = users[findIndex];
                      let hostAva = RaidenAva;
                      switch (commentHostInfo.avatar) {
                        case "RaidenAva":
                          hostAva = RaidenAva;
                          break;
                        case "DoggoAva":
                          hostAva = DoggoAva;
                          break;
                        case "HutaoAva":
                          hostAva = HutaoAva;
                          break;
                        default:
                          hostAva = RaidenAva;
                          break;
                      }
                      const commentContent = commentArray[1];
                      return (
                        <CommendCard key={i}>
                          <div className="comment-card_left">
                            <CommentCardAvatar>
                              <CommentAvatar src={hostAva} alt="comment-ava" />
                            </CommentCardAvatar>
                          </div>
                          <CommentCardContainer>
                            <CCHeader>
                              <CCAcount
                                to={
                                  commentHostInfo.userid === user.userid
                                    ? `/user/${commentHostInfo.userid}`
                                    : `/otheruser/${commentHostInfo.userid}`
                                }
                              >
                                {commentHostInfo.name}
                              </CCAcount>
                              <CCOperation>
                                <CCAction>
                                  <CCActionIcon
                                    /* isSelected={isCommentMenuOn} */
                                    onClick={() => handleCommentMenu(i)}
                                  />
                                  <CCSelectMenu
                                    isOn={commentMenuState[i].state}
                                  >
                                    <CCSelectMenuTitle>Khác</CCSelectMenuTitle>
                                    <CCUl>
                                      <CCLi>
                                        <NotVisible />
                                        <CCLiSpan>Ẩn bình luận này</CCLiSpan>
                                      </CCLi>
                                    </CCUl>
                                  </CCSelectMenu>
                                </CCAction>
                              </CCOperation>
                            </CCHeader>
                            <CCContent>{commentContent}</CCContent>
                          </CommentCardContainer>
                        </CommendCard>
                      );
                    })
                  )}
                </div>
              </div>
              <EndOfCommentSection>
                <Nomore>Không còn bình luận nào nữa ~.~</Nomore>
              </EndOfCommentSection>
            </PostReplyList>
          </PostReplyContainer>
        </>
      );
    }
  }

  if (waifusLoading) {
    left = (
      <LeftSideNav>
        <LeftSideNavLoading>
          <LeftSideNavLoadingIcon src={LoadingNav} alt="loading-nav" />
          <LeftSideNavLoadingDiv>Đang tải</LeftSideNavLoadingDiv>
        </LeftSideNavLoading>
      </LeftSideNav>
    );
  } else if (waifus.length === 0) {
    left = (
      <LeftSideNav>
        <LeftNavWrap to={`/waifudb`}>
          <LeftImg src={LeftImage} alt="roll-waifu" />
          <LeftItem>Roll Waifu</LeftItem>
        </LeftNavWrap>
        <LeftNavWrap to="/postlist">
          <Posting />
          <LeftItem>Trang chủ</LeftItem>
        </LeftNavWrap>
        <LeftNavWrap to="/waifudb">
          <Database />
          <LeftItem>Waifu Database</LeftItem>
        </LeftNavWrap>
        <LeftNavWrap to="/about-us">
          <Us />
          <LeftItem>Về chúng tôi</LeftItem>
        </LeftNavWrap>
        <LeftNavWrap to="/about-pj">
          <Prj />
          <LeftItem>Về Project</LeftItem>
        </LeftNavWrap>
      </LeftSideNav>
    );
  } else {
    left = (
      <>
        <MenuItem
          disabled={rollTimes === 0}
          onClick={startReset}
          to={`/waifudb/${
            waifus[Math.floor(Math.random() * waifus.length)].waifuid
          }/get`}
        >
          <LeftImg src={LeftImage} alt="roll-waifu" />
          <LeftItem>
            {rollTimes === 0 ? (
              <Timer
                countdownTimestampMs={deadline}
                handleDead={handleDead}
                rollTimes={rollTimes}
              />
            ) : (
              `Roll Waifu (${rollTimes})`
            )}
          </LeftItem>
        </MenuItem>
        <LeftNavWrap to="/postlist">
          <Posting />
          <LeftItem>Trang chủ</LeftItem>
        </LeftNavWrap>
        <MenuItem to="/waifudb">
          <Database />
          <LeftItem>Waifu Database</LeftItem>
        </MenuItem>
        <MenuItem to="/about-us">
          <Us />
          <LeftItem>Về chúng tôi</LeftItem>
        </MenuItem>
        <MenuItem to="/about-pj">
          <Prj />
          <LeftItem>Về Project</LeftItem>
        </MenuItem>
      </>
    );
  }

  return (
    <>
      <AllContainer>
        <ToTopButton
          visible={visible}
          to={`/posts/${parseInt(postId.id)}`}
          onClick={toggleHome}
        >
          <img src={ToTopBtn} alt="to-top-btn" />
        </ToTopButton>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/postlist">
              <Img src={WebLogo} alt="weblogo" />
            </NavLogo>
            <SearchBarContainer>
              <SearchBarIcon />
              <SearchBar
                type="text"
                placeholder="Nhập tên waifu muốn tìm"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                autoComplete="off"
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
              />
            </SearchBarContainer>
            <NavRightPart>
              <PostIconNavContainer>
                <PostIconNavWrap onClick={() => setIsDialogOpen(!isDialogOpen)}>
                  <PostIconNav />
                </PostIconNavWrap>
                <NavPostDialog isTurnOn={isDialogOpen}>
                  <div>
                    <NavPostNew>
                      <NavPostNewContent>
                        <NavPostNewItem>
                          <DialogPostButton
                            onClick={() => navigate("/createpost")}
                          >
                            <NewPostIconWrap>
                              <NewPostIcon />
                            </NewPostIconWrap>
                            <DialogSpan>Đăng bài viết</DialogSpan>
                            <PostNewArrow />
                          </DialogPostButton>
                        </NavPostNewItem>
                      </NavPostNewContent>
                    </NavPostNew>
                  </div>
                </NavPostDialog>
              </PostIconNavContainer>
              <User onClick={handleOpen}>
                <UserAva src={userAva} alt="user-ava" />
                <UserName>{user.name}</UserName>
                <IoIosArrowDown />
              </User>
            </NavRightPart>
            {open && (
              <div className="dropdown">
                <div className="my-info">Thông tin của tôi</div>
                <LinkRouter to={`/user/${user.userid}`} className="menu-item">
                  <span className="icon-left">
                    <GrUserSettings />
                  </span>
                  Thiết lập hồ sơ
                  <span className="icon-right">
                    <MdKeyboardArrowRight />
                  </span>
                </LinkRouter>
                <div onClick={handleLogout} className="menu-item">
                  <span className="icon-left">
                    <RiLogoutBoxLine />
                  </span>
                  Đăng xuất
                  <span className="icon-right">
                    <MdKeyboardArrowRight />
                  </span>
                </div>
              </div>
            )}
          </NavbarContainer>
        </Nav>
        <StickyNavLeft>
          <StickyNavLeftHolder>
            <StickyNavFixed>
              <StickyNavScroll>
                <SideMenu>{left}</SideMenu>
              </StickyNavScroll>
            </StickyNavFixed>
          </StickyNavLeftHolder>
        </StickyNavLeft>
        <RootPageContainer>
          <RootPageLayout>
            <MainPage>
              <PostDetailHeader>
                <PostHeaderMask>
                  <PostHeaderWrap>
                    <PostHeaderContent>
                      <PostHeaderMain>
                        <PostHeaderLeft>
                          <PostHeaderLeftH1>Chi tiết bài viết</PostHeaderLeftH1>
                        </PostHeaderLeft>
                      </PostHeaderMain>
                    </PostHeaderContent>
                  </PostHeaderWrap>
                </PostHeaderMask>
              </PostDetailHeader>
              {body}
            </MainPage>
            <RightPart>
              <ContactHeader>
                <ContactTitle>Liên lạc với chúng tôi</ContactTitle>
              </ContactHeader>
              <MailWrap>
                <MailTitle>Liên hệ</MailTitle>
              </MailWrap>
              <MailCard>
                <EmailAdd>abc@gmail.com</EmailAdd>
                <EmailOwner>Ramu</EmailOwner>
              </MailCard>
              <ContactFooter>
                <PaiFace src={Paimoe} alt="pai-logo" />
                <CopyRight>All Rights Reserved.</CopyRight>
              </ContactFooter>
            </RightPart>
          </RootPageLayout>
        </RootPageContainer>
      </AllContainer>

      <div id="snackbar">
        <Toast>
          {type === "success" ? (
            <AiOutlineCheckCircle className="alert-icon-success" />
          ) : (
            <MdErrorOutline className="alert-icon-error" />
          )}
          {message}
        </Toast>
        <ToastMsg>{desc}</ToastMsg>
      </div>
    </>
  );
};

function myFunction() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}

export default CreatePost;
