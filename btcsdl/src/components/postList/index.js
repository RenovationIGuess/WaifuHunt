import React, { useState, useEffect, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
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
  FollowDiv,
  FollowButton,
  FollowSpan,
  UnfollowButton,
  NewVidIconWrap,
  NewImgIconWrap,
  NewImgIcon,
  NewVidIcon,
  NoOneToFollow,
  FollowedIcon,
  UserList,
  WaifuSearchResult,
  ArticleType,
  ArticleTitleSpan,
} from "../profile/pfelement";

/* import { useComponentVisible } from "../../utils/useComponentVisible"; */

import { Loading } from "../Loading";

import Chilling from "../../videos/chillin.gif";
import LoadingNav from "../../videos/loadingNav.gif";
import NoPost from "../../videos/loadingPost.gif";
import NoOne from "../../videos/noOne.gif";

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
import "../imgprev.scss";

import HutaoAva from "../../images/hutaostick.png";
import RaidenAva from "../../images/raidenfbi.png";
import DoggoAva from "../../images/realdoggo.png";

import { ToastMsg } from "../toastMsg";

import { TIME_STORAGE, ROLL_STORAGE } from "../../contexts/constants";

import { WaifuContext } from "../../contexts/WaifuContext";
import { PostContext } from "../../contexts/PostContext";
import { PostCommentContext } from "../../contexts/PostCommentContext";
/* import { UserContext } from "../../contexts/UsersContext"; */

import Timer from "../timer";
import {
  AccountTitleName,
  AllContainer,
  AuthorAvatar,
  AuthorAvatarImage,
  HiFollowedIcon,
  HiFollowIcon,
  InputSearchContainer,
  LoadingContainer,
  MainPage,
  MenuItem,
  RecommandAuthor,
  RecommandUserCardItem,
  RecommandUserCardWrap,
  RecommendUserCard,
  RecommendUserList,
  RightContainer,
  RightItem,
  RightPart,
  RightSectionH2,
  RightSectionHeader,
  RootPageContainer,
  RootPageLayout,
  SideMenu,
  SideSectionBody,
  SideSectionFooter,
  SideSectionMore,
  StickyNavFixed,
  StickyNavLeft,
  StickyNavLeftHolder,
  StickyNavScroll,
  TopicCard,
  TopicCardBase,
  TopicCardContent,
  TopicCardHeader,
  TopicCardHeaderWrap,
  TopicCardStats,
  TopicList,
  TopicSectionBody,
  ToUserPageLink,
  UserCardFollow,
  UserCardInfo,
  UserCardName,
  UserFollowButton,
  UserSearch,
  UserUnfollowButton,
} from "../createpost/createPostElement";
import {
  ArticleCardVideo,
  PHRArrowIcon,
  PHRLi,
  PHRLiSpan,
  PHRSelect,
  PHRSelectContainer,
  PHRSelectMenu,
  PHRSpan,
  PHRUl,
  PostDetailHeader,
  PostHeaderContent,
  PostHeaderLeft,
  PostHeaderLeftH1,
  PostHeaderMain,
  PostHeaderMask,
  PostHeaderRight,
  PostHeaderRightList,
  PostHeaderWrap,
  YoutubePlayer,
} from "../postDetail/postDetailEle";
import {
  ArticleCardImageItem,
  ArticleCardImagePreview,
  ArticleCardMark,
  ArticleImageNum,
  ArticleImageNumIcon,
  Banner,
  BannerBullet,
  BannerImg,
  BannerItem,
  BannerNext,
  BannerPagination,
  BannerPrev,
  BannerWrapper,
  NewImageIcon,
  NewVideoIcon,
  NextIcon,
  NoPostImg,
  NoPosts,
  PostNew,
  PostNewArrow,
  PostNewBtnSpan,
  PostNewButton,
  PostNewButtonDiv,
  PostNewButtonDivAfter,
  PostNewButtonImg,
  PostNewButtonVid,
  PostNewContent,
  PostNewSymbolIcon,
  PostNewTitle,
  PrevIcon,
  SwiperWrapper,
} from "./postListEle";
import { EmptyText } from "../waifudb/waifuElement";
import {
  AutoCompleteItem,
  AutoCompleteList,
  AutoCompleteResult,
  AutoCompleteWrap,
  ClearInput,
  IconSearch,
  SBPHList,
  SBPHListItem,
  SBPHTitle,
  SearchAutoComplete,
  SearchBarInput,
  SearchBarPlaceHolder,
  SearchInput,
  WFForm,
} from "../inputBoxElement";

import useComponentVisible from "../../utils/useComponentVisible";
import { BannerSlider } from "./slideData";
import useWaifuVisible from "../../utils/useWaifuVisible";
import {
  MessageBoxButton,
  MessageBoxContent,
  MessageBoxFooter,
  MessageBoxHeader,
} from "../modals/confirmModal";
import {
  DialogButton,
  DialogClose,
  DialogCloseIcon,
} from "../waifuinfo/waifuinfoele";
import {
  CloseButton,
  PswpBg,
  PswpContainer,
  PswpImg,
  PswpImgPlaceholder,
  PswpItem,
  PswpPicturePreview,
  PswpScrollWrap,
  PswpTopBar,
  PswpUI,
  PswpZoomWrap,
} from "../imagePreview";

