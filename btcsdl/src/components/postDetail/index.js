import React, { useState, useEffect, useContext, useRef } from "react";
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
  NewImgIconWrap,
  NewImgIcon,
  NewVidIconWrap,
  NewVidIcon,
  UserList,
  WaifuSearchResult,
  AccountCenterUser,
  AccountMask,
  AccountWrap,
  AccountContent,
  AccountContentMain,
  AccountContentLeft,
  AccountLeftCard,
  AccountLeftAva,
  AccountLeftAvaCard,
  AccountAvaImage,
  AccountLeftAvaFrameImg,
  AccountLeftCardInfo,
  AccountLeftCardName,
  AccountLeftLink,
  AccountLeftLinkName,
  UserCardFollow,
  UserCardButton,
  CheckedFollow,
  PlusFollow,
  AccountContentRight,
  NavBackButton,
  ArrowBack,
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
import "../imgprev.scss";

import HutaoAva from "../../images/hutaostick.png";
import RaidenAva from "../../images/raidenfbi.png";
import DoggoAva from "../../images/realdoggo.png";
import DeleteIcon from "../../images/deleteIcon.png";

import { ImgButton, ImgShow } from "../waifudb/waifuElement";

import { ToastMsg } from "../toastMsg";

import { TIME_STORAGE, ROLL_STORAGE } from "../../contexts/constants";

import { WaifuContext } from "../../contexts/WaifuContext";
import { PostContext } from "../../contexts/PostContext";
import { PostCommentContext } from "../../contexts/PostCommentContext";
import { PostCommentReplyContext } from "../../contexts/PostCmtRepContext";
/* import { UserContext } from "../../contexts/UsersContext"; */

import Timer from "../timer";
import {
  AllContainer,
  CancelImage,
  CancelPostButton,
  CmtImgUploadDelete,
  CmtImgUploadDeleteIcon,
  CommentImgUploaded,
  CommentUploadImg,
  ConfirmVidContainer,
  CreatePostFooter,
  EditorContainer,
  EditorInput,
  EditorMaxCount,
  FormImgUploadDelete,
  FormImgUploadDeleteIcon,
  FormImgUploaded,
  FormItemContainer,
  FormItemLabel,
  FormUploadImg,
  FormUploadImgAdd,
  FormUploadTip,
  HeaderH1,
  IconImageAdd,
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
  NewVideoArticlePreview,
  NewVideoPreview,
  NewVideoPreviewWrap,
  PostImageContainer,
  PostImageTitle,
  PreviewPostImage,
  RemoveVideo,
  RightContainer,
  RightPart,
  RootPageContainer,
  RootPageLayout,
  SavePostButton,
  SideMenu,
  StickyNavFixed,
  StickyNavLeft,
  StickyNavLeftHolder,
  StickyNavScroll,
  VideoPlayer,
} from "../createpost/createPostElement";
import {
  ArticleImageWrap,
  ArticleListSwiper,
  ArticlePageContent,
  ArticlePageVideo,
  ArticlePageYtbPlayer,
  ArticlePostDesc,
  ArticlePostFooter,
  ArticlePostH1,
  ArticlePostStats,
  ArticlePostTitle,
  ArticlePostType,
  ArticleSlideImageBig,
  ArticleThumbsWrapper,
  BlockUser,
  CancelEditCmtButton,
  CCAcount,
  CCAction,
  CCActionIcon,
  CCContent,
  CCHeader,
  CCLi,
  CCLiSpan,
  CCOperation,
  CCReplyContent,
  CCSelectMenu,
  CCSelectMenuTitle,
  CCUl,
  CommendCard,
  CommentAvatar,
  CommentCardAvatar,
  CommentCardContainer,
  CommentHostSpan,
  CommentReplyWrap,
  EditComment,
  EndOfCommentSection,
  ImageArticleContainer,
  ImageSwiperItem,
  ImgArticle,
  LinkAccountTitleName,
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
  PHRArrowIcon,
  PHRLi,
  PHRLiSpan,
  PHRSelect,
  PHRSelectContainer,
  PHRSelectMenu,
  PHRSpan,
  PHRUl,
  PostHeaderRight,
  PostHeaderRightList,
  RCBottomRight,
  RCFloor,
  RCFloorTags,
  RCInnerReply,
  RCItem,
  RCItemIconComment,
  RCItemIconLike,
  RCItemIconLiked,
  RCItemSpan,
  RCOpBottom,
  RCReplyRouterSpan,
  RCRouterSpan,
  RCTime,
  RepliesAvatar,
  RepliesContainer,
  ReplyBoxFooter,
  ReplyCardAccount,
  ReplyCardContent,
  ReplyCardInnerDetail,
  ReplyCardInnerDetailIcon,
  ReplyCardReplies,
  ReplyCardReplyTo,
  ReplyCardRouter,
  ReplyColon,
  ReplyContentWrap,
  ReplyListHeader,
  ReplyListItem,
  RouterLinkAccount,
  SendButton,
  SwiperButtonArrow,
  SwiperButtonNext,
  SwiperButtonPrev,
  SwiperNotification,
  SwiperWrapper,
  UserReplyBody,
  UserReplyLabel,
  UserReplyMaxCount,
  UserReplySection,
  UserReplyTextArea,
  CommentButtonWrap,
} from "./postDetailEle";
import { NextIcon, PostNewArrow, PrevIcon } from "../postList/postListEle";
import {
  AutoCompleteItem,
  AutoCompleteList,
  SBPHList,
  SBPHListItem,
  SBPHTitle,
  SearchBarPlaceHolder,
} from "../inputBoxElement";
import useComponentVisible from "../../utils/useComponentVisible";
import {
  CommentPart,
  DialogBody,
  DialogButton,
  DialogClose,
  DialogCloseIcon,
  DialogContent,
  DialogHeader,
  DialogReply,
  DialogReplyWrap,
  DialogTitle,
  LoadmoreNomore,
  ReplyDetailList,
  ReplyListLoadmore,
  ReplyListTitle,
} from "../waifuinfo/waifuinfoele";

