import React, { useState, useEffect, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
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
  Posting,
  WaifuSearchResult,
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

import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowForward,
} from "react-icons/io";
import { AiOutlineCheckCircle } from "react-icons/ai";

import "../waifudb/waifulist.scss";
import "../profile/profile.scss";
import "../profile/title.scss";
import "../modals/cfBox.scss";

import HutaoAva from "../../images/hutaostick.png";
import RaidenAva from "../../images/raidenfbi.png";
import DoggoAva from "../../images/realdoggo.png";

import { ToastMsg } from "../toastMsg";

import { TIME_STORAGE, ROLL_STORAGE } from "../../contexts/constants";

import { WaifuContext } from "../../contexts/WaifuContext";
import { PostContext } from "../../contexts/PostContext";
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
} from "../postDetail/postDetailEle";
import {
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
} from "../postList/postListEle";
import {
  EmptyText,
  PaginateWrap,
  RgbLine,
  TableData,
  TableDisplay,
  TableHeader,
  TableRow,
  TableRowFirst,
} from "../waifudb/waifuElement";
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
import { BannerSlider } from "../postList/slideData";
import {
  AdminTag,
  PaginateFooter,
  UserActionWrap,
  UserListHeader,
  UserListLayout,
  UserListMain,
  UserListTable,
  UserListTableWrap,
  UserSearchBox,
  UserTag,
} from "./userListEle";
import {
  ButtonWrap,
  Desc,
  FillBg,
  HoyoButton,
  Rect,
  SvgWrap,
} from "../hoyoButton";
import ReactPaginate from "react-paginate";
import { BsThreeDots } from "react-icons/bs";
import { WaifuCommentContext } from "../../contexts/WaifuCommentContext";
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