const CreatePost = () => {
  const {
    authState: { user, users, usersLoading },
    logoutUser,
    increaseRoll,
    followUser,
    unfollowUser,
    loadAllUser,
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
    deletePost,
  } = useContext(PostContext);

  const {
    postCommentState: { comments, commentsLoading },
    getAllPostComments,
  } = useContext(PostCommentContext);

  /* const {
    userState: { users, usersLoading },
    loadAllUser,
  } = useContext(UserContext); */

  let body;
  let left;
  let suggestedTag;
  let suggestedUser;
  let findingUser;
  let waifuSearchBar;

  const navigate = useNavigate();
  /* const maxWidth = document.documentElement.clientWidth;
  const maxHeight = document.documentElement.clientHeight; */
  /* const maxWidth = window.innerWidth;
  const maxHeight = window.innerHeight; */

  // Get the current time for the first render
  /* const [currentTime, setCurrentTime] = useState(new Date().getTime()); */
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [deletedPostId, setDeletedPostId] = useState(-1);
  const [deletedPostIndex, setDeletedPostIndex] = useState(-1);
  const slideLength = BannerSlider.length;
  const timeoutRef = useRef(null);
  const delay = 3000;

  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isLined, setIsLined] = useState(false);
  const [userAva, setUserAva] = useState(RaidenAva);

  // Ava handler
  const [AvaRaiden, setAvaRaiden] = useState(false);
  const [AvaHutao, setAvaHutao] = useState(false);
  const [AvaDoggo, setAvaDoggo] = useState(false);

  // Controlling preview post image
  const [dimensions, setDimensions] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  });
  const [isPreviewed, setIsPreviewed] = useState(false);
  const [currentPreviewImg, setCurrentPreviewImg] = useState(InazumaBg);
  const [scaleValue, setScaleValue] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);
  const [imgTransformX, setImgTransformX] = useState(0);
  const [imgTransformY, setImgTransformY] = useState(0);
  const [currentSelectElement, setCurrentSelectElement] = useState(null);

  // Controlling post menu
  const [isSelectMenuOn, setIsSelectMenuOn] = useState(false);

  // Controlling post header right menu
  const [isPHRMenuOn, setIsPHRMenuOn] = useState(false);
  const [newestPost, setNewestPost] = useState(true);
  const [myPost, setMyPost] = useState(false);
  const [follow, setFollow] = useState(false);

  // Modal message
  const [message, setMessage] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("");

  // Used for searching
  const [searchValue, setSearchValue] = useState("");

  // Timeout
  const initTimer = 3600000; //in miliseconds, 3600000 = 1 hour

  // Controlling NavPostDialog
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Control SelectedMenu
  const [postSelectState, setPostSelectState] = useState([]);

  // Set a temporary post
  const [tempPosts, setTempPosts] = useState([]);

  // Control UserInput
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const { waifuRef, isWaifuVisible, setIsWaifuVisible } =
    useWaifuVisible(false);
  /* const [isUserInputOn, setIsUserInputOn] = useState(false); */
  const [userInputValue, setUserInputValue] = useState("");
  /* const [isClearIconShown, setIsClearIconShown] = useState(false); */

  const [suggestedFollowUser, setSuggestedFollowUser] = useState([]);

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

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  const chooseSlide = (index) => {
    setCurrentSlide(index);
  };

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      });
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  useEffect(() => {
    let imgWidth;
    let imgHeight;
    let transformX;
    let transformY;
    let scaleVal;
    const maxWidth = dimensions.width;
    const maxHeight = dimensions.height;
    let image = new Image();
    image.src = currentPreviewImg;
    const imgNaturalWidth = image.width;
    const imgNaturalHeight = image.height;
    let widthRatio = imgNaturalWidth / maxWidth;
    let heightRatio = imgNaturalHeight / maxHeight;

    if (widthRatio > 1 && heightRatio > 1) {
      if (widthRatio > heightRatio) {
        imgHeight = Math.floor(imgNaturalHeight / widthRatio);
        if (imgHeight > maxHeight - 88) {
          imgHeight = maxHeight - 88;
          imgWidth = Math.floor(
            (imgNaturalWidth * imgHeight) / imgNaturalHeight
          );
          transformX = Math.floor((maxWidth - imgWidth) / 2);
          transformY = 44;
        } else {
          imgWidth = maxWidth;
          transformX = 0;
          transformY = Math.floor((maxHeight - imgHeight) / 2);
        }
      } else {
        imgWidth = Math.floor(imgNaturalWidth / heightRatio);
        if (imgWidth > maxWidth) {
          imgWidth = maxWidth;
          imgHeight = Math.floor(
            (imgNaturalHeight * imgWidth) / imgNaturalWidth
          );
          transformX = 0;
          transformY = Math.floor((maxHeight - imgHeight) / 2);
        } else {
          imgHeight = maxHeight - 88;
          transformY = 44;
          transformX = Math.floor((maxWidth - imgWidth) / 2);
        }
      }
      scaleVal = 1;
    } else if (widthRatio > 1 && heightRatio <= 1) {
      imgWidth = maxWidth;
      imgHeight = Math.floor(imgNaturalHeight / widthRatio);
      transformX = 0;
      transformY = Math.floor((maxHeight - imgHeight) / 2);
      scaleVal = 1;
    } else if (widthRatio <= 1 && heightRatio > 1) {
      imgHeight = maxHeight - 88;
      imgWidth = Math.floor(imgNaturalWidth / heightRatio);
      transformY = 44;
      transformX = Math.floor((maxWidth - imgWidth) / 2);
      scaleVal = 1;
    } else if (widthRatio <= 1 && heightRatio <= 1) {
      imgWidth = maxWidth;
      imgHeight = Math.floor(imgNaturalHeight / widthRatio);
      transformX = Math.floor((maxWidth - imgNaturalWidth) / 2);
      transformY = Math.floor((maxHeight - imgNaturalHeight) / 2);
      scaleVal = widthRatio;
    }

    /* console.log(maxWidth);
    console.log(imgWidth)
    console.log(transformX) */

    setScaleValue(scaleVal);
    /* setCurrentPreviewImg(previewImg); */
    setImageHeight(imgHeight);
    setImageWidth(imgWidth);
    setImgTransformX(transformX);
    setImgTransformY(transformY);
  }, [dimensions]);

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentSlide(
          currentSlide === slideLength - 1 ? 0 : currentSlide + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [currentSlide, slideLength]);

  useEffect(() => {
    async function fetchData() {
      await getPosts();
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      await loadAllUser();
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      await getAllPostComments();
    }
    fetchData();
  }, []);

  useEffect(() => {
    document.title = "Trang chủ | WaifuHunt";
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
      if (window.scrollY >= 160) {
        setIsLined(true);
      } else setIsLined(false);
    } else {
      setIsLined(false);
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
    setIsDialogOpen(false);
  };

  const handleDialogOpen = () => {
    setOpen(false);
    setIsDialogOpen(!isDialogOpen);
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

  const handleSelectMenu = (index) => {
    postSelectState[index].state = !postSelectState[index].state;
    for (const item of postSelectState) {
      if (item.postid !== postSelectState[index].postid) {
        item.state = false;
      }
    }
    // use to cause rerender
    setIsSelectMenuOn(!isSelectMenuOn);
  };

  const handleLikePost = async (postId) => {
    try {
      const afterLikedPost = await likePost({ postid: postId });
      if (afterLikedPost.success) {
        setMessage("Đã tính like vào post này nha :v!");
        setDesc("Đừng để ý thông báo này :3 :v!");
        setType("success");
        myFunction();
        const newPostIndex = tempPosts.findIndex(
          (p) => p.postid === afterLikedPost.updatedPost.postid
        );
        tempPosts[newPostIndex] = { ...afterLikedPost.updatedPost };
        setTempPosts(tempPosts);
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
        const newPostIndex = tempPosts.findIndex(
          (p) => p.postid === afterUnlikedPost.updatedPost.postid
        );
        tempPosts[newPostIndex] = { ...afterUnlikedPost.updatedPost };
        setTempPosts(tempPosts);
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

  const handleDeletePost = async (index, id) => {
    try {
      const delResponse = await deletePost(id);
      if (delResponse.success) {
        setMessage("Xóa post thành công!");
        setDesc("Ơ kìa...");
        setType("success");
        myFunction();
        /* console.log(posts)
        posts.filter((p) => p.postid !== id);
        console.log(posts) */
        postSelectState[index].state = !postSelectState[index].state;
        // use to cause rerender
        setIsSelectMenuOn(!isSelectMenuOn);
        setTempPosts(tempPosts.filter((p) => p.postid !== id));
        setPostSelectState(postSelectState.filter((p) => p.postid !== id));
      } else {
        setMessage("Xóa post thất bại!");
        setDesc(delResponse.message);
        setType("error");
        myFunction();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleNewestPost = () => {
    setNewestPost(true);
    setMyPost(false);
    setFollow(false);
    setIsPHRMenuOn(false);
    setTempPosts([...posts].reverse());
    const newestPostSelectState = [];
    posts.map((p) =>
      newestPostSelectState.push({
        postid: p.postid,
        state: false,
      })
    );
    setPostSelectState(newestPostSelectState);
  };

  const handleMyPost = () => {
    setNewestPost(false);
    setMyPost(true);
    setFollow(false);
    setIsPHRMenuOn(false);
    /* posts = tempPosts.filter((p) => p.postAuthor === user._id); */
    const allOfMyPosts = posts.filter((p) => p.postAuthor === user._id);
    const myPostSelectState = [];
    allOfMyPosts.map((p) =>
      myPostSelectState.push({
        postid: p.postid,
        state: false,
      })
    );
    setTempPosts(allOfMyPosts);
    setPostSelectState(myPostSelectState);
  };

  const handleFollow = () => {
    setNewestPost(false);
    setMyPost(false);
    setFollow(true);
    setIsPHRMenuOn(false);
    /* posts = tempPosts.filter((p) => {
      const authorIndex = users.findIndex((u) => u._id === p.postAuthor);
      const author = users[authorIndex];
      const checkFollow = user.follow.includes(author.userid);
      if (checkFollow) return p;
    }); */
    const followedPosts = posts.filter((p) => {
      const authorIndex = users.findIndex((u) => u._id === p.postAuthor);
      const author = users[authorIndex];
      const checkFollow = user.follow.includes(author.userid);
      if (checkFollow) return p;
    });
    /* const followedPostState = [];
    followedPosts.map((p) =>
      followedPostState.push({
        postid: p.postid,
        state: false,
      })
    ); */
    setTempPosts(followedPosts);
    /* setPostSelectState(followedPostState); */
  };

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

  const handleClearUserInput = () => {
    setUserInputValue("");
  };

  const handleSearchUser = () => {
    if (userInputValue !== "") {
      const findId = parseInt(userInputValue);
      if (findId !== NaN) {
        const userToFind = users.findIndex((u) => u.userid === findId);
        if (userToFind !== -1) {
          navigate(`/otheruser/${users[userToFind].userid}`);
        } else {
          setMessage("ID bạn nhập không tồn tại!");
          setDesc("Hãy thử lại!");
          setType("error");
          myFunction();
        }
      } else {
        setMessage("ID bạn vừa nhập không phải là 1 số!");
        setDesc("Hãy thử lại!");
        setType("error");
        myFunction();
      }
    } else {
      setMessage("Bạn đã nhập gì đâu :v");
      setDesc("Hãy thử lại!");
      setType("error");
      myFunction();
    }
  };

  const handleCloseConfirmBox = () => {
    const messageBoxContainer = document.querySelector(".msg-box-container-in");
    const messageBox = document.querySelector(".msg-box-in");
    messageBox.classList.add("msg-box-leave");
    messageBoxContainer.classList.add("msg-box-container-leave");
    setTimeout(() => {
      messageBox.classList.add("msg-box-gone");
      messageBoxContainer.classList.remove("msg-box-container-leave");
      messageBox.classList.remove("msg-box-leave");
    }, 200);
  };

  const handleCancelConfirmBox = () => {
    handleCloseConfirmBox();
    handleDeletePost(deletedPostIndex, deletedPostId);
  };

  const handleOpenConfirmBox = (index, postId) => {
    const messageBox = document.querySelector(".msg-box-in");
    messageBox.classList.remove("msg-box-gone");
    setDeletedPostId(postId);
    setDeletedPostIndex(index);
  };

  const handlePreviewImage = (event, previewImg, dataId) => {
    event.preventDefault();
    event.stopPropagation();

    let pswp = document.querySelector(".pswp");
    pswp.classList.add("pswp-animate-opacity", "pswp-open");
    pswp.style.position = "fixed";
    setTimeout(() => {
      pswp.style.opacity = 1;
    }, 1);
    let pswpBg = document.querySelector(".pswp_bg");
    pswpBg.style.opacity = "0.8";
    setTimeout(() => {
      pswpBg.classList.add("pswp-animate-in");
    }, 333);

    let imgWidth;
    let imgHeight;
    let transformX;
    let transformY;
    let scaleVal;
    const maxWidth = dimensions.width;
    const maxHeight = dimensions.height;
    let image = new Image();
    image.src = previewImg;
    const imgNaturalWidth = image.width;
    const imgNaturalHeight = image.height;
    let widthRatio = imgNaturalWidth / maxWidth;
    let heightRatio = imgNaturalHeight / maxHeight;

    const imgDiv = document.querySelector(`[data-id=${dataId}]`);
    const pswpZoomWrap = document.querySelector(".pswp_zoom-wrap");
    pswpZoomWrap.classList.add("pswp-animate-in");
    const imgDivRect = imgDiv.getBoundingClientRect();
    console.log(imgDivRect.left);
    console.log(imgDivRect.top);
    console.log(imgDiv.clientWidth);
    setImgTransformX(imgDivRect.left);
    setImgTransformY(imgDivRect.top);
    setScaleValue(imgDiv.clientWidth / maxWidth);

    if (widthRatio > 1 && heightRatio > 1) {
      if (widthRatio > heightRatio) {
        imgHeight = Math.floor(imgNaturalHeight / widthRatio);
        if (imgHeight > maxHeight - 88) {
          imgHeight = maxHeight - 88;
          imgWidth = Math.floor(
            (imgNaturalWidth * imgHeight) / imgNaturalHeight
          );
          transformX = Math.floor((maxWidth - imgWidth) / 2);
          transformY = 44;
        } else {
          imgWidth = maxWidth;
          transformX = 0;
          transformY = Math.floor((maxHeight - imgHeight) / 2);
        }
      } else {
        imgWidth = Math.floor(imgNaturalWidth / heightRatio);
        if (imgWidth > maxWidth) {
          imgWidth = maxWidth;
          imgHeight = Math.floor(
            (imgNaturalHeight * imgWidth) / imgNaturalWidth
          );
          transformX = 0;
          transformY = Math.floor((maxHeight - imgHeight) / 2);
        } else {
          imgHeight = maxHeight - 88;
          transformY = 44;
          transformX = Math.floor((maxWidth - imgWidth) / 2);
        }
      }
      scaleVal = 1;
    } else if (widthRatio > 1 && heightRatio <= 1) {
      imgWidth = maxWidth;
      imgHeight = Math.floor(imgNaturalHeight / widthRatio);
      transformX = 0;
      transformY = Math.floor((maxHeight - imgHeight) / 2);
      scaleVal = 1;
    } else if (widthRatio <= 1 && heightRatio > 1) {
      imgHeight = maxHeight - 88;
      imgWidth = Math.floor(imgNaturalWidth / heightRatio);
      transformY = 44;
      transformX = Math.floor((maxWidth - imgWidth) / 2);
      scaleVal = 1;
    } else if (widthRatio <= 1 && heightRatio <= 1) {
      imgWidth = maxWidth;
      imgHeight = Math.floor(imgNaturalHeight / widthRatio);
      transformX = Math.floor((maxWidth - imgNaturalWidth) / 2);
      transformY = Math.floor((maxHeight - imgNaturalHeight) / 2);
      scaleVal = widthRatio;
    }

    setCurrentSelectElement(imgDiv);
    setIsPreviewed(true);
    setCurrentPreviewImg(previewImg);
    setImageHeight(imgHeight);
    setImageWidth(imgWidth);
    setTimeout(() => {
      setImgTransformX(transformX);
      setImgTransformY(transformY);
      setScaleValue(scaleVal);
      pswpZoomWrap.classList.remove("pswp-animate-in");
    }, 1);
  };

  const handleCancelPreviewImage = () => {
    let pswp = document.querySelector(".pswp");
    pswp.style.opacity = 0;
    setTimeout(() => {
      pswp.classList.remove("pswp-animate-opacity", "pswp-open");
      pswp.removeAttribute("style");
    }, 333);
    let pswpBg = document.querySelector(".pswp_bg");
    /* pswpBg.style.opacity = '0'; */
    setTimeout(() => {
      pswpBg.classList.remove("pswp-animate-in");
      pswpBg.removeAttribute("style");
    }, 333);
    setIsPreviewed(false);
    const currentSelectElementRect =
      currentSelectElement.getBoundingClientRect();
    setImgTransformX(currentSelectElementRect.left);
    setImgTransformY(currentSelectElementRect.top);
    setScaleValue(currentSelectElement.clientWidth / dimensions.width);
  };

  if (postsLoading) {
    body = (
      <LoadingContainer>
        <Loading src={Chilling} alt="loading-chilling" />
      </LoadingContainer>
    );
  } else if (posts.length === 0) {
    body = (
      <NoPosts>
        <NoPostImg src={NoPost} alt="no-posts" />
        <EmptyText>
          {newestPost
            ? "Chưa có bài viết nào được tạo"
            : myPost
            ? "Bạn chưa đăng bài viết nào"
            : "Bạn chưa follow ai hoặc người bạn follow chưa tạo bài viết nào"}
        </EmptyText>
      </NoPosts>
    );
  } else {
    if (tempPosts.length === 0 && newestPost) {
      for (let i = posts.length - 1; i >= 0; --i) {
        tempPosts.push({ ...posts[i] });
      }
    }
    if (postSelectState.length === 0 && newestPost) {
      posts.map((p) =>
        postSelectState.push({
          postid: p.postid,
          state: false,
        })
      );
    }

    if (usersLoading) {
      body = (
        <LoadingContainer>
          <Loading src={Chilling} alt="loading-chilling" />
        </LoadingContainer>
      );
    } else {
      if (tempPosts.length === 0) {
        body = (
          <NoPosts>
            <NoPostImg src={NoPost} alt="no-posts" />
            <EmptyText>
              {myPost
                ? "Bạn chưa đăng bài viết nào"
                : "Bạn chưa follow ai hoặc người bạn follow chưa tạo bài viết nào"}
            </EmptyText>
          </NoPosts>
        );
      } else {
        if (!commentsLoading) {
          if (!follow) {
            body = (
              <>
                {tempPosts.map((p, i) => {
                  const postAuthorIndex = users.findIndex(
                    (u) => u._id === p.postAuthor
                  );
                  const currentPostComments = comments.filter(
                    (c) => c.postid === p.postid
                  );
                  const author = users[postAuthorIndex];
                  if (author) {
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
                    const LikedPostIndex = p.postLikes.findIndex(
                      (u) => u === user.userid
                    );
                    const hasLiked = LikedPostIndex !== -1 ? true : false;
                    const hasFollowedIndex = user.follow.findIndex(
                      (f) => f === author.userid
                    );
                    const isFollowed = hasFollowedIndex === -1 ? false : true;
                    /* const postUploadedDate = new Date(p.createdAt).getTime();
                  let seconds = Math.round(
                    Math.abs(currentTime - postUploadedDate) / 1000
                  ); // round away miliseconds
                  const days = Math.floor(seconds / 86400);
                  seconds -= days * 86400;
                  const hours = Math.floor(seconds / 3600);
                  seconds -= hours * 3600;
                  const minutes = Math.floor(seconds / 60);
                  seconds -= minutes * 60;
                  let displayPostedDate;
                  if (days === 0) {
                    if (hours === 0) {
                      if (minutes === 0) {
                        displayPostedDate = `${seconds} giây trước`;
                      } else {
                        displayPostedDate = `${minutes} phút trước`;
                      }
                    } else {
                      displayPostedDate = `${hours} giờ trước`;
                    }
                  } else {
                    displayPostedDate = `${days} ngày trước`;
                  } */
                    let dateStr = p.createdAt.substring(0, 10);
                    let dateArr = dateStr.split("-");
                    let displayPostedDate = `${dateArr[2]}/${dateArr[1]}/${dateArr[0]}`;
                    let likeDisplay = p.postLikes.length;
                    if (likeDisplay >= 1e9) {
                      likeDisplay = parseFloat((likeDisplay / 1e9).toFixed(1));
                    } else if (likeDisplay >= 1e6) {
                      likeDisplay = parseFloat((likeDisplay / 1e6).toFixed(1));
                    } else if (likeDisplay >= 1e3) {
                      likeDisplay = parseFloat((likeDisplay / 1e3).toFixed(1));
                    }
                    let NumberOfCmt = currentPostComments.length;
                    if (NumberOfCmt >= 1e9) {
                      NumberOfCmt = parseFloat((NumberOfCmt / 1e9).toFixed(1));
                    } else if (NumberOfCmt >= 1e6) {
                      NumberOfCmt = parseFloat((NumberOfCmt / 1e6).toFixed(1));
                    } else if (NumberOfCmt >= 1e3) {
                      NumberOfCmt = parseFloat((NumberOfCmt / 1e3).toFixed(1));
                    }
                    return (
                      <PostsContainer key={p.postid}>
                        <CardHeader style={{ margin: "0" }}>
                          <CardUserInfo>
                            <CardArticle>
                              <PostAva
                                to={
                                  author.userid === user.userid
                                    ? `/user/${author.userid}`
                                    : `/otheruser/${author.userid}`
                                }
                              >
                                <PostAvaImg
                                  src={displayAva}
                                  alt="user-post-ava"
                                />
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
                                <ArticleCardInfo>
                                  {displayPostedDate}
                                </ArticleCardInfo>
                              </PostCardInfo>
                            </CardArticle>
                          </CardUserInfo>
                          <ArticleCardAction>
                            {user.userid === author.userid ? (
                              <CardAction isActive={postSelectState[i].state}>
                                <EditIcon
                                  onClick={() => handleSelectMenu(i)}
                                  src={EditBtn}
                                  alt="edit-btn"
                                />
                              </CardAction>
                            ) : isFollowed ? (
                              <FollowDiv
                                style={{ marginRight: "16px", marginLeft: "0" }}
                              >
                                <UnfollowButton
                                  onClick={() =>
                                    handleUnfollowUser(author.userid)
                                  }
                                >
                                  <FollowSpan>Đã theo dõi</FollowSpan>
                                </UnfollowButton>
                              </FollowDiv>
                            ) : (
                              <FollowDiv>
                                <FollowButton
                                  onClick={() =>
                                    handleFollowUser(author.userid)
                                  }
                                >
                                  <FollowSpan>Theo dõi</FollowSpan>
                                </FollowButton>
                              </FollowDiv>
                            )}
                            <PostSelectMenu isActive={postSelectState[i].state}>
                              <SelectMenuTitle>Khác</SelectMenuTitle>
                              <SelectMenuList>
                                <LinkRouter to={`/posts/${p.postid}`}>
                                  <SelectMenuItem>
                                    <EditPostIcon
                                      src={EditBtn}
                                      alt="edit-post"
                                    />
                                    <SelectMenuItemSpan>
                                      Chỉnh sửa bài viết
                                    </SelectMenuItemSpan>
                                  </SelectMenuItem>
                                </LinkRouter>
                                <SelectMenuItem
                                  onClick={() =>
                                    handleOpenConfirmBox(i, p.postid)
                                  }
                                >
                                  <TrashFillIcon />
                                  <SelectMenuItemSpan>
                                    Xóa bài viết
                                  </SelectMenuItemSpan>
                                </SelectMenuItem>
                                <SelectMenuItem
                                  onClick={() => handleSelectMenu(i)}
                                >
                                  <CancelSelectMenuIcon />
                                  <SelectMenuItemSpan>Hủy</SelectMenuItemSpan>
                                </SelectMenuItem>
                              </SelectMenuList>
                            </PostSelectMenu>
                          </ArticleCardAction>
                        </CardHeader>
                        <PostRouter to={`/posts/${p.postid}`}>
                          <ArticleCardTitle>
                            <ArticleType></ArticleType>
                            <ArticleTitleSpan>{p.postTitle}</ArticleTitleSpan>
                          </ArticleCardTitle>
                          <ArticleCardContent>
                            {p.postContent}
                          </ArticleCardContent>
                          {/* {p.postImage && (
                            <ArticleCardPreview>
                              <ArticleImage
                                src={p.postImage}
                                alt="post-image"
                              />
                            </ArticleCardPreview>
                          )} */}
                          {p.type === "picture" ? (
                            <ArticleCardImagePreview>
                              {p.postImage.map((item, index) => {
                                if (index < 2) {
                                  return (
                                    <ArticleCardImageItem
                                      onClick={(e) =>
                                        handlePreviewImage(
                                          e,
                                          item,
                                          `postid-${i}-image-${index}`
                                        )
                                      }
                                      data-id={`postid-${i}-image-${index}`}
                                      image={item}
                                      percent={
                                        p.postImage.length >= 3
                                          ? `23.5%`
                                          : p.postImage.length === 2
                                          ? `49%`
                                          : `100%`
                                      }
                                      notFirst={index !== 0}
                                    >
                                      <ArticleCardMark></ArticleCardMark>
                                    </ArticleCardImageItem>
                                  );
                                } else if (index === 2) {
                                  return (
                                    <ArticleCardImageItem
                                      onClick={(e) =>
                                        handlePreviewImage(
                                          e,
                                          item,
                                          `postid-${i}-image-${index}`
                                        )
                                      }
                                      data-id={`postid-${i}-image-${index}`}
                                      image={item}
                                      percent={
                                        p.postImage.length >= 3
                                          ? `23.5%`
                                          : p.postImage.length === 2
                                          ? `49%`
                                          : `100%`
                                      }
                                      notFirst={index !== 0}
                                    >
                                      <ArticleCardMark>
                                        {p.postImage.length > 3 && (
                                          <ArticleImageNum>
                                            <ArticleImageNumIcon />
                                            <span>
                                              +{p.postImage.length - 3}
                                            </span>
                                          </ArticleImageNum>
                                        )}
                                      </ArticleCardMark>
                                    </ArticleCardImageItem>
                                  );
                                }
                              })}
                            </ArticleCardImagePreview>
                          ) : (
                            p.type === "video" && (
                              <ArticleCardVideo>
                                <YoutubePlayer>
                                  <ReactPlayer
                                    url={p.videoUrl}
                                    width="100%"
                                    height="100%"
                                    controls={true}
                                  />
                                </YoutubePlayer>
                              </ArticleCardVideo>
                            )
                          )}
                        </PostRouter>
                        <ArticleCardTopic>
                          {p.hashtag.length !== 0 &&
                            p.hashtag.map((tag) => {
                              if (tag !== "") {
                                return (
                                  <ArticleCardTopicLabel>
                                    <TopicRouter to="/">
                                      {"#" + tag}
                                    </TopicRouter>
                                  </ArticleCardTopicLabel>
                                );
                              }
                            })}
                        </ArticleCardTopic>
                        <ArticleCardFooter>
                          <ArticleCardData>
                            <CardDataItem>
                              <CardItemLike isLiked={hasLiked}>
                                {hasLiked ? (
                                  <CardIconLikeFill
                                    onClick={() => handleUnlikePost(p.postid)}
                                  />
                                ) : (
                                  <CardIconLike
                                    onClick={() => handleLikePost(p.postid)}
                                  />
                                )}
                                <CardDataSpan>{likeDisplay}</CardDataSpan>
                              </CardItemLike>
                            </CardDataItem>
                            <CardDataItem>
                              <CardItemComment to={`/posts/${p.postid}`}>
                                <CardIconComment />
                                <CardDataSpan>{NumberOfCmt}</CardDataSpan>
                              </CardItemComment>
                            </CardDataItem>
                          </ArticleCardData>
                        </ArticleCardFooter>
                      </PostsContainer>
                    );
                  }
                })}
              </>
            );
          } else {
            body = (
              <>
                {tempPosts.map((p, i) => {
                  const postAuthorIndex = users.findIndex(
                    (u) => u._id === p.postAuthor
                  );
                  const currentPostComments = comments.filter(
                    (c) => c.postid === p.postid
                  );
                  const author = users[postAuthorIndex];
                  if (author) {
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
                    const LikedPostIndex = p.postLikes.findIndex(
                      (u) => u === user.userid
                    );
                    const hasLiked = LikedPostIndex !== -1 ? true : false;
                    const hasFollowedIndex = user.follow.findIndex(
                      (f) => f === author.userid
                    );
                    const isFollowed = hasFollowedIndex === -1 ? false : true;
                    /* const postUploadedDate = new Date(p.createdAt).getTime();
                    let seconds = Math.round(
                      Math.abs(currentTime - postUploadedDate) / 1000
                    ); // round away miliseconds
                    const days = Math.floor(seconds / 86400);
                    seconds -= days * 86400;
                    const hours = Math.floor(seconds / 3600);
                    seconds -= hours * 3600;
                    const minutes = Math.floor(seconds / 60);
                    seconds -= minutes * 60;
                    let displayPostedDate;
                    if (days === 0) {
                      if (hours === 0) {
                        if (minutes === 0) {
                          displayPostedDate = `${seconds} giây trước`;
                        } else {
                          displayPostedDate = `${minutes} phút trước`;
                        }
                      } else {
                        displayPostedDate = `${hours} giờ trước`;
                      }
                    } else {
                      displayPostedDate = `${days} ngày trước`;
                    } */
                    let dateStr = p.createdAt.substring(0, 10);
                    let dateArr = dateStr.split("-");
                    let displayPostedDate = `${dateArr[2]}/${dateArr[1]}/${dateArr[0]}`;
                    let likeDisplay = p.postLikes.length;
                    if (likeDisplay >= 1e9) {
                      likeDisplay = parseFloat((likeDisplay / 1e9).toFixed(1));
                    } else if (likeDisplay >= 1e6) {
                      likeDisplay = parseFloat((likeDisplay / 1e6).toFixed(1));
                    } else if (likeDisplay >= 1e3) {
                      likeDisplay = parseFloat((likeDisplay / 1e3).toFixed(1));
                    }
                    let NumberOfCmt = currentPostComments.length;
                    if (NumberOfCmt >= 1e9) {
                      NumberOfCmt = parseFloat((NumberOfCmt / 1e9).toFixed(1));
                    } else if (NumberOfCmt >= 1e6) {
                      NumberOfCmt = parseFloat((NumberOfCmt / 1e6).toFixed(1));
                    } else if (NumberOfCmt >= 1e3) {
                      NumberOfCmt = parseFloat((NumberOfCmt / 1e3).toFixed(1));
                    }
                    return (
                      <PostsContainer key={p.postid}>
                        <CardHeader style={{ margin: "0" }}>
                          <CardUserInfo>
                            <CardArticle>
                              <PostAva
                                to={
                                  author.userid === user.userid
                                    ? `/user/${author.userid}`
                                    : `/otheruser/${author.userid}`
                                }
                              >
                                <PostAvaImg
                                  src={displayAva}
                                  alt="user-post-ava"
                                />
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
                                <ArticleCardInfo>
                                  {displayPostedDate}
                                </ArticleCardInfo>
                              </PostCardInfo>
                            </CardArticle>
                          </CardUserInfo>
                          <ArticleCardAction>
                            {isFollowed ? (
                              <FollowDiv
                                style={{ marginRight: "16px", marginLeft: "0" }}
                              >
                                <UnfollowButton
                                  onClick={() =>
                                    handleUnfollowUser(author.userid)
                                  }
                                >
                                  <FollowSpan>Đã theo dõi</FollowSpan>
                                </UnfollowButton>
                              </FollowDiv>
                            ) : (
                              <FollowDiv>
                                <FollowButton
                                  onClick={() =>
                                    handleFollowUser(author.userid)
                                  }
                                >
                                  <FollowSpan>Theo dõi</FollowSpan>
                                </FollowButton>
                              </FollowDiv>
                            )}
                          </ArticleCardAction>
                        </CardHeader>
                        <PostRouter to={`/posts/${p.postid}`}>
                          <ArticleCardTitle>{p.postTitle}</ArticleCardTitle>
                          <ArticleCardContent>
                            {p.postContent}
                          </ArticleCardContent>
                          {p.postImage && (
                            <ArticleCardPreview>
                              <ArticleImage
                                src={p.postImage}
                                alt="post-image"
                              />
                            </ArticleCardPreview>
                          )}
                        </PostRouter>
                        <ArticleCardTopic>
                          {p.hashtag.length !== 0 &&
                            p.hashtag.map((tag) => (
                              <ArticleCardTopicLabel>
                                <TopicRouter to="/">{"#" + tag}</TopicRouter>
                              </ArticleCardTopicLabel>
                            ))}
                        </ArticleCardTopic>
                        <ArticleCardFooter>
                          <ArticleCardData>
                            <CardDataItem>
                              <CardItemLike isLiked={hasLiked}>
                                {hasLiked ? (
                                  <CardIconLikeFill
                                    onClick={() => handleUnlikePost(p.postid)}
                                  />
                                ) : (
                                  <CardIconLike
                                    onClick={() => handleLikePost(p.postid)}
                                  />
                                )}
                                <CardDataSpan>{likeDisplay}</CardDataSpan>
                              </CardItemLike>
                            </CardDataItem>
                            <CardDataItem>
                              <CardItemComment to={`/posts/${p.postid}`}>
                                <CardIconComment />
                                <CardDataSpan>{NumberOfCmt}</CardDataSpan>
                              </CardItemComment>
                            </CardDataItem>
                          </ArticleCardData>
                        </ArticleCardFooter>
                      </PostsContainer>
                    );
                  }
                })}
              </>
            );
          }
        }
      }

      suggestedTag = (
        <RightItem>
          <RightSectionHeader>
            <RightSectionH2>Chủ đề nổi bật</RightSectionH2>
          </RightSectionHeader>
          <TopicSectionBody>
            <TopicList>
              <TopicCard>
                <TopicCardContent>
                  <TopicCardBase>
                    <TopicCardHeader>
                      <TopicCardHeaderWrap>#Testing</TopicCardHeaderWrap>
                    </TopicCardHeader>
                    <TopicCardStats>
                      28k bài đăng / 100k thành viên
                    </TopicCardStats>
                  </TopicCardBase>
                </TopicCardContent>
              </TopicCard>
              <TopicCard>
                <TopicCardContent>
                  <TopicCardBase>
                    <TopicCardHeader>
                      <TopicCardHeaderWrap>#Asking</TopicCardHeaderWrap>
                    </TopicCardHeader>
                    <TopicCardStats>
                      217k bài đăng / 1m thành viên
                    </TopicCardStats>
                  </TopicCardBase>
                </TopicCardContent>
              </TopicCard>
            </TopicList>
          </TopicSectionBody>
          <SideSectionFooter>
            <SideSectionMore to="/postlist">Xem thêm</SideSectionMore>
          </SideSectionFooter>
        </RightItem>
      );

      if (suggestedFollowUser.length === 0) {
        for (let i = 0; i < users.length; ++i) {
          if (users[i].userid !== user.userid) {
            const checkFollow = user.follow.includes(users[i].userid);
            if (!checkFollow) suggestedFollowUser.push(users[i]);
          }
        }
      }

      /* suggestedFollowUser = users.filter((item) => {
        if (item.userid !== user.userid) {
          const checkFollow = user.follow.includes(item.userid);
          if (!checkFollow) return item;
        }
      });

      let randomIndex = 0;
      if (suggestedFollowUser.length > 3) {
        randomIndex = Math.floor(
          Math.random() * (suggestedFollowUser.length - 3)
        );
      } */

      suggestedUser = (
        <RightItem style={{ marginTop: "16px" }}>
          <RightSectionHeader>
            <RightSectionH2>Đề cử người dùng</RightSectionH2>
          </RightSectionHeader>
          <SideSectionBody>
            <RecommendUserList>
              {suggestedFollowUser.length !== 0 ? (
                suggestedFollowUser.length > 3 ? (
                  suggestedFollowUser.slice(0, 3).map((item) => {
                    let dispAva = RaidenAva;
                    switch (item.avatar) {
                      case "RaidenAva":
                        dispAva = RaidenAva;
                        break;
                      case "DoggoAva":
                        dispAva = DoggoAva;
                        break;
                      case "HutaoAva":
                        dispAva = HutaoAva;
                        break;
                      default:
                        dispAva = RaidenAva;
                        break;
                    }
                    const hasFollowed = user.follow.includes(item.userid);
                    return (
                      <RecommendUserCard>
                        <RecommandUserCardWrap>
                          <RecommandUserCardItem>
                            <div>
                              <RecommandAuthor>
                                <ToUserPageLink
                                  to={`/otheruser/${item.userid}`}
                                >
                                  <AuthorAvatar>
                                    <AuthorAvatarImage
                                      src={dispAva}
                                      alt="ava-rec-user"
                                    />
                                  </AuthorAvatar>
                                </ToUserPageLink>
                                <UserCardInfo>
                                  <UserCardName>
                                    <ToUserPageLink
                                      to={`/otheruser/${item.userid}`}
                                    >
                                      <AccountTitleName>
                                        {item.name}
                                      </AccountTitleName>
                                    </ToUserPageLink>
                                  </UserCardName>
                                </UserCardInfo>
                                <UserCardFollow>
                                  {!hasFollowed ? (
                                    <UserFollowButton
                                      onClick={() =>
                                        handleFollowUser(item.userid)
                                      }
                                    >
                                      <HiFollowIcon />
                                    </UserFollowButton>
                                  ) : (
                                    <UserUnfollowButton
                                      onClick={() =>
                                        handleUnfollowUser(item.userid)
                                      }
                                    >
                                      <HiFollowedIcon />
                                    </UserUnfollowButton>
                                  )}
                                </UserCardFollow>
                              </RecommandAuthor>
                            </div>
                          </RecommandUserCardItem>
                        </RecommandUserCardWrap>
                      </RecommendUserCard>
                    );
                  })
                ) : (
                  suggestedFollowUser.map((item) => {
                    let dispAva = RaidenAva;
                    switch (item.avatar) {
                      case "RaidenAva":
                        dispAva = RaidenAva;
                        break;
                      case "DoggoAva":
                        dispAva = DoggoAva;
                        break;
                      case "HutaoAva":
                        dispAva = HutaoAva;
                        break;
                      default:
                        dispAva = RaidenAva;
                        break;
                    }
                    const hasFollowed = user.follow.includes(item.userid);
                    return (
                      <RecommendUserCard>
                        <RecommandUserCardWrap>
                          <RecommandUserCardItem>
                            <div>
                              <RecommandAuthor>
                                <ToUserPageLink
                                  to={`/otheruser/${item.userid}`}
                                >
                                  <AuthorAvatar>
                                    <AuthorAvatarImage
                                      src={dispAva}
                                      alt="ava-rec-user"
                                    />
                                  </AuthorAvatar>
                                </ToUserPageLink>
                                <UserCardInfo>
                                  <UserCardName>
                                    <ToUserPageLink
                                      to={`/otheruser/${item.userid}`}
                                    >
                                      <AccountTitleName>
                                        {item.name}
                                      </AccountTitleName>
                                    </ToUserPageLink>
                                  </UserCardName>
                                </UserCardInfo>
                                <UserCardFollow>
                                  {!hasFollowed ? (
                                    <UserFollowButton
                                      onClick={() =>
                                        handleFollowUser(item.userid)
                                      }
                                    >
                                      <HiFollowIcon />
                                    </UserFollowButton>
                                  ) : (
                                    <UserUnfollowButton
                                      onClick={() =>
                                        handleUnfollowUser(item.userid)
                                      }
                                    >
                                      <HiFollowedIcon />
                                    </UserUnfollowButton>
                                  )}
                                </UserCardFollow>
                              </RecommandAuthor>
                            </div>
                          </RecommandUserCardItem>
                        </RecommandUserCardWrap>
                      </RecommendUserCard>
                    );
                  })
                )
              ) : (
                <NoOneToFollow>
                  <LeftSideNavLoadingIcon src={NoOne} alt="no-one-to-follow" />
                  <LeftSideNavLoadingDiv>
                    Hình như bạn follow hết r :v
                  </LeftSideNavLoadingDiv>
                </NoOneToFollow>
              )}
            </RecommendUserList>
          </SideSectionBody>
          {suggestedFollowUser.length !== 0 && (
            <SideSectionFooter>
              <SideSectionMore to="/postlist">Xem thêm</SideSectionMore>
            </SideSectionFooter>
          )}
        </RightItem>
      );

      findingUser = (
        <RightItem style={{ marginTop: "16px" }}>
          <RightSectionHeader>
            <RightSectionH2>Tìm kiếm người dùng</RightSectionH2>
          </RightSectionHeader>
          <InputSearchContainer>
            <div style={{ width: "100%" }}>
              <WFForm>
                <SearchBarInput isFocused={isComponentVisible}>
                  <SearchAutoComplete>
                    <AutoCompleteWrap>
                      <SearchInput
                        type="text"
                        placeholder="Nhập id user cần tìm"
                        autoComplete="off"
                        value={userInputValue}
                        onChange={(e) => setUserInputValue(e.target.value)}
                        /* onBlur={() => setIsUserInputOn(false)}
                        onFocus={() => setIsUserInputOn(true)} */
                        onClick={() => setIsComponentVisible(true)}
                        ref={ref}
                        onKeyPress={(e) => {
                          if (e.key === "Enter") {
                            handleSearchUser();
                          }
                        }}
                      />
                      <ClearInput
                        isDisplay={userInputValue !== ""}
                        onClick={handleClearUserInput}
                      ></ClearInput>
                    </AutoCompleteWrap>
                    <AutoCompleteResult
                      isDisplay={isComponentVisible}
                      onClick={() => setIsComponentVisible(true)}
                    >
                      {userInputValue !== "" ? (
                        <AutoCompleteList isDisplay={isComponentVisible}>
                          <AutoCompleteItem
                            onClick={handleSearchUser}
                          >{`Tìm kiếm "${userInputValue}"`}</AutoCompleteItem>
                        </AutoCompleteList>
                      ) : (
                        <div>
                          <SearchBarPlaceHolder>
                            <SBPHTitle>Gợi ý tìm kiếm</SBPHTitle>
                            <SBPHList>
                              {users
                                .filter((u) => u.userid !== user.userid)
                                .map((item, iter) => {
                                  if (users.length - 1 >= 5) {
                                    if (iter <= 4) {
                                      return (
                                        <LinkRouter
                                          to={`/otheruser/${item.userid}`}
                                        >
                                          <SBPHListItem>
                                            {item.name}
                                          </SBPHListItem>
                                        </LinkRouter>
                                      );
                                    }
                                  } else {
                                    return (
                                      <LinkRouter
                                        to={`/otheruser/${item.userid}`}
                                      >
                                        <SBPHListItem>{item.name}</SBPHListItem>
                                      </LinkRouter>
                                    );
                                  }
                                })}
                            </SBPHList>
                          </SearchBarPlaceHolder>
                        </div>
                      )}
                    </AutoCompleteResult>
                  </SearchAutoComplete>
                  <IconSearch onClick={handleSearchUser} />
                </SearchBarInput>
              </WFForm>
            </div>
          </InputSearchContainer>
        </RightItem>
      );
    }
  }

  if (waifusLoading) {
    waifuSearchBar = <div style={{ width: "300px" }}></div>;
    left = (
      <LeftSideNavLoading>
        <LeftSideNavLoadingIcon src={LoadingNav} alt="loading-nav" />
        <LeftSideNavLoadingDiv>Đang tải</LeftSideNavLoadingDiv>
      </LeftSideNavLoading>
    );
  } else if (waifus.length === 0) {
    waifuSearchBar = <div style={{ width: "300px" }}></div>;
    left = (
      <>
        <LeftNavWrap to={`/waifudb`}>
          <LeftImg src={LeftImage} alt="roll-waifu" />
          <LeftItem>Roll Waifu</LeftItem>
        </LeftNavWrap>
        <LeftNavWrap to="/waifudb">
          <Database />
          <LeftItem>Waifu Database</LeftItem>
        </LeftNavWrap>
        {user.role === "admin" && (
          <LeftNavWrap to="/userlist">
            <UserList />
            <LeftItem>User Database</LeftItem>
          </LeftNavWrap>
        )}
        <LeftNavWrap to="/about-us">
          <Us />
          <LeftItem>Về chúng tôi</LeftItem>
        </LeftNavWrap>
        <LeftNavWrap to="/about-pj">
          <Prj />
          <LeftItem>Về Project</LeftItem>
        </LeftNavWrap>
      </>
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
        <MenuItem to="/waifudb">
          <Database />
          <LeftItem>Waifu Database</LeftItem>
        </MenuItem>
        {user.role === "admin" && (
          <MenuItem to="/userlist">
            <UserList />
            <LeftItem>User Database</LeftItem>
          </MenuItem>
        )}
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

    waifuSearchBar = (
      <SearchBarContainer>
        <SearchBarIcon />
        <SearchBar
          type="text"
          placeholder="Nhập tên waifu muốn tìm"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          autoComplete="off"
          onClick={() => setIsWaifuVisible(true)}
          ref={waifuRef}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <WaifuSearchResult
          isDisplay={isWaifuVisible}
          onClick={() => setIsWaifuVisible(true)}
        >
          {searchValue !== "" ? (
            <AutoCompleteList isDisplay={isWaifuVisible}>
              <AutoCompleteItem
                onClick={() => handleSearch()}
              >{`Tìm kiếm "${searchValue}"`}</AutoCompleteItem>
            </AutoCompleteList>
          ) : (
            <div>
              <SearchBarPlaceHolder>
                <SBPHTitle>Gợi ý tìm kiếm</SBPHTitle>
                <SBPHList>
                  {waifus.map((item, iter) => {
                    if (waifus.length >= 9) {
                      if (iter <= 8) {
                        return (
                          <LinkRouter to={`/waifudb/${item.waifuid}`}>
                            <SBPHListItem>{item.name}</SBPHListItem>
                          </LinkRouter>
                        );
                      }
                    } else {
                      return (
                        <LinkRouter to={`/waifudb/${item.waifuid}`}>
                          <SBPHListItem>{item.name}</SBPHListItem>
                        </LinkRouter>
                      );
                    }
                  })}
                </SBPHList>
              </SearchBarPlaceHolder>
            </div>
          )}
        </WaifuSearchResult>
      </SearchBarContainer>
    );
  }

  return (
    <>
      <AllContainer>
        <ToTopButton visible={visible} to={`/postlist`} onClick={toggleHome}>
          <img src={ToTopBtn} alt="to-top-btn" />
        </ToTopButton>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/postlist">
              <Img src={WebLogo} alt="weblogo" />
            </NavLogo>
            {/* <SearchBarContainer>
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
            </SearchBarContainer> */}
            {waifuSearchBar}
            <NavRightPart>
              <PostIconNavContainer>
                <PostIconNavWrap onClick={handleDialogOpen}>
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
                            <DialogSpan>Đăng bài</DialogSpan>
                            <PostNewArrow />
                          </DialogPostButton>
                        </NavPostNewItem>
                        <NavPostNewItem>
                          <DialogPostButton
                            onClick={() => navigate("/createpost")}
                          >
                            <NewImgIconWrap>
                              <NewImgIcon />
                            </NewImgIconWrap>
                            <DialogSpan>Hình ảnh</DialogSpan>
                            <PostNewArrow />
                          </DialogPostButton>
                        </NavPostNewItem>
                        <NavPostNewItem>
                          <DialogPostButton
                            onClick={() => navigate("/createpost")}
                          >
                            <NewVidIconWrap>
                              <NewVidIcon />
                            </NewVidIconWrap>
                            <DialogSpan>Video</DialogSpan>
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
              <div>
                <PostNew>
                  <PostNewTitle>Mau đăng bài nào :3</PostNewTitle>
                  <PostNewContent>
                    <LinkRouter to="/createpost">
                      <PostNewButtonDiv>
                        <PostNewButton>
                          <PostNewSymbolIcon />
                          <PostNewBtnSpan>Đăng bài</PostNewBtnSpan>
                          <PostNewArrow />
                        </PostNewButton>
                      </PostNewButtonDiv>
                    </LinkRouter>
                    <LinkRouter to="/createpost">
                      <PostNewButtonDivAfter>
                        <PostNewButtonImg>
                          <NewImageIcon />
                          <PostNewBtnSpan>Hình ảnh</PostNewBtnSpan>
                          <PostNewArrow />
                        </PostNewButtonImg>
                      </PostNewButtonDivAfter>
                    </LinkRouter>
                    <LinkRouter to="/createpost">
                      <PostNewButtonDivAfter>
                        <PostNewButtonVid>
                          <NewVideoIcon />
                          <PostNewBtnSpan>Video</PostNewBtnSpan>
                          <PostNewArrow />
                        </PostNewButtonVid>
                      </PostNewButtonDivAfter>
                    </LinkRouter>
                  </PostNewContent>
                </PostNew>
              </div>
              <PostDetailHeader>
                <PostHeaderMask isFixed={visible}>
                  <PostHeaderWrap isLined={isLined}>
                    <PostHeaderContent isLined={isLined}>
                      <PostHeaderMain>
                        <PostHeaderLeft>
                          <PostHeaderLeftH1>Trang chủ</PostHeaderLeftH1>
                        </PostHeaderLeft>
                        <PostHeaderRight>
                          <PostHeaderRightList>
                            <PHRSelect>
                              <PHRSelectContainer
                                onClick={() => setIsPHRMenuOn(!isPHRMenuOn)}
                              >
                                <PHRSpan>
                                  {newestPost
                                    ? "Bài viết mới nhất"
                                    : myPost
                                    ? "Bài viết của tôi"
                                    : "Theo dõi"}
                                </PHRSpan>
                                <PHRArrowIcon isSelected={isPHRMenuOn} />
                              </PHRSelectContainer>
                              <PHRSelectMenu isSelected={isPHRMenuOn}>
                                <PHRUl>
                                  <PHRLi
                                    isSelected={newestPost}
                                    onClick={handleNewestPost}
                                  >
                                    <PHRLiSpan>Bài viết mới nhất</PHRLiSpan>
                                  </PHRLi>
                                  <PHRLi
                                    isSelected={myPost}
                                    onClick={handleMyPost}
                                  >
                                    <PHRLiSpan>Bài viết của tôi</PHRLiSpan>
                                  </PHRLi>
                                  <PHRLi
                                    isSelected={follow}
                                    onClick={handleFollow}
                                  >
                                    <PHRLiSpan>Theo dõi</PHRLiSpan>
                                  </PHRLi>
                                </PHRUl>
                              </PHRSelectMenu>
                            </PHRSelect>
                          </PostHeaderRightList>
                        </PostHeaderRight>
                      </PostHeaderMain>
                    </PostHeaderContent>
                  </PostHeaderWrap>
                </PostHeaderMask>
              </PostDetailHeader>
              {body}
            </MainPage>
            <div className="page-holder"></div>
            <RightContainer>
              <Banner>
                <BannerWrapper>
                  <SwiperWrapper transform={`${-currentSlide * 100}%`}>
                    {BannerSlider.map((item, index) => (
                      <BannerItem
                        key={index}
                        onMouseOver={() => setShowButton(true)}
                        onMouseOut={() => setShowButton(false)}
                      >
                        <BannerImg src={item.image} alt="banner-image" />
                      </BannerItem>
                    ))}
                  </SwiperWrapper>
                  {showButton && (
                    <>
                      <BannerPrev onMouseOver={() => setShowButton(true)}>
                        <PrevIcon onClick={prevSlide} />
                      </BannerPrev>
                      <BannerNext onMouseOver={() => setShowButton(true)}>
                        <NextIcon onClick={nextSlide} />
                      </BannerNext>
                    </>
                  )}
                  <BannerPagination>
                    {BannerSlider.map((item, index) => (
                      <BannerBullet
                        key={index}
                        isCurrent={index === currentSlide}
                        onClick={() => chooseSlide(index)}
                      ></BannerBullet>
                    ))}
                  </BannerPagination>
                </BannerWrapper>
              </Banner>
              {findingUser}
              {suggestedTag}
              {suggestedUser}
              <RightPart style={{ marginTop: "16px" }}>
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
            </RightContainer>
          </RootPageLayout>
        </RootPageContainer>
      </AllContainer>

      <div className="msg-box-in msg-box-gone">
        <div className="msg-box-container-in">
          <MessageBoxHeader>
            <DialogClose onClick={handleCloseConfirmBox}>
              <DialogButton>
                <DialogCloseIcon />
              </DialogButton>
            </DialogClose>
          </MessageBoxHeader>
          <MessageBoxContent>Xác nhận xóa bài viết?</MessageBoxContent>
          <MessageBoxFooter>
            <MessageBoxButton onClick={handleCloseConfirmBox} notClose={false}>
              <span>Hủy</span>
            </MessageBoxButton>
            <MessageBoxButton onClick={handleCancelConfirmBox} notClose={true}>
              <span>Xác nhận</span>
            </MessageBoxButton>
          </MessageBoxFooter>
        </div>
      </div>

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

      {/* <PswpPicturePreview isAppear={isPreviewed}>
        <PswpBg></PswpBg>
        <PswpScrollWrap>
          <PswpContainer>
            <PswpItem></PswpItem>
            <PswpItem>
              <PswpZoomWrap
                style={{
                  transform: `translate3d(${imgTransformX}px, ${imgTransformY}px, 0px) scale(${scaleValue})`,
                }}
              >
                <PswpImgPlaceholder
                  style={{
                    display: "none",
                    width: `${imageWidth}px`,
                    height: `${imageHeight}px`,
                  }}
                ></PswpImgPlaceholder>
                <PswpImg
                  style={{
                    display: "block",
                    width: `${imageWidth}px`,
                    height: `${imageHeight}px`,
                  }}
                  id="img-preview"
                  src={currentPreviewImg}
                  alt="img-preview"
                />
              </PswpZoomWrap>
            </PswpItem>
            <PswpItem></PswpItem>
          </PswpContainer>
          <PswpUI>
            <PswpTopBar>
              <CloseButton 
                onClick={() => setIsPreviewed(false)}
              ></CloseButton>
            </PswpTopBar>
          </PswpUI>
        </PswpScrollWrap>
      </PswpPicturePreview> */}

      <div className="pswp">
        <div className="pswp_bg"></div>
        <div className="pswp_scroll-wrap">
          <div
            className="pswp_container"
            style={{ transform: "translate3d(0px, 0px, 0px)" }}
          >
            <div
              className="pswp_item"
              style={{ transform: "translate3d(0px, 0px, 0px)" }}
            >
              <div
                className="pswp_zoom-wrap"
                style={{
                  transform: `translate3d(${imgTransformX}px, ${imgTransformY}px, 0px) scale(${scaleValue})`,
                }}
              >
                <img
                  className="pswp_img"
                  style={{
                    width: `${imageWidth}px`,
                    height: `${imageHeight}px`,
                    display: "block",
                  }}
                  src={currentPreviewImg}
                  alt="img-preview"
                />
              </div>
            </div>
          </div>
          <div className="pswp-ui">
            <div className="pswp_top-bar">
              <CloseButton
                onClick={() => handleCancelPreviewImage()}
              ></CloseButton>
            </div>
          </div>
        </div>
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

function debounce(fn, ms) {
  let timer;
  return (() => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(), ms);
  })();
}

export default CreatePost;
