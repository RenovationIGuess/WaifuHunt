import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import {
  Container,
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
  StickySection,
  LeftSideNav,
  AvaBgSection,
  UserInfo,
  Name,
  UserBigAva,
  ProfileName,
  Contact,
  SignTitle,
  Sign,
  Counter,
  CounterTitle,
  CTNum,
  CTText,
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
  MailCardLast,
  EmailAdd,
  EmailOwner,
  PaiFace,
  CopyRight,
  ContactFooter,
  List,
  ListWrap,
  ListHeader,
  ToTopButton,
  AvaEditContainer,
  EditButton,
  EditIconWrap,
  EditIcon,
  ImgSelect,
  AvaToChoose,
  BgToChoose,
  Modal,
  OkBtn,
  CancelBtn,
  ModalFooter,
  SelectedContainer,
  TitleModal,
  PostEntryTitle,
  PostWrap,
  PostEntryInfo,
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
  ArticleCardContent,
  ArticleCardPreview,
  ArticleCardImg,
  ArticleMark,
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
  InfoLoadingImg,
  AvaBgSectionLoading,
  AvaBgLoadingDiv,
  FollowButton,
  FollowedIcon,
  FollowedButton,
  NewImgIconWrap,
  NewImgIcon,
  NewVidIconWrap,
  NewVidIcon,
  UserSignText,
  UserID,
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
  AccountContentRight,
  AccountCenter,
  AccountCenterHeaderWrap,
  AccountCenterHeaderTop,
  AccountCenterHeaderAvatar,
  AccountAva,
  AccountAvaFrame,
  AccountHeaderAvaTooltip,
  AccountHeaderButton,
  AccountCenterUserInfo,
  AccountTitle,
  AccountUID,
  UserIDIcon,
  IDTitle,
  UserSignIcon,
  AccountData,
  AccountDataItem,
  UserActivities,
  UAHeader,
  UATitle,
  UARecord,
  UAItem,
  UAItemDesc,
  UAItemValue,
  UserCardFollow,
  UserCardButton,
  CheckedFollow,
  PlusFollow,
  PageHeader,
  PageHeaderFixed,
  PageHeaderWrap,
  PageHeaderContentLine,
  PageHeaderMain,
  PageHeaderLeft,
  NavBackButton,
  ArrowBack,
  PageHeaderTitle,
  PageHeaderRight,
  ArticleType,
  ArticleTitleSpan,
  ArticleCardTitle,
} from "./pfelement";

import { Loading, LoadingWrap } from "../Loading";

import Chilling from "../../videos/chillin.gif";
import LoadingNav from "../../videos/loadingNav.gif";
import NoPost from "../../videos/loadingPost.gif";
import WebLogo from "../../images/logoweb.png";
import { BsChatLeftText } from "react-icons/bs";
import LeftImage from "../../images/logoroll.svg";
import Paimoe from "../../images/paiface.png";

import ToTopBtn from "../../images/arrow/RArrow.png";
import EditBtn from "../../images/editbtn.png";

import { RiLogoutBoxLine } from "react-icons/ri";
import { MdKeyboardArrowRight, MdErrorOutline } from "react-icons/md";
import { GrUserSettings } from "react-icons/gr";
/* import Footer from "../footer"; */
import { Link as LinkRouter } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll/modules";
import { AuthContext } from "../../contexts/AuthContext";
import { Toast } from "../toastMsg";

import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowBack,
} from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";

import "../waifudb/waifulist.scss";
import "./profile.scss";
import "./title.scss";
import "../imgprev.scss"

import HutaoAva from "../../images/hutaostick.png";
import RaidenAva from "../../images/raidenfbi.png";
import DoggoAva from "../../images/realdoggo.png";
import AvaFrame from "../../images/AvaFrame.png";
import Slime from "../../images/slime.jpg";

import RollSome from "../../videos/rollsome.gif";
import Kazubu from "../../videos/kazubu.gif";
import Lumine from "../../videos/Lumine.gif";
import LoadingInfo from "../../videos/GanyuKeqing.gif";

import LiyueBg from "../../images/liyue.jpg";
import MondoBg from "../../images/mondo.jpg";
import InazumaBg from "../../images/inazuma.jpg";
import {
  AddModal,
  AddTitle,
  ArrowFirstMile,
  ArrowSecondMile,
  ArrowThirdMile,
  AvaArrow,
  AvaHolder,
  CenterEmpty,
  CurrentProgress,
  CurrentProgressTitle,
  EmptyImg,
  EmptyText,
  FirstMilestone,
  InputName,
  ListOfWaifus,
  ModalButton,
  ModalHeader,
  ModalTitle,
  MyCurrentProgress,
  PaginateWrap,
  ProgressBar,
  ProgressImgBg,
  ProgressImgContainer,
  RgbLine,
  SecondMilestone,
  TableData,
  TableDisplay,
  TableHeader,
  TableRow,
  TableRowFirst,
  ThirdMilestone,
} from "../waifudb/waifuElement";

import { ToastMsg } from "../toastMsg";

import { TIME_STORAGE, ROLL_STORAGE } from "../../contexts/constants";

import { WaifuContext } from "../../contexts/WaifuContext";
import { PostContext } from "../../contexts/PostContext";
import { PostCommentContext } from "../../contexts/PostCommentContext";
/* import { UserContext } from "../../contexts/UsersContext"; */