const CreatePost = () => {
  const {
    authState: { user, users, usersLoading },
    logoutUser,
    increaseRoll,
    followUser,
    unfollowUser,
    loadAllUser,
    changeUserRole,
    deleteUser,
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

  const { getAllWaifuComments } = useContext(WaifuCommentContext);

  /* const {
    userState: { users, usersLoading },
    loadAllUser,
  } = useContext(UserContext); */

  let body;
  let left;
  let findingUser;
  let waifuSearchBar;

  const navigate = useNavigate();

  // Get the current time for the first render
  /* const [currentTime, setCurrentTime] = useState(new Date().getTime()); */
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const slideLength = BannerSlider.length;
  const timeoutRef = useRef(null);
  const delay = 3000;

  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [userAva, setUserAva] = useState(RaidenAva);

  // Ava handler
  const [AvaRaiden, setAvaRaiden] = useState(false);
  const [AvaHutao, setAvaHutao] = useState(false);
  const [AvaDoggo, setAvaDoggo] = useState(false);

  // Controlling preview post image
  const [isPreviewed, setIsPreviewed] = useState(true);

  const [userInputValue, setUserInputValue] = useState("");

  // Controlling post menu
  const [isSelectMenuOn, setIsSelectMenuOn] = useState(false);

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

  const [tempUser, setTempUser] = useState([]);

  const [currentPage, setCurrentPage] = useState(0);

  const [isHoyoButtonHovered, setIsHoyoButtonHovered] = useState([]);
  const [isRoleButton, setIsRoleButtonHovered] = useState([]);
  const [hoverRR, setHoverRR] = useState(false);

  // Control UserInput
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const { waifuRef, isWaifuVisible, setIsWaifuVisible } =
    useWaifuVisible(false);

  const [confirmBox, setConfirmBox] = useState(false);
  const [userDeleteId, setUserDeleteId] = useState(-1);

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

  if (user.role !== "admin") {
    navigate(-1);
  }

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

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

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const handleHoverHoyoButton = (buttonIndex) => {
    isHoyoButtonHovered[buttonIndex] = {
      ...isHoyoButtonHovered[buttonIndex],
      state: true,
    };
    /* for (let i = 0; i < isHoyoButtonHovered.length; ++i) {
      if (i !== buttonIndex) {
        isHoyoButtonHovered[i] = {
          ...isHoyoButtonHovered[i],
          state: false,
        }
      }
    } */
    setHoverRR(!hoverRR);
  };

  const handleUnhoverHoyoButton = (buttonIndex) => {
    isHoyoButtonHovered[buttonIndex] = {
      ...isHoyoButtonHovered[buttonIndex],
      state: false,
    };
    setHoverRR(!hoverRR);
  };

  const handleHoverRoleButton = (buttonIndex) => {
    isRoleButton[buttonIndex] = {
      ...isRoleButton[buttonIndex],
      state: true,
    };
    setHoverRR(!hoverRR);
  };

  const handleUnhoverRoleButton = (buttonIndex) => {
    isRoleButton[buttonIndex] = {
      ...isRoleButton[buttonIndex],
      state: false,
    };
    setHoverRR(!hoverRR);
  };

  const handleChangeUserRole = async (userId) => {
    try {
      const response = await changeUserRole({ userid: userId });

      if (response.success) {
        setMessage(response.message);
        setDesc("Chắc không đó :v?");
        setType("success");
        myFunction();
      } else {
        setMessage("Cấp role thất bại!");
        setDesc(response.message);
        setType("error");
        myFunction();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      const response = await deleteUser(userId);
      if (response.success) {
        setMessage(response.message);
        setDesc(":(");
        setType("success");
        myFunction();
        setTempUser(tempUser.filter((u) => u.userid !== userId));
        const messageBoxContainer = document.querySelector(
          ".msg-box-container-in"
        );
        const messageBox = document.querySelector(".msg-box-in");
        messageBox.classList.add("msg-box-leave");
        messageBoxContainer.classList.add("msg-box-container-leave");
        setTimeout(() => {
          messageBox.classList.add("msg-box-gone");
          messageBoxContainer.classList.remove("msg-box-container-leave");
          messageBox.classList.remove("msg-box-leave");
        }, 200);
        setConfirmBox(false);
        /* await getPosts();
        await getWaifus();
        await getAllWaifuComments(); */
      } else {
        setMessage("Xóa user thất bại!");
        setDesc(response.message);
        setType("error");
        myFunction();
      }
    } catch (err) {
      console.log(err);
    }
  };

  /* const handleSearchUser = () => {
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
    setConfirmBox(false);
  };

  const handleConfirmOption = () => {
    const messageBoxContainer = document.querySelector(".msg-box-container-in");
    const messageBox = document.querySelector(".msg-box-in");
    messageBox.classList.add("msg-box-leave");
    messageBoxContainer.classList.add("msg-box-container-leave");
    setTimeout(() => {
      messageBox.classList.add("msg-box-gone");
      messageBoxContainer.classList.remove("msg-box-container-leave");
      messageBox.classList.remove("msg-box-leave");
    }, 200);
    handleDeleteUser(userDeleteId)
  }

  const handleOpenConfirmBox = (userId) => {
    const messageBox = document.querySelector(".msg-box-in");
    messageBox.classList.remove("msg-box-gone");
    setConfirmBox(true);
    setUserDeleteId(userId);
  };

  if (usersLoading) {
    body = (
      <LeftSideNavLoading>
        <LeftSideNavLoadingIcon src={LoadingNav} alt="loading-nav" />
        <LeftSideNavLoadingDiv>
          Đang tải danh sách người dùng
        </LeftSideNavLoadingDiv>
      </LeftSideNavLoading>
    );
    findingUser = <UserSearchBox></UserSearchBox>;
  } else {
    if (tempUser.length === 0) {
      for (let i = 0; i < users.length; ++i) {
        tempUser.push(users[i]);
      }
    }

    const PER_PAGE = 10;
    const offset = currentPage * PER_PAGE;
    const pageCount = Math.ceil(tempUser.length / PER_PAGE);

    if (isHoyoButtonHovered.length === 0) {
      for (let i = 0; i < users.length; ++i) {
        isHoyoButtonHovered.push({
          state: false,
        });
        isRoleButton.push({
          state: false,
        });
      }
    }

    findingUser = (
      <UserSearchBox>
        <SearchBarInput isFocused={isComponentVisible}>
          <SearchAutoComplete>
            <AutoCompleteWrap>
              <SearchInput
                type="text"
                placeholder="Nhập id/tên user cần tìm"
                autoComplete="off"
                value={userInputValue}
                onChange={(e) => {
                  setUserInputValue(e.target.value);
                  console.log(parseInt(e.target.value));
                  if (!isNaN(parseInt(e.target.value))) {
                    if (parseInt(e.target.value) !== user.userid) {
                      setTempUser(
                        users.filter(
                          (u) => u.userid === parseInt(e.target.value)
                        )
                      );
                    }
                  } else {
                    setTempUser(
                      users.filter((u) => u.name.includes(e.target.value))
                    );
                  }
                }}
                /* onBlur={() => setIsUserInputOn(false)}
                        onFocus={() => setIsUserInputOn(true)} */
                onClick={() => setIsComponentVisible(true)}
                ref={ref}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    /* handleSearchUser(); */
                    setIsComponentVisible(false);
                  }
                }}
              />
              <ClearInput
                isDisplay={userInputValue !== ""}
                onClick={() => {
                  setUserInputValue("");
                  setTempUser(users);
                }}
              ></ClearInput>
            </AutoCompleteWrap>
            <AutoCompleteResult
              isDisplay={isComponentVisible}
              onClick={() => setIsComponentVisible(true)}
            >
              {userInputValue !== "" ? (
                <AutoCompleteList isDisplay={isComponentVisible}>
                  <AutoCompleteItem
                    /* onClick={handleSearchUser} */
                    onClick={() => setIsComponentVisible(false)}
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
                                <LinkRouter to={`/otheruser/${item.userid}`}>
                                  <SBPHListItem>{item.name}</SBPHListItem>
                                </LinkRouter>
                              );
                            }
                          } else {
                            return (
                              <LinkRouter to={`/otheruser/${item.userid}`}>
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
          <IconSearch
            /* onClick={handleSearchUser} */ onClick={() =>
              setIsComponentVisible(false)
            }
          />
        </SearchBarInput>
      </UserSearchBox>
    );

    body = (
      <>
        <UserListTableWrap>
          <TableDisplay>
            <thead>
              <TableRowFirst>
                <TableHeader style={{ width: "10%", maxWidth: "10%" }}>
                  UserID
                </TableHeader>
                <TableHeader style={{ width: "30%", maxWidth: "30%" }}>
                  Tên người dùng
                </TableHeader>
                <TableHeader style={{ width: "20%", maxWidth: "20%" }}>
                  Tên tài khoản
                </TableHeader>
                <TableHeader
                  style={{ width: "10%", maxWidth: "10%", textAlign: "center" }}
                >
                  Role
                </TableHeader>
                <TableHeader
                  style={{ width: "30%", maxWidth: "30%", textAlign: "center" }}
                >
                  Tùy chọn
                </TableHeader>
              </TableRowFirst>
            </thead>
          </TableDisplay>
          <RgbLine></RgbLine>
          <TableDisplay>
            <tbody>
              {tempUser.slice(offset, offset + PER_PAGE).map((item, index) => {
                if (item.userid !== user.userid) {
                  return (
                    <TableRow key={index}>
                      <TableData
                        onClick={() =>
                          navigate(
                            item.userid === user.userid
                              ? `/user/${item.userid}`
                              : `/otheruser/${item.userid}`
                          )
                        }
                        style={{ width: "10%", maxWidth: "10%" }}
                      >
                        {item.userid}
                      </TableData>
                      <TableData
                        style={{ width: "30%", maxWidth: "30%" }}
                        onClick={() =>
                          navigate(
                            item.userid === user.userid
                              ? `/user/${item.userid}`
                              : `/otheruser/${item.userid}`
                          )
                        }
                      >
                        {item.name}
                      </TableData>
                      <TableData
                        style={{ width: "20%", maxWidth: "20%" }}
                        onClick={() =>
                          navigate(
                            item.userid === user.userid
                              ? `/user/${item.userid}`
                              : `/otheruser/${item.userid}`
                          )
                        }
                      >
                        {item.username}
                      </TableData>
                      <TableData
                        style={{ width: "10%", maxWidth: "10%" }}
                        onClick={() =>
                          navigate(
                            item.userid === user.userid
                              ? `/user/${item.userid}`
                              : `/otheruser/${item.userid}`
                          )
                        }
                      >
                        {item.role === "admin" ? (
                          <AdminTag>Admin</AdminTag>
                        ) : (
                          <UserTag>User</UserTag>
                        )}
                      </TableData>
                      <TableData
                        style={{
                          width: "30%",
                          maxWidth: "30%",
                          textAlign: "center",
                        }}
                      >
                        <UserActionWrap>
                          <HoyoButton
                            onMouseOver={() => handleHoverHoyoButton(index)}
                            onMouseOut={() => handleUnhoverHoyoButton(index)}
                            onClick={() => handleOpenConfirmBox(item.userid)}
                          >
                            <ButtonWrap>
                              <FillBg
                                isHovered={isHoyoButtonHovered[index].state}
                              ></FillBg>
                              <SvgWrap>
                                <Rect
                                  isHovered={isHoyoButtonHovered[index].state}
                                  rx="17"
                                  pathLength="700"
                                ></Rect>
                              </SvgWrap>
                              <Desc>Xóa</Desc>
                            </ButtonWrap>
                          </HoyoButton>
                          <HoyoButton
                            onMouseOver={() => handleHoverRoleButton(index)}
                            onMouseOut={() => handleUnhoverRoleButton(index)}
                            onClick={() => handleChangeUserRole(item.userid)}
                          >
                            <ButtonWrap>
                              <FillBg
                                isHovered={isRoleButton[index].state}
                              ></FillBg>
                              <SvgWrap>
                                <Rect
                                  isHovered={isRoleButton[index].state}
                                  rx="17"
                                  pathLength="700"
                                ></Rect>
                              </SvgWrap>
                              <Desc>
                                {item.role === "admin"
                                  ? "Tước quyền"
                                  : "Cấp quyền"}
                              </Desc>
                            </ButtonWrap>
                          </HoyoButton>
                        </UserActionWrap>
                      </TableData>
                    </TableRow>
                  );
                }
              })}
            </tbody>
          </TableDisplay>
        </UserListTableWrap>
        <PaginateFooter>
          <ReactPaginate
            previousLabel={<IoIosArrowBack />}
            nextLabel={<IoIosArrowForward />}
            pageCount={pageCount}
            onPageChange={handlePageClick}
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
        </PaginateFooter>
      </>
    );
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
        <MenuItem to="/postlist">
          <Posting />
          <LeftItem>Trang chủ</LeftItem>
        </MenuItem>
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
        <ToTopButton visible={visible} to={`/userlist`} onClick={toggleHome}>
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
          <UserListLayout>
            <UserListMain>
              <div>
                <UserListTable>
                  <UserListHeader>
                    Danh sách người dùng
                    {findingUser}
                  </UserListHeader>
                  {body}
                </UserListTable>
              </div>
            </UserListMain>
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
                        onClick={() => setCurrentSlide(index)}
                      ></BannerBullet>
                    ))}
                  </BannerPagination>
                </BannerWrapper>
              </Banner>
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
          </UserListLayout>
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
          <MessageBoxContent>Xác nhận xóa người dùng?</MessageBoxContent>
          <MessageBoxFooter>
            <MessageBoxButton onClick={handleCloseConfirmBox} notClose={false}>
              <span>Hủy</span>
            </MessageBoxButton>
            <MessageBoxButton
              onClick={handleConfirmOption}
              notClose={true}
            >
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
