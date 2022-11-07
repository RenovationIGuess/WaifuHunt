import React, {
  useState,
  useEffect,
  useContext,
  useLayoutEffect,
  useRef,
} from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  Img,
  SearchBarContainer,
  SearchBar,
  SearchBarIcon,
  User,
  UserAva,
  UserName,
  LeftNavWrap,
  LeftItem,
  LeftImg,
  ContactFooter,
  PaiFace,
  CopyRight,
  CancelBtn,
  OkBtn,
  Database,
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
  AvaBgLoadingDiv,
  NewImgIconWrap,
  NewImgIcon,
  NewVidIconWrap,
  NewVidIcon,
  UserList,
  WaifuSearchResult,
  ToTopButton,
} from "../profile/pfelement";
import {
  LeftSection,
  RightSection,
  HowToRollDesc,
  RollDesc,
  RollLi,
  AmongUs,
  EndDesc,
  ToInfoPage,
  AddTitle,
  InputName,
  ModalButton,
  AddButton,
  ModalTitle,
  RollGuide,
  NewInfoInputDiv,
  NewInfoInputDivWrap,
  NewInfoInputText,
  NewInfoInputMaxCount,
  IconImageNone,
  CharSrcImageInput,
  IconImageSrcNone,
} from "../waifudb/waifuElement";
import {
  Header,
  WaifuInfoContainer,
  GuideText,
  MainContainer,
  GridDisplay,
  ImgColumn,
  ImageHolder,
  OwnedLabel,
  GridInfo,
  GridInfoTitle,
  GridInfoItem,
  DescArea,
  GridDescItem,
  WaifuReplyContainer,
  DialogReply,
  DialogReplyWrap,
  DialogContent,
  DialogTitle,
  DialogClose,
  DialogCloseIcon,
  DialogButton,
  ReplyDetailList,
  CommentPart,
  ReplyListTitle,
  DialogHeader,
  DialogBody,
  ReplyListLoadmore,
  LoadmoreNomore,
  RatingSection,
  RatingTitle,
  AverageRating,
  AverageTitle,
  AverageContent,
  RatingHeader,
  StarIcon,
  AverageTop,
  ReviewText,
  RatingRowContainer,
  RatingRowItem,
  RatingType,
  RowStarIcon,
  RatingRange,
  RatingGuide,
  RatingCount,
} from "./waifuinfoele";

import { Loading, LoadingContainer, LoadingWrap } from "../Loading";
import { Toast, ToastMsg } from "../toastMsg";

import Chilling from "../../videos/chillin.gif";
import LoadingNav from "../../videos/loadingNav.gif";
import LoadingComments from "../../videos/Sayu.gif";
import NoComments from "../../videos/fight.gif";
import HutaoAva from "../../images/hutaostick.png";
import RaidenAva from "../../images/raidenfbi.png";
import DoggoAva from "../../images/realdoggo.png";
import LeftImage from "../../images/logoroll.svg";
import WebLogo from "../../images/logoweb.png";
import Paimoe from "../../images/paiface.png";
import ToTopBtn from "../../images/arrow/RArrow.png";

import { IoIosArrowDown } from "react-icons/io";
import { GrUserSettings } from "react-icons/gr";
import { RiLogoutBoxLine } from "react-icons/ri";
import { MdKeyboardArrowRight, MdErrorOutline } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { RiHeartsLine, RiHeartsFill } from "react-icons/ri";

/* import Footer from "../footer"; */

import { Link as LinkRouter } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll/modules";

import { AuthContext } from "../../contexts/AuthContext";
import { WaifuContext } from "../../contexts/WaifuContext";
import { WaifuCommentContext } from "../../contexts/WaifuCommentContext";
import { WaifuCommentReplyContext } from "../../contexts/WaifuCmtRepContext";
/* import { UserContext } from "../../contexts/UsersContext"; */

import {
  TIME_STORAGE,
  ROLL_STORAGE,
  RATE_WAIFU,
} from "../../contexts/constants";

import "../profile/profile.scss";
import "../waifudb/waifulist.scss";
import "./waifuinfo.scss";
import "../imgprev.scss";
/* import "./script"; */
import { TrashButton } from "../getwaifu/getwaifuele";