/* import { TestSlider } from "../postList/testSlideData"; */
import { useStateRef, getRefValue } from "../../utils/hooks/swiperHook";
import ReactPlayer from "react-player";
import {
  MessageBoxButton,
  MessageBoxContent,
  MessageBoxFooter,
  MessageBoxHeader,
} from "../modals/confirmModal";
import {
  CommentAddReactIcon,
  CommentImage,
  CommentImageAddIcon,
  ReplyBoxToolBar,
} from "../cmtElement/commentImage";
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
    /* commentPost, */
    editPost,
    /* deletePostComment, */
  } = useContext(PostContext);

  const {
    postCommentState: { comments, commentsLoading },
    getAllPostComments,
    uploadPostComment,
    likePostComment,
    unlikePostComment,
    editPostComment,
    deletePostComment,
  } = useContext(PostCommentContext);

  const {
    postCommentReplyState: { replies, repliesLoading },
    getAllPostCommentReplies,
    likePostCommentReply,
    unlikePostCommentReply,
    uploadPostCommentReply,
    deletePostCommentReply,
    editPostCommentReply,
  } = useContext(PostCommentReplyContext);

  /* const {
    userState: { users, usersLoading },
  } = useContext(UserContext); */

  const postId = useParams();
  /* const slideLength = TestSlider.length; */

  const imageInputRef = useRef(null);
  const commentImageRef = useRef(null);

  let body;
  let left;
  let waifuSearchBar;

  const navigate = useNavigate();

  const currentOffsetXRef = useRef(0);
  const startXRef = useRef(0);
  const containerRef = useRef(null);
  const minOffsetXRef = useRef(0);
  const [offsetX, setOffsetX, offsetXRef] = useStateRef(0);
  const [isSwiping, setIsSwiping] = useState(false);

  // Get the current time for the first render
  /* const [currentTime, setCurrentTime] = useState(new Date().getTime()) */
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

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
  const [controlReplyBox, setControlReplyBox] = useState([]);
  const [editContent, setEditContent] = useState([]);
  // Change state when open edit comment/reply?
  const [trackEditCmtState, setTrackEditCmtState] = useState(false);
  // Change state when open reply box
  const [trackReplyState, setTrackReplyState] = useState(false);
  // Change state when delete/add/like/unlike comment/reply?
  const [trackCommentAct, setTrackCommentAct] = useState(false);

  // Timeout
  const initTimer = 3600000; //in miliseconds, 3600000 = 1 hour

  // Controlling NavPostDialog
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [editPostMode, setEditPostMode] = useState(false);
  const [isPHRMenuOn, setIsPHRMenuOn] = useState(false); // Post Header Right - PHR
  const [normalPost, setNormalPost] = useState(true);
  const [picturePost, setPicturePost] = useState(false);
  const [videoPost, setVideoPost] = useState(false);

  // If the post has more than 2 images
  const [currentSlide, setCurrentSlide] = useState(0);

  // Form Control
  /* const inputFocused = useRef(null) */
  const [isTitleInputFocused, setIsTitleInputFocused] = useState(false);
  const [isTagInputFocused, setIsTagInputFocused] = useState(false);
  const [isContentInputFocused, setIsContentInputFocused] = useState(false);
  const [isVideoInputFocused, setIsVideoInputFocused] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postTag, setPostTag] = useState("");
  const [postContent, setPostContent] = useState("");
  /* const [imageUrl, setImageUrl] = useState(null); */
  const [videoUrl, setVideoUrl] = useState("");
  const [hasChosenVid, setHasChosenVid] = useState(false);
  const [imageArr, setImageArr] = useState([]);

  // Comment image list
  const [cmtImageArr, setCmtImageArr] = useState([]);

  // Control delete confirm action
  const [deleteCmtId, setDeleteCmtId] = useState(-1);
  const [deleteRepId, setDeleteRepId] = useState(-1);
  const [deleteIndex, setDeleteIndex] = useState(-1); // Use for comments
  const [deleteIter, setDeleteIter] = useState(-1); // Use for replies
  const [confirmMsg, setConfirmMsg] = useState("");

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

  /* const maxWidth = document.documentElement.clientWidth;
  const maxHeight = document.documentElement.clientHeight; */

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
    async function fetchData() {
      await getAllPostCommentReplies();
    }
    fetchData();
  }, []);

  useEffect(() => {
    document.title = "Chi tiết bài viết";
  }, []);

  const onMouseMove = (e) => {
    e.preventDefault();
    const currentX = e.clientX;
    /* const startX = getRefValue(startXRef); */
    /* console.log("startXRef: ", startXRef.current)
    console.log("currentX: ", currentX) */
    const diff = getRefValue(startXRef) - currentX;
    /* const currentOffsetX = getRefValue(currentOffsetXRef); */
    let newOffsetX = getRefValue(currentOffsetXRef) - diff;

    /* const maxOffsetX = 0; */
    const minOffsetX = getRefValue(minOffsetXRef);

    /* if (newOffsetX >= 0 && newOffsetX < 97) {
      newOffsetX = 0 + newOffsetX / 10;
    } else if (newOffsetX >= 97 && newOffsetX < 97 * 2) {
      newOffsetX = 97 + (newOffsetX - 97) / 20;
    } else if (newOffsetX >= 97 * 2 && newOffsetX < 97 * 3) {
      newOffsetX = 97 * 2 + (newOffsetX - 97 * 2) / 50;
    } else if (newOffsetX >= 97 * 3) {
      newOffsetX = 97 * 3;
    }

    if (newOffsetX > minOffsetX - 97 && newOffsetX <= minOffsetX) {
      newOffsetX = minOffsetX + (newOffsetX - minOffsetX) / 10; 
    } else if (newOffsetX <= minOffsetX - 97 && newOffsetX > minOffsetX - 97 * 2) {
      newOffsetX = minOffsetX - 97 + (newOffsetX - (minOffsetX - 97)) / 20;
    } else if (newOffsetX > minOffsetX - 97 * 3 && newOffsetX <= minOffsetX - 97 * 2) {
      newOffsetX = minOffsetX - 97 * 2 + (newOffsetX - (minOffsetX - 97 * 2)) / 50;
    } else if (newOffsetX <= minOffsetX - 97 * 3) {
      newOffsetX = minOffsetX + -97 * 3;
    } */
    /* if (newOffsetX >= 97 * 3) newOffsetX = 97 * 3;
    if (newOffsetX <= minOffsetX + -97 * 3) newOffsetX = minOffsetX + -97 * 3; */

    // if (newOffsetX >= 0 || newOffsetX <= minOffsetX) {
    //   const divideValue = 97 * Math.abs((Math.round(newOffsetX / 97)));
    //   if (divideValue !== 0) {
    //     newOffsetX = offsetXRef.current + (newOffsetX) / divideValue;
    //   } else {
    //     newOffsetX = offsetXRef.current + (newOffsetX) / 97;
    //   }
    //   newOffsetX = newOffsetX * 290/806;
    // }

    /* if (newOffsetX >= 0) {
      const positiveDiff = Math.abs(diff);
      newOffsetX = diff * (0.5 - 1/6 * ());
    } */

    /* console.log("offsetX: ", offsetXRef.current)
    console.log("Diff: ", diff)
    console.log("newOffsetX: ", newOffsetX) */
    setOffsetX(newOffsetX);
  };

  const onMouseDown = (e) => {
    e.preventDefault();
    setIsSwiping(true);

    const currentOffsetX = getRefValue(offsetXRef);
    console.log(currentOffsetX);
    currentOffsetXRef.current = currentOffsetX;
    startXRef.current = e.clientX;

    const containerEl = getRefValue(containerRef);
    minOffsetXRef.current = containerEl.offsetWidth - containerEl.scrollWidth;

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  const onMouseUp = (e) => {
    e.preventDefault();
    let newOffsetX = getRefValue(offsetXRef);
    const minOffsetX = getRefValue(minOffsetXRef);

    if (newOffsetX > 0) newOffsetX = 0;
    else if (newOffsetX < minOffsetX) newOffsetX = minOffsetX;
    else newOffsetX = Math.round(newOffsetX / 97) * 97;

    setOffsetX(newOffsetX);
    setIsSwiping(false);

    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onMouseUp);
  };

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

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImageArr([...imageArr, reader.result]);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const commentImageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setCmtImageArr([...cmtImageArr, reader.result]);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const nextSlide = (slideLength) => {
    const newIndex = currentSlide === slideLength - 1 ? 0 : currentSlide + 1;
    /*
      currentPost.postImage.length >= 6
        ? currentSlide <= 2
          ? `0px`
          : currentSlide < currentPost.postImage.length - 3
          ? `${(currentSlide - 2) * -97}px`
          : `${(currentPost.postImage.length - 6) * -97}px`
        : `0px`
    */
    if (slideLength > 6) {
      if (newIndex <= 2) {
        setOffsetX(0);
      } else if (newIndex < slideLength - 3) {
        setOffsetX((newIndex - 2) * -97);
      } else setOffsetX((slideLength - 6) * -97);
    } else setOffsetX(0);
    setCurrentSlide(newIndex);
  };

  const prevSlide = (slideLength) => {
    const newIndex = currentSlide === 0 ? slideLength - 1 : currentSlide - 1;
    if (slideLength > 6) {
      if (newIndex <= 2) {
        setOffsetX(0);
      } else if (newIndex < slideLength - 3) {
        setOffsetX((newIndex - 2) * -97);
      } else setOffsetX((slideLength - 6) * -97);
    } else setOffsetX(0);
    setCurrentSlide(newIndex);
  };

  const chooseSlide = (index, slideLength) => {
    if (slideLength > 6) {
      if (index <= 2) {
        setOffsetX(0);
      } else if (index < slideLength - 3) {
        setOffsetX((index - 2) * -97);
      } else setOffsetX((slideLength - 6) * -97);
    } else setOffsetX(0);
    setCurrentSlide(index);
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

  const handleLikePost = async (postId) => {
    try {
      const afterLikedPost = await likePost({ postid: postId });
      if (afterLikedPost.success) {
        setMessage("Đã tính like vào post này nha :v!");
        setDesc("Đừng để ý thông báo này :3!");
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
        const postComment = await uploadPostComment({
          content: userComment,
          postid: postId,
          userid: user.userid,
          image: cmtImageArr,
        });

        if (postComment.success) {
          setMessage("Đăng comment thành công!");
          setDesc("Mời bạn tiếp tục... :D");
          setType("success");
          setUserComment("");
          setCmtImageArr([]);
          myFunction();
          controlReplyBox.push({
            postcommentid: postComment.newComment.postcommentid,
            isOn: false,
            value: "",
            isFocused: false,
            replyBox: [],
          });
          editContent.push({
            postcommentid: postComment.newComment.postcommentid,
            isOn: false,
            value: "",
            isFocused: false,
            replyBox: [],
          });
          commentMenuState.push({
            postcommentid: postComment.newComment.postcommentid,
            state: false,
            replyPopupState: false,
            replyMenuState: [],
          });
          setTrackCommentAct(!trackCommentAct);
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
    let currentType;
    if (normalPost) {
      currentType = "normal";
      if (!postTag && !postContent && !postTitle) {
        setMessage("Edit post thất bại!");
        setDesc("Không nhập gì sao edit :<");
        setType("error");
        myFunction();
        return;
      }
    } else if (picturePost) {
      currentType = "picture";
      if (!postTag && !postContent && !postTitle && imageArr.length === 0) {
        setMessage("Edit post thất bại!");
        setDesc("Không nhập gì sao edit :<");
        setType("error");
        myFunction();
        return;
      }
    } else {
      currentType = "video";
      if (!postTag && !postContent && !postTitle && !videoUrl) {
        setMessage("Edit post thất bại!");
        setDesc("Không nhập gì sao edit :<");
        setType("error");
        myFunction();
        return;
      }
    }
    /* if (!postTag && !postContent && !postTitle && !imageUrl) {
      setMessage("Edit post thất bại!");
      setDesc("Không nhập gì sao edit :<");
      setType("error");
      myFunction();
    } else { */
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
            postImage: [...imageArr],
            videoUrl: videoUrl,
            type: currentType,
          });

          if (editedPost.success) {
            setMessage("Edit post thành công!");
            setDesc("Hãy tạo nhiều content hơn nha :D");
            setType("success");
            myFunction();
            setPostTitle("");
            setPostContent("");
            setPostTag("");
            setVideoUrl("");
            setHasChosenVid(false);
            setImageArr([]);
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
          postImage: [...imageArr],
          videoUrl: videoUrl,
          type: currentType,
        });

        if (editedPost.success) {
          setMessage("Edit post thành công!");
          setDesc("Hãy tạo nhiều content hơn nha :D");
          setType("success");
          myFunction();
          setPostTitle("");
          setPostContent("");
          setPostTag("");
          setVideoUrl("");
          setHasChosenVid(false);
          setImageArr([]);
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

  const handleDeletePostComment = async (index, postCommentId) => {
    try {
      const response = await deletePostComment(postCommentId);
      if (response.success) {
        setMessage("Xóa comment thành công!");
        setDesc("Why... :<?");
        setType("success");
        myFunction();
        controlReplyBox.splice(index, 1);
        commentMenuState.splice(index, 1);
        editContent.splice(index, 1);
        setTrackCommentAct(!trackCommentAct);
      } else {
        setMessage("Xóa comment thất bại!");
        setDesc(response.message);
        setType("error");
        myFunction();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleIsReplyBlur = (index) => {
    controlReplyBox[index] = {
      ...controlReplyBox[index],
      isFocused: false,
    };
    setTrackReplyState(!trackReplyState);
  };

  const handleIsCmtReplyBlur = (i, iter) => {
    controlReplyBox[i] = {
      ...controlReplyBox[i],
      replyBox: controlReplyBox[i].replyBox.map((item, index) => {
        if (index === iter) {
          item = {
            ...item,
            isFocused: false,
          };
        }
        return item;
      }),
    };
    setTrackReplyState(!trackReplyState);
  };

  const handleIsReplyFocused = (index) => {
    controlReplyBox[index] = {
      ...controlReplyBox[index],
      isFocused: true,
    };
    setTrackReplyState(!trackReplyState);
  };

  const handleIsCmtReplyFocused = (i, iter) => {
    controlReplyBox[i] = {
      ...controlReplyBox[i],
      replyBox: controlReplyBox[i].replyBox.map((item, index) => {
        if (index === iter) {
          item = {
            ...item,
            isFocused: true,
          };
        }
        return item;
      }),
    };
    setTrackReplyState(!trackReplyState);
  };

  const handleCmtReplyBoxValue = (i, iter, value) => {
    controlReplyBox[i] = {
      ...controlReplyBox[i],
      replyBox: controlReplyBox[i].replyBox.map((item, index) => {
        if (index === iter) {
          item = {
            ...item,
            value: value,
          };
        }
        return item;
      }),
    };
    setTrackReplyState(!trackReplyState);
  };

  const handleUnlikeComment = async (commentId) => {
    try {
      const afterUnlikedComment = await unlikePostComment({
        postcommentid: commentId,
      });
      if (afterUnlikedComment.success) {
        setMessage("Sao unlike rồi :<!");
        setDesc("...");
        setType("success");
        myFunction();
        setTrackCommentAct(!trackCommentAct);
      } else {
        setMessage("Unlike comment thất bại!");
        setDesc(afterUnlikedComment.message);
        setType("error");
        myFunction();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleLikeComment = async (commentId) => {
    try {
      const afterLikedComment = await likePostComment({
        postcommentid: commentId,
      });
      if (afterLikedComment.success) {
        setMessage("Đã tính like vào comment này nha :v!");
        setDesc("Đừng để ý thông báo này :3!");
        setType("success");
        myFunction();
        setTrackCommentAct(!trackCommentAct);
      } else {
        setMessage("Like comment thất bại!");
        setDesc(afterLikedComment.message);
        setType("error");
        myFunction();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleCommentMenu = (index) => {
    commentMenuState[index] = {
      ...commentMenuState[index],
      state: !commentMenuState[index].state,
      replyMenuState: commentMenuState[index].replyMenuState.map((item) => {
        item = {
          ...item,
          state: false,
        };
        return item;
      }),
    };
    for (let i = 0; i < commentMenuState.length; ++i) {
      if (i !== index) {
        commentMenuState[i] = {
          ...commentMenuState[i],
          state: false,
          replyMenuState: commentMenuState[i].replyMenuState.map((item) => {
            item = {
              ...item,
              state: false,
            };
            return item;
          }),
        };
      }
    }
    // use to cause rerender
    setIsCommentMenuOn(!isCommentMenuOn);
  };

  const handleCommentReplyMenu = (i, iter) => {
    commentMenuState[i] = {
      ...commentMenuState[i],
      state: false,
      replyMenuState: commentMenuState[i].replyMenuState.map((item, index) => {
        if (index === iter) {
          item = {
            ...item,
            state: !item.state,
          };
        } else {
          item = {
            ...item,
            state: false,
          };
        }
        return item;
      }),
    };
    for (let index = 0; index < commentMenuState.length; ++index) {
      if (index !== i) {
        commentMenuState[index] = {
          ...commentMenuState[index],
          state: false,
          replyMenuState: commentMenuState[index].replyMenuState.map((item) => {
            item = {
              ...item,
              state: false,
            };
            return item;
          }),
        };
      }
    }
    // use to cause rerender
    setIsCommentMenuOn(!isCommentMenuOn);
  };

  const handleOpenEditCmtContent = (index) => {
    editContent[index] = {
      ...editContent[index],
      isOn: !editContent[index].isOn,
    };
    for (let i = 0; i < editContent.length; ++i) {
      if (i !== index) {
        editContent[i] = {
          ...editContent[i],
          isOn: false,
          value: "",
          isFocused: false,
        };
      }
    }
    commentMenuState[index] = {
      ...commentMenuState[index],
      state: !commentMenuState[index].state,
      replyMenuState: commentMenuState[index].replyMenuState.map((item) => {
        item = {
          ...item,
          state: false,
        };
        return item;
      }),
    };
    // use to cause rerender
    setIsCommentMenuOn(!isCommentMenuOn); // no longer on
    setTrackEditCmtState(!trackEditCmtState); // change state
  };

  // This is for the comment
  const handleReplyBoxOn = (index) => {
    controlReplyBox[index] = {
      ...controlReplyBox[index],
      isOn: !controlReplyBox[index].isOn,
    };
    for (let i = 0; i < controlReplyBox.length; ++i) {
      if (i !== index) {
        controlReplyBox[i] = {
          ...controlReplyBox[i],
          isOn: false,
          value: "",
          isFocused: false,
        };
      }
    }
    setTrackReplyState(!trackReplyState);
  };

  const handleReplyBoxValue = (index, value) => {
    controlReplyBox[index] = {
      ...controlReplyBox[index],
      value: value,
    };
    setTrackReplyState(!trackReplyState);
  };

  const handleSendReply = async (i, commentId, content, iter, replyHostId) => {
    if (content === "") {
      setMessage("Đăng reply thất bại!");
      setDesc("Phải có nội dung mới được up reply nha :<");
      setType("error");
      myFunction();
    } else {
      try {
        console.log(replyHostId);
        const replyHostIdConfirm = replyHostId ? replyHostId : -1;
        const postReply = await uploadPostCommentReply({
          content: content,
          postcommentid: commentId,
          replyhostid: replyHostIdConfirm,
          userid: user.userid,
        });

        if (postReply.success) {
          setMessage("Đăng reply thành công!");
          setDesc("Mời bạn tiếp tục... :D");
          setType("success");
          setUserComment("");
          myFunction();
          controlReplyBox[i] = {
            ...controlReplyBox[i],
            isOn: false,
            value: "",
            isFocused: false,
            replyBox: [
              ...controlReplyBox[i].replyBox.map((item, index) => {
                if (index === iter) {
                  item = {
                    ...item,
                    isOn: false,
                    value: "",
                    isFocused: false,
                  };
                }
                return item;
              }),
              {
                postreplyid: postReply.newReply.postreplyid,
                isOn: false,
                value: "",
                isFocused: false,
              },
            ],
          };
          editContent[i] = {
            ...editContent[i],
            replyBox: [
              ...editContent[i].replyBox,
              {
                postreplyid: postReply.newReply.postreplyid,
                isOn: false,
                value: "",
                isFocused: false,
              },
            ],
          };
          commentMenuState[i] = {
            ...commentMenuState[i],
            replyMenuState: [
              ...commentMenuState[i].replyMenuState,
              {
                postreplyid: postReply.newReply.postreplyid,
                state: false,
              },
            ],
          };
          setTrackCommentAct(!trackCommentAct);
        } else {
          setMessage("Đăng reply thất bại!");
          setDesc(postReply.message);
          setType("error");
          myFunction();
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleCommentReplyBoxOn = (commentIndex, replyIndex) => {
    controlReplyBox[commentIndex] = {
      ...controlReplyBox[commentIndex],
      replyBox: controlReplyBox[commentIndex].replyBox.map((item, index) => {
        if (index === replyIndex) {
          item = {
            ...item,
            isOn: !item.isOn,
          };
        } else {
          item = {
            ...item,
            isOn: false,
            value: "",
            isFocused: false,
          };
        }
        return item;
      }),
    };
    // cause re-render?
    setTrackReplyState(!trackReplyState);
  };

  const handleUnlikeReply = async (replyId) => {
    try {
      const afterUnlikedReply = await unlikePostCommentReply({
        postreplyid: replyId,
      });
      if (afterUnlikedReply.success) {
        setMessage("Sao unlike rồi :<!");
        setDesc("...");
        setType("success");
        myFunction();
        setTrackCommentAct(!trackCommentAct);
      } else {
        setMessage("Unlike reply thất bại!");
        setDesc(afterUnlikedReply.message);
        setType("error");
        myFunction();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleLikeReply = async (replyId) => {
    try {
      const afterLikedReply = await likePostCommentReply({
        postreplyid: replyId,
      });
      if (afterLikedReply.success) {
        setMessage("Đã tính like vào reply này nha :v!");
        setDesc("Đừng để ý thông báo này :3!");
        setType("success");
        myFunction();
        setTrackCommentAct(!trackCommentAct);
      } else {
        setMessage("Like reply thất bại!");
        setDesc(afterLikedReply.message);
        setType("error");
        myFunction();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleReplyPopup = (index) => {
    commentMenuState[index] = {
      ...commentMenuState[index],
      replyPopupState: !commentMenuState[index].replyPopupState,
    };
    for (let i = 0; i < commentMenuState.length; ++i) {
      if (i !== index) {
        commentMenuState[i] = {
          ...commentMenuState[i],
          replyPopupState: false,
        };
      }
    }
    // use to cause rerender
    setIsCommentMenuOn(!isCommentMenuOn);
  };

  const handleEditCmtValue = (index, value) => {
    editContent[index] = {
      ...editContent[index],
      value: value,
    };
    setTrackEditCmtState(!trackEditCmtState);
  };

  const handleEditCmtRepValue = (i, iter, value) => {
    editContent[i] = {
      ...editContent[i],
      replyBox: editContent[i].replyBox.map((item, index) => {
        if (index === iter) {
          item = {
            ...item,
            value: value,
          };
        }
        return item;
      }),
    };
    setTrackEditCmtState(!trackEditCmtState);
  };

  const handleIsEditCmtRepBlur = (i, iter) => {
    editContent[i] = {
      ...editContent[i],
      replyBox: editContent[i].replyBox.map((item, index) => {
        if (index === iter) {
          item = {
            ...item,
            isFocused: false,
          };
        }
        return item;
      }),
    };
    setTrackEditCmtState(!trackEditCmtState);
  };

  const handleIsEditCmtBlur = (index) => {
    editContent[index] = {
      ...editContent[index],
      isFocused: false,
    };
    setTrackEditCmtState(!trackEditCmtState);
  };

  const handleIsEditCmtRepFocused = (i, iter) => {
    editContent[i] = {
      ...editContent[i],
      replyBox: editContent[i].replyBox.map((item, index) => {
        if (index === iter) {
          item = {
            ...item,
            isFocused: true,
          };
        }
        return item;
      }),
    };
    setTrackEditCmtState(!trackEditCmtState);
  };

  const handleIsEditCmtFocused = (index) => {
    editContent[index] = {
      ...editContent[index],
      isFocused: true,
    };
    setTrackEditCmtState(!trackEditCmtState);
  };

  const handleCancelEditCmt = (index) => {
    editContent[index] = {
      ...editContent[index],
      isOn: !editContent[index].isOn,
      isFocused: false,
      value: "",
    };
    setTrackEditCmtState(!trackEditCmtState);
  };

  const handleCancelEditCmtRep = (i, iter) => {
    editContent[i] = {
      ...editContent[i],
      replyBox: editContent[i].replyBox.map((item, index) => {
        if (index === iter) {
          item = {
            ...item,
            isOn: !item.isOn,
            isFocused: false,
            value: "",
          };
        }
        return item;
      }),
    };
    setTrackEditCmtState(!trackEditCmtState);
  };

  const handleSendEditCmt = async (i, commentId) => {
    if (editContent[i].value === "") {
      setMessage("Edit comment thất bại!");
      setDesc("Phải có nội dung chứ :<");
      setType("error");
      myFunction();
    } else {
      try {
        const response = await editPostComment({
          content: editContent[i].value,
          postcommentid: commentId,
        });

        if (response.success) {
          setMessage(response.message);
          setDesc("Mời bạn tiếp tục... :D");
          setType("success");
          setUserComment("");
          myFunction();
          editContent[i] = {
            ...editContent[i],
            value: "",
            isOn: false,
            isFocused: false,
          };
          setTrackEditCmtState(!trackEditCmtState);
          setTrackCommentAct(!trackCommentAct);
        } else {
          setMessage("Edit comment thất bại!");
          setDesc(response.message);
          setType("error");
          myFunction();
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleSendEditCmtRep = async (i, iter, commentReplyId) => {
    if (editContent[i].replyBox[iter].value === "") {
      setMessage("Edit reply thất bại!");
      setDesc("Phải có nội dung chứ :<");
      setType("error");
      myFunction();
    } else {
      try {
        const response = await editPostCommentReply({
          content: editContent[i].replyBox[iter].value,
          postreplyid: commentReplyId,
        });

        if (response.success) {
          setMessage(response.message);
          setDesc("Mời bạn tiếp tục... :D");
          setType("success");
          setUserComment("");
          myFunction();
          editContent[i].replyBox[iter] = {
            ...editContent[i].replyBox[iter],
            value: "",
            isOn: false,
            isFocused: false,
          };
          /* editContent[i] = {
            ...editContent[i],
            replyBox: editContent[i].replyBox.map((item, index) => {
              if (index === iter) {
                item = {
                  ...item,
                  value: "",
                  isOn: false,
                  isFocused: false,
                }
              }
              return item;
            })
          }; */
          setTrackEditCmtState(!trackEditCmtState);
          setTrackCommentAct(!trackCommentAct);
        } else {
          setMessage("Edit comment thất bại!");
          setDesc(response.message);
          setType("error");
          myFunction();
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleOpenEditReply = (i, iter) => {
    editContent[i] = {
      ...editContent[i],
      replyBox: editContent[i].replyBox.map((item, index) => {
        if (index === iter) {
          item = {
            ...item,
            isOn: !item.isOn,
          };
        } else {
          item = {
            ...item,
            isOn: false,
            value: "",
            isFocused: false,
          };
        }
        return item;
      }),
    };
    commentMenuState[i] = {
      ...commentMenuState[i],
      replyMenuState: commentMenuState[i].replyMenuState.map((item) => {
        item = {
          ...item,
          state: false,
        };
        return item;
      }),
    };
    // use to cause rerender
    setIsCommentMenuOn(!isCommentMenuOn); // no longer on
    setTrackEditCmtState(!trackEditCmtState); // change state
  };

  const handleDeletePostReply = async (i, iter, postCommentReplyId) => {
    try {
      const response = await deletePostCommentReply(postCommentReplyId);
      if (response.success) {
        setMessage("Xóa reply thành công!");
        setDesc("Why... :<?");
        setType("success");
        myFunction();
        /* controlReplyBox[i].replyBox.splice(iter, 1);
        commentMenuState[i].replyMenuState.splice(iter, 1);
        editContent[i].replyBox.splice(iter, 1); */
        controlReplyBox[i] = {
          ...controlReplyBox[i],
          replyBox: controlReplyBox[i].replyBox.filter((item, index) => {
            if (index !== iter) {
              return item;
            }
          }),
        };
        commentMenuState[i] = {
          ...commentMenuState[i],
          replyMenuState: commentMenuState[i].replyMenuState.filter(
            (item, index) => {
              if (index !== iter) {
                return item;
              }
            }
          ),
        };
        editContent[i] = {
          ...editContent[i],
          replyBox: editContent[i].replyBox.filter((item, index) => {
            if (index !== iter) {
              return item;
            }
          }),
        };
        setTrackCommentAct(!trackCommentAct);
      } else {
        setMessage("Xóa reply thất bại!");
        setDesc(response.message);
        setType("error");
        myFunction();
      }
    } catch (err) {
      console.log(err);
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

  const handleConfirmBoxCmt = () => {
    handleCloseConfirmBox();
    handleDeletePostComment(deleteIndex, deleteCmtId);
  };

  const handleConfirmBoxRep = () => {
    handleCloseConfirmBox();
    handleDeletePostReply(deleteIndex, deleteIter, deleteRepId);
  };

  // When click delete comments
  const handleOpenConfirmBoxCmt = (index, postCommentId) => {
    const messageBox = document.querySelector(".msg-box-in");
    messageBox.classList.remove("msg-box-gone");
    setPostTitle("");
    setPostContent("");
    setPostTag("");
    if (picturePost) {
      setImageArr([]);
    } else if (videoPost) {
      setVideoUrl("");
      setHasChosenVid(false);
    }
    setEditPostMode(false);
    setDeleteCmtId(postCommentId);
    setDeleteIndex(index);
    setDeleteRepId(-1);
    setConfirmMsg("Xác nhận xóa comment này?");
  };

  const handleOpenConfirmBoxRep = (i, iter, postCommentReplyId) => {
    const messageBox = document.querySelector(".msg-box-in");
    messageBox.classList.remove("msg-box-gone");
    setPostTitle("");
    setPostContent("");
    setPostTag("");
    if (picturePost) {
      setImageArr([]);
    } else if (videoPost) {
      setVideoUrl("");
      setHasChosenVid(false);
    }
    setEditPostMode(false);
    setDeleteRepId(postCommentReplyId);
    setDeleteIndex(i);
    setDeleteIter(iter);
    setDeleteCmtId(-1);
    setConfirmMsg("Xác nhận xóa reply này?");
  };

  const handleNormalPost = () => {
    setPostTitle("");
    setPostContent("");
    setPostTag("");
    setImageArr([]);
    setHasChosenVid(false);
    setVideoUrl("");
    setNormalPost(true);
    setPicturePost(false);
    setVideoPost(false);
    setIsPHRMenuOn(false);
  };

  const handlePicturePost = () => {
    setPostTitle("");
    setPostContent("");
    setPostTag("");
    setHasChosenVid(false);
    setVideoUrl("");
    setNormalPost(false);
    setPicturePost(true);
    setVideoPost(false);
    setIsPHRMenuOn(false);
  };

  const handleVideoPost = () => {
    setPostTitle("");
    setPostContent("");
    setPostTag("");
    setImageArr([]);
    setNormalPost(false);
    setPicturePost(false);
    setVideoPost(true);
    setIsPHRMenuOn(false);
  };

  const handleImageInputClick = () => {
    imageInputRef.current.click();
  };

  const handleOpenCmtImgArr = () => {
    commentImageRef.current.click();
  };

  const handleCancelImage = (i) => {
    /* setImageUrl(null); */
    setImageArr(
      imageArr.filter((item, index) => {
        if (index !== i) {
          return item;
        }
      })
    );
  };

  const handleCancelCommentImage = (i) => {
    /* setImageUrl(null); */
    setCmtImageArr(
      cmtImageArr.filter((item, index) => {
        if (index !== i) {
          return item;
        }
      })
    );
  };

  const handleOpenConfirmBoxEditPost = () => {
    if (
      !postTitle &&
      !postContent &&
      !postTag &&
      imageArr.length === 0 &&
      !videoUrl
    ) {
      setEditPostMode(false);
    } else {
      const messageBox = document.querySelector(".msg-box-in");
      messageBox.classList.remove("msg-box-gone");
      setConfirmMsg("Xác nhận hủy thay đổi?");
    }
  };

  const handleCancelEditPost = () => {
    handleCloseConfirmBox();
    setPostTitle("");
    setPostContent("");
    setPostTag("");
    if (picturePost) {
      setImageArr([]);
    } else if (videoPost) {
      setVideoUrl("");
      setHasChosenVid(false);
    }
    setEditPostMode(false);
  };

  const handleConfirmBox = () => {
    if (editPostMode) {
      handleCancelEditPost();
    } else if (deleteCmtId !== -1) {
      handleConfirmBoxCmt();
    } else {
      handleConfirmBoxRep();
    }
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
      const hasFollowedIndex = user.follow.findIndex(
        (f) => f === author.userid
      );
      const isFollowed = hasFollowedIndex === -1 ? false : true;
      /* const postUploadedDate = new Date(currentPost.createdAt).getTime();
      let seconds = Math.round(Math.abs(currentTime - postUploadedDate) / 1000) // round away miliseconds
      const days = Math.floor(seconds / 86400);
      seconds -= days * 86400;
      const hours = Math.floor(seconds / 3600);
      seconds -= hours * 3600;
      const minutes = Math.floor(seconds / 60);
      seconds -= minutes * 60; */
      let dateStr = currentPost.createdAt.substring(0, 10);
      let dateArr = dateStr.split("-");
      let displayPostedDate = `${dateArr[2]}/${dateArr[1]}/${dateArr[0]}`;
      /* if (days === 0) {
        if (hours === 0) {
          if (minutes === 0) {
            displayPostedDate = `${seconds} giây trước`
          } else {
            displayPostedDate = `${minutes} phút trước`
          }
        } else {
          displayPostedDate = `${hours} giờ trước`
        }
      } else {
        displayPostedDate = `${days} ngày trước`
      } */
      if (!commentsLoading) {
        if (!repliesLoading) {
          const currentPostComments = comments.filter(
            (c) => c.postid === currentPost.postid
          );

          // "they" use the same length so can put in 1 if
          if (controlReplyBox.length === 0) {
            currentPostComments.forEach((c) => {
              const currentCommentReplies = replies.filter(
                (r) => r.postcommentid === c.postcommentid
              );
              let replyControlArr = [];
              let replyMenuControlArr = [];
              currentCommentReplies.forEach((r) => {
                replyControlArr.push({
                  postreplyid: r.postreplyid,
                  isOn: false,
                  value: "",
                  isFocused: false,
                });

                replyMenuControlArr.push({
                  postreplyid: r.postreplyid,
                  /* replyState: false, */
                  state: false,
                });
              });

              controlReplyBox.push({
                postcommentid: c.postcommentid,
                isOn: false,
                value: "",
                /* imageList: [], */
                isFocused: false,
                replyBox: [...replyControlArr],
              });

              commentMenuState.push({
                postcommentid: c.postcommentid,
                state: false,
                replyPopupState: false,
                replyMenuState: [...replyMenuControlArr],
              });

              editContent.push({
                postcommentid: c.postcommentid,
                isOn: false,
                value: "",
                /* imageList: [], */
                isFocused: false,
                replyBox: [...replyControlArr],
              });
            });
          }

          /* if (commentMenuState.length === 0) {
            currentPostComments.forEach((c, i) => {
              commentMenuState.push({
                postcommentid: c.postcommentid,
                state: false,

              });
            });
          } */

          body = (
            <>
              {editPostMode ? (
                <RootPageLayout>
                  <MainPageWrp style={{ marginBottom: "0" }}>
                    <NewArticleHeader>
                      <HeaderH1>Edit bài viết</HeaderH1>
                      <PostHeaderRight>
                        <PostHeaderRightList>
                          <PHRSelect>
                            <PHRSelectContainer
                              onClick={() => setIsPHRMenuOn(!isPHRMenuOn)}
                            >
                              <PHRSpan>
                                {normalPost
                                  ? "Đăng bài"
                                  : picturePost
                                  ? "Đăng ảnh"
                                  : "Đăng video"}
                              </PHRSpan>
                              <PHRArrowIcon isSelected={isPHRMenuOn} />
                            </PHRSelectContainer>
                            <PHRSelectMenu isSelected={isPHRMenuOn}>
                              <PHRUl>
                                <PHRLi
                                  isSelected={normalPost}
                                  onClick={handleNormalPost}
                                >
                                  <PHRLiSpan>Đăng bài</PHRLiSpan>
                                </PHRLi>
                                <PHRLi
                                  isSelected={picturePost}
                                  onClick={handlePicturePost}
                                >
                                  <PHRLiSpan>Đăng ảnh</PHRLiSpan>
                                </PHRLi>
                                <PHRLi
                                  isSelected={videoPost}
                                  onClick={handleVideoPost}
                                >
                                  <PHRLiSpan>Đăng video</PHRLiSpan>
                                </PHRLi>
                              </PHRUl>
                            </PHRSelectMenu>
                          </PHRSelect>
                        </PostHeaderRightList>
                      </PostHeaderRight>
                    </NewArticleHeader>
                    <NewArticleEditor>
                      <FormItemContainer style={{ marginTop: "8px" }}>
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
                            <InputMaxCount>
                              {postTitle.length}/200
                            </InputMaxCount>
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
                      {/* <FormItemContainer>
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
                            <ImageShowTitle>
                              Preview ảnh đã chọn:
                            </ImageShowTitle>
                            <PreviewPostImage src={imageUrl} alt="char-image" />
                          </ImgShow>
                        )}
                      </FormItemContainer> */}
                      {picturePost ? (
                        <FormItemContainer>
                          <FormItemLabel>Tải lên hình ảnh</FormItemLabel>
                          <FormUploadTip>
                            Cùng lúc có thể tải lên tối đa 20 ảnh (Định dạng
                            .jpg, .png, .jpeg, .gif, kích thước đề xuất trên 420
                            pixel)
                          </FormUploadTip>
                          <FormUploadImg>
                            {imageArr.map((item, index) => (
                              <FormImgUploaded image={item}>
                                <FormImgUploadDelete>
                                  <FormImgUploadDeleteIcon
                                    src={DeleteIcon}
                                    alt="delete-uploaded"
                                    onClick={() => handleCancelImage(index)}
                                  />
                                </FormImgUploadDelete>
                                {/* <FormImgUploadCover></FormImgUploadCover> */}
                              </FormImgUploaded>
                            ))}
                            <FormUploadImgAdd
                              htmlFor="select-image"
                              onClick={handleImageInputClick}
                            >
                              <IconImageAdd />
                              <input
                                ref={imageInputRef}
                                accept="image/*"
                                type="file"
                                id="select-image"
                                multiple="multiple"
                                style={{ display: "none" }}
                                onChange={imageHandler}
                              />
                            </FormUploadImgAdd>
                          </FormUploadImg>
                        </FormItemContainer>
                      ) : videoPost ? (
                        !hasChosenVid ? (
                          <FormItemContainer>
                            <FormItemLabel>Tải video</FormItemLabel>
                            <InputDiv>
                              <InputDivContainer
                                borderChange={isVideoInputFocused}
                              >
                                <InputText
                                  type="text" /* 
                                  maxLength="200" */
                                  placeholder="Vui lòng nhập liên kết (YouTube, TikTok...)"
                                  value={videoUrl}
                                  onChange={(e) => setVideoUrl(e.target.value)}
                                  onBlur={() => setIsVideoInputFocused(false)}
                                  onFocus={() => setIsVideoInputFocused(true)}
                                />
                                {/* <InputMaxCount>{postTag.length}/200</InputMaxCount> */}
                              </InputDivContainer>
                            </InputDiv>
                            <ConfirmVidContainer>
                              <SavePostButton
                                onClick={() => {
                                  if (!videoUrl) {
                                    setMessage("Chưa có URL!");
                                    setDesc(
                                      "Hãy nhập URL rồi nhấn nút xác nhận"
                                    );
                                    setType("error");
                                    myFunction();
                                  } else setHasChosenVid(true);
                                }}
                              >
                                Xác nhận
                              </SavePostButton>
                            </ConfirmVidContainer>
                          </FormItemContainer>
                        ) : (
                          <FormItemContainer>
                            <FormItemLabel>Video</FormItemLabel>
                            <NewVideoArticlePreview>
                              <NewVideoPreviewWrap>
                                <NewVideoPreview>
                                  <VideoPlayer>
                                    <ReactPlayer
                                      url={videoUrl}
                                      width="100%"
                                      height="100%"
                                      controls={true}
                                    />
                                  </VideoPlayer>
                                </NewVideoPreview>
                                <RemoveVideo
                                  onClick={() => {
                                    setHasChosenVid(false);
                                    setVideoUrl("");
                                  }}
                                >
                                  <span>Xóa video</span>
                                </RemoveVideo>
                              </NewVideoPreviewWrap>
                            </NewVideoArticlePreview>
                          </FormItemContainer>
                        )
                      ) : (
                        <></>
                      )}
                      <CreatePostFooter>
                        <CancelPostButton
                          onClick={handleOpenConfirmBoxEditPost}
                        >
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
                <div>
                  <AccountCenterUser isShown={isLined}>
                    <AccountMask>
                      <AccountWrap>
                        <AccountContent>
                          <AccountContentMain>
                            <AccountContentLeft>
                              <AccountLeftCard>
                                <AccountLeftAva>
                                  <AccountLeftAvaCard>
                                    <AccountAvaImage
                                      src={displayAva}
                                      alt="user-ava"
                                    />
                                    {/* <AccountLeftAvaFrameImg
                                      src={AvaFrame}
                                      alt="ava-frame"
                                    /> */}
                                  </AccountLeftAvaCard>
                                </AccountLeftAva>
                                <AccountLeftCardInfo>
                                  <AccountLeftCardName>
                                    <AccountLeftLink>
                                      <AccountLeftLinkName>
                                        {author.name}
                                      </AccountLeftLinkName>
                                    </AccountLeftLink>
                                  </AccountLeftCardName>
                                </AccountLeftCardInfo>
                                {author.userid !== user.userid && (
                                  <UserCardFollow>
                                    <UserCardButton
                                      isFollowed={isFollowed}
                                      onClick={() =>
                                        isFollowed
                                          ? handleUnfollowUser(author.userid)
                                          : handleFollowUser(author.userid)
                                      }
                                    >
                                      {isFollowed ? (
                                        <CheckedFollow />
                                      ) : (
                                        <PlusFollow />
                                      )}
                                    </UserCardButton>
                                  </UserCardFollow>
                                )}
                              </AccountLeftCard>
                            </AccountContentLeft>
                            <AccountContentRight></AccountContentRight>
                          </AccountContentMain>
                        </AccountContent>
                      </AccountWrap>
                    </AccountMask>
                  </AccountCenterUser>
                  <PostsContainer>
                    <div className="post-header-container">
                      <ArticlePostTitle>
                        <ArticlePostType></ArticlePostType>
                        <ArticlePostH1>{currentPost.postTitle}</ArticlePostH1>
                      </ArticlePostTitle>
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
                            <CardAction isActive={isSelectMenuOn}>
                              <EditIcon
                                onClick={handleSelectMenuOn}
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
                    </div>
                    <ArticlePageContent>
                      {currentPost.type === "picture" ? (
                        <div className="img-article-post">
                          {currentPost.postImage.length > 1 && (
                            <ArticleThumbsWrapper>
                              <ImageArticleContainer>
                                <SwiperWrapper
                                  onMouseDown={onMouseDown}
                                  ref={containerRef}
                                  style={{
                                    transform: `translate3d(${offsetX}px, 0px, 0px)`,
                                  }}
                                >
                                  {currentPost.postImage.map((item, index) => (
                                    <ImageSwiperItem
                                      key={index}
                                      image={item}
                                      isChosen={index === currentSlide}
                                      onClick={() =>
                                        !isSwiping &&
                                        chooseSlide(
                                          index,
                                          currentPost.postImage.length
                                        )
                                      }
                                    ></ImageSwiperItem>
                                  ))}
                                </SwiperWrapper>
                                <SwiperNotification></SwiperNotification>
                              </ImageArticleContainer>
                              {currentPost.postImage.length >= 6 && (
                                <>
                                  <SwiperButtonNext>
                                    <SwiperButtonArrow>
                                      <NextIcon
                                        onClick={() =>
                                          nextSlide(
                                            currentPost.postImage.length
                                          )
                                        }
                                      />
                                    </SwiperButtonArrow>
                                  </SwiperButtonNext>
                                  <SwiperButtonPrev>
                                    <SwiperButtonArrow>
                                      <PrevIcon
                                        onClick={() =>
                                          prevSlide(
                                            currentPost.postImage.length
                                          )
                                        }
                                      />
                                    </SwiperButtonArrow>
                                  </SwiperButtonPrev>
                                </>
                              )}
                            </ArticleThumbsWrapper>
                          )}
                          <ArticleListSwiper>
                            <SwiperWrapper
                              transform={`${-currentSlide * 576}px`}
                            >
                              {currentPost.postImage.map((item, index) => (
                                <ArticleSlideImageBig
                                  data-id={`post-image-${index}`}
                                  onClick={(e) =>
                                    handlePreviewImage(
                                      e,
                                      item,
                                      `post-image-${index}`
                                    )
                                  }
                                  key={index}
                                >
                                  <ArticleImageWrap
                                    currentSlide={index === currentSlide}
                                  >
                                    <ImgArticle src={item} alt="post-image" />
                                  </ArticleImageWrap>
                                </ArticleSlideImageBig>
                              ))}
                            </SwiperWrapper>
                            <SwiperNotification></SwiperNotification>
                          </ArticleListSwiper>
                          <ArticlePostDesc>
                            {currentPost.postContent}
                          </ArticlePostDesc>
                        </div>
                      ) : currentPost.type === "video" ? (
                        <>
                          <ArticlePageVideo>
                            <ArticlePageYtbPlayer>
                              <ReactPlayer
                                url={currentPost.videoUrl}
                                width="100%"
                                height="100%"
                                controls={true}
                              />
                            </ArticlePageYtbPlayer>
                          </ArticlePageVideo>
                          <ArticlePostDesc>
                            {currentPost.postContent}
                          </ArticlePostDesc>
                        </>
                      ) : (
                        <ArticlePostDesc>
                          {currentPost.postContent}
                        </ArticlePostDesc>
                      )}
                    </ArticlePageContent>
                    {/* <PostRouter to={`/posts/${currentPost.postid}`}>
                      <ArticleCardTitle>
                        {currentPost.postTitle}
                      </ArticleCardTitle>
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
                    </PostRouter> */}
                    <ArticlePostFooter>
                      <ArticleCardTopic>
                        {currentPost.hashtag.length !== 0 &&
                          currentPost.hashtag.map((tag) => {
                            if (tag !== "") {
                              return (
                                <ArticleCardTopicLabel>
                                  <TopicRouter to="/">{"#" + tag}</TopicRouter>
                                </ArticleCardTopicLabel>
                              );
                            }
                          })}
                      </ArticleCardTopic>
                      <ArticlePostStats>
                        <PostStatsItem>
                          <PostStatsIconLike isLiked={hasLiked}>
                            {hasLiked ? (
                              <PostIconLiked
                                onClick={() =>
                                  handleUnlikePost(currentPost.postid)
                                }
                              />
                            ) : (
                              <PostIconLike
                                onClick={() =>
                                  handleLikePost(currentPost.postid)
                                }
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
                            <PostStatsSpan>
                              {currentPostComments.length}
                            </PostStatsSpan>
                          </PostStatsIconComment>
                        </PostStatsItem>
                      </ArticlePostStats>
                    </ArticlePostFooter>
                  </PostsContainer>
                </div>
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
                    <UserReplyMaxCount>
                      {userComment.length}/1000
                    </UserReplyMaxCount>
                  </UserReplyBody>
                  {cmtImageArr.length !== 0 && (
                    <CommentUploadImg>
                      {cmtImageArr.map((item, index) => (
                        <CommentImgUploaded image={item}>
                          <CmtImgUploadDelete>
                            <CmtImgUploadDeleteIcon
                              src={DeleteIcon}
                              alt="comment-delete-uploaded"
                              onClick={() => handleCancelCommentImage(index)}
                            />
                          </CmtImgUploadDelete>
                        </CommentImgUploaded>
                      ))}
                    </CommentUploadImg>
                  )}
                  <ReplyBoxFooter>
                    <ReplyBoxToolBar>
                      <CommentAddReactIcon />
                      <CommentImageAddIcon
                        htmlFor="comment-image"
                        onClick={handleOpenCmtImgArr}
                      />
                      <input
                        ref={commentImageRef}
                        accept="image/*"
                        type="file"
                        id="comment-image"
                        multiple="multiple"
                        style={{ display: "none" }}
                        onChange={commentImageHandler}
                      />
                    </ReplyBoxToolBar>
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
                      {currentPostComments.length === 0 ? (
                        <NoCommentsImgContainer>
                          <NoCommentsImg
                            src={NoComments}
                            alt="no-comment-img"
                          />
                        </NoCommentsImgContainer>
                      ) : (
                        currentPostComments.map((c, i) => {
                          const currentCommentReplies = replies.filter(
                            (r) => r.postcommentid === c.postcommentid
                          );
                          const findIndex = users.findIndex(
                            (u) => u.userid === c.userid
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
                          const hasLikeThisComment = c.likeCount.includes(
                            user.userid
                          );
                          let commentDateStr = c.createdAt.substring(0, 10);
                          let commentDateArr = commentDateStr.split("-");
                          let displayCommentDate = `${commentDateArr[2]}/${commentDateArr[1]}/${commentDateArr[0]}`;
                          return (
                            <>
                              <CommendCard key={i}>
                                <div className="comment-card_left">
                                  <CommentCardAvatar>
                                    <CommentAvatar
                                      src={hostAva}
                                      alt="comment-ava"
                                    />
                                  </CommentCardAvatar>
                                </div>
                                <CommentCardContainer>
                                  <CCHeader>
                                    <ReplyCardAccount>
                                      <ReplyCardRouter
                                        to={
                                          commentHostInfo.userid === user.userid
                                            ? `/user/${commentHostInfo.userid}`
                                            : `/otheruser/${commentHostInfo.userid}`
                                        }
                                      >
                                        <RCRouterSpan>
                                          {commentHostInfo.name}
                                        </RCRouterSpan>
                                        {commentHostInfo.userid ===
                                          author.userid && (
                                          <CommentHostSpan>
                                            Tác giả
                                          </CommentHostSpan>
                                        )}
                                      </ReplyCardRouter>
                                      <RCFloor>
                                        <span>
                                          ID của người dùng&nbsp;:&nbsp;
                                          {commentHostInfo.userid}
                                        </span>
                                        <RCFloorTags></RCFloorTags>
                                      </RCFloor>
                                    </ReplyCardAccount>
                                    {/* <CCAcount
                                    to={
                                      commentHostInfo.userid === user.userid
                                        ? `/user/${commentHostInfo.userid}`
                                        : `/otheruser/${commentHostInfo.userid}`
                                    }
                                  >
                                    {commentHostInfo.name}
                                  </CCAcount> */}
                                    <CCOperation>
                                      <CCAction>
                                        <CCActionIcon
                                          isSelected={commentMenuState[i].state}
                                          isUnClickable={editContent[i].isOn}
                                          onClick={() => handleCommentMenu(i)}
                                        />
                                        <CCSelectMenu
                                          isOn={commentMenuState[i].state}
                                        >
                                          <CCSelectMenuTitle>
                                            Khác
                                          </CCSelectMenuTitle>
                                          <CCUl>
                                            {commentHostInfo.userid ===
                                            user.userid ? (
                                              <>
                                                <CCLi
                                                  onClick={() =>
                                                    handleOpenEditCmtContent(i)
                                                  }
                                                >
                                                  <EditComment />
                                                  <CCLiSpan>Chỉnh sửa</CCLiSpan>
                                                </CCLi>
                                                <CCLi
                                                  onClick={() =>
                                                    handleOpenConfirmBoxCmt(
                                                      i,
                                                      c.postcommentid
                                                    )
                                                  }
                                                >
                                                  <NotVisible />
                                                  <CCLiSpan>
                                                    Xóa bình luận
                                                  </CCLiSpan>
                                                </CCLi>
                                              </>
                                            ) : (
                                              <CCLi>
                                                <BlockUser />
                                                <CCLiSpan>
                                                  Chặn người dùng
                                                </CCLiSpan>
                                              </CCLi>
                                            )}
                                          </CCUl>
                                        </CCSelectMenu>
                                      </CCAction>
                                    </CCOperation>
                                  </CCHeader>
                                  {editContent[i].isOn ? (
                                    <CommentReplyWrap
                                      isAppear={editContent[i].isOn}
                                    >
                                      <UserReplyBody
                                        borderChange={editContent[i].isFocused}
                                      >
                                        <UserReplyTextArea
                                          type="text"
                                          maxLength="1000"
                                          placeholder="Ex: Bài viết rất hay rất cảm xúc..."
                                          value={editContent[i].value}
                                          onChange={(e) =>
                                            handleEditCmtValue(
                                              i,
                                              e.target.value
                                            )
                                          }
                                          onBlur={() => handleIsEditCmtBlur(i)}
                                          onFocus={() =>
                                            handleIsEditCmtFocused(i)
                                          }
                                        />
                                        <UserReplyMaxCount>
                                          {editContent[i].value.length}/1000
                                        </UserReplyMaxCount>
                                      </UserReplyBody>
                                      <ReplyBoxFooter
                                        style={{ marginBottom: "12px" }}
                                      >
                                        <ReplyBoxToolBar>
                                          <CommentAddReactIcon />
                                          <CommentImageAddIcon />
                                        </ReplyBoxToolBar>
                                        <CommentButtonWrap>
                                          <CancelEditCmtButton
                                            onClick={() =>
                                              handleCancelEditCmt(i)
                                            }
                                          >
                                            Hủy
                                          </CancelEditCmtButton>
                                          <SendButton
                                            onClick={() =>
                                              handleSendEditCmt(
                                                i,
                                                c.postcommentid
                                              )
                                            }
                                          >
                                            Gửi
                                          </SendButton>
                                        </CommentButtonWrap>
                                      </ReplyBoxFooter>
                                    </CommentReplyWrap>
                                  ) : (
                                    <>
                                      <CCContent>{c.content}</CCContent>
                                      {c.image.map((item, index) => (
                                        <CommentImage
                                          data-id={`cmtid-${i}-image-${index}`}
                                          onClick={(e) =>
                                            handlePreviewImage(
                                              e,
                                              item,
                                              `cmtid-${i}-image-${index}`
                                            )
                                          }
                                          src={item}
                                          alt="cmt-imgs"
                                        />
                                      ))}
                                    </>
                                  )}
                                  <RCOpBottom>
                                    <RCTime>{displayCommentDate}</RCTime>
                                    <RCBottomRight>
                                      <RCItem
                                        onClick={() => handleReplyBoxOn(i)}
                                      >
                                        <RCItemIconComment />
                                        <RCItemSpan>Trả lời</RCItemSpan>
                                      </RCItem>
                                      <RCItem>
                                        {hasLikeThisComment ? (
                                          <RCItemIconLiked
                                            onClick={() =>
                                              handleUnlikeComment(
                                                c.postcommentid
                                              )
                                            }
                                          />
                                        ) : (
                                          <RCItemIconLike
                                            onClick={() =>
                                              handleLikeComment(c.postcommentid)
                                            }
                                          />
                                        )}
                                        <RCItemSpan>
                                          {c.likeCount.length}
                                        </RCItemSpan>
                                      </RCItem>
                                    </RCBottomRight>
                                  </RCOpBottom>
                                  <CommentReplyWrap
                                    isAppear={controlReplyBox[i].isOn}
                                  >
                                    <UserReplyBody
                                      borderChange={
                                        controlReplyBox[i].isFocused
                                      }
                                    >
                                      <UserReplyTextArea
                                        type="text"
                                        maxLength="200"
                                        placeholder="Ex: Bài viết rất hay rất cảm xúc..."
                                        value={controlReplyBox[i].value}
                                        onChange={(e) =>
                                          handleReplyBoxValue(i, e.target.value)
                                        }
                                        onBlur={() => handleIsReplyBlur(i)}
                                        onFocus={() => handleIsReplyFocused(i)}
                                      />
                                      <UserReplyMaxCount>
                                        {controlReplyBox[i].value.length}/200
                                      </UserReplyMaxCount>
                                    </UserReplyBody>
                                    <ReplyBoxFooter>
                                      <ReplyBoxToolBar>
                                        <CommentAddReactIcon />
                                      </ReplyBoxToolBar>
                                      <CommentButtonWrap>
                                        <SendButton
                                          onClick={() =>
                                            handleSendReply(
                                              i,
                                              c.postcommentid,
                                              controlReplyBox[i].value
                                            )
                                          }
                                        >
                                          Gửi
                                        </SendButton>
                                      </CommentButtonWrap>
                                    </ReplyBoxFooter>
                                  </CommentReplyWrap>
                                  <ReplyCardReplies>
                                    {currentCommentReplies.length > 0 &&
                                    currentCommentReplies.length <= 2
                                      ? currentCommentReplies.map((r, iter) => {
                                          const findReplyUserIndex =
                                            users.findIndex(
                                              (u) => u.userid === r.userid
                                            );
                                          const replyHostInfo =
                                            users[findReplyUserIndex];
                                          let replyHostAva = RaidenAva;
                                          switch (replyHostInfo.avatar) {
                                            case "RaidenAva":
                                              replyHostAva = RaidenAva;
                                              break;
                                            case "DoggoAva":
                                              replyHostAva = DoggoAva;
                                              break;
                                            case "HutaoAva":
                                              replyHostAva = HutaoAva;
                                              break;
                                            default:
                                              replyHostAva = RaidenAva;
                                              break;
                                          }
                                          let replyToUser;
                                          if (r.replyhostid !== -1) {
                                            replyToUser =
                                              users[
                                                users.findIndex(
                                                  (u) =>
                                                    u.userid === r.replyhostid
                                                )
                                              ];
                                          }
                                          const hasLikeThisReply =
                                            r.likeCount.includes(user.userid);
                                          let replyDateStr =
                                            r.createdAt.substring(0, 10);
                                          let replyDateArr =
                                            replyDateStr.split("-");
                                          let displayReplyDate = `${replyDateArr[2]}/${replyDateArr[1]}/${replyDateArr[0]}`;
                                          return (
                                            <RCInnerReply isBottom={iter >= 1}>
                                              <div className="comment-card_left">
                                                <LinkRouter
                                                  to={
                                                    replyHostInfo.userid ===
                                                    user.userid
                                                      ? `/user/${replyHostInfo.userid}`
                                                      : `/otheruser/${replyHostInfo.userid}`
                                                  }
                                                >
                                                  <RepliesAvatar>
                                                    <CommentAvatar
                                                      src={replyHostAva}
                                                      alt="comment-ava"
                                                    />
                                                  </RepliesAvatar>
                                                </LinkRouter>
                                              </div>
                                              <RepliesContainer>
                                                <CCHeader>
                                                  <ReplyCardAccount>
                                                    <ReplyCardRouter
                                                      to={
                                                        replyHostInfo.userid ===
                                                        user.userid
                                                          ? `/user/${replyHostInfo.userid}`
                                                          : `/otheruser/${replyHostInfo.userid}`
                                                      }
                                                    >
                                                      <RCReplyRouterSpan>
                                                        {replyHostInfo.name}
                                                      </RCReplyRouterSpan>
                                                      {replyHostInfo.userid ===
                                                        commentHostInfo.userid && (
                                                        <CommentHostSpan>
                                                          Tác giả
                                                        </CommentHostSpan>
                                                      )}
                                                    </ReplyCardRouter>
                                                    <RCFloor>
                                                      <span>
                                                        ID của người
                                                        dùng&nbsp;:&nbsp;
                                                        {replyHostInfo.userid}
                                                      </span>
                                                      <RCFloorTags></RCFloorTags>
                                                    </RCFloor>
                                                  </ReplyCardAccount>
                                                  <CCOperation>
                                                    <CCAction>
                                                      <CCActionIcon
                                                        isSelected={
                                                          commentMenuState[i]
                                                            .replyMenuState[
                                                            iter
                                                          ].state
                                                        }
                                                        isUnClickable={
                                                          editContent[i]
                                                            .replyBox[iter].isOn
                                                        }
                                                        onClick={() =>
                                                          handleCommentReplyMenu(
                                                            i,
                                                            iter
                                                          )
                                                        }
                                                      />
                                                      <CCSelectMenu
                                                        isOn={
                                                          commentMenuState[i]
                                                            .replyMenuState[
                                                            iter
                                                          ].state
                                                        }
                                                      >
                                                        <CCSelectMenuTitle>
                                                          Khác
                                                        </CCSelectMenuTitle>
                                                        <CCUl>
                                                          {replyHostInfo.userid ===
                                                          user.userid ? (
                                                            <>
                                                              <CCLi
                                                                onClick={() =>
                                                                  handleOpenEditReply(
                                                                    i,
                                                                    iter
                                                                  )
                                                                }
                                                              >
                                                                <EditComment />
                                                                <CCLiSpan>
                                                                  Chỉnh sửa
                                                                </CCLiSpan>
                                                              </CCLi>
                                                              <CCLi
                                                                onClick={() =>
                                                                  handleOpenConfirmBoxRep(
                                                                    i,
                                                                    iter,
                                                                    r.postreplyid
                                                                  )
                                                                }
                                                              >
                                                                <NotVisible />
                                                                <CCLiSpan>
                                                                  Xóa bình luận
                                                                </CCLiSpan>
                                                              </CCLi>
                                                            </>
                                                          ) : (
                                                            <CCLi>
                                                              <BlockUser />
                                                              <CCLiSpan>
                                                                Chặn người dùng
                                                              </CCLiSpan>
                                                            </CCLi>
                                                          )}
                                                        </CCUl>
                                                      </CCSelectMenu>
                                                    </CCAction>
                                                  </CCOperation>
                                                </CCHeader>
                                                {editContent[i].replyBox[iter]
                                                  .isOn ? (
                                                  <CommentReplyWrap
                                                    isAppear={
                                                      editContent[i].replyBox[
                                                        iter
                                                      ].isOn
                                                    }
                                                  >
                                                    <UserReplyBody
                                                      borderChange={
                                                        editContent[i].replyBox[
                                                          iter
                                                        ].isFocused
                                                      }
                                                    >
                                                      <UserReplyTextArea
                                                        type="text"
                                                        maxLength="200"
                                                        placeholder="Ex: Bài viết rất hay rất cảm xúc..."
                                                        value={
                                                          editContent[i]
                                                            .replyBox[iter]
                                                            .value
                                                        }
                                                        onChange={(e) =>
                                                          handleEditCmtRepValue(
                                                            i,
                                                            iter,
                                                            e.target.value
                                                          )
                                                        }
                                                        onBlur={() =>
                                                          handleIsEditCmtRepBlur(
                                                            i,
                                                            iter
                                                          )
                                                        }
                                                        onFocus={() =>
                                                          handleIsEditCmtRepFocused(
                                                            i,
                                                            iter
                                                          )
                                                        }
                                                      />
                                                      <UserReplyMaxCount>
                                                        {
                                                          editContent[i]
                                                            .replyBox[iter]
                                                            .value.length
                                                        }
                                                        /200
                                                      </UserReplyMaxCount>
                                                    </UserReplyBody>
                                                    <ReplyBoxFooter
                                                      style={{
                                                        marginBottom: "12px",
                                                      }}
                                                    >
                                                      <ReplyBoxToolBar>
                                                        <CommentAddReactIcon />
                                                        {/* <CommentImageAddIcon /> */}
                                                      </ReplyBoxToolBar>
                                                      <CommentButtonWrap>
                                                        <CancelEditCmtButton
                                                          onClick={() =>
                                                            handleCancelEditCmtRep(
                                                              i,
                                                              iter
                                                            )
                                                          }
                                                        >
                                                          Hủy
                                                        </CancelEditCmtButton>
                                                        <SendButton
                                                          onClick={() =>
                                                            handleSendEditCmtRep(
                                                              i,
                                                              iter,
                                                              r.postreplyid
                                                            )
                                                          }
                                                        >
                                                          Gửi
                                                        </SendButton>
                                                      </CommentButtonWrap>
                                                    </ReplyBoxFooter>
                                                  </CommentReplyWrap>
                                                ) : (
                                                  <ReplyCardContent>
                                                    {r.replyhostid !== -1 && (
                                                      <>
                                                        <ReplyCardReplyTo>
                                                          Trả lời
                                                        </ReplyCardReplyTo>
                                                        <RouterLinkAccount
                                                          to={
                                                            replyToUser.userid ===
                                                            user.userid
                                                              ? `/user/${user.userid}`
                                                              : `/otheruser/${replyToUser.userid}`
                                                          }
                                                        >
                                                          <LinkAccountTitleName>
                                                            {replyToUser.name}
                                                          </LinkAccountTitleName>
                                                        </RouterLinkAccount>
                                                        <ReplyColon>
                                                          &nbsp;:&nbsp;
                                                        </ReplyColon>
                                                      </>
                                                    )}
                                                    <ReplyContentWrap>
                                                      <p>{r.content}</p>
                                                    </ReplyContentWrap>
                                                  </ReplyCardContent>
                                                )}
                                                <RCOpBottom>
                                                  <RCTime>
                                                    {displayReplyDate}
                                                  </RCTime>
                                                  <RCBottomRight>
                                                    <RCItem
                                                      onClick={() =>
                                                        handleCommentReplyBoxOn(
                                                          i,
                                                          iter
                                                        )
                                                      }
                                                    >
                                                      <RCItemIconComment />
                                                      <RCItemSpan>
                                                        Trả lời
                                                      </RCItemSpan>
                                                    </RCItem>
                                                    <RCItem>
                                                      {hasLikeThisReply ? (
                                                        <RCItemIconLiked
                                                          onClick={() =>
                                                            handleUnlikeReply(
                                                              r.postreplyid
                                                            )
                                                          }
                                                        />
                                                      ) : (
                                                        <RCItemIconLike
                                                          onClick={() =>
                                                            handleLikeReply(
                                                              r.postreplyid
                                                            )
                                                          }
                                                        />
                                                      )}
                                                      <RCItemSpan>
                                                        {r.likeCount.length}
                                                      </RCItemSpan>
                                                    </RCItem>
                                                  </RCBottomRight>
                                                </RCOpBottom>
                                                <CommentReplyWrap
                                                  isAppear={
                                                    controlReplyBox[i].replyBox[
                                                      iter
                                                    ].isOn
                                                  }
                                                >
                                                  <UserReplyBody
                                                    borderChange={
                                                      controlReplyBox[i]
                                                        .replyBox[iter]
                                                        .isFocused
                                                    }
                                                  >
                                                    <UserReplyTextArea
                                                      type="text"
                                                      maxLength="200"
                                                      placeholder="Ex: Bài viết rất hay rất cảm xúc..."
                                                      value={
                                                        controlReplyBox[i]
                                                          .replyBox[iter].value
                                                      }
                                                      onChange={(e) =>
                                                        handleCmtReplyBoxValue(
                                                          i,
                                                          iter,
                                                          e.target.value
                                                        )
                                                      }
                                                      onBlur={() =>
                                                        handleIsCmtReplyBlur(
                                                          i,
                                                          iter
                                                        )
                                                      }
                                                      onFocus={() =>
                                                        handleIsCmtReplyFocused(
                                                          i,
                                                          iter
                                                        )
                                                      }
                                                    />
                                                    <UserReplyMaxCount>
                                                      {
                                                        controlReplyBox[i]
                                                          .replyBox[iter].value
                                                          .length
                                                      }
                                                      /200
                                                    </UserReplyMaxCount>
                                                  </UserReplyBody>
                                                  <ReplyBoxFooter>
                                                    <ReplyBoxToolBar>
                                                      <CommentAddReactIcon />
                                                    </ReplyBoxToolBar>
                                                    <CommentButtonWrap>
                                                      <SendButton
                                                        onClick={() =>
                                                          handleSendReply(
                                                            i,
                                                            c.postcommentid,
                                                            controlReplyBox[i]
                                                              .replyBox[iter]
                                                              .value,
                                                            iter,
                                                            replyHostInfo.userid
                                                          )
                                                        }
                                                      >
                                                        Gửi
                                                      </SendButton>
                                                    </CommentButtonWrap>
                                                  </ReplyBoxFooter>
                                                </CommentReplyWrap>
                                              </RepliesContainer>
                                            </RCInnerReply>
                                          );
                                        })
                                      : currentCommentReplies.length > 2 &&
                                        currentCommentReplies.map((r, iter) => {
                                          if (iter <= 1) {
                                            const findReplyUserIndex =
                                              users.findIndex(
                                                (u) => u.userid === r.userid
                                              );
                                            const replyHostInfo =
                                              users[findReplyUserIndex];
                                            let replyHostAva = RaidenAva;
                                            switch (replyHostInfo.avatar) {
                                              case "RaidenAva":
                                                replyHostAva = RaidenAva;
                                                break;
                                              case "DoggoAva":
                                                replyHostAva = DoggoAva;
                                                break;
                                              case "HutaoAva":
                                                replyHostAva = HutaoAva;
                                                break;
                                              default:
                                                replyHostAva = RaidenAva;
                                                break;
                                            }
                                            let replyToUser;
                                            if (r.replyhostid !== -1) {
                                              replyToUser =
                                                users[
                                                  users.findIndex(
                                                    (u) =>
                                                      u.userid === r.replyhostid
                                                  )
                                                ];
                                            }
                                            const hasLikeThisReply =
                                              r.likeCount.includes(user.userid);
                                            let replyDateStr =
                                              r.createdAt.substring(0, 10);
                                            let replyDateArr =
                                              replyDateStr.split("-");
                                            let displayReplyDate = `${replyDateArr[2]}/${replyDateArr[1]}/${replyDateArr[0]}`;
                                            return (
                                              <RCInnerReply
                                                isBottom={iter >= 1}
                                              >
                                                <div className="comment-card_left">
                                                  <LinkRouter
                                                    to={
                                                      replyHostInfo.userid ===
                                                      user.userid
                                                        ? `/user/${replyHostInfo.userid}`
                                                        : `/otheruser/${replyHostInfo.userid}`
                                                    }
                                                  >
                                                    <RepliesAvatar>
                                                      <CommentAvatar
                                                        src={replyHostAva}
                                                        alt="comment-ava"
                                                      />
                                                    </RepliesAvatar>
                                                  </LinkRouter>
                                                </div>
                                                <RepliesContainer>
                                                  <CCHeader>
                                                    <ReplyCardAccount>
                                                      <ReplyCardRouter
                                                        to={
                                                          replyHostInfo.userid ===
                                                          user.userid
                                                            ? `/user/${replyHostInfo.userid}`
                                                            : `/otheruser/${replyHostInfo.userid}`
                                                        }
                                                      >
                                                        <RCReplyRouterSpan>
                                                          {replyHostInfo.name}
                                                        </RCReplyRouterSpan>
                                                        {replyHostInfo.userid ===
                                                          commentHostInfo.userid && (
                                                          <CommentHostSpan>
                                                            Tác giả
                                                          </CommentHostSpan>
                                                        )}
                                                      </ReplyCardRouter>
                                                      <RCFloor>
                                                        <span>
                                                          ID của người
                                                          dùng&nbsp;:&nbsp;
                                                          {replyHostInfo.userid}
                                                        </span>
                                                        <RCFloorTags></RCFloorTags>
                                                      </RCFloor>
                                                    </ReplyCardAccount>
                                                    <CCOperation>
                                                      <CCAction>
                                                        <CCActionIcon
                                                          isSelected={
                                                            commentMenuState[i]
                                                              .replyMenuState[
                                                              iter
                                                            ].state
                                                          }
                                                          isUnClickable={
                                                            editContent[i]
                                                              .replyBox[iter]
                                                              .isOn
                                                          }
                                                          onClick={() =>
                                                            handleCommentReplyMenu(
                                                              i,
                                                              iter
                                                            )
                                                          }
                                                        />
                                                        <CCSelectMenu
                                                          isOn={
                                                            commentMenuState[i]
                                                              .replyMenuState[
                                                              iter
                                                            ].state
                                                          }
                                                        >
                                                          <CCSelectMenuTitle>
                                                            Khác
                                                          </CCSelectMenuTitle>
                                                          <CCUl>
                                                            {replyHostInfo.userid ===
                                                            user.userid ? (
                                                              <>
                                                                <CCLi
                                                                  onClick={() =>
                                                                    handleOpenEditReply(
                                                                      i,
                                                                      iter
                                                                    )
                                                                  }
                                                                >
                                                                  <EditComment />
                                                                  <CCLiSpan>
                                                                    Chỉnh sửa
                                                                  </CCLiSpan>
                                                                </CCLi>
                                                                <CCLi
                                                                  onClick={() =>
                                                                    handleOpenConfirmBoxRep(
                                                                      i,
                                                                      iter,
                                                                      r.postreplyid
                                                                    )
                                                                  }
                                                                >
                                                                  <NotVisible />
                                                                  <CCLiSpan>
                                                                    Xóa bình
                                                                    luận
                                                                  </CCLiSpan>
                                                                </CCLi>
                                                              </>
                                                            ) : (
                                                              <CCLi>
                                                                <BlockUser />
                                                                <CCLiSpan>
                                                                  Chặn người
                                                                  dùng
                                                                </CCLiSpan>
                                                              </CCLi>
                                                            )}
                                                          </CCUl>
                                                        </CCSelectMenu>
                                                      </CCAction>
                                                    </CCOperation>
                                                  </CCHeader>
                                                  {editContent[i].replyBox[iter]
                                                    .isOn ? (
                                                    <CommentReplyWrap
                                                      isAppear={
                                                        editContent[i].replyBox[
                                                          iter
                                                        ].isOn
                                                      }
                                                    >
                                                      <UserReplyBody
                                                        borderChange={
                                                          editContent[i]
                                                            .replyBox[iter]
                                                            .isFocused
                                                        }
                                                      >
                                                        <UserReplyTextArea
                                                          type="text"
                                                          maxLength="200"
                                                          placeholder="Ex: Bài viết rất hay rất cảm xúc..."
                                                          value={
                                                            editContent[i]
                                                              .replyBox[iter]
                                                              .value
                                                          }
                                                          onChange={(e) =>
                                                            handleEditCmtRepValue(
                                                              i,
                                                              iter,
                                                              e.target.value
                                                            )
                                                          }
                                                          onBlur={() =>
                                                            handleIsEditCmtRepBlur(
                                                              i,
                                                              iter
                                                            )
                                                          }
                                                          onFocus={() =>
                                                            handleIsEditCmtRepFocused(
                                                              i,
                                                              iter
                                                            )
                                                          }
                                                        />
                                                        <UserReplyMaxCount>
                                                          {
                                                            editContent[i]
                                                              .replyBox[iter]
                                                              .value.length
                                                          }
                                                          /200
                                                        </UserReplyMaxCount>
                                                      </UserReplyBody>
                                                      <ReplyBoxFooter
                                                        style={{
                                                          marginBottom: "12px",
                                                        }}
                                                      >
                                                        <ReplyBoxToolBar>
                                                          <CommentAddReactIcon />
                                                        </ReplyBoxToolBar>
                                                        <CommentButtonWrap>
                                                          <CancelEditCmtButton
                                                            onClick={() =>
                                                              handleCancelEditCmtRep(
                                                                i,
                                                                iter
                                                              )
                                                            }
                                                          >
                                                            Hủy
                                                          </CancelEditCmtButton>
                                                          <SendButton
                                                            onClick={() =>
                                                              handleSendEditCmtRep(
                                                                i,
                                                                iter,
                                                                r.postreplyid
                                                              )
                                                            }
                                                          >
                                                            Gửi
                                                          </SendButton>
                                                        </CommentButtonWrap>
                                                      </ReplyBoxFooter>
                                                    </CommentReplyWrap>
                                                  ) : (
                                                    <ReplyCardContent>
                                                      {r.replyhostid !== -1 && (
                                                        <>
                                                          <ReplyCardReplyTo>
                                                            Trả lời
                                                          </ReplyCardReplyTo>
                                                          <RouterLinkAccount
                                                            to={
                                                              replyToUser.userid ===
                                                              user.userid
                                                                ? `/user/${user.userid}`
                                                                : `/otheruser/${replyToUser.userid}`
                                                            }
                                                          >
                                                            <LinkAccountTitleName>
                                                              {replyToUser.name}
                                                            </LinkAccountTitleName>
                                                          </RouterLinkAccount>
                                                          <ReplyColon>
                                                            &nbsp;:&nbsp;
                                                          </ReplyColon>
                                                        </>
                                                      )}
                                                      <ReplyContentWrap>
                                                        <p>{r.content}</p>
                                                      </ReplyContentWrap>
                                                    </ReplyCardContent>
                                                  )}

                                                  <RCOpBottom>
                                                    <RCTime>
                                                      {displayReplyDate}
                                                    </RCTime>
                                                    <RCBottomRight>
                                                      <RCItem
                                                        onClick={() =>
                                                          handleCommentReplyBoxOn(
                                                            i,
                                                            iter
                                                          )
                                                        }
                                                      >
                                                        <RCItemIconComment />
                                                        <RCItemSpan>
                                                          Trả lời
                                                        </RCItemSpan>
                                                      </RCItem>
                                                      <RCItem>
                                                        {hasLikeThisReply ? (
                                                          <RCItemIconLiked
                                                            onClick={() =>
                                                              handleUnlikeReply(
                                                                r.postreplyid
                                                              )
                                                            }
                                                          />
                                                        ) : (
                                                          <RCItemIconLike
                                                            onClick={() =>
                                                              handleLikeReply(
                                                                r.postreplyid
                                                              )
                                                            }
                                                          />
                                                        )}
                                                        <RCItemSpan>
                                                          {r.likeCount.length}
                                                        </RCItemSpan>
                                                      </RCItem>
                                                    </RCBottomRight>
                                                  </RCOpBottom>
                                                  <CommentReplyWrap
                                                    isAppear={
                                                      controlReplyBox[i]
                                                        .replyBox[iter].isOn
                                                    }
                                                  >
                                                    <UserReplyBody
                                                      borderChange={
                                                        controlReplyBox[i]
                                                          .replyBox[iter]
                                                          .isFocused
                                                      }
                                                    >
                                                      <UserReplyTextArea
                                                        type="text"
                                                        maxLength="200"
                                                        placeholder="Ex: Bài viết rất hay rất cảm xúc..."
                                                        value={
                                                          controlReplyBox[i]
                                                            .replyBox[iter]
                                                            .value
                                                        }
                                                        onChange={(e) =>
                                                          handleCmtReplyBoxValue(
                                                            i,
                                                            iter,
                                                            e.target.value
                                                          )
                                                        }
                                                        onBlur={() =>
                                                          handleIsCmtReplyBlur(
                                                            i,
                                                            iter
                                                          )
                                                        }
                                                        onFocus={() =>
                                                          handleIsCmtReplyFocused(
                                                            i,
                                                            iter
                                                          )
                                                        }
                                                      />
                                                      <UserReplyMaxCount>
                                                        {
                                                          controlReplyBox[i]
                                                            .replyBox[iter]
                                                            .value.length
                                                        }
                                                        /200
                                                      </UserReplyMaxCount>
                                                    </UserReplyBody>
                                                    <ReplyBoxFooter>
                                                      <ReplyBoxToolBar>
                                                        <CommentAddReactIcon />
                                                      </ReplyBoxToolBar>
                                                      <CommentButtonWrap>
                                                        <SendButton
                                                          onClick={() =>
                                                            handleSendReply(
                                                              i,
                                                              c.postcommentid,
                                                              controlReplyBox[i]
                                                                .replyBox[iter]
                                                                .value,
                                                              iter,
                                                              replyHostInfo.userid
                                                            )
                                                          }
                                                        >
                                                          Gửi
                                                        </SendButton>
                                                      </CommentButtonWrap>
                                                    </ReplyBoxFooter>
                                                  </CommentReplyWrap>
                                                </RepliesContainer>
                                              </RCInnerReply>
                                            );
                                          } else if (iter === 2) {
                                            return (
                                              <ReplyCardInnerDetail
                                                onClick={() =>
                                                  handleReplyPopup(i)
                                                }
                                              >
                                                <span>
                                                  Tổng cộng có{" "}
                                                  {currentCommentReplies.length}{" "}
                                                  câu trả lời
                                                </span>
                                                <ReplyCardInnerDetailIcon />
                                              </ReplyCardInnerDetail>
                                            );
                                          }
                                        })}
                                  </ReplyCardReplies>
                                </CommentCardContainer>
                              </CommendCard>
                              <DialogReply
                                isShown={commentMenuState[i].replyPopupState}
                              >
                                <DialogReplyWrap>
                                  <DialogContent>
                                    <DialogHeader>
                                      <DialogTitle>Xem bình luận</DialogTitle>
                                      <DialogClose
                                        onClick={() => handleReplyPopup(i)}
                                      >
                                        <DialogButton>
                                          <DialogCloseIcon />
                                        </DialogButton>
                                      </DialogClose>
                                    </DialogHeader>
                                    <DialogBody>
                                      <div className="reply-detail-container">
                                        <ReplyDetailList>
                                          <CommentPart>
                                            <div className="comment-card_left">
                                              <CommentCardAvatar>
                                                <CommentAvatar
                                                  src={hostAva}
                                                  alt="comment-ava"
                                                />
                                              </CommentCardAvatar>
                                            </div>
                                            <CommentCardContainer>
                                              <CCHeader>
                                                <ReplyCardAccount>
                                                  <ReplyCardRouter
                                                    to={
                                                      commentHostInfo.userid ===
                                                      user.userid
                                                        ? `/user/${commentHostInfo.userid}`
                                                        : `/otheruser/${commentHostInfo.userid}`
                                                    }
                                                  >
                                                    <RCRouterSpan>
                                                      {commentHostInfo.name}
                                                    </RCRouterSpan>
                                                    {/* {commentHostInfo.userid ===
                                                  user.userid && (
                                                  <CommentHostSpan>
                                                    Tác giả
                                                  </CommentHostSpan>
                                                )} */}
                                                  </ReplyCardRouter>
                                                  <RCFloor>
                                                    <span>
                                                      ID của người
                                                      dùng&nbsp;:&nbsp;
                                                      {commentHostInfo.userid}
                                                    </span>
                                                    <RCFloorTags></RCFloorTags>
                                                  </RCFloor>
                                                </ReplyCardAccount>
                                                <CCOperation>
                                                  <CCAction>
                                                    <CCActionIcon
                                                      onClick={() =>
                                                        handleCommentMenu(i)
                                                      }
                                                    />
                                                    <CCSelectMenu
                                                      isOn={
                                                        commentMenuState[i]
                                                          .state
                                                      }
                                                    >
                                                      <CCSelectMenuTitle>
                                                        Khác
                                                      </CCSelectMenuTitle>
                                                      <CCUl>
                                                        {commentHostInfo.userid ===
                                                        user.userid ? (
                                                          <>
                                                            <CCLi
                                                              onClick={() =>
                                                                handleOpenEditCmtContent(
                                                                  i
                                                                )
                                                              }
                                                            >
                                                              <EditComment />
                                                              <CCLiSpan>
                                                                Chỉnh sửa
                                                              </CCLiSpan>
                                                            </CCLi>
                                                            <CCLi
                                                              onClick={() =>
                                                                handleOpenConfirmBoxCmt(
                                                                  i,
                                                                  c.postcommentid
                                                                )
                                                              }
                                                            >
                                                              <NotVisible />
                                                              <CCLiSpan>
                                                                Xóa bình luận
                                                              </CCLiSpan>
                                                            </CCLi>
                                                          </>
                                                        ) : (
                                                          <CCLi>
                                                            <BlockUser />
                                                            <CCLiSpan>
                                                              Chặn người dùng
                                                            </CCLiSpan>
                                                          </CCLi>
                                                        )}
                                                      </CCUl>
                                                    </CCSelectMenu>
                                                  </CCAction>
                                                </CCOperation>
                                              </CCHeader>
                                              {editContent[i].isOn ? (
                                                <CommentReplyWrap
                                                  isAppear={editContent[i].isOn}
                                                >
                                                  <UserReplyBody
                                                    borderChange={
                                                      editContent[i].isFocused
                                                    }
                                                  >
                                                    <UserReplyTextArea
                                                      type="text"
                                                      maxLength="1000"
                                                      placeholder="Ex: Bài viết rất hay rất cảm xúc..."
                                                      value={
                                                        editContent[i].value
                                                      }
                                                      onChange={(e) =>
                                                        handleEditCmtValue(
                                                          i,
                                                          e.target.value
                                                        )
                                                      }
                                                      onBlur={() =>
                                                        handleIsEditCmtBlur(i)
                                                      }
                                                      onFocus={() =>
                                                        handleIsEditCmtFocused(
                                                          i
                                                        )
                                                      }
                                                    />
                                                    <UserReplyMaxCount>
                                                      {
                                                        editContent[i].value
                                                          .length
                                                      }
                                                      /1000
                                                    </UserReplyMaxCount>
                                                  </UserReplyBody>
                                                  <ReplyBoxFooter
                                                    style={{
                                                      marginBottom: "12px",
                                                    }}
                                                  >
                                                    <ReplyBoxToolBar>
                                                      <CommentAddReactIcon />
                                                      <CommentImageAddIcon />
                                                    </ReplyBoxToolBar>
                                                    <CommentButtonWrap>
                                                      <CancelEditCmtButton
                                                        onClick={() =>
                                                          handleCancelEditCmt(i)
                                                        }
                                                      >
                                                        Hủy
                                                      </CancelEditCmtButton>
                                                      <SendButton
                                                        onClick={() =>
                                                          handleSendEditCmt(
                                                            i,
                                                            c.postcommentid
                                                          )
                                                        }
                                                      >
                                                        Gửi
                                                      </SendButton>
                                                    </CommentButtonWrap>
                                                  </ReplyBoxFooter>
                                                </CommentReplyWrap>
                                              ) : (
                                                <>
                                                  <CCContent>
                                                    {c.content}
                                                  </CCContent>
                                                  {c.image.map(
                                                    (item, index) => (
                                                      <CommentImage
                                                        data-id={`cmtid-${i}-image-${index}`}
                                                        onClick={(e) =>
                                                          handlePreviewImage(
                                                            e,
                                                            item,
                                                            `cmtid-${i}-image-${index}`
                                                          )
                                                        }
                                                        src={item}
                                                        alt="cmt-imgs"
                                                      />
                                                    )
                                                  )}
                                                </>
                                              )}
                                              <RCOpBottom>
                                                <RCTime>
                                                  {displayCommentDate}
                                                </RCTime>
                                                <RCBottomRight>
                                                  <RCItem
                                                    onClick={() =>
                                                      handleReplyBoxOn(i)
                                                    }
                                                  >
                                                    <RCItemIconComment />
                                                    <RCItemSpan>
                                                      Trả lời
                                                    </RCItemSpan>
                                                  </RCItem>
                                                  <RCItem>
                                                    {hasLikeThisComment ? (
                                                      <RCItemIconLiked
                                                        onClick={() =>
                                                          handleUnlikeComment(
                                                            c.postcommentid
                                                          )
                                                        }
                                                      />
                                                    ) : (
                                                      <RCItemIconLike
                                                        onClick={() =>
                                                          handleLikeComment(
                                                            c.postcommentid
                                                          )
                                                        }
                                                      />
                                                    )}
                                                    <RCItemSpan>
                                                      {c.likeCount.length}
                                                    </RCItemSpan>
                                                  </RCItem>
                                                </RCBottomRight>
                                              </RCOpBottom>
                                              <CommentReplyWrap
                                                isAppear={
                                                  controlReplyBox[i].isOn
                                                }
                                              >
                                                <UserReplyBody
                                                  borderChange={
                                                    controlReplyBox[i].isFocused
                                                  }
                                                >
                                                  <UserReplyTextArea
                                                    type="text"
                                                    maxLength="200"
                                                    placeholder="Ex: Bài viết rất hay rất cảm xúc..."
                                                    value={
                                                      controlReplyBox[i].value
                                                    }
                                                    onChange={(e) =>
                                                      handleReplyBoxValue(
                                                        i,
                                                        e.target.value
                                                      )
                                                    }
                                                    onBlur={() =>
                                                      handleIsReplyBlur(i)
                                                    }
                                                    onFocus={() =>
                                                      handleIsReplyFocused(i)
                                                    }
                                                  />
                                                  <UserReplyMaxCount>
                                                    {
                                                      controlReplyBox[i].value
                                                        .length
                                                    }
                                                    /200
                                                  </UserReplyMaxCount>
                                                </UserReplyBody>
                                                <ReplyBoxFooter>
                                                  <ReplyBoxToolBar>
                                                    <CommentAddReactIcon />
                                                  </ReplyBoxToolBar>
                                                  <CommentButtonWrap>
                                                    <SendButton
                                                      onClick={() =>
                                                        handleSendReply(
                                                          i,
                                                          c.postcommentid,
                                                          controlReplyBox[i]
                                                            .value
                                                        )
                                                      }
                                                    >
                                                      Gửi
                                                    </SendButton>
                                                  </CommentButtonWrap>
                                                </ReplyBoxFooter>
                                              </CommentReplyWrap>
                                            </CommentCardContainer>
                                          </CommentPart>
                                          <ReplyListTitle>
                                            Toàn bộ trả lời
                                          </ReplyListTitle>
                                          <div className="reply-list">
                                            {currentCommentReplies.length !==
                                              0 &&
                                              currentCommentReplies.map(
                                                (r, iter) => {
                                                  const findReplyUserIndex =
                                                    users.findIndex(
                                                      (u) =>
                                                        u.userid === r.userid
                                                    );
                                                  const replyHostInfo =
                                                    users[findReplyUserIndex];
                                                  let replyHostAva = RaidenAva;
                                                  switch (
                                                    replyHostInfo.avatar
                                                  ) {
                                                    case "RaidenAva":
                                                      replyHostAva = RaidenAva;
                                                      break;
                                                    case "DoggoAva":
                                                      replyHostAva = DoggoAva;
                                                      break;
                                                    case "HutaoAva":
                                                      replyHostAva = HutaoAva;
                                                      break;
                                                    default:
                                                      replyHostAva = RaidenAva;
                                                      break;
                                                  }
                                                  let replyToUser;
                                                  if (r.replyhostid !== -1) {
                                                    replyToUser =
                                                      users[
                                                        users.findIndex(
                                                          (u) =>
                                                            u.userid ===
                                                            r.replyhostid
                                                        )
                                                      ];
                                                  }
                                                  const hasLikeThisReply =
                                                    r.likeCount.includes(
                                                      user.userid
                                                    );
                                                  let replyDateStr =
                                                    r.createdAt.substring(
                                                      0,
                                                      10
                                                    );
                                                  let replyDateArr =
                                                    replyDateStr.split("-");
                                                  let displayReplyDate = `${replyDateArr[2]}/${replyDateArr[1]}/${replyDateArr[0]}`;
                                                  return (
                                                    <div data-id={iter}>
                                                      <CommentPart>
                                                        <LinkRouter
                                                          to={
                                                            replyHostInfo.userid ===
                                                            user.userid
                                                              ? `/user/${replyHostInfo.userid}`
                                                              : `/otheruser/${replyHostInfo.userid}`
                                                          }
                                                        >
                                                          <div className="comment-card_left">
                                                            <CommentCardAvatar>
                                                              <CommentAvatar
                                                                src={
                                                                  replyHostAva
                                                                }
                                                                alt="comment-ava"
                                                              />
                                                            </CommentCardAvatar>
                                                          </div>
                                                        </LinkRouter>
                                                        <CommentCardContainer>
                                                          <CCHeader>
                                                            <ReplyCardAccount>
                                                              <ReplyCardRouter
                                                                to={
                                                                  replyHostInfo.userid ===
                                                                  user.userid
                                                                    ? `/user/${replyHostInfo.userid}`
                                                                    : `/otheruser/${replyHostInfo.userid}`
                                                                }
                                                              >
                                                                <RCRouterSpan>
                                                                  {
                                                                    replyHostInfo.name
                                                                  }
                                                                </RCRouterSpan>
                                                                {replyHostInfo.userid ===
                                                                  commentHostInfo.userid && (
                                                                  <CommentHostSpan>
                                                                    Tác giả
                                                                  </CommentHostSpan>
                                                                )}
                                                              </ReplyCardRouter>
                                                              <RCFloor>
                                                                <span>
                                                                  ID của người
                                                                  dùng&nbsp;:&nbsp;
                                                                  {
                                                                    replyHostInfo.userid
                                                                  }
                                                                </span>
                                                                <RCFloorTags></RCFloorTags>
                                                              </RCFloor>
                                                            </ReplyCardAccount>
                                                            <CCOperation>
                                                              <CCAction>
                                                                <CCActionIcon
                                                                  isSelected={
                                                                    commentMenuState[
                                                                      i
                                                                    ]
                                                                      .replyMenuState[
                                                                      iter
                                                                    ].state
                                                                  }
                                                                  isUnClickable={
                                                                    editContent[
                                                                      i
                                                                    ].replyBox[
                                                                      iter
                                                                    ].isOn
                                                                  }
                                                                  onClick={() =>
                                                                    handleCommentReplyMenu(
                                                                      i,
                                                                      iter
                                                                    )
                                                                  }
                                                                />
                                                                <CCSelectMenu
                                                                  isOn={
                                                                    commentMenuState[
                                                                      i
                                                                    ]
                                                                      .replyMenuState[
                                                                      iter
                                                                    ].state
                                                                  }
                                                                >
                                                                  <CCSelectMenuTitle>
                                                                    Khác
                                                                  </CCSelectMenuTitle>
                                                                  <CCUl>
                                                                    {replyHostInfo.userid ===
                                                                    user.userid ? (
                                                                      <>
                                                                        <CCLi
                                                                          onClick={() =>
                                                                            handleOpenEditReply(
                                                                              i,
                                                                              iter
                                                                            )
                                                                          }
                                                                        >
                                                                          <EditComment />
                                                                          <CCLiSpan>
                                                                            Chỉnh
                                                                            sửa
                                                                          </CCLiSpan>
                                                                        </CCLi>
                                                                        <CCLi
                                                                          onClick={() =>
                                                                            handleOpenConfirmBoxRep(
                                                                              i,
                                                                              iter,
                                                                              r.postreplyid
                                                                            )
                                                                          }
                                                                        >
                                                                          <NotVisible />
                                                                          <CCLiSpan>
                                                                            Xóa
                                                                            bình
                                                                            luận
                                                                          </CCLiSpan>
                                                                        </CCLi>
                                                                      </>
                                                                    ) : (
                                                                      <CCLi>
                                                                        <BlockUser />
                                                                        <CCLiSpan>
                                                                          Chặn
                                                                          người
                                                                          dùng
                                                                        </CCLiSpan>
                                                                      </CCLi>
                                                                    )}
                                                                  </CCUl>
                                                                </CCSelectMenu>
                                                              </CCAction>
                                                            </CCOperation>
                                                          </CCHeader>
                                                          {editContent[i]
                                                            .replyBox[iter]
                                                            .isOn ? (
                                                            <CommentReplyWrap
                                                              isAppear={
                                                                editContent[i]
                                                                  .replyBox[
                                                                  iter
                                                                ].isOn
                                                              }
                                                            >
                                                              <UserReplyBody
                                                                borderChange={
                                                                  editContent[i]
                                                                    .replyBox[
                                                                    iter
                                                                  ].isFocused
                                                                }
                                                              >
                                                                <UserReplyTextArea
                                                                  type="text"
                                                                  maxLength="200"
                                                                  placeholder="Ex: Bài viết rất hay rất cảm xúc..."
                                                                  value={
                                                                    editContent[
                                                                      i
                                                                    ].replyBox[
                                                                      iter
                                                                    ].value
                                                                  }
                                                                  onChange={(
                                                                    e
                                                                  ) =>
                                                                    handleEditCmtRepValue(
                                                                      i,
                                                                      iter,
                                                                      e.target
                                                                        .value
                                                                    )
                                                                  }
                                                                  onBlur={() =>
                                                                    handleIsEditCmtRepBlur(
                                                                      i,
                                                                      iter
                                                                    )
                                                                  }
                                                                  onFocus={() =>
                                                                    handleIsEditCmtRepFocused(
                                                                      i,
                                                                      iter
                                                                    )
                                                                  }
                                                                />
                                                                <UserReplyMaxCount>
                                                                  {
                                                                    editContent[
                                                                      i
                                                                    ].replyBox[
                                                                      iter
                                                                    ].value
                                                                      .length
                                                                  }
                                                                  /200
                                                                </UserReplyMaxCount>
                                                              </UserReplyBody>
                                                              <ReplyBoxFooter
                                                                style={{
                                                                  marginBottom:
                                                                    "12px",
                                                                }}
                                                              >
                                                                <ReplyBoxToolBar>
                                                                  <CommentAddReactIcon />
                                                                </ReplyBoxToolBar>
                                                                <CommentButtonWrap>
                                                                  <CancelEditCmtButton
                                                                    onClick={() =>
                                                                      handleCancelEditCmtRep(
                                                                        i,
                                                                        iter
                                                                      )
                                                                    }
                                                                  >
                                                                    Hủy
                                                                  </CancelEditCmtButton>
                                                                  <SendButton
                                                                    onClick={() =>
                                                                      handleSendEditCmtRep(
                                                                        i,
                                                                        iter,
                                                                        r.postreplyid
                                                                      )
                                                                    }
                                                                  >
                                                                    Gửi
                                                                  </SendButton>
                                                                </CommentButtonWrap>
                                                              </ReplyBoxFooter>
                                                            </CommentReplyWrap>
                                                          ) : (
                                                            <ReplyCardContent>
                                                              {r.replyhostid !==
                                                                -1 && (
                                                                <>
                                                                  <ReplyCardReplyTo>
                                                                    Trả lời
                                                                  </ReplyCardReplyTo>
                                                                  <RouterLinkAccount
                                                                    to={
                                                                      replyToUser.userid ===
                                                                      user.userid
                                                                        ? `/user/${user.userid}`
                                                                        : `/otheruser/${replyToUser.userid}`
                                                                    }
                                                                  >
                                                                    <LinkAccountTitleName>
                                                                      {
                                                                        replyToUser.name
                                                                      }
                                                                    </LinkAccountTitleName>
                                                                  </RouterLinkAccount>
                                                                  <ReplyColon>
                                                                    &nbsp;:&nbsp;
                                                                  </ReplyColon>
                                                                </>
                                                              )}
                                                              <ReplyContentWrap>
                                                                <p>
                                                                  {r.content}
                                                                </p>
                                                              </ReplyContentWrap>
                                                            </ReplyCardContent>
                                                          )}
                                                          <RCOpBottom>
                                                            <RCTime>
                                                              {displayReplyDate}
                                                            </RCTime>
                                                            <RCBottomRight>
                                                              <RCItem
                                                                onClick={() =>
                                                                  handleCommentReplyBoxOn(
                                                                    i,
                                                                    iter
                                                                  )
                                                                }
                                                              >
                                                                <RCItemIconComment />
                                                                <RCItemSpan>
                                                                  Trả lời
                                                                </RCItemSpan>
                                                              </RCItem>
                                                              <RCItem>
                                                                {hasLikeThisReply ? (
                                                                  <RCItemIconLiked
                                                                    onClick={() =>
                                                                      handleUnlikeReply(
                                                                        r.postreplyid
                                                                      )
                                                                    }
                                                                  />
                                                                ) : (
                                                                  <RCItemIconLike
                                                                    onClick={() =>
                                                                      handleLikeReply(
                                                                        r.postreplyid
                                                                      )
                                                                    }
                                                                  />
                                                                )}
                                                                <RCItemSpan>
                                                                  {
                                                                    r.likeCount
                                                                      .length
                                                                  }
                                                                </RCItemSpan>
                                                              </RCItem>
                                                            </RCBottomRight>
                                                          </RCOpBottom>
                                                          <CommentReplyWrap
                                                            isAppear={
                                                              controlReplyBox[i]
                                                                .replyBox[iter]
                                                                .isOn
                                                            }
                                                          >
                                                            <UserReplyBody
                                                              borderChange={
                                                                controlReplyBox[
                                                                  i
                                                                ].replyBox[iter]
                                                                  .isFocused
                                                              }
                                                            >
                                                              <UserReplyTextArea
                                                                type="text"
                                                                maxLength="200"
                                                                placeholder="Ex: Bài viết rất hay rất cảm xúc..."
                                                                value={
                                                                  controlReplyBox[
                                                                    i
                                                                  ].replyBox[
                                                                    iter
                                                                  ].value
                                                                }
                                                                onChange={(e) =>
                                                                  handleCmtReplyBoxValue(
                                                                    i,
                                                                    iter,
                                                                    e.target
                                                                      .value
                                                                  )
                                                                }
                                                                onBlur={() =>
                                                                  handleIsCmtReplyBlur(
                                                                    i,
                                                                    iter
                                                                  )
                                                                }
                                                                onFocus={() =>
                                                                  handleIsCmtReplyFocused(
                                                                    i,
                                                                    iter
                                                                  )
                                                                }
                                                              />
                                                              <UserReplyMaxCount>
                                                                {
                                                                  controlReplyBox[
                                                                    i
                                                                  ].replyBox[
                                                                    iter
                                                                  ].value.length
                                                                }
                                                                /200
                                                              </UserReplyMaxCount>
                                                            </UserReplyBody>
                                                            <ReplyBoxFooter>
                                                              <ReplyBoxToolBar>
                                                                <CommentAddReactIcon />
                                                              </ReplyBoxToolBar>
                                                              <CommentButtonWrap>
                                                                <SendButton
                                                                  onClick={() =>
                                                                    handleSendReply(
                                                                      i,
                                                                      c.postcommentid,
                                                                      controlReplyBox[
                                                                        i
                                                                      ]
                                                                        .replyBox[
                                                                        iter
                                                                      ].value,
                                                                      iter,
                                                                      replyHostInfo.userid
                                                                    )
                                                                  }
                                                                >
                                                                  Gửi
                                                                </SendButton>
                                                              </CommentButtonWrap>
                                                            </ReplyBoxFooter>
                                                          </CommentReplyWrap>
                                                        </CommentCardContainer>
                                                      </CommentPart>
                                                    </div>
                                                  );
                                                }
                                              )}
                                          </div>
                                          <ReplyListLoadmore>
                                            <LoadmoreNomore>
                                              Đã đến cuối
                                            </LoadmoreNomore>
                                          </ReplyListLoadmore>
                                        </ReplyDetailList>
                                      </div>
                                    </DialogBody>
                                  </DialogContent>
                                </DialogReplyWrap>
                              </DialogReply>
                            </>
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
        } else {
          body = (
            <LoadingContainer>
              <Loading src={Chilling} alt="loading-chilling" />
            </LoadingContainer>
          );
        }
      } else {
        body = (
          <LoadingContainer>
            <Loading src={Chilling} alt="loading-chilling" />
          </LoadingContainer>
        );
      }
    }
  }

  if (waifusLoading) {
    waifuSearchBar = <div style={{ width: "300px" }}></div>;
    left = (
      <>
        <LeftSideNavLoading>
          <LeftSideNavLoadingIcon src={LoadingNav} alt="loading-nav" />
          <LeftSideNavLoadingDiv>Đang tải</LeftSideNavLoadingDiv>
        </LeftSideNavLoading>
      </>
    );
  } else if (waifus.length === 0) {
    waifuSearchBar = <div style={{ width: "300px" }}></div>;
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
      </LeftSideNav>
    );
  } else {
    waifuSearchBar = (
      <SearchBarContainer>
        <SearchBarIcon />
        <SearchBar
          type="text"
          placeholder="Nhập tên waifu muốn tìm"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          autoComplete="off"
          onClick={() => setIsComponentVisible(true)}
          ref={ref}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <WaifuSearchResult
          isDisplay={isComponentVisible}
          onClick={() => setIsComponentVisible(true)}
        >
          {searchValue !== "" ? (
            <AutoCompleteList isDisplay={isComponentVisible}>
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
              <PostDetailHeader>
                <PostHeaderMask isFixed={visible}>
                  <PostHeaderWrap isLined={visible}>
                    <PostHeaderContent isLined={visible}>
                      <PostHeaderMain>
                        <PostHeaderLeft>
                          <NavBackButton onClick={() => navigate("/postlist")}>
                            <ArrowBack />
                          </NavBackButton>
                          <PostHeaderLeftH1>Chi tiết bài viết</PostHeaderLeftH1>
                        </PostHeaderLeft>
                      </PostHeaderMain>
                    </PostHeaderContent>
                  </PostHeaderWrap>
                </PostHeaderMask>
              </PostDetailHeader>
              {body}
            </MainPage>
            <div className="page-holder"></div>
            <RightContainer>
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
          <MessageBoxContent>{confirmMsg}</MessageBoxContent>
          <MessageBoxFooter>
            <MessageBoxButton onClick={handleCloseConfirmBox} notClose={false}>
              <span>Hủy</span>
            </MessageBoxButton>
            <MessageBoxButton onClick={handleConfirmBox} notClose={true}>
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