import Timer from "../timer";
import {
  CloseButton,
  ImageBg,
  ImageContainer,
  ImageShow,
  PreviewContainer,
  PreviewCounter,
  PreviewImgHolder,
  PreviewItem,
  PreviewTopBar,
  PreviewUi,
  PreviewWrap,
  PreviewZoomWrap,
} from "../imagePreview";
import {
  ArticleCardImageItem,
  ArticleCardImagePreview,
  ArticleCardMark,
  ArticleImageNum,
  ArticleImageNumIcon,
  NoPostImg,
  NoPosts,
  PostNewArrow,
} from "../postList/postListEle";
import {
  LoadingContainer,
  MainPage,
  RightContainer,
  RightPart,
  RootPageContainer,
  RootPageLayout,
  SideMenu,
  StickyNavFixed,
  StickyNavLeft,
  StickyNavLeftHolder,
  StickyNavScroll,
} from "../createpost/createPostElement";
import {
  ArticleCardVideo,
  CCActionIcon,
  YoutubePlayer,
} from "../postDetail/postDetailEle";
import useComponentVisible from "../../utils/useComponentVisible";
import {
  AutoCompleteItem,
  AutoCompleteList,
  SBPHList,
  SBPHListItem,
  SBPHTitle,
  SearchBarPlaceHolder,
} from "../inputBoxElement";
import ReactPlayer from "react-player";