import Timer from "../timer";
import { PostNewArrow } from "../postList/postListEle";
import {
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
  CommentButtonWrap,
  CommentCardAvatar,
  CommentCardContainer,
  CommentHostSpan,
  CommentReplyWrap,
  EditComment,
  EndOfCommentSection,
  LinkAccountTitleName,
  NoCommentsImg,
  NoCommentsImgContainer,
  Nomore,
  NotVisible,
  PostReplyList,
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
  UserCommentReplyBody,
  UserReplyBody,
  UserReplyLabel,
  UserReplyMaxCount,
  UserReplySection,
  UserReplyTextArea,
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
import {
  CmtImgUploadDelete,
  CmtImgUploadDeleteIcon,
  CommentImgUploaded,
  CommentUploadImg,
  IconSrcImageAdd,
  RightContainer,
  RootPageContainer,
  SideMenu,
  StickyNavFixed,
  StickyNavLeft,
  StickyNavLeftHolder,
  StickyNavScroll,
} from "../createpost/createPostElement";
import { UserListLayout, UserListMain } from "../userlist/userListEle";
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

import DeleteIcon from "../../images/deleteIcon.png";
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

const WaifuInfo = () => {
  const {
    authState: { user, users, usersLoading },
    logoutUser,
    addWishlist,
    removeWishlist,
    deleteWaifu,
    increaseRoll,
    loadAllUser,
  } = useContext(AuthContext);

  const {
    waifuState: { waifus, waifusLoading },
    editWaifu,
    getWaifus,
    /* getCertainWaifus, */
    rateWaifu,
  } = useContext(WaifuContext);

  const {
    waifuCommentState: { comments, commentsLoading },
    /* replyComment, */
    likeComment,
    unlikeComment,
    getAllWaifuComments,
    postNewComment,
    deleteComment,
    editWaifuComment,
  } = useContext(WaifuCommentContext);

  const {
    waifuCommentReplyState: { replies, repliesLoading },
    getAllWaifuCommentReplies,
    likeWaifuCommentReply,
    unlikeWaifuCommentReply,
    uploadWaifuCommentReply,
    editWaifuCommentReply,
    deleteWaifuCommentReply,
  } = useContext(WaifuCommentReplyContext);

  /* const {
    userState: { users, usersLoading },
  } = useContext(UserContext); */

  const waifuId = useParams();
  const currentWaifuId = parseInt(waifuId.id);

  let body;
  let left;
  let commentSection;
  let ratingSection;
  let waifuSearchBar;

  const navigate = useNavigate();
  const commentImageRef = useRef(null);
  const imageInputRef = useRef(null);
  const imageSrcInputRef = useRef(null);

  /* const [prevWaifuId, setPrevWaifuId] = useState(currentWaifuId); */
  const [visible, setVisible] = useState(false);

  // Get the current time for the first render
  const [currentTime, setCurrentTime] = useState(new Date().getTime());

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  // Tracking changes
  const [trackChanges, setTrackChanges] = useState(false);

  const [open, setOpen] = useState(false);
  const [userAva, setUserAva] = useState(RaidenAva);

  const [editActive, setEditActive] = useState(false);
  const [isWishlist, setIsWishlist] = useState(false);
  const [isOwned, setIsOwned] = useState(false);

  const [message, setMessage] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("");

  // Controlling NavPostDialog
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Used for searching
  const [searchValue, setSearchValue] = useState("");

  // Timeout
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

  const initTimer = 3600000; //in miliseconds, 3600000 = 1 hour

  // Comment image list
  const [cmtImageArr, setCmtImageArr] = useState([]);

  // Control comment
  const [isCommentFocused, setIsCommentFocused] = useState(false);
  const [userComment, setUserComment] = useState("");
  const [commentMenuState, setCommentMenuState] = useState([]);
  const [isCommentMenuOn, setIsCommentMenuOn] = useState(false);

  // Current waifu comment list
  /* const [waifuComments, setWaifuComments] = useState([]); */
  const [trackCommentAct, setTrackCommentAct] = useState(false);

  // Control reply a comment
  const [controlReplyBox, setControlReplyBox] = useState([]);
  const [trackReplyState, setTrackReplyState] = useState(false);

  // Control edit a comment
  const [editContent, setEditContent] = useState([]);
  const [trackEditCmtState, setTrackEditCmtState] = useState(false);

  // Control delete confirm action
  const [deleteCmtId, setDeleteCmtId] = useState(-1);
  const [deleteRepId, setDeleteRepId] = useState(-1);
  const [deleteIndex, setDeleteIndex] = useState(-1); // Use for comments
  const [deleteIter, setDeleteIter] = useState(-1); // Use for replies
  const [confirmMsg, setConfirmMsg] = useState("");

  // Control edit waifu input box
  const [charName, setCharName] = useState("");
  const [isCharNameFocused, setIsCharNameFocused] = useState(false);
  const [charSrc, setCharSrc] = useState("");
  const [isCharSrcFocused, setIsCharSrcFocused] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [imageSrcUrl, setImageSrcUrl] = useState(null);
  const [srcLink, setSrcLink] = useState("");
  const [isSrcLinkFocused, setIsSrcLinkFocused] = useState(false);
  const [charDesc, setCharDesc] = useState("");
  const [isCharDescFocused, setIsCharDescFocused] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const [isImgSrcFocused, setIsImgSrcFocused] = useState(false);

  // Controlling preview post image
  const [dimensions, setDimensions] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  });
  const [isPreviewed, setIsPreviewed] = useState(false);
  const [currentPreviewImg, setCurrentPreviewImg] = useState(null);
  const [scaleValue, setScaleValue] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);
  const [imgTransformX, setImgTransformX] = useState(0);
  const [imgTransformY, setImgTransformY] = useState(0);
  const [currentSelectElement, setCurrentSelectElement] = useState(null);

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
    }
  }, [dimensions]);

  useEffect(() => {
    async function fetchData() {
      await getAllWaifuComments();
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
      await getAllWaifuCommentReplies();
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

  useEffect(() => {
    toggleHome();
  }, [currentWaifuId]);

  //reset remaining time to initTimer
  const startTimer = () => {
    const deadTime = Date.now() + initTimer;
    window.localStorage.setItem(TIME_STORAGE, deadTime);
    setDeadline(deadTime);
  };

  useEffect(() => {
    window.localStorage.setItem(ROLL_STORAGE, rollTimes);
  }, [rollTimes]);

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
    async function fetchData() {
      await getWaifus();
    }
    fetchData();
  }, []);

  useEffect(() => {
    document.title = "Thông tin Waifu";
  }, []);

  /* useEffect(() => {
    if (currentWaifuId !== prevWaifuId) {
      setPrevWaifuId(currentWaifuId);
    }
  }, [currentWaifuId]); */

  useLayoutEffect(() => {
    async function fetchData() {
      if (waifus.length !== 0) {
        const waifuToFind = waifus.findIndex(
          (item) => item.waifuid === parseInt(waifuId.id)
        );
        if (user.waifulist.length !== 0) {
          const searchIndex = user.waifulist.findIndex(
            (item) => item === waifus[waifuToFind]._id
          );
          if (searchIndex !== -1) {
            setIsOwned(true);
          } else {
            setIsOwned(false);
          }
        }
        if (user.wishlist.length !== 0) {
          const wishIndex = user.wishlist.findIndex(
            (item) => item === waifus[waifuToFind]._id
          );
          if (wishIndex !== -1) {
            setIsWishlist(true);
          } else {
            setIsWishlist(false);
          }
        }
      }
      /* await getCertainWaifus(parseInt(waifuId.id)); */
    }
    fetchData();
  }, [currentWaifuId, waifusLoading]);

  /* useEffect(() => {
    if (!waifusLoading) {
      if (waifus.length !== 0) {
        const waifuToFind = waifus.findIndex(
          (item) => item.waifuid === parseInt(waifuId.id)
        );
        if (user.waifulist.length !== 0) {
          const searchIndex = user.waifulist.findIndex(
            (item) => item === waifus[waifuToFind]._id
          );
          if (searchIndex !== -1) {
            setIsOwned(true);
          }
        }
        if (user.wishlist.length !== 0) {
          const wishIndex = user.wishlist.findIndex(
            (item) => item === waifus[waifuToFind]._id
          );
          if (wishIndex !== -1) {
            setIsWishlist(true);
          }
        }
  
        waifus.sort((a, b) => {
          return (b.user.length - a.user.length)
        })
      }
    }
  }, [waifusLoading]) */

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

  const handleEditActive = () => {
    setEditActive(true);
  };

  const handleUnwish = async () => {
    try {
      const userResponse = await removeWishlist({
        waifuid: parseInt(waifuId.id),
      });
      if (userResponse.success) {
        setIsWishlist(false);
        setMessage("Remove khỏi wishlist thành công!");
        setDesc("Chúc mừng :v!");
        setType("success");
        myFunction();
      } else {
        setMessage("Remove khỏi wishlist thất bại!");
        setDesc(userResponse.message);
        setType("error");
        myFunction();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleWish = async () => {
    try {
      const userResponse = await addWishlist({ waifuid: parseInt(waifuId.id) });
      if (userResponse.success) {
        setIsWishlist(true);
        setMessage("Thêm vào wishlist thành công!");
        setDesc("Chúc mừng :v!");
        setType("success");
        myFunction();
      } else {
        setMessage("Thêm vào wishlist thất bại!");
        setDesc(userResponse.message);
        setType("error");
        myFunction();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleTrashWaifu = async () => {
    try {
      const userResponse = await deleteWaifu({ waifuid: parseInt(waifuId.id) });
      if (userResponse.success) {
        setIsOwned(false);
        setMessage("Xóa waifu khỏi collection thành công!");
        setDesc("Chúc mừng :v!");
        setType("success");
        myFunction();
      } else {
        setMessage("Xóa waifu khỏi collection thất bại!");
        setDesc(userResponse.message);
        setType("error");
        myFunction();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleOkEdit = async () => {
    try {
      const newWaifu = await editWaifu(
        {
          name: charName,
          source: charSrc,
          image: imageUrl,
          sourceimg: imageSrcUrl,
          sourcelink: srcLink,
          imagesrc: imgSrc,
          desc: charDesc,
        },
        parseInt(waifuId.id)
      );

      if (newWaifu.success) {
        setMessage("Sửa thông tin thành công!");
        setDesc("Ngon :v");
        setType("success");
        myFunction();
        setCharName("");
        setCharSrc("");
        setImageUrl(null);
        setImageSrcUrl(null);
        setSrcLink("");
        setCharDesc("");
        setImgSrc("");
        setEditActive(false);
        setTrackChanges(!trackChanges);
      } else {
        setMessage("Sửa thông tin thất bại!");
        setDesc(newWaifu.message);
        setType("error");
        myFunction();
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    switch (user.avatar) {
      case "RaidenAva":
        setUserAva(RaidenAva);
        break;
      case "DoggoAva":
        setUserAva(DoggoAva);
        break;
      case "HutaoAva":
        setUserAva(HutaoAva);
        break;
      default:
        setUserAva(RaidenAva);
        break;
    }
  }, [user.avatar]);

  const handleOpen = () => {
    setOpen(!open);
    setIsDialogOpen(false);
  };

  const handleDialogOpen = () => {
    setOpen(false);
    setIsDialogOpen(!isDialogOpen);
  };

  const handleLogout = () => logoutUser();

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImageUrl(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const imageSrcHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImageSrcUrl(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
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
    /* controlReplyBox[index].value = value; */
    setTrackReplyState(!trackReplyState);
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

  const handleIsReplyBlur = (index) => {
    controlReplyBox[index] = {
      ...controlReplyBox[index],
      isFocused: false,
    };
    /* controlReplyBox[index].isFocused = false; */
    setTrackReplyState(!trackReplyState);
  };

  const handleIsReplyFocused = (index) => {
    controlReplyBox[index] = {
      ...controlReplyBox[index],
      isFocused: true,
    };
    /* controlReplyBox[index].isFocused = true; */
    setTrackReplyState(!trackReplyState);
  };

  const handleSendComment = async (waifuId) => {
    if (userComment === "") {
      setMessage("Đăng comment thất bại!");
      setDesc("Phải có nội dung mới được up comment nha :<");
      setType("error");
      myFunction();
    } else {
      try {
        const newComment = await postNewComment({
          value: userComment,
          waifuid: waifuId,
          image: cmtImageArr,
        });

        if (newComment.success) {
          setMessage("Đăng comment thành công!");
          setDesc("Mời bạn tiếp tục... :D");
          setType("success");
          setUserComment("");
          setCmtImageArr([]);
          myFunction();
          controlReplyBox.push({
            commentid: newComment.newComment.commentid,
            isOn: false,
            value: "",
            isFocused: false,
            replyBox: [],
          });
          editContent.push({
            commentid: newComment.newComment.commentid,
            isOn: false,
            value: "",
            isFocused: false,
            replyBox: [],
          });
          commentMenuState.push({
            commentid: newComment.newComment.commentid,
            state: false,
            replyPopupState: false,
            replyMenuState: [],
          });
          setTrackCommentAct(!trackCommentAct);
          setCurrentTime(new Date().getTime());
        } else {
          setMessage("Đăng comment thất bại!");
          setDesc(newComment.message);
          setType("error");
          myFunction();
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleLikeComment = async (commentId) => {
    try {
      const afterLikedComment = await likeComment({ commentid: commentId });
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

  const handleUnlikeComment = async (commentId) => {
    try {
      const afterUnlikedComment = await unlikeComment({ commentid: commentId });
      if (afterUnlikedComment.success) {
        setMessage("Sao unlike rồi :<!");
        setDesc("...");
        setType("success");
        myFunction();
        setTrackCommentAct(!trackCommentAct);
      } else {
        setMessage("Unlike post thất bại!");
        setDesc(afterUnlikedComment.message);
        setType("error");
        myFunction();
      }
    } catch (err) {
      console.log(err);
    }
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
        const postReply = await uploadWaifuCommentReply({
          content: content,
          commentid: commentId,
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

  const handleDeleteWaifuComment = async (index, commentId) => {
    try {
      const response = await deleteComment(commentId);
      if (response.success) {
        setMessage("Xóa comment thành công!");
        setDesc("Ơ kìa...");
        setType("success");
        myFunction();
        controlReplyBox.splice(index, 1);
        commentMenuState.splice(index, 1);
        editContent.splice(index, 1);
        setTrackCommentAct(!trackCommentAct);
      } else {
        setMessage("Xóa post thất bại!");
        setDesc(response.message);
        setType("error");
        myFunction();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteWaifuReply = async (i, iter, commentReplyId) => {
    try {
      const response = await deleteWaifuCommentReply(commentReplyId);
      if (response.success) {
        setMessage("Xóa reply thành công!");
        setDesc("Why... :<?");
        setType("success");
        myFunction();
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

  const handleRatingWaifu = async (waifu, ratingNum, waifuId) => {
    let hasRated;
    let findRateIndex;
    switch (ratingNum) {
      case 5:
        findRateIndex = waifu.rating.five.findIndex((r) => r === user.userid);
        hasRated = findRateIndex !== -1 ? true : false;
        break;
      case 4:
        findRateIndex = waifu.rating.four.findIndex((r) => r === user.userid);
        hasRated = findRateIndex !== -1 ? true : false;
        break;
      case 3:
        findRateIndex = waifu.rating.three.findIndex((r) => r === user.userid);
        hasRated = findRateIndex !== -1 ? true : false;
        break;
      case 2:
        findRateIndex = waifu.rating.two.findIndex((r) => r === user.userid);
        hasRated = findRateIndex !== -1 ? true : false;
        break;
      case 1:
        findRateIndex = waifu.rating.one.findIndex((r) => r === user.userid);
        hasRated = findRateIndex !== -1 ? true : false;
        break;
    }
    if (hasRated) {
      setMessage(`Bạn đã rate mức sao này rồi!`);
      setDesc("Vui lòng chọn mức sao khác");
      setType("error");
      myFunction();
    } else {
      try {
        const response = await rateWaifu({
          waifuid: waifuId,
          ratingNum: ratingNum,
        });

        if (response.success) {
          setMessage("Rating thành công!");
          setType("success");
          setDesc("Check ranking thôi :v");
          myFunction();
          setTrackChanges(!trackChanges);
        } else {
          setMessage("Rating thất bại!");
          setDesc(response.message);
          setType("error");
          myFunction();
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleEditCmtValue = (index, value) => {
    editContent[index] = {
      ...editContent[index],
      value: value,
    };
    /* editComment[index].value = value; */
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

  const handleIsEditCmtBlur = (index) => {
    editContent[index] = {
      ...editContent[index],
      isFocused: false,
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

  const handleSendEditCmt = async (i, commentId) => {
    if (editContent[i].value === "") {
      setMessage("Edit comment thất bại!");
      setDesc("Phải có nội dung chứ :<");
      setType("error");
      myFunction();
    } else {
      try {
        const response = await editWaifuComment({
          value: editContent[i].value,
          commentid: commentId,
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
        const response = await editWaifuCommentReply({
          content: editContent[i].replyBox[iter].value,
          replyid: commentReplyId,
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

  const handleCancelEditCmt = (index) => {
    editContent[index] = {
      ...editContent[index],
      isOn: !editContent[index].isOn,
      isFocused: false,
      value: "",
    };
    setTrackEditCmtState(!trackEditCmtState);
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
      const afterUnlikedReply = await unlikeWaifuCommentReply({
        replyid: replyId,
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
      const afterLikedReply = await likeWaifuCommentReply({
        replyid: replyId,
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

  /* const handleDeleteWaifuReply = async (i, iter, commentReplyId) => {
    try {
      const response = await deleteWaifuCommentReply(commentReplyId);
      if (response.success) {
        setMessage("Xóa reply thành công!");
        setDesc("Why... :<?");
        setType("success");
        myFunction();
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
  }; */

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
    handleDeleteWaifuComment(deleteIndex, deleteCmtId);
  };

  const handleConfirmBoxRep = () => {
    handleCloseConfirmBox();
    handleDeleteWaifuReply(deleteIndex, deleteIter, deleteRepId);
  };

  // When click delete comments
  const handleOpenConfirmBoxCmt = (index, postCommentId) => {
    const messageBox = document.querySelector(".msg-box-in");
    messageBox.classList.remove("msg-box-gone");
    setDeleteCmtId(postCommentId);
    setDeleteIndex(index);
    setDeleteRepId(-1);
    setEditActive(false);
    setCharName("");
    setCharSrc("");
    setImageUrl(null);
    setImageSrcUrl(null);
    setSrcLink("");
    setCharDesc("");
    setImgSrc("");
    setConfirmMsg("Xác nhận xóa comment này?");
  };

  const handleOpenConfirmBoxRep = (i, iter, postCommentReplyId) => {
    const messageBox = document.querySelector(".msg-box-in");
    messageBox.classList.remove("msg-box-gone");
    setDeleteRepId(postCommentReplyId);
    setDeleteIndex(i);
    setDeleteIter(iter);
    setDeleteCmtId(-1);
    setEditActive(false);
    setCharName("");
    setCharSrc("");
    setImageUrl(null);
    setImageSrcUrl(null);
    setSrcLink("");
    setCharDesc("");
    setImgSrc("");
    setConfirmMsg("Xác nhận xóa reply này?");
  };

  const handleOpenConfirmBoxEdit = () => {
    if (
      !charName &&
      !charSrc &&
      !imageUrl &&
      !imageSrcUrl &&
      !srcLink &&
      !charDesc &&
      !imgSrc
    ) {
      setEditActive(false);
    } else {
      const messageBox = document.querySelector(".msg-box-in");
      messageBox.classList.remove("msg-box-gone");
      setConfirmMsg("Xác nhận hủy thay đổi?");
    }
  };

  const handleOpenCBTrashWaifu = () => {
    const messageBox = document.querySelector(".msg-box-in");
    messageBox.classList.remove("msg-box-gone");
    setDeleteCmtId(-1);
    setDeleteRepId(-1);
    setEditActive(false);
    setCharName("");
    setCharSrc("");
    setImageUrl(null);
    setImageSrcUrl(null);
    setSrcLink("");
    setCharDesc("");
    setImgSrc("");
    setConfirmMsg("Xác nhận bỏ waifu này?");
  };

  const handleCancelEdit = () => {
    handleCloseConfirmBox();
    setCharName("");
    setCharSrc("");
    setImageUrl(null);
    setImageSrcUrl(null);
    setSrcLink("");
    setCharDesc("");
    setImgSrc("");
    setEditActive(false);
  };

  const handleConfirmBox = () => {
    if (editActive) {
      handleCancelEdit();
    } else if (deleteCmtId !== -1) {
      handleConfirmBoxCmt();
    } else if (deleteRepId !== -1) {
      handleConfirmBoxRep();
    } else {
      handleCloseConfirmBox();
      handleTrashWaifu();
    }
  };

  const handleOpenCmtImgArr = () => {
    commentImageRef.current.click();
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

  /* const handleImageInputClick = () => {
    imageInputRef.current.click();
  };

  const handleImageSrcInputClick = () => {
    imageSrcInputRef.current.click();
  }; */

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
    ratingSection = (
      <>
        <RatingSection>
          <RatingHeader>
            <RatingTitle>Rating của nhân vật</RatingTitle>
            <AverageRating>
              <AverageTop>
                <StarIcon />
                <AverageTitle>0</AverageTitle>
              </AverageTop>
              <AverageContent>Rating trung bình</AverageContent>
            </AverageRating>
          </RatingHeader>
          <ReviewText>Ratings</ReviewText>
          <RatingGuide>
            <i>
              Bạn chỉ có thể vote 1 lần bằng cách click vào rating tương ứng
              (Chưa rate)
            </i>
          </RatingGuide>
          <RatingRowContainer>
            <RatingType>5</RatingType>
            <RowStarIcon />
            <RatingRange percent={"-100%"}></RatingRange>
            <RatingType style={{ marginLeft: "12px" }}>0</RatingType>
            <RatingType>4</RatingType>
            <RowStarIcon />
            <RatingRange percent={"-100%"}></RatingRange>
            <RatingType style={{ marginLeft: "12px" }}>0</RatingType>
            <RatingType>3</RatingType>
            <RowStarIcon />
            <RatingRange percent={"-100%"}></RatingRange>
            <RatingType style={{ marginLeft: "12px" }}>0</RatingType>
            <RatingType>2</RatingType>
            <RowStarIcon />
            <RatingRange percent={"-100%"}></RatingRange>
            <RatingType style={{ marginLeft: "12px" }}>0</RatingType>
            <RatingType>1</RatingType>
            <RowStarIcon />
            <RatingRange percent={"-100%"}></RatingRange>
            <RatingType style={{ marginLeft: "12px" }}>0</RatingType>
          </RatingRowContainer>
        </RatingSection>
      </>
    );
    commentSection = (
      <WaifuReplyContainer>
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
            <CommentButtonWrap>
              <SendButton>Gửi</SendButton>
            </CommentButtonWrap>
          </ReplyBoxFooter>
        </UserReplySection>
        <PostReplyList>
          <ReplyListHeader>
            <ReplyListItem>Tất cả comments</ReplyListItem>
          </ReplyListHeader>
          <div>
            <div style={{ backgroundColor: "#fff" }}>
              <NoCommentsImgContainer>
                <NoCommentsImg
                  src={LoadingComments}
                  alt="comments-is-being-fetch"
                />
              </NoCommentsImgContainer>
            </div>
          </div>
          <EndOfCommentSection>
            <Nomore>Không còn bình luận nào nữa ~.~</Nomore>
          </EndOfCommentSection>
        </PostReplyList>
      </WaifuReplyContainer>
    );
  } else {
    const waifuParamId = parseInt(waifuId.id);
    const waifuParamIndex = waifus.findIndex((w) => w.waifuid === waifuParamId);

    if (waifuParamIndex === -1) {
      navigate("/404");
    }
    const waifu = waifus[waifuParamIndex];

    waifus.sort((a, b) => {
      return b.user.length - a.user.length;
    });

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
        <LeftNavWrap to="/waifudb" style={{ marginBottom: "4px" }}>
          <Database />
          <LeftItem>Waifu Database</LeftItem>
        </LeftNavWrap>
        {user.role === "admin" && (
          <LeftNavWrap to="/userlist">
            <UserList />
            <LeftItem>User Database</LeftItem>
          </LeftNavWrap>
        )}
        <ContactFooter style={{ marginTop: "4px" }}>
          <PaiFace src={Paimoe} alt="pai-logo" />
          <CopyRight>All Rights Reserved.</CopyRight>
        </ContactFooter>
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

    if (!commentsLoading) {
      if (!usersLoading) {
        if (!repliesLoading) {
          const waifuComments = comments.filter(
            (c) => c.waifuid === currentWaifuId
          );

          if (controlReplyBox.length === 0) {
            waifuComments.forEach((c) => {
              const currentCommentReplies = replies.filter(
                (r) => r.commentid === c.commentid
              );
              let replyControlArr = [];
              let replyMenuControlArr = [];
              currentCommentReplies.forEach((r) => {
                replyControlArr.push({
                  replyid: r.replyid,
                  isOn: false,
                  value: "",
                  isFocused: false,
                });

                replyMenuControlArr.push({
                  replyid: r.replyid,
                  /* replyState: false, */
                  state: false,
                });
              });

              controlReplyBox.push({
                commentid: c.commentid,
                isOn: false,
                value: "",
                isFocused: false,
                replyBox: [...replyControlArr],
              });

              commentMenuState.push({
                commentid: c.commentid,
                state: false,
                replyPopupState: false,
                replyMenuState: [...replyMenuControlArr],
              });

              editContent.push({
                commentid: c.commentid,
                isOn: false,
                value: "",
                isFocused: false,
                replyBox: [...replyControlArr],
              });
            });
          }

          commentSection = (
            <WaifuReplyContainer>
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
                  <CommentButtonWrap>
                    <SendButton
                      onClick={() => handleSendComment(waifu.waifuid)}
                    >
                      Gửi
                    </SendButton>
                  </CommentButtonWrap>
                </ReplyBoxFooter>
              </UserReplySection>
              <PostReplyList>
                <ReplyListHeader>
                  <ReplyListItem>Tất cả comments</ReplyListItem>
                </ReplyListHeader>
                <div>
                  <div style={{ backgroundColor: "#fff" }}>
                    {waifuComments.length === 0 ? (
                      <NoCommentsImgContainer>
                        <NoCommentsImg src={NoComments} alt="no-comment-img" />
                      </NoCommentsImgContainer>
                    ) : (
                      waifuComments.map((c, i) => {
                        const currentCommentReplies = replies.filter(
                          (r) => r.commentid === c.commentid
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
                        const commentContent = c.value;
                        const hasLikeThisComment = c.likeCount.includes(
                          user.userid
                        );
                        const postUploadedDate = new Date(
                          c.createdAt
                        ).getTime();
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
                          if (days >= 365) {
                            const years = Math.floor(days / 365);
                            displayPostedDate = `${years} năm trước`;
                          } else {
                            displayPostedDate = `${days} ngày trước`;
                          }
                        }
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
                                      {/* {commentHostInfo.userid === user.userid && (
                                        <CommentHostSpan>Tác giả</CommentHostSpan>
                                      )} */}
                                    </ReplyCardRouter>
                                    <RCFloor>
                                      <span>
                                        ID của người dùng&nbsp;:&nbsp;
                                        {commentHostInfo.userid}
                                      </span>
                                      <RCFloorTags></RCFloorTags>
                                    </RCFloor>
                                  </ReplyCardAccount>
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
                                                    c.commentid
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
                                          handleEditCmtValue(i, e.target.value)
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
                                          onClick={() => handleCancelEditCmt(i)}
                                        >
                                          Hủy
                                        </CancelEditCmtButton>
                                        <SendButton
                                          onClick={() =>
                                            handleSendEditCmt(i, c.commentid)
                                          }
                                        >
                                          Gửi
                                        </SendButton>
                                      </CommentButtonWrap>
                                    </ReplyBoxFooter>
                                  </CommentReplyWrap>
                                ) : (
                                  <>
                                    <CCContent>{commentContent}</CCContent>
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
                                  <RCTime>{displayPostedDate}</RCTime>
                                  <RCBottomRight>
                                    <RCItem onClick={() => handleReplyBoxOn(i)}>
                                      <RCItemIconComment />
                                      <RCItemSpan>Trả lời</RCItemSpan>
                                    </RCItem>
                                    <RCItem>
                                      {hasLikeThisComment ? (
                                        <RCItemIconLiked
                                          onClick={() =>
                                            handleUnlikeComment(c.commentid)
                                          }
                                        />
                                      ) : (
                                        <RCItemIconLike
                                          onClick={() =>
                                            handleLikeComment(c.commentid)
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
                                    borderChange={controlReplyBox[i].isFocused}
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
                                            c.commentid,
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
                                        const replyUploadedDate = new Date(
                                          r.createdAt
                                        ).getTime();
                                        let secondsR = Math.round(
                                          Math.abs(
                                            currentTime - replyUploadedDate
                                          ) / 1000
                                        ); // round away miliseconds
                                        const daysR = Math.floor(
                                          secondsR / 86400
                                        );
                                        secondsR -= daysR * 86400;
                                        const hoursR = Math.floor(
                                          secondsR / 3600
                                        );
                                        secondsR -= hoursR * 3600;
                                        const minutesR = Math.floor(
                                          secondsR / 60
                                        );
                                        secondsR -= minutesR * 60;
                                        let displayReplyPostedDate;
                                        if (daysR === 0) {
                                          if (hoursR === 0) {
                                            if (minutesR === 0) {
                                              displayReplyPostedDate = `${secondsR} giây trước`;
                                            } else {
                                              displayReplyPostedDate = `${minutesR} phút trước`;
                                            }
                                          } else {
                                            displayReplyPostedDate = `${hoursR} giờ trước`;
                                          }
                                        } else {
                                          if (daysR >= 365) {
                                            const yearsR = Math.floor(
                                              daysR / 365
                                            );
                                            displayReplyPostedDate = `${yearsR} năm trước`;
                                          } else {
                                            displayReplyPostedDate = `${daysR} ngày trước`;
                                          }
                                        }
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
                                                          .replyMenuState[iter]
                                                          .state
                                                      }
                                                      isUnClickable={
                                                        editContent[i].replyBox[
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
                                                        commentMenuState[i]
                                                          .replyMenuState[iter]
                                                          .state
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
                                                                  r.replyid
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
                                                        editContent[i].replyBox[
                                                          iter
                                                        ].value
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
                                                        editContent[i].replyBox[
                                                          iter
                                                        ].value.length
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
                                                            r.replyid
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
                                                  {displayReplyPostedDate}
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
                                                            r.replyid
                                                          )
                                                        }
                                                      />
                                                    ) : (
                                                      <RCItemIconLike
                                                        onClick={() =>
                                                          handleLikeReply(
                                                            r.replyid
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
                                                    controlReplyBox[i].replyBox[
                                                      iter
                                                    ].isFocused
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
                                                          c.commentid,
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
                                          const replyUploadedDate = new Date(
                                            r.createdAt
                                          ).getTime();
                                          let secondsR = Math.round(
                                            Math.abs(
                                              currentTime - replyUploadedDate
                                            ) / 1000
                                          ); // round away miliseconds
                                          const daysR = Math.floor(
                                            secondsR / 86400
                                          );
                                          secondsR -= daysR * 86400;
                                          const hoursR = Math.floor(
                                            secondsR / 3600
                                          );
                                          secondsR -= hoursR * 3600;
                                          const minutesR = Math.floor(
                                            secondsR / 60
                                          );
                                          secondsR -= minutesR * 60;
                                          let displayReplyPostedDate;
                                          if (daysR === 0) {
                                            if (hoursR === 0) {
                                              if (minutesR === 0) {
                                                displayReplyPostedDate = `${secondsR} giây trước`;
                                              } else {
                                                displayReplyPostedDate = `${minutesR} phút trước`;
                                              }
                                            } else {
                                              displayReplyPostedDate = `${hoursR} giờ trước`;
                                            }
                                          } else {
                                            if (daysR >= 365) {
                                              const yearsR = Math.floor(
                                                daysR / 365
                                              );
                                              displayReplyPostedDate = `${yearsR} năm trước`;
                                            } else {
                                              displayReplyPostedDate = `${daysR} ngày trước`;
                                            }
                                          }
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
                                                                    r.replyid
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
                                                              r.replyid
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
                                                    {displayReplyPostedDate}
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
                                                              r.replyid
                                                            )
                                                          }
                                                        />
                                                      ) : (
                                                        <RCItemIconLike
                                                          onClick={() =>
                                                            handleLikeReply(
                                                              r.replyid
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
                                                            c.commentid,
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
                                                      commentMenuState[i].state
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
                                                                c.commentid
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
                                                    value={editContent[i].value}
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
                                                      handleIsEditCmtFocused(i)
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
                                                          c.commentid
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
                                                <CCContent>{c.value}</CCContent>
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
                                              <RCTime>
                                                {displayPostedDate}
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
                                                          c.commentid
                                                        )
                                                      }
                                                    />
                                                  ) : (
                                                    <RCItemIconLike
                                                      onClick={() =>
                                                        handleLikeComment(
                                                          c.commentid
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
                                                        c.commentid,
                                                        controlReplyBox[i].value
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
                                          {currentCommentReplies.map(
                                            (r, iter) => {
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
                                                        u.userid ===
                                                        r.replyhostid
                                                    )
                                                  ];
                                              }
                                              const hasLikeThisReply =
                                                r.likeCount.includes(
                                                  user.userid
                                                );
                                              const replyUploadedDate =
                                                new Date(r.createdAt).getTime();
                                              let secondsR = Math.round(
                                                Math.abs(
                                                  currentTime -
                                                    replyUploadedDate
                                                ) / 1000
                                              ); // round away miliseconds
                                              const daysR = Math.floor(
                                                secondsR / 86400
                                              );
                                              secondsR -= daysR * 86400;
                                              const hoursR = Math.floor(
                                                secondsR / 3600
                                              );
                                              secondsR -= hoursR * 3600;
                                              const minutesR = Math.floor(
                                                secondsR / 60
                                              );
                                              secondsR -= minutesR * 60;
                                              let displayReplyPostedDate;
                                              if (daysR === 0) {
                                                if (hoursR === 0) {
                                                  if (minutesR === 0) {
                                                    displayReplyPostedDate = `${secondsR} giây trước`;
                                                  } else {
                                                    displayReplyPostedDate = `${minutesR} phút trước`;
                                                  }
                                                } else {
                                                  displayReplyPostedDate = `${hoursR} giờ trước`;
                                                }
                                              } else {
                                                if (daysR >= 365) {
                                                  const yearsR = Math.floor(
                                                    daysR / 365
                                                  );
                                                  displayReplyPostedDate = `${yearsR} năm trước`;
                                                } else {
                                                  displayReplyPostedDate = `${daysR} ngày trước`;
                                                }
                                              }
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
                                                            src={replyHostAva}
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
                                                                editContent[i]
                                                                  .replyBox[
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
                                                                          r.replyid
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
                                                      {editContent[i].replyBox[
                                                        iter
                                                      ].isOn ? (
                                                        <CommentReplyWrap
                                                          isAppear={
                                                            editContent[i]
                                                              .replyBox[iter]
                                                              .isOn
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
                                                                  .replyBox[
                                                                  iter
                                                                ].value
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
                                                                  .replyBox[
                                                                  iter
                                                                ].value.length
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
                                                                    r.replyid
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
                                                            <p>{r.content}</p>
                                                          </ReplyContentWrap>
                                                        </ReplyCardContent>
                                                      )}
                                                      <RCOpBottom>
                                                        <RCTime>
                                                          {
                                                            displayReplyPostedDate
                                                          }
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
                                                                    r.replyid
                                                                  )
                                                                }
                                                              />
                                                            ) : (
                                                              <RCItemIconLike
                                                                onClick={() =>
                                                                  handleLikeReply(
                                                                    r.replyid
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
                                                                  c.commentid,
                                                                  controlReplyBox[
                                                                    i
                                                                  ].replyBox[
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
            </WaifuReplyContainer>
          );
        }
      } else {
        commentSection = (
          <WaifuReplyContainer>
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
                <ReplyBoxToolBar>
                  <CommentAddReactIcon />
                  <CommentImageAddIcon
                    htmlFor="comment-image"
                    /* onClick={handleOpenCmtImgArr} */
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
                <CommentButtonWrap>
                  <SendButton>Gửi</SendButton>
                </CommentButtonWrap>
              </ReplyBoxFooter>
            </UserReplySection>
            <PostReplyList>
              <ReplyListHeader>
                <ReplyListItem>Tất cả comments</ReplyListItem>
              </ReplyListHeader>
              <div>
                <div style={{ backgroundColor: "#fff" }}>
                  <NoCommentsImgContainer>
                    <NoCommentsImg
                      src={LoadingComments}
                      alt="comments-is-being-fetch"
                    />
                  </NoCommentsImgContainer>
                </div>
              </div>
              <EndOfCommentSection>
                <Nomore>Không còn bình luận nào nữa ~.~</Nomore>
              </EndOfCommentSection>
            </PostReplyList>
          </WaifuReplyContainer>
        );
      }
    } else {
      commentSection = (
        <WaifuReplyContainer>
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
              <ReplyBoxToolBar>
                <CommentAddReactIcon />
                <CommentImageAddIcon
                  htmlFor="comment-image"
                  /* onClick={handleOpenCmtImgArr} */
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
              <CommentButtonWrap>
                <SendButton>Gửi</SendButton>
              </CommentButtonWrap>
            </ReplyBoxFooter>
          </UserReplySection>
          <PostReplyList>
            <ReplyListHeader>
              <ReplyListItem>Tất cả comments</ReplyListItem>
            </ReplyListHeader>
            <div>
              <div style={{ backgroundColor: "#fff" }}>
                <NoCommentsImgContainer>
                  <NoCommentsImg
                    src={LoadingComments}
                    alt="comments-is-being-fetch"
                  />
                </NoCommentsImgContainer>
              </div>
            </div>
            <EndOfCommentSection>
              <Nomore>Không còn bình luận nào nữa ~.~</Nomore>
            </EndOfCommentSection>
          </PostReplyList>
        </WaifuReplyContainer>
      );
    }

    let totalOfRates = 0;
    let averageRating = 0;
    for (let key in waifu.rating) {
      switch (key) {
        case "five":
          totalOfRates += waifu.rating[key].length;
          averageRating += waifu.rating[key].length * 5;
          break;
        case "four":
          totalOfRates += waifu.rating[key].length;
          averageRating += waifu.rating[key].length * 4;
          break;
        case "three":
          totalOfRates += waifu.rating[key].length;
          averageRating += waifu.rating[key].length * 3;
          break;
        case "two":
          totalOfRates += waifu.rating[key].length;
          averageRating += waifu.rating[key].length * 2;
          break;
        case "one":
          totalOfRates += waifu.rating[key].length;
          averageRating += waifu.rating[key].length * 1;
          break;
      }
    }
    if (totalOfRates !== 0) {
      /* console.log(averageRating) */
      averageRating /= totalOfRates;
      averageRating = parseFloat(averageRating.toFixed(2));
      /* console.log(totalOfRates) */
    }
    ratingSection = (
      <>
        <RatingSection>
          <RatingHeader>
            <RatingTitle>Rating của nhân vật</RatingTitle>
            <AverageRating>
              <AverageTop>
                <StarIcon />
                <AverageTitle>{averageRating}</AverageTitle>
              </AverageTop>
              <AverageContent>Rating trung bình</AverageContent>
            </AverageRating>
          </RatingHeader>
          <ReviewText>Ratings</ReviewText>
          <RatingGuide>
            <i>
              Bạn chỉ có thể vote bằng cách click vào rating tương ứng ( review
              hãy viết ở phần comment nhé :3)
            </i>
          </RatingGuide>
          <RatingRowContainer>
            {/* <RatingRowItem
              onClick={() => handleRatingWaifu(waifu, 5, waifu.waifuid)}
            > */}
            <RatingType
              onClick={() => handleRatingWaifu(waifu, 5, waifu.waifuid)}
            >
              5
            </RatingType>
            <RowStarIcon />
            <RatingRange
              percent={
                totalOfRates !== 0
                  ? `${(waifu.rating.five.length / totalOfRates) * 100 - 100}%`
                  : "-100%"
              }
              onClick={() => handleRatingWaifu(waifu, 5, waifu.waifuid)}
            ></RatingRange>
            <RatingCount>{waifu.rating.five.length}</RatingCount>
            {/* </RatingRowItem>
            <RatingRowItem
              onClick={() => handleRatingWaifu(waifu, 4, waifu.waifuid)}
            > */}
            <RatingType
              onClick={() => handleRatingWaifu(waifu, 4, waifu.waifuid)}
            >
              4
            </RatingType>
            <RowStarIcon />
            <RatingRange
              percent={
                totalOfRates !== 0
                  ? `${(waifu.rating.four.length / totalOfRates) * 100 - 100}%`
                  : "-100%"
              }
              onClick={() => handleRatingWaifu(waifu, 4, waifu.waifuid)}
            ></RatingRange>
            <RatingCount>{waifu.rating.four.length}</RatingCount>
            {/* </RatingRowItem>
            <RatingRowItem
              onClick={() => handleRatingWaifu(waifu, 3, waifu.waifuid)}
            > */}
            <RatingType
              onClick={() => handleRatingWaifu(waifu, 3, waifu.waifuid)}
            >
              3
            </RatingType>
            <RowStarIcon />
            <RatingRange
              percent={
                totalOfRates !== 0
                  ? `${(waifu.rating.three.length / totalOfRates) * 100 - 100}%`
                  : "-100%"
              }
              onClick={() => handleRatingWaifu(waifu, 3, waifu.waifuid)}
            ></RatingRange>
            <RatingCount>{waifu.rating.three.length}</RatingCount>
            {/* </RatingRowItem>
            <RatingRowItem
              onClick={() => handleRatingWaifu(waifu, 2, waifu.waifuid)}
            > */}
            <RatingType
              onClick={() => handleRatingWaifu(waifu, 2, waifu.waifuid)}
            >
              2
            </RatingType>
            <RowStarIcon />
            <RatingRange
              percent={
                totalOfRates !== 0
                  ? `${(waifu.rating.two.length / totalOfRates) * 100 - 100}%`
                  : "-100%"
              }
              onClick={() => handleRatingWaifu(waifu, 2, waifu.waifuid)}
            ></RatingRange>
            <RatingCount>{waifu.rating.two.length}</RatingCount>
            {/* </RatingRowItem>
            <RatingRowItem
              onClick={() => handleRatingWaifu(waifu, 1, waifu.waifuid)}
            > */}
            <RatingType
              onClick={() => handleRatingWaifu(waifu, 1, waifu.waifuid)}
            >
              1
            </RatingType>
            <RowStarIcon />
            <RatingRange
              percent={
                totalOfRates !== 0
                  ? `${(waifu.rating.one.length / totalOfRates) * 100 - 100}%`
                  : "-100%"
              }
              onClick={() => handleRatingWaifu(waifu, 1, waifu.waifuid)}
            ></RatingRange>
            <RatingCount>{waifu.rating.one.length}</RatingCount>
            {/* </RatingRowItem> */}
          </RatingRowContainer>
        </RatingSection>
      </>
    );

    body = (
      <GridDisplay editActive={editActive}>
        <ImageHolder>
          <AddTitle style={{ margin: "0" }}>Ảnh nhân vật</AddTitle>
          <div className="image-label">
            <label htmlFor="select-image">
              {/* If has type === true => character image */}
              <ImgColumn
                type={true}
                src={!imageUrl ? waifu.image : imageUrl}
                alt="char-pic"
                data-id={`char-image`}
                onClick={(e) =>
                  !editActive &&
                  handlePreviewImage(e, waifu.image, `char-image`)
                }
              />
              {editActive && (
                <input
                  accept="image/*"
                  type="file"
                  id="select-image"
                  style={{ display: "none" }}
                  onChange={imageHandler}
                />
              )}
              <OwnedLabel>{isOwned ? "Owned" : "Not owned"}</OwnedLabel>
            </label>
          </div>
          <AddTitle style={{ margin: "0" }}>Ảnh nguồn</AddTitle>
          <div>
            <label htmlFor="select-source-image">
              {(!waifu.sourceimg && !imageSrcUrl) ? (
                <CharSrcImageInput
                  /* style={{
                    width: 
                  }}
                  htmlFor="select-source-image"
                  onClick={handleImageSrcInputClick} */
                >
                  {editActive ? <IconSrcImageAdd /> : <IconImageSrcNone />}
                  {/* <input
                    ref={imageSrcInputRef}
                    accept="image/*"
                    type="file"
                    id="select-source-image"
                    style={{ display: "none" }}
                    onChange={imageSrcHandler}
                  /> */}
                </CharSrcImageInput>
              ) : (
                <ImgColumn
                  type={false}
                  src={!imageSrcUrl ? waifu.sourceimg : imageSrcUrl}
                  alt="char-src"
                  data-id={`char-src-image`}
                  onClick={(e) =>
                    !editActive &&
                    handlePreviewImage(e, waifu.sourceimg, `char-src-image`)
                  }
                />
              )}
              {editActive && (
                <input
                  ref={imageSrcInputRef}
                  accept="image/*"
                  type="file"
                  id="select-source-image"
                  style={{ display: "none" }}
                  onChange={imageSrcHandler}
                />
              )}
            </label>
          </div>
        </ImageHolder>
        <GridInfo editActive={editActive}>
          <GridInfoItem>
            <GridInfoTitle>Tên nhân vật: </GridInfoTitle>
            {editActive ? (
              <>
                {/* <InputName
                  type="text"
                  placeholder="Ex: Yae Miko,..."
                  onChange={(e) => setCharName(e.target.value)}
                /> */}
                <NewInfoInputDiv style={{ marginTop: "4px" }}>
                  <NewInfoInputDivWrap borderChange={isCharNameFocused}>
                    <NewInfoInputText
                      type="text"
                      maxLength="100"
                      placeholder="Ex: Yae Miko,..."
                      value={charName}
                      onChange={(e) => setCharName(e.target.value)}
                      onBlur={() => setIsCharNameFocused(false)}
                      onFocus={() => setIsCharNameFocused(true)}
                    />
                    <NewInfoInputMaxCount>
                      {charName.length}/100
                    </NewInfoInputMaxCount>
                  </NewInfoInputDivWrap>
                </NewInfoInputDiv>
              </>
            ) : (
              waifu.name
            )}
          </GridInfoItem>

          {!editActive && (
            <GridInfoItem>
              <GridInfoTitle>Rank (most-owned): </GridInfoTitle>#
              {waifus.findIndex((item) => item.waifuid === waifu.waifuid) + 1}
            </GridInfoItem>
          )}

          {!editActive && (
            <GridInfoItem>
              <GridInfoTitle>Số người sở hữu: </GridInfoTitle>
              {waifu.user.length}
            </GridInfoItem>
          )}

          <GridInfoItem>
            <GridInfoTitle>Nguồn: </GridInfoTitle>
            {editActive ? (
              <>
                {/* <InputName
                  type="text"
                  placeholder="Ex: Yae Miko,..."
                  onChange={(e) => setCharSrc(e.target.value)}
                /> */}
                <NewInfoInputDiv style={{ marginTop: "4px" }}>
                  <NewInfoInputDivWrap borderChange={isCharSrcFocused}>
                    <NewInfoInputText
                      type="text"
                      maxLength="100"
                      placeholder="Ex: Genshin Impact..."
                      value={charSrc}
                      onChange={(e) => setCharSrc(e.target.value)}
                      onBlur={() => setIsCharSrcFocused(false)}
                      onFocus={() => setIsCharSrcFocused(true)}
                    />
                    <NewInfoInputMaxCount>
                      {charSrc.length}/100
                    </NewInfoInputMaxCount>
                  </NewInfoInputDivWrap>
                </NewInfoInputDiv>
              </>
            ) : (
              waifu.source
            )}
          </GridInfoItem>

          <GridInfoItem>
            <GridInfoTitle>Link nguồn: </GridInfoTitle>
            {editActive ? (
              <>
                {/* <InputName
                  type="text"
                  placeholder="Ex: Yae Miko,..."
                  onChange={(e) => setSrcLink(e.target.value)}
                /> */}
                <NewInfoInputDiv style={{ marginTop: "4px" }}>
                  <NewInfoInputDivWrap borderChange={isSrcLinkFocused}>
                    <NewInfoInputText
                      type="text"
                      maxLength="100"
                      placeholder="Ex: https:..."
                      value={srcLink}
                      onChange={(e) => setSrcLink(e.target.value)}
                      onBlur={() => setIsSrcLinkFocused(false)}
                      onFocus={() => setIsSrcLinkFocused(true)}
                    />
                    <NewInfoInputMaxCount>
                      {srcLink.length}/100
                    </NewInfoInputMaxCount>
                  </NewInfoInputDivWrap>
                </NewInfoInputDiv>
              </>
            ) : (
              waifu.sourcelink
            )}
          </GridInfoItem>

          <GridInfoItem>
            <GridInfoTitle>Link ảnh tham khảo của nhân vật: </GridInfoTitle>
            {editActive ? (
              <>
                {/* <InputName
                  type="text"
                  placeholder="Ex: Yae Miko,..."
                  onChange={(e) => setImgSrc(e.target.value)}
                /> */}
                <NewInfoInputDiv style={{ marginTop: "4px" }}>
                  <NewInfoInputDivWrap borderChange={isImgSrcFocused}>
                    <NewInfoInputText
                      type="text"
                      maxLength="100"
                      placeholder="Ex: https:..."
                      value={imgSrc}
                      onChange={(e) => setImgSrc(e.target.value)}
                      onBlur={() => setIsImgSrcFocused(false)}
                      onFocus={() => setIsImgSrcFocused(true)}
                    />
                    <NewInfoInputMaxCount>
                      {imgSrc.length}/100
                    </NewInfoInputMaxCount>
                  </NewInfoInputDivWrap>
                </NewInfoInputDiv>
              </>
            ) : (
              waifu.imagesrc
            )}
          </GridInfoItem>

          <GridDescItem>
            <GridInfoTitle>Mô tả: </GridInfoTitle>
            {editActive ? (
              <>
                {/* <DescArea
                  type="text"
                  placeholder="Ex: Yae Miko,..."
                  onChange={(e) => setCharDesc(e.target.value)}
                /> */}
                <UserReplyBody
                  style={{ marginTop: "4px" }}
                  borderChange={isCharDescFocused}
                >
                  <UserReplyTextArea
                    type="text"
                    maxLength="1000"
                    placeholder="Ex: Abcdxyz..."
                    value={charDesc}
                    onChange={(e) => setCharDesc(e.target.value)}
                    onBlur={() => setIsCharDescFocused(false)}
                    onFocus={() => setIsCharDescFocused(true)}
                  />
                  <UserReplyMaxCount>{charDesc.length}/1000</UserReplyMaxCount>
                </UserReplyBody>
              </>
            ) : (
              waifu.desc
            )}
          </GridDescItem>
        </GridInfo>
      </GridDisplay>
    );
  }

  return (
    <>
      <ToTopButton
        visible={visible}
        to={`/waifudb/${currentWaifuId}`}
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
              <ToInfoPage>Thông tin của tôi</ToInfoPage>
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
      <MainContainer>
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
          <UserListLayout>
            <UserListMain>
              <div>
                <WaifuInfoContainer>
                  <Header>
                    {editActive && (
                      <GuideText>Click vào ảnh để thay ảnh</GuideText>
                    )}
                    {editActive ? (
                      <ModalButton>
                        <CancelBtn onClick={handleOpenConfirmBoxEdit}>
                          Hủy
                        </CancelBtn>
                        <OkBtn onClick={handleOkEdit}>Lưu</OkBtn>
                      </ModalButton>
                    ) : (
                      <>
                        {user.role === "admin" ? (
                          <AddButton onClick={handleEditActive}>
                            Chỉnh sửa
                          </AddButton>
                        ) : (
                          <ModalTitle>Thông tin nhân vật</ModalTitle>
                        )}
                        <ModalButton>
                          {isWishlist ? (
                            <RiHeartsFill
                              className="heart-icon heartOn"
                              onClick={handleUnwish}
                            />
                          ) : (
                            <RiHeartsLine
                              className="heart-icon"
                              onClick={handleWish}
                            />
                          )}
                          <TrashButton
                            clickable={!isOwned}
                            onClick={handleOpenCBTrashWaifu}
                          />
                        </ModalButton>
                      </>
                    )}
                  </Header>
                  {body}
                </WaifuInfoContainer>
                {ratingSection}
                {commentSection}
              </div>
            </UserListMain>
            <div className="page-holder"></div>
            <RightContainer>
              <RollGuide>
                <HowToRollDesc>Hướng dẫn cách roll &#127922;</HowToRollDesc>
                <RollDesc>
                  <RollLi>
                    Click vào nút roll ở bên trái, nếu không thấy có gì thay đổi
                    thì reload lại trang
                  </RollLi>
                  <RollLi>
                    Sau khi roll ra nhân vật, nếu muốn lấy thì click vào nút
                    GET, còn không thì bỏ qua
                  </RollLi>
                  <RollLi>
                    Sau khi đã GET mà muốn DELETE thì có thể chỉnh sửa trong
                    phần cài đặt trang cá nhân
                  </RollLi>
                  <RollLi>
                    Mỗi <span style={{ fontWeight: "bold" }}>1 tiếng</span> bạn
                    sẽ có{" "}
                    <span style={{ fontWeight: "bold" }}>10 lần roll</span>, nhớ
                    chú ý nhé!
                  </RollLi>
                </RollDesc>
                <EndDesc>
                  Phần hướng dẫn đến đây là hết, Chúc bạn chơi vui vẻ!
                </EndDesc>
                <AmongUs>
                  ⣿⣿⣿⠟⣉⣉⡛⢿⣿⣿⣿⣿⣿⠟⣉⣉⡛⢿⣿⣿ ⣿⡟⡋⢸⡇⠶⠶⠦⢹⣿⣿⡟⡋⢸⡇⠶⠶⠦⢹⣿ ⣿⠁⡇⢸⣷⣶⣶⡆⢸⣿⣿⠁⡇⢸⣷⣶⣶⡆⢸⣿
                  ⣿⣧⡁⢸⡏⠉⢩⠁⣾⣿⣿⣧⡁⢸⡏⠉⢩⠁⣾⣿ ⣿⣿⣥⣄⣀⣀⣠⣤⣽⣿⣿⣿⣥⣄⣀⣀⣠⣤⣽⣿
                </AmongUs>
              </RollGuide>
            </RightContainer>
          </UserListLayout>
        </RootPageContainer>
      </MainContainer>
      {/* <Footer /> */}

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

export default WaifuInfo;