const OtherUserProfile = () => {
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
  } = useContext(PostContext);

  const {
    postCommentState: { comments, commentsLoading },
    getAllPostComments,
  } = useContext(PostCommentContext);

  /* const {
    userState: { users, usersLoading },
  } = useContext(UserContext); */

  let body;
  let postPart;
  let infoSection;
  let left;
  let titleModal;
  let waifuSearchBar;
  let numberOfTopTier = 0;
  let userActivities;
  const userParamId = useParams();
  const userParamIdInt = parseInt(userParamId.id);
  let userParam;

  const navigate = useNavigate();

  // Get the current time for the first render
  /* const [currentTime, setCurrentTime] = useState(new Date().getTime()); */

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  // Get the current time for the first render
  const [currentTime, setCurrentTime] = useState(new Date().getTime());
  const [tempUserDisp, setTempUserDisp] = useState(false);

  // Controlling preview post image
  const [dimensions, setDimensions] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  })
  const [isPreviewed, setIsPreviewed] = useState(false);
  const [currentPreviewImg, setCurrentPreviewImg] = useState(InazumaBg);
  const [scaleValue, setScaleValue] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);
  const [imgTransformX, setImgTransformX] = useState(0);
  const [imgTransformY, setImgTransformY] = useState(0);
  const [currentSelectElement, setCurrentSelectElement] = useState(null);

  const [active, setActive] = useState(true);
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [userAva, setUserAva] = useState(RaidenAva);
  const [avaModalVisible, setAvaModalVisible] = useState(false);
  const [bgModalVisible, setBgModalVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [openTitle, setOpenTitle] = useState(false);
  const [username, setUsername] = useState("");
  const [usersign, setUsersign] = useState("");

  // Control delay animation for title modal
  const [delayState, setDelayState] = useState(false);

  // Ava handler
  const [AvaRaiden, setAvaRaiden] = useState(false);
  const [AvaHutao, setAvaHutao] = useState(false);
  const [AvaDoggo, setAvaDoggo] = useState(false);

  // Background handler
  const [BgIna, setBgIna] = useState(false);
  const [BgLiyue, setBgLiyue] = useState(false);
  const [BgMon, setBgMon] = useState(false);

  // Modal message
  const [message, setMessage] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("");

  // Controlling post menu
  const [isSelectMenuOn, setIsSelectMenuOn] = useState(false);

  // Controlling NavPostDialog
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Used for searching
  const [searchValue, setSearchValue] = useState("");

  // Timeout
  const initTimer = 3600000; //in miliseconds, 3600000 = 1 hour

  // Control SelectedMenu
  const [postSelectState, setPostSelectState] = useState([]);

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

  // Used for pagination
  const [currentOwnPage, setCurrentOwnPage] = useState(0);
  const [currentWishPage, setCurrentWishPage] = useState(0);
  const PER_PAGE = 9;
  const offsetOwn = currentOwnPage * PER_PAGE;
  const offsetWish = currentWishPage * PER_PAGE;

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      })
    }, 1000);

    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    }
  })

  useEffect(() => {
    if (isPreviewed) {
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
            imgWidth = Math.floor(imgNaturalWidth * imgHeight / imgNaturalHeight);
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
            imgHeight = Math.floor(imgNaturalHeight * imgWidth / imgNaturalWidth);
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

      setScaleValue(scaleVal);
      /* setCurrentPreviewImg(previewImg); */
      setImageHeight(imgHeight);
      setImageWidth(imgWidth);
      setImgTransformX(transformX);
      setImgTransformY(transformY);
    }
  }, [dimensions]);

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

  useEffect(() => {
    async function fetchData() {
      await loadAllUser();
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      await getPosts();
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
    document.title = "Thông tin người dùng";
  }, []);

  const handlePageOwnClick = ({ selected: selectedPage }) => {
    setCurrentOwnPage(selectedPage);
  };

  const handlePageWishClick = ({ selected: selectedPage }) => {
    setCurrentWishPage(selectedPage);
  };

  const handleOpenTitle = () => {
    setOpenTitle(true);
    setTimeout(() => setDelayState(true), 500);
  };

  const handleSelectMenu = (index) => {
    postSelectState[index] = {
      ...postSelectState[index],
      state: !postSelectState[index].state,
    };
    /* postSelectState[index].state = !postSelectState[index].state; */
    for (let i = 0; i < postSelectState.length; ++i) {
      if (i !== index) {
        postSelectState[i] = {
          ...postSelectState[i],
          state: false,
        };
        /* commentMenuState[i].state = false; */
      }
    }
    // use to cause rerender
    setIsSelectMenuOn(!isSelectMenuOn);
  };

  const scrollBtn = () => {
    if (window.scrollY >= 80) {
      setVisible(true);
      if (window.scrollY >= 240) {
        setTempUserDisp(true);
      } else setTempUserDisp(false);
    } else {
      setTempUserDisp(false);
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollBtn);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const handleActive = () => {
    setActive(!active);
  };

  const handleOpen = () => {
    setOpen(!open);
    setIsDialogOpen(false);
  };

  const handleDialogOpen = () => {
    setOpen(false);
    setIsDialogOpen(!isDialogOpen);
  };

  const handleTitleCancel = () => {
    setOpenTitle(false);
    setDelayState(false);
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

  const handlePreviewImage = (event, previewImg, dataId) => {
    event.preventDefault();
    event.stopPropagation();

    let pswp = document.querySelector(".pswp");
    pswp.classList.add("pswp-animate-opacity", "pswp-open");
    pswp.style.position = 'fixed';
    setTimeout(() => {
      pswp.style.opacity = 1;
    }, 1);
    let pswpBg = document.querySelector('.pswp_bg');
    pswpBg.style.opacity = '0.8';
    setTimeout(() => {
      /* pswpBg.style.opacity = '0.8'; */
      pswpBg.classList.add('pswp-animate-in');
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
    const pswpZoomWrap = document.querySelector('.pswp_zoom-wrap');
    pswpZoomWrap.classList.add('pswp-animate-in');
    const imgDivRect = imgDiv.getBoundingClientRect();
    /* console.log(imgDivRect.left + window.scrollX) */
    console.log(imgDivRect.left)
    /* console.log(imgDivRect.top + window.scrollY) */
    console.log(imgDivRect.top)
    console.log(imgDiv.clientWidth);
    setImgTransformX(imgDivRect.left)
    setImgTransformY(imgDivRect.top);
    setScaleValue(imgDiv.clientWidth / maxWidth);

    if (widthRatio > 1 && heightRatio > 1) {
      if (widthRatio > heightRatio) {
        imgHeight = Math.floor(imgNaturalHeight / widthRatio);
        if (imgHeight > maxHeight - 88) {
          imgHeight = maxHeight - 88;
          imgWidth = Math.floor(imgNaturalWidth * imgHeight / imgNaturalHeight);
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
          imgHeight = Math.floor(imgNaturalHeight * imgWidth / imgNaturalWidth);
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
      pswpZoomWrap.classList.remove('pswp-animate-in');
    }, 1);
  };

  const handleCancelPreviewImage = () => {
    let pswp = document.querySelector(".pswp");
    pswp.style.opacity = 0;
    setTimeout(() => {
      pswp.classList.remove("pswp-animate-opacity", "pswp-open");
      pswp.removeAttribute('style');
    }, 333);
    let pswpBg = document.querySelector('.pswp_bg');
    /* pswpBg.style.opacity = '0'; */
    setTimeout(() => {
      pswpBg.classList.remove('pswp-animate-in');
      pswpBg.removeAttribute('style');
    }, 333);
    setIsPreviewed(false);
    const currentSelectElementRect = currentSelectElement.getBoundingClientRect();
    setImgTransformX(currentSelectElementRect.left);
    setImgTransformY(currentSelectElementRect.top);
    setScaleValue(currentSelectElement.clientWidth / dimensions.width);
  }

  if (usersLoading) {
    // Can sua lai
    infoSection = (
      <AvaBgSection>
        <div>
          <LeftSideNavLoading>
            <InfoLoadingImg src={LoadingInfo} alt="loading-nav" />
            <LeftSideNavLoadingDiv>Đang tải thông tin</LeftSideNavLoadingDiv>
          </LeftSideNavLoading>
        </div>
      </AvaBgSection>
    );
    left = (
      <>
        <LeftSideNavLoading>
          <LeftSideNavLoadingIcon src={LoadingNav} alt="loading-nav" />
          <LeftSideNavLoadingDiv>Đang tải</LeftSideNavLoadingDiv>
        </LeftSideNavLoading>
      </>
    );
    body = (
      <LoadingWrap>
        <Loading src={Chilling} alt="loading-chilling" />
      </LoadingWrap>
    );
    postPart = (
      <>
        <PostsContainer>
          <LoadingContainer>
            <Loading src={Lumine} alt="loading-chilling" />
          </LoadingContainer>
        </PostsContainer>
      </>
    );
  } else {
    const userIndex = users.findIndex((u) => u.userid === userParamIdInt);
    if (userIndex === -1) {
      navigate("/404");
    } else {
      userParam = users[userIndex];
      if (userParam.userid === user.userid) {
        navigate(`/user/${user.userid}`);
      } else {
        const pageOwnCount = Math.ceil(userParam.waifulist.length / PER_PAGE);
        const pageWishCount = Math.ceil(userParam.wishlist.length / PER_PAGE);

        let displayBg = InazumaBg;
        let displayAva = RaidenAva;
        switch (userParam.avatar) {
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
        switch (userParam.background) {
          case "InazumaBg":
            displayBg = InazumaBg;
            break;
          case "MondoBg":
            displayBg = MondoBg;
            break;
          case "LiyueBg":
            displayBg = LiyueBg;
            break;
          default:
            displayBg = InazumaBg;
            break;
        }

        const hasFollowedIndex = user.follow.findIndex(
          (f) => f === userParam.userid
        );
        const isFollowed = hasFollowedIndex === -1 ? false : true;

        if (postsLoading) {
          postPart = (
            <>
              <PostsContainer>
                <LoadingContainer>
                  <Loading src={Lumine} alt="loading-chilling" />
                </LoadingContainer>
              </PostsContainer>
            </>
          );
        } else if (posts.length === 0) {
          postPart = (
            <>
              <PostsContainer>
                <NoPosts>
                  <NoPostImg src={NoPost} alt="no-posts" />
                  <EmptyText>Chưa có bài viết nào được tạo</EmptyText>
                </NoPosts>
              </PostsContainer>
            </>
          );
        } else {
          const myPost = posts.filter((post) => {
            return post.postAuthor === userParam._id;
          });

          const likesCounter = myPost.reduce((value, item) => {
            const likes = item.postLikes.filter(
              (p) => p !== userParam.userid
            ).length;
            return value + likes;
          }, 0);

          const userCreatedTime = new Date(userParam.createdAt).getTime();
          let seconds = Math.round(
            Math.abs(currentTime - userCreatedTime) / 1000
          );
          let days = Math.floor(seconds / 86400);

          if (myPost.length === 0) {
            postPart = (
              <>
                <PostsContainer>
                  <NoPosts>
                    <NoPostImg src={NoPost} alt="no-posts" />
                    <EmptyText>Chưa có bài viết nào được tạo</EmptyText>
                  </NoPosts>
                </PostsContainer>
              </>
            );
          } else {
            if (postSelectState.length === 0) {
              myPost.map((p) =>
                postSelectState.push({
                  postid: p.postid,
                  state: false,
                })
              );
            }
            if (!commentsLoading) {
              postPart = (
                <>
                  {myPost.map((p, i) => {
                    const LikedPostIndex = p.postLikes.findIndex(
                      (u) => u === user.userid
                    );
                    const currentPostComments = comments.filter(
                      (c) => c.postid === p.postid
                    );
                    const hasLiked = LikedPostIndex !== -1 ? true : false;
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
                    let dateStr = p.createdAt.substring(0, 10);
                    let dateArr = dateStr.split("-");
                    let displayPostedDate = `${dateArr[2]}/${dateArr[1]}/${dateArr[0]}`;
                    return (
                      <>
                        <PostsContainer key={p.postid}>
                          <CardHeader>
                            <CardUserInfo>
                              <CardArticle>
                                <PostAva to={`/otheruser/${userParam.userid}`}>
                                  <PostAvaImg
                                    src={displayAva}
                                    alt="user-post-ava"
                                  />
                                </PostAva>
                                <PostCardInfo>
                                  <PostCardName
                                    to={`/otheruser/${userParam.userid}`}
                                  >
                                    {userParam.name}
                                  </PostCardName>
                                  <ArticleCardInfo>
                                    {displayPostedDate}
                                  </ArticleCardInfo>
                                </PostCardInfo>
                              </CardArticle>
                            </CardUserInfo>
                            {/* <ArticleCardAction>
                              <CCActionIcon
                                onClick={() => handleSelectMenu(i)}
                                isSelected={postSelectState[i].state}
                              />
                              <PostSelectMenu isActive={postSelectState[i].state}>
                                <SelectMenuTitle>Khác</SelectMenuTitle>
                                <SelectMenuList>
                                  <SelectMenuItem>
                                    <EditPostIcon src={EditBtn} alt="edit-post" />
                                    <SelectMenuItemSpan>
                                      Chỉnh sửa bài viết
                                    </SelectMenuItemSpan>
                                  </SelectMenuItem>
                                  <SelectMenuItem>
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
                            </ArticleCardAction> */}
                          </CardHeader>
                          {/* <PostRouter to={`/posts/${p.postid}`}>
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
                          </PostRouter> */}
                          <PostRouter to={`/posts/${p.postid}`}>
                            <ArticleCardTitle>
                              <ArticleType></ArticleType>
                              <ArticleTitleSpan>{p.postTitle}</ArticleTitleSpan>
                            </ArticleCardTitle>
                            {/* <ArticleCardTitle>{p.postTitle}</ArticleCardTitle> */}
                            <ArticleCardContent>
                              {p.postContent}
                            </ArticleCardContent>
                            {p.type === "picture" ? (
                              <ArticleCardImagePreview>
                                {p.postImage.map((item, index) => {
                                  if (index < 2) {
                                    return (
                                      <ArticleCardImageItem
                                        onClick={(e) => handlePreviewImage(e, item, `postid-${i}-image-${index}`)}
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
                                        onClick={(e) => handlePreviewImage(e, item, `postid-${i}-image-${index}`)}
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
                      </>
                    );
                  })}
                </>
              );
            }
          }

          const userWhoFollowed = users.reduce((value, item) => {
            const hadFollowed = item.follow.includes(userParam.userid);
            if (hadFollowed) {
              return value + 1;
            } else return value;
          }, 0);
          userActivities = (
            <UserActivities>
              <UAHeader>
                <UATitle>Hoạt động người dùng</UATitle>
              </UAHeader>
              <UARecord>
                <UAItem>
                  <UAItemDesc>Số ngày hoạt động</UAItemDesc>
                  <UAItemValue>{days}</UAItemValue>
                </UAItem>
                <UAItem>
                  <UAItemDesc>Bài viết</UAItemDesc>
                  <UAItemValue>{myPost.length}</UAItemValue>
                </UAItem>
                <UAItem>
                  <UAItemDesc>Theo dõi</UAItemDesc>
                  <UAItemValue>{userParam.follow.length}</UAItemValue>
                </UAItem>
                <UAItem>
                  <UAItemDesc>Người theo dõi</UAItemDesc>
                  <UAItemValue>{userWhoFollowed}</UAItemValue>
                </UAItem>
                <UAItem>
                  <UAItemDesc>Được thích</UAItemDesc>
                  <UAItemValue>{likesCounter}</UAItemValue>
                </UAItem>
              </UARecord>
            </UserActivities>
          );
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
          body = (
            <LoadingWrap>
              <Loading src={Chilling} alt="loading-chilling" />
            </LoadingWrap>
          );
          infoSection = (
            <AvaBgSectionLoading>
              <InfoLoadingImg src={LoadingInfo} alt="loading-nav" />
              <AvaBgLoadingDiv>Đang tải thông tin...</AvaBgLoadingDiv>
            </AvaBgSectionLoading>
          );
        } else if (waifus.length === 0) {
          waifuSearchBar = <div style={{ width: "300px" }}></div>;

          infoSection = (
            <div className="account-center-info">
              <AccountCenterUser isShown={tempUserDisp}>
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
                                <AccountLeftAvaFrameImg
                                  src={AvaFrame}
                                  alt="ava-frame"
                                />
                              </AccountLeftAvaCard>
                            </AccountLeftAva>
                            <AccountLeftCardInfo>
                              <AccountLeftCardName>
                                <AccountLeftLink>
                                  <AccountLeftLinkName>
                                    {userParam.name}
                                  </AccountLeftLinkName>
                                </AccountLeftLink>
                              </AccountLeftCardName>
                            </AccountLeftCardInfo>
                            <UserCardFollow>
                              <UserCardButton
                                isFollowed={isFollowed}
                                onClick={() =>
                                  isFollowed
                                    ? handleUnfollowUser(userParam.userid)
                                    : handleFollowUser(userParam.userid)
                                }
                              >
                                {isFollowed ? (
                                  <CheckedFollow />
                                ) : (
                                  <PlusFollow />
                                )}
                              </UserCardButton>
                            </UserCardFollow>
                          </AccountLeftCard>
                        </AccountContentLeft>
                        <AccountContentRight></AccountContentRight>
                      </AccountContentMain>
                    </AccountContent>
                  </AccountWrap>
                </AccountMask>
              </AccountCenterUser>
              <AccountCenter
                /* data-id={`user-background`}
                onClick={(e) =>
                  handlePreviewImage(
                    e,
                    displayBg,
                    `user-background`
                  )
                } */
                bgImage={displayBg}
              >
                <AccountCenterHeaderWrap>
                  <AccountCenterHeaderTop>
                    <AccountCenterHeaderAvatar>
                      <AccountAva>
                        <AccountAvaImage src={displayAva} alt="user-ava" />
                        <AccountAvaFrame src={AvaFrame} alt="ava-frame" />
                      </AccountAva>
                    </AccountCenterHeaderAvatar>
                    <AccountHeaderButton>
                      {isFollowed ? (
                        <FollowedButton
                          onClick={() => handleUnfollowUser(userParam.userid)}
                        >
                          <FollowedIcon />
                        </FollowedButton>
                      ) : (
                        <EditButton
                          onClick={() => handleFollowUser(userParam.userid)}
                        >
                          Theo dõi
                        </EditButton>
                      )}
                    </AccountHeaderButton>
                  </AccountCenterHeaderTop>
                  <AccountCenterUserInfo>
                    <div>
                      <AccountTitle>
                        <ProfileName>{userParam.name}</ProfileName>
                        {/* {userParam.title.map((item) => (
                          <span
                            key={item.titleName}
                            onClick={handleOpenTitle}
                            className={item.className}
                          >
                            {item.titleName}
                          </span>
                        ))} */}
                        {userParam.title[userParam.title.length - 1] && (
                          <span
                            onClick={handleOpenTitle}
                            className={
                              userParam.title[userParam.title.length - 1]
                                .className
                            }
                          >
                            {
                              userParam.title[userParam.title.length - 1]
                                .titleName
                            }
                          </span>
                        )}
                      </AccountTitle>
                    </div>
                    <AccountUID>
                      <UserIDIcon />
                      <IDTitle>ID người dùng: {userParam.userid}</IDTitle>
                    </AccountUID>
                    <AccountUID>
                      <UserSignIcon />
                      <SignTitle>{userParam.sign}</SignTitle>
                    </AccountUID>
                  </AccountCenterUserInfo>
                  <AccountData>
                    <AccountDataItem>
                      <CTNum>{userParam.roll_count}</CTNum>
                      <CTText>Số lần roll</CTText>
                    </AccountDataItem>
                    <AccountDataItem>
                      <CTNum>{userParam.waifulist.length}</CTNum>
                      <CTText>Số waifu sở hữu</CTText>
                    </AccountDataItem>
                    <AccountDataItem style={{ margin: 0 }}>
                      <CTNum>{numberOfTopTier}</CTNum>
                      <CTText>Số waifu top tier</CTText>
                    </AccountDataItem>
                  </AccountData>
                </AccountCenterHeaderWrap>
              </AccountCenter>
            </div>
          );

          left = (
            <>
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
            </>
          );

          active
            ? (body = (
                <>
                  <CenterEmpty>
                    <EmptyImg src={RollSome} alt="waifu-empty" />
                    <EmptyText>Bạn chưa có waifu nào</EmptyText>
                  </CenterEmpty>
                </>
              ))
            : (body = (
                <>
                  <CenterEmpty>
                    <EmptyImg src={Kazubu} alt="wishlist-empty" />
                    <EmptyText>Bạn chưa cho waifu nào vào Wishlist</EmptyText>
                  </CenterEmpty>
                </>
              ));
        } else {
          waifus.sort((a, b) => {
            return b.user.length - a.user.length;
          });

          for (let waifuId of userParam.waifulist) {
            const searchIndex = waifus.findIndex(
              (item) => item._id === waifuId
            );
            if (searchIndex >= 0 && searchIndex <= 9) {
              numberOfTopTier = numberOfTopTier + 1;
            }
          }

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

          infoSection = (
            <div className="account-center-info">
              <AccountCenterUser isShown={tempUserDisp}>
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
                                <AccountLeftAvaFrameImg
                                  src={AvaFrame}
                                  alt="ava-frame"
                                />
                              </AccountLeftAvaCard>
                            </AccountLeftAva>
                            <AccountLeftCardInfo>
                              <AccountLeftCardName>
                                <AccountLeftLink>
                                  <AccountLeftLinkName>
                                    {userParam.name}
                                  </AccountLeftLinkName>
                                </AccountLeftLink>
                              </AccountLeftCardName>
                            </AccountLeftCardInfo>
                            <UserCardFollow>
                              <UserCardButton
                                isFollowed={isFollowed}
                                onClick={() =>
                                  isFollowed
                                    ? handleUnfollowUser(userParam.userid)
                                    : handleFollowUser(userParam.userid)
                                }
                              >
                                {isFollowed ? (
                                  <CheckedFollow />
                                ) : (
                                  <PlusFollow />
                                )}
                              </UserCardButton>
                            </UserCardFollow>
                          </AccountLeftCard>
                        </AccountContentLeft>
                        <AccountContentRight></AccountContentRight>
                      </AccountContentMain>
                    </AccountContent>
                  </AccountWrap>
                </AccountMask>
              </AccountCenterUser>
              <AccountCenter
                /* data-id={`user-background`}
                onClick={(e) =>
                  handlePreviewImage(
                    e,
                    displayBg,
                    `user-background`
                  )
                } */
                bgImage={displayBg}
              >
                <AccountCenterHeaderWrap>
                  <AccountCenterHeaderTop>
                    <AccountCenterHeaderAvatar>
                      <AccountAva>
                        <AccountAvaImage src={displayAva} alt="user-ava" />
                        <AccountAvaFrame src={AvaFrame} alt="ava-frame" />
                      </AccountAva>
                    </AccountCenterHeaderAvatar>
                    <AccountHeaderButton>
                      {isFollowed ? (
                        <FollowedButton
                          onClick={() => handleUnfollowUser(userParam.userid)}
                        >
                          <FollowedIcon />
                        </FollowedButton>
                      ) : (
                        <EditButton
                          onClick={() => handleFollowUser(userParam.userid)}
                        >
                          Theo dõi
                        </EditButton>
                      )}
                    </AccountHeaderButton>
                  </AccountCenterHeaderTop>
                  <AccountCenterUserInfo>
                    <div>
                      <AccountTitle>
                        <ProfileName>{userParam.name}</ProfileName>
                        {/* {userParam.title.map((item) => (
                          <span
                            key={item.titleName}
                            onClick={handleOpenTitle}
                            className={item.className}
                          >
                            {item.titleName}
                          </span>
                        ))} */}
                        <span
                          onClick={handleOpenTitle}
                          className={
                            userParam.title[userParam.title.length - 1]
                              .className
                          }
                        >
                          {
                            userParam.title[userParam.title.length - 1]
                              .titleName
                          }
                        </span>
                      </AccountTitle>
                    </div>
                    <AccountUID>
                      <UserIDIcon />
                      <IDTitle>ID người dùng: {userParam.userid}</IDTitle>
                    </AccountUID>
                    <AccountUID>
                      <UserSignIcon />
                      <SignTitle>{userParam.sign}</SignTitle>
                    </AccountUID>
                  </AccountCenterUserInfo>
                  <AccountData>
                    <AccountDataItem>
                      <CTNum>{userParam.roll_count}</CTNum>
                      <CTText>Số lần roll</CTText>
                    </AccountDataItem>
                    <AccountDataItem>
                      <CTNum>{userParam.waifulist.length}</CTNum>
                      <CTText>Số waifu sở hữu</CTText>
                    </AccountDataItem>
                    <AccountDataItem style={{ margin: 0 }}>
                      <CTNum>{numberOfTopTier}</CTNum>
                      <CTText>Số waifu top tier</CTText>
                    </AccountDataItem>
                  </AccountData>
                </AccountCenterHeaderWrap>
              </AccountCenter>
            </div>
          );

          active
            ? (body = (
                <>
                  {userParam.waifulist.length !== 0 ? (
                    <>
                      <ListOfWaifus>
                        {userParam.waifulist
                          .slice(offsetOwn, offsetOwn + PER_PAGE)
                          .map((waifuId) => {
                            const searchIndex = waifus.findIndex(
                              (item) => item._id === waifuId
                            );
                            const waifu = waifus[searchIndex];
                            return (
                              <LinkRouter
                                to={`/waifudb/${waifu.waifuid}`}
                                key={waifu.waifuid}
                              >
                                <div className="container">
                                  <img
                                    src={waifu.image}
                                    alt="Avatar"
                                    className="image"
                                  />
                                  <div className="overlay">
                                    <img
                                      src={waifu.sourceimg}
                                      alt="logo"
                                      className="src-image"
                                    />
                                    <p className="text">{waifu.name}</p>
                                    <p className="rank-most-owned">
                                      #{searchIndex + 1}
                                    </p>
                                    <p className="rank-most-owned-content">
                                      Most owned Waifu
                                    </p>
                                  </div>
                                </div>
                              </LinkRouter>
                            );
                          })}
                      </ListOfWaifus>
                      <PaginateWrap>
                        <ReactPaginate
                          previousLabel={<IoIosArrowBack />}
                          nextLabel={<IoIosArrowForward />}
                          pageCount={pageOwnCount}
                          onPageChange={handlePageOwnClick}
                          breakLabel={<BsThreeDots />}
                          pageRangeDisplayed={5}
                          pageLinkClassName={"page-link"}
                          breakLinkClassName={"page-link"}
                          containerClassName={"pagination"}
                          previousLinkClassName={"prev-link"}
                          nextLinkClassName={"next-link"}
                          activeLinkClassName={"page-active"}
                          disabledLinkClassName={"page-disabled"}
                        />
                      </PaginateWrap>
                    </>
                  ) : (
                    <>
                      <CenterEmpty>
                        <EmptyImg src={RollSome} alt="waifu-empty" />
                        <EmptyText>Bạn chưa có waifu nào</EmptyText>
                      </CenterEmpty>
                    </>
                  )}
                </>
              ))
            : (body = (
                <>
                  {userParam.wishlist.length !== 0 ? (
                    <>
                      <ListOfWaifus>
                        {userParam.wishlist
                          .slice(offsetWish, offsetWish + PER_PAGE)
                          .map((waifuId) => {
                            const searchIndex = waifus.findIndex(
                              (item) => item._id === waifuId
                            );
                            const waifu = waifus[searchIndex];
                            /* const waifu =
															waifus[
																waifus.findIndex((item) => item._id === waifuId)
															]; */
                            return (
                              <LinkRouter
                                to={`/waifudb/${waifu.waifuid}`}
                                key={waifu.waifuid}
                              >
                                <div className="container">
                                  <img
                                    src={waifu.image}
                                    alt="Avatar"
                                    className="image"
                                  />
                                  <div className="overlay">
                                    <img
                                      src={waifu.sourceimg}
                                      alt="logo"
                                      className="src-image"
                                    />
                                    <p className="text">{waifu.name}</p>
                                    <p className="rank-most-owned">
                                      #{searchIndex + 1}
                                    </p>
                                    <p className="rank-most-owned-content">
                                      Most owned Waifu
                                    </p>
                                  </div>
                                </div>
                              </LinkRouter>
                            );
                          })}
                      </ListOfWaifus>
                      <PaginateWrap>
                        <ReactPaginate
                          previousLabel={<IoIosArrowBack />}
                          nextLabel={<IoIosArrowForward />}
                          pageCount={pageWishCount}
                          onPageChange={handlePageWishClick}
                          breakLabel={<BsThreeDots />}
                          pageRangeDisplayed={5}
                          pageLinkClassName={"page-link"}
                          breakLinkClassName={"page-link"}
                          containerClassName={"pagination"}
                          previousLinkClassName={"prev-link"}
                          nextLinkClassName={"next-link"}
                          activeLinkClassName={"page-active"}
                          disabledLinkClassName={"page-disabled"}
                        />
                      </PaginateWrap>
                    </>
                  ) : (
                    <>
                      <CenterEmpty>
                        <EmptyImg src={Kazubu} alt="wishlist-empty" />
                        <EmptyText>
                          Bạn chưa cho waifu nào vào Wishlist
                        </EmptyText>
                      </CenterEmpty>
                    </>
                  )}
                </>
              ));

          left = (
            <>
              <LeftNavWrap
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
            </>
          );
        }

        titleModal = (
          <TitleModal isOpen={openTitle}>
            <ModalHeader>
              <ModalTitle>Danh sách danh hiệu</ModalTitle>
              <ModalButton>
                <OkBtn onClick={handleTitleCancel}>Tắt</OkBtn>
              </ModalButton>
            </ModalHeader>
            <TableDisplay>
              <thead>
                <TableRowFirst>
                  <TableHeader style={{ width: "40%" }}>
                    Tên danh hiệu
                  </TableHeader>
                  <TableHeader style={{ width: "30%" }}>Điều kiện</TableHeader>
                  <TableHeader style={{ width: "30%" }}>Demo</TableHeader>
                </TableRowFirst>
              </thead>
            </TableDisplay>
            <RgbLine></RgbLine>
            <TableDisplay>
              <tbody>
                <TableRow>
                  <TableData style={{ width: "40%" }}>Newbie</TableData>
                  <TableData style={{ width: "30%" }}>Tạo tài khoản</TableData>
                  <TableData style={{ width: "30%" }}>
                    <span className="begin-title">Newbie &#127868;</span>
                  </TableData>
                </TableRow>
                <TableRow>
                  <TableData style={{ width: "40%" }}>Starter</TableData>
                  <TableData style={{ width: "30%" }}>
                    Số roll đạt 100 lần
                  </TableData>
                  <TableData style={{ width: "30%" }}>
                    <span className="normal-title">Starter &#10024;</span>
                  </TableData>
                </TableRow>
                <TableRow>
                  <TableData style={{ width: "40%" }}>God of roll</TableData>
                  <TableData style={{ width: "30%" }}>
                    Số roll đạt 1000 lần
                  </TableData>
                  <TableData style={{ width: "30%" }}>
                    <span className="elite-title">God of roll &#127922;</span>
                  </TableData>
                </TableRow>
              </tbody>
            </TableDisplay>
            <CurrentProgressTitle>
              <ModalTitle>Tiến độ hiện tại:</ModalTitle>
              <MyCurrentProgress>{userParam.roll_count} lần</MyCurrentProgress>
            </CurrentProgressTitle>
            <CurrentProgress>
              <ProgressImgContainer>
                <ProgressImgBg src={Slime} alt="slime-bg" />
                <AvaArrow
                  isActivated={delayState}
                  percent={`${(userParam.roll_count / 10) * 0.8}%`}
                />
                <AvaHolder
                  isActivated={delayState}
                  src={displayAva}
                  alt="progress-ava"
                  percent={`${(userParam.roll_count / 10) * 0.8}%`}
                />
                {/* <AvaProgress />
                </AvaHolder> */}
                <ProgressBar
                  isActivated={delayState}
                  percent={`${userParam.roll_count / 10 - 100}%`}
                ></ProgressBar>
                <FirstMilestone>🍼</FirstMilestone>
                <SecondMilestone>✨</SecondMilestone>
                <ArrowThirdMile />
                <ThirdMilestone>🎲</ThirdMilestone>
                <ArrowFirstMile />
                <ArrowSecondMile />
              </ProgressImgContainer>
            </CurrentProgress>
          </TitleModal>
        );
      }
    }
  }

  return (
    <>
      <ToTopButton
        visible={visible}
        to={`/otheruser/${userParam.userid}`}
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
      <Container
        dark={avaModalVisible || bgModalVisible || modalOpen || openTitle}
      >
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
              <PageHeader>
                <PageHeaderFixed>
                  <PageHeaderWrap isLined={visible}>
                    <PageHeaderContentLine isLined={visible}>
                      <PageHeaderMain>
                        <PageHeaderLeft>
                          <NavBackButton onClick={() => navigate("/postlist")}>
                            <ArrowBack />
                          </NavBackButton>
                          <PageHeaderTitle>Trung tâm cá nhân</PageHeaderTitle>
                        </PageHeaderLeft>
                        <PageHeaderRight></PageHeaderRight>
                      </PageHeaderMain>
                    </PageHeaderContentLine>
                  </PageHeaderWrap>
                </PageHeaderFixed>
              </PageHeader>
              {infoSection}
              <List>
                <ListWrap>
                  <ListHeader>
                    <div
                      className={
                        active ? "list-section active-list" : "list-section"
                      }
                      onClick={handleActive}
                    >
                      My Waifu List
                    </div>
                    <div
                      className={
                        !active ? "list-section active-list" : "list-section"
                      }
                      onClick={handleActive}
                    >
                      My Wishlist
                    </div>
                  </ListHeader>
                  {body}
                </ListWrap>
              </List>
              <List>
                <PostWrap>
                  <PostEntryTitle>Bài đăng của bạn</PostEntryTitle>
                  <PostEntryInfo>
                    Nơi bạn có thể xem những bài đã đăng
                  </PostEntryInfo>
                </PostWrap>
              </List>
              {postPart}
            </MainPage>
            <div className="page-holder"></div>
            <RightContainer>
              {userActivities}
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
      </Container>

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

      {titleModal}

      {/* <TitleModal isOpen={openTitle}>
        <ModalHeader>
          <ModalTitle>Danh sách danh hiệu</ModalTitle>
          <ModalButton>
            <OkBtn onClick={handleTitleCancel}>Tắt</OkBtn>
          </ModalButton>
        </ModalHeader>
        <TableDisplay>
          <thead>
            <TableRowFirst>
              <TableHeader style={{ width: "40%" }}>Tên danh hiệu</TableHeader>
              <TableHeader style={{ width: "30%" }}>Điều kiện</TableHeader>
              <TableHeader style={{ width: "30%" }}>Demo</TableHeader>
            </TableRowFirst>
          </thead>
        </TableDisplay>
        <RgbLine></RgbLine>
        <TableDisplay>
          <tbody>
            <TableRow>
              <TableData style={{ width: "40%" }}>Newbie</TableData>
              <TableData style={{ width: "30%" }}>Tạo tài khoản</TableData>
              <TableData style={{ width: "30%" }}>
                <span className="begin-title">Newbie &#127868;</span>
              </TableData>
            </TableRow>
            <TableRow>
              <TableData style={{ width: "40%" }}>Starter</TableData>
              <TableData style={{ width: "30%" }}>
                Số roll đạt 100 lần
              </TableData>
              <TableData style={{ width: "30%" }}>
                <span className="normal-title">Starter &#10024;</span>
              </TableData>
            </TableRow>
            <TableRow>
              <TableData style={{ width: "40%" }}>God of roll</TableData>
              <TableData style={{ width: "30%" }}>
                Số roll đạt 1000 lần
              </TableData>
              <TableData style={{ width: "30%" }}>
                <span className="elite-title">God of roll &#127922;</span>
              </TableData>
            </TableRow>
          </tbody>
        </TableDisplay>
      </TitleModal> */}

      <div className="pswp">
        <div className="pswp_bg"></div>
        <div className="pswp_scroll-wrap">
          <div 
            className="pswp_container" 
            style={{ transform: 'translate3d(0px, 0px, 0px)' }}
          >
            <div 
              className="pswp_item"
              style={{ transform: 'translate3d(0px, 0px, 0px)' }}
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
                    display: 'block',
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

export default OtherUserProfile;
