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
  ArticleCardTitle,
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

import HutaoAva from "../../images/hutaostick.png";
import RaidenAva from "../../images/raidenfbi.png";
import DoggoAva from "../../images/realdoggo.png";

import RollSome from "../../videos/rollsome.gif";
import Kazubu from "../../videos/kazubu.gif";
import Lumine from "../../videos/Lumine.gif";

import LiyueBg from "../../images/liyue.jpg";
import MondoBg from "../../images/mondo.jpg";
import InazumaBg from "../../images/inazuma.jpg";
import {
  AddModal,
  AddTitle,
  CenterEmpty,
  EmptyImg,
  EmptyText,
  InputName,
  ListOfWaifus,
  ModalButton,
  ModalHeader,
  ModalTitle,
  PaginateWrap,
  RgbLine,
  TableData,
  TableDisplay,
  TableHeader,
  TableRow,
  TableRowFirst,
} from "../waifudb/waifuElement";

import { ToastMsg } from "../toastMsg";

import { TIME_STORAGE, ROLL_STORAGE } from "../../contexts/constants";

import { WaifuContext } from "../../contexts/WaifuContext";
import { PostContext } from "../../contexts/PostContext";
import { UserContext } from "../../contexts/UsersContext";

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
import { NoPostImg, NoPosts, PostNewArrow } from "../postList/postListEle";
import { LoadingContainer } from "../createpost/createPostElement";

const UserProfile = () => {
  const {
    authState: { user },
    logoutUser,
    changeAva,
    changeBg,
    changeInfo,
    increaseRoll,
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
    userState: { users, usersLoading },
  } = useContext(UserContext);

  let body;
  let postPart;
  let left;
  let numberOfTopTier = 0;
  const userParamId = useParams();
  const userParamIdInt = parseInt(userParamId.id);
  let userParam;

  const navigate = useNavigate();

  const [active, setActive] = useState(true);
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [userAva, setUserAva] = useState(RaidenAva);
  const [bgImage, setBgImage] = useState(InazumaBg);
  const [avaModalVisible, setAvaModalVisible] = useState(false);
  const [bgModalVisible, setBgModalVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [openTitle, setOpenTitle] = useState(false);
  const [username, setUsername] = useState("");
  const [usersign, setUsersign] = useState("");

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

  // Controlling preview post image
  const [isPreviewed, setIsPreviewed] = useState(true);

  // Controlling post menu
  const [isSelectMenuOn, setIsSelectMenuOn] = useState(false);

  // Controlling NavPostDialog
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Used for searching
  const [searchValue, setSearchValue] = useState("");

  // Control SelectedMenu
  const [postSelectState, setPostSelectState] = useState([]);

  // Timeout
  const initTimer = 3600000; //in miliseconds, 3600000 = 1 hour

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
      await getPosts();
    }
    fetchData();
  }, []);

  const handlePageOwnClick = ({ selected: selectedPage }) => {
    setCurrentOwnPage(selectedPage);
  };

  const handlePageWishClick = ({ selected: selectedPage }) => {
    setCurrentWishPage(selectedPage);
  };

  const pageOwnCount = Math.ceil(user.waifulist.length / PER_PAGE);
  const pageWishCount = Math.ceil(user.wishlist.length / PER_PAGE);

  const handlerAvaRaiden = () => {
    setAvaRaiden(true);
    setAvaDoggo(false);
    setAvaHutao(false);
  };

  const handlerAvaHutao = () => {
    setAvaRaiden(false);
    setAvaDoggo(false);
    setAvaHutao(true);
  };

  const handlerAvaDoggo = () => {
    setAvaRaiden(false);
    setAvaDoggo(true);
    setAvaHutao(false);
  };

  const handlerBgIna = () => {
    setBgIna(true);
    setBgLiyue(false);
    setBgMon(false);
  };
  const handlerBgLi = () => {
    setBgIna(false);
    setBgLiyue(true);
    setBgMon(false);
  };
  const handlerBgMon = () => {
    setBgIna(false);
    setBgLiyue(false);
    setBgMon(true);
  };

  const handlerModalOpen = () => {
    setModalOpen(true);
  };

  const showAvaModal = () => {
    setAvaModalVisible(true);
  };

  const handleOpenTitle = () => {
    setOpenTitle(true);
  };

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

  const handleOkAva = async () => {
    let newAva;
    if (AvaRaiden) {
      newAva = "RaidenAva";
    } else if (AvaHutao) {
      newAva = "HutaoAva";
    } else {
      newAva = "DoggoAva";
    }

    await changeAva({ newAva });
    setAvaModalVisible(false);
    setMessage("Thay đổi thành công!");
    setDesc("Thông tin của ngài đã được lưu :D");
    setType("success");
    myFunction();
  };

  const handleCancelAva = () => {
    switch (user.avatar) {
      case "RaidenAva":
        handlerAvaRaiden();
        break;
      case "DoggoAva":
        handlerAvaDoggo();
        break;
      case "HutaoAva":
        handlerAvaHutao();
        break;
      default:
        handlerAvaRaiden();
        break;
    }
    setAvaModalVisible(false);
  };

  const showBgModal = () => {
    setBgModalVisible(true);
  };

  const handleCancelModal = () => {
    setUsername("");
    setUsersign("");
    setModalOpen(false);
  };

  const handleOkModal = async () => {
    const updateInfo = await changeInfo({
      name: username,
      sign: usersign,
    });

    if (updateInfo.success) {
      setMessage("Thay đổi thành công!");
      setDesc("Thông tin của ngài đã được lưu :D");
      setType("success");
      myFunction();
      setUsername("");
      setUsersign("");
      setModalOpen(false);
    } else {
      setMessage("Thay đổi thất bại!");
      setDesc(updateInfo.message);
      setType("error");
      myFunction();
    }
  };

  const handleOkBg = async () => {
    let newBg;
    if (BgIna) {
      newBg = "InazumaBg";
    } else if (BgLiyue) {
      newBg = "LiyueBg";
    } else {
      newBg = "MondoBg";
    }

    await changeBg({ newBg });
    setBgModalVisible(false);
    setMessage("Thay đổi thành công!");
    setDesc("Thông tin của ngài đã được lưu :D");
    setType("success");
    myFunction();
  };

  const handleCancelBg = () => {
    switch (user.background) {
      case "InazumaBg":
        handlerBgIna();
        break;
      case "MondoBg":
        handlerBgMon();
        break;
      case "LiyueBg":
        handlerBgLi();
        break;
      default:
        handlerBgIna();
        break;
    }
    setBgModalVisible(false);
  };

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

  const handleActive = () => {
    setActive(!active);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleTitleCancel = () => {
    setOpenTitle(false);
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

    switch (user.background) {
      case "InazumaBg":
        setBgIna(true);
        setBgImage(InazumaBg);
        break;
      case "MondoBg":
        setBgMon(true);
        setBgImage(MondoBg);
        break;
      case "LiyueBg":
        setBgLiyue(true);
        setBgImage(LiyueBg);
        break;
      default:
        setBgIna(true);
        setBgImage(InazumaBg);
        break;
    }
  }, [user.avatar, user.background]);

  const handleLikePost = async (postId) => {
    try {
      const afterLikedPost = await likePost({ postid: postId });
      if (afterLikedPost.success) {
        setMessage("Đã tính like vào post này nha :v!");
        setDesc("Đừng để ý thông báo này :3 :v!");
        setType("success");
        myFunction();
        const newPostIndex = posts.findIndex((p) => p.postid === afterLikedPost.updatedPost.postid)
        posts[newPostIndex] = {...afterLikedPost.updatedPost};
      } else {
        setMessage("Like post thất bại!");
        setDesc(afterLikedPost.message);
        setType("error");
        myFunction();
      }
    } catch (err) {
      console.log(err)
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
        const newPostIndex = posts.findIndex((p) => p.postid === afterUnlikedPost.updatedPost.postid)
        posts[newPostIndex] = {...afterUnlikedPost.updatedPost};
      } else {
        setMessage("Unlike post thất bại!");
        setDesc(afterUnlikedPost.message);
        setType("error");
        myFunction();
      }
    } catch (err) {
      console.log(err)
    }
  }

  const handleDeletePost = async (id) => {
    try {
      const delResponse = await deletePost(id);
      if (delResponse.success) {
        setMessage("Xóa post thành công!");
        setDesc("Ơ kìa...");
        setType("success");
        myFunction();
        /* posts.filter((p) => p.postid !== id); */
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

  if (!usersLoading) {
    const userIndex = users.findIndex(u => u.userid === userParamIdInt);
    if (userIndex === -1) {
      navigate("/404");
    } else {
      userParam = users[userIndex];
      if (userParam.userid !== user.userid) {
        navigate(`/otheruser/${userParam.userid}`);
      }
    }
  }

  if (postsLoading) {
    postPart = (
      <>
        <List>
          <div
            style={{
              width: "232px",
              height: "0",
              marginRight: "25px",
            }}
          ></div>
          <PostsContainer>
            <LoadingContainer>
              <Loading src={Lumine} alt="loading-chilling" />
            </LoadingContainer>
          </PostsContainer>
          <div
            style={{
              width: "272px",
              height: "0",
            }}
          ></div>
        </List>
      </>
    );
  } else if (posts.length === 0) {
    postPart = (
      <>
        <List>
          <div
            style={{
              width: "232px",
              height: "0",
              marginRight: "25px",
            }}
          ></div>
          <PostsContainer>
            <NoPosts>
              <NoPostImg src={NoPost} alt="no-posts" />
              <EmptyText>Chưa có bài viết nào được tạo</EmptyText>
            </NoPosts>
          </PostsContainer>
          <div
            style={{
              width: "272px",
              height: "0",
            }}
          ></div>
        </List>
      </>
    );
  } else {
    const myPost = posts.filter((post) => {
      return post.postAuthor === user._id;
    });
    if (myPost.length === 0) {
      postPart = (
        <>
          <List>
            <div
              style={{
                width: "232px",
                height: "0",
                marginRight: "25px",
              }}
            ></div>
            <PostsContainer>
              <NoPosts>
                <NoPostImg src={NoPost} alt="no-posts" />
                <EmptyText>Chưa có bài viết nào được tạo</EmptyText>
              </NoPosts>
            </PostsContainer>
            <div
              style={{
                width: "272px",
                height: "0",
              }}
            ></div>
          </List>
        </>
      );
    } else {
      if (postSelectState.length === 0) {
        myPost.map((p) => postSelectState.push({
          postid: p.postid,
          state: false,
        }))
      }
      postPart = (
        <>
          {myPost.map((p, i) => {
            const LikedPostIndex = p.postLikes.findIndex(
              (u) => u === user.userid
            );
            const hasLiked = LikedPostIndex !== -1 ? true : false;
            return (
              <>
                <List key={p.postid}>
                  <div
                    style={{
                      width: "232px",
                      height: "0",
                      marginRight: "25px",
                    }}
                  ></div>
                  <PostsContainer key={p.postid}>
                    <CardHeader>
                      <CardUserInfo>
                        <CardArticle>
                          <PostAva to={`/user/${user.userid}`}>
                            <PostAvaImg src={userAva} alt="user-post-ava" />
                          </PostAva>
                          <PostCardInfo>
                            <PostCardName to={`/user/${user.userid}`}>
                              {user.name}
                            </PostCardName>
                            <ArticleCardInfo>{p.createdAt}</ArticleCardInfo>
                          </PostCardInfo>
                        </CardArticle>
                      </CardUserInfo>
                      <ArticleCardAction>
                        <CardAction isActive={postSelectState[i].state}>
                          <EditIcon
                            onClick={() => handleSelectMenu(i)}
                            src={EditBtn}
                            alt="edit-btn"
                          />
                        </CardAction>
                        <PostSelectMenu isActive={postSelectState[i].state}>
                          <SelectMenuTitle>Khác</SelectMenuTitle>
                          <SelectMenuList>
                            <LinkRouter to={`/posts/${p.postid}`}>
                              <SelectMenuItem>
                                <EditPostIcon src={EditBtn} alt="edit-post" />
                                <SelectMenuItemSpan>
                                  Chỉnh sửa bài viết
                                </SelectMenuItemSpan>
                              </SelectMenuItem>
                            </LinkRouter>
                            <SelectMenuItem
                              onClick={() => handleDeletePost(p.postid)}
                            >
                              <TrashFillIcon />
                              <SelectMenuItemSpan>Xóa bài viết</SelectMenuItemSpan>
                            </SelectMenuItem>
                            <SelectMenuItem onClick={() => handleSelectMenu(i)}>
                              <CancelSelectMenuIcon />
                              <SelectMenuItemSpan>Hủy</SelectMenuItemSpan>
                            </SelectMenuItem>
                          </SelectMenuList>
                        </PostSelectMenu>
                      </ArticleCardAction>
                    </CardHeader>
                    <PostRouter to={`/posts/${p.postid}`}>
                      <ArticleCardTitle>{p.postTitle}</ArticleCardTitle>
                      <ArticleCardContent>{p.postContent}</ArticleCardContent>
                      {p.postImage && (
                        <ArticleCardPreview>
                          <ArticleImage src={p.postImage} alt="post-image" />
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
                              <CardIconLikeFill onClick={() => handleUnlikePost(p.postid)} />
                            ) : (
                              <CardIconLike onClick={() => handleLikePost(p.postid)} />
                            )}
                            <CardDataSpan>{p.postLikes.length}</CardDataSpan>
                          </CardItemLike>
                        </CardDataItem>
                        <CardDataItem>
                          <CardItemComment to={`/posts/${p.postid}`}>
                            <CardIconComment />
                            <CardDataSpan>{p.comment.length}</CardDataSpan>
                          </CardItemComment>
                        </CardDataItem>
                      </ArticleCardData>
                    </ArticleCardFooter>
                  </PostsContainer>
                  <div
                    style={{
                      width: "272px",
                      height: "0",
                    }}
                  ></div>
                </List>
              </>
            );
          })}
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
    body = (
      <LoadingWrap>
        <Loading src={Chilling} alt="loading-chilling" />
      </LoadingWrap>
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

    for (let waifuId of user.waifulist) {
      const searchIndex = waifus.findIndex((item) => item._id === waifuId);
      if (searchIndex >= 0 && searchIndex <= 9) {
        numberOfTopTier = numberOfTopTier + 1;
      }
    }

    active
      ? (body = (
          <>
            {user.waifulist.length !== 0 ? (
              <>
                <ListOfWaifus>
                  {user.waifulist
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
            {user.wishlist.length !== 0 ? (
              <>
                <ListOfWaifus>
                  {user.wishlist
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
                  <EmptyText>Bạn chưa cho waifu nào vào Wishlist</EmptyText>
                </CenterEmpty>
              </>
            )}
          </>
        ));

    left = (
      <LeftSideNav>
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
  }

  return (
    <>
      <ToTopButton
        visible={visible}
        to={`/user/${user.userid}`}
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
      {left}
      <Container
        dark={avaModalVisible || bgModalVisible || modalOpen || openTitle}
      >
        <StickySection>
          <div
            style={{
              width: "232px",
              height: "0",
              marginRight: "25px",
            }}
          ></div>
          <AvaBgSection bgImage={bgImage}>
            <EditIconWrap>
              <EditIcon onClick={showBgModal} src={EditBtn} alt="edit-btn" />
            </EditIconWrap>
            <AvaEditContainer>
              <UserBigAva onClick={showAvaModal} src={userAva} alt="big-ava" />
              <EditButton onClick={handlerModalOpen}>Thiết lập</EditButton>
            </AvaEditContainer>
            <UserInfo>
              <Name>
                <ProfileName>{user.name}</ProfileName>
                {user.title.map((item) => (
                  <span
                    key={item.titleName}
                    onClick={handleOpenTitle}
                    className={item.className}
                  >
                    {item.titleName}
                  </span>
                ))}
                {/* <span className="normal-title">Vua loli &#9818;</span>
                <span className="elite-title">King Harem &#9825;</span>
                <span className="elite-title">God of roll &#127922;</span> */}
              </Name>
              <Sign>
                <BsChatLeftText />
                <SignTitle>{user.sign}</SignTitle>
              </Sign>
              <Counter>
                <CounterTitle>
                  <CTNum>{user.roll_count}</CTNum>
                  <CTText>Số lần roll</CTText>
                </CounterTitle>
                <CounterTitle>
                  <CTNum>{user.waifulist.length}</CTNum>
                  <CTText>Số waifu sở hữu</CTText>
                </CounterTitle>
                <CounterTitle>
                  <CTNum>{numberOfTopTier}</CTNum>
                  <CTText>Số waifu top tier</CTText>
                </CounterTitle>
              </Counter>
            </UserInfo>
          </AvaBgSection>
          <div
            style={{
              width: "272px",
              height: "0",
            }}
          ></div>
        </StickySection>
        <Contact>
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
        </Contact>
        <List>
          <div
            style={{
              width: "232px",
              height: "0",
              marginRight: "25px",
            }}
          ></div>
          <ListWrap>
            <ListHeader>
              <div
                className={active ? "list-section active-list" : "list-section"}
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
          <div
            style={{
              width: "272px",
              height: "0",
            }}
          ></div>
        </List>

        <List>
          <div
            style={{
              width: "232px",
              height: "0",
              marginRight: "25px",
            }}
          ></div>
          <PostWrap>
            <PostEntryTitle>Bài đăng của bạn</PostEntryTitle>
            <PostEntryInfo>Nơi bạn có thể xem những bài đã đăng</PostEntryInfo>
          </PostWrap>
          <div
            style={{
              width: "272px",
              height: "0",
            }}
          ></div>
        </List>
        {postPart}
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

      <Modal visible={avaModalVisible}>
        <div className="my-info">Chọn ava bạn muốn thay</div>
        <ImgSelect>
          <SelectedContainer active={AvaRaiden} width={80} borderR={true}>
            <AvaToChoose
              onClick={handlerAvaRaiden}
              src={RaidenAva}
              alt="raiden-ava"
              active={AvaRaiden}
            />
          </SelectedContainer>
          <SelectedContainer active={AvaHutao} width={80} borderR={true}>
            <AvaToChoose
              onClick={handlerAvaHutao}
              src={HutaoAva}
              alt="hutao-ava"
              active={AvaHutao}
            />
          </SelectedContainer>
          <SelectedContainer active={AvaDoggo} width={80} borderR={true}>
            <AvaToChoose
              onClick={handlerAvaDoggo}
              src={DoggoAva}
              alt="doggo-ava"
              active={AvaDoggo}
            />
          </SelectedContainer>
        </ImgSelect>
        <ModalFooter>
          <CancelBtn onClick={handleCancelAva}>Hủy</CancelBtn>
          <OkBtn onClick={handleOkAva}>Đổi</OkBtn>
        </ModalFooter>
      </Modal>
      <Modal visible={bgModalVisible}>
        <div className="my-info">Chọn background bạn muốn thay</div>
        <ImgSelect>
          <SelectedContainer active={BgIna} width={130} borderR={false}>
            <BgToChoose
              active={BgIna}
              onClick={handlerBgIna}
              src={InazumaBg}
              alt="inazuma"
            />
          </SelectedContainer>
          <SelectedContainer active={BgLiyue} width={130} borderR={false}>
            <BgToChoose
              active={BgLiyue}
              onClick={handlerBgLi}
              src={LiyueBg}
              alt="liyue"
            />
          </SelectedContainer>
          <SelectedContainer active={BgMon} width={130} borderR={false}>
            <BgToChoose
              active={BgMon}
              onClick={handlerBgMon}
              src={MondoBg}
              alt="monstadt"
            />
          </SelectedContainer>
        </ImgSelect>
        <ModalFooter>
          <CancelBtn onClick={handleCancelBg}>Hủy</CancelBtn>
          <OkBtn onClick={handleOkBg}>Đổi</OkBtn>
        </ModalFooter>
      </Modal>
      {/* <Footer /> */}

      <AddModal open={modalOpen}>
        <ModalHeader>
          <ModalTitle>Thông tin của tôi</ModalTitle>
          <ModalButton>
            <CancelBtn onClick={handleCancelModal}>Hủy</CancelBtn>
            <OkBtn onClick={handleOkModal}>Đổi</OkBtn>
          </ModalButton>
        </ModalHeader>
        <AddTitle>Tên người dùng</AddTitle>
        <InputName
          type="text"
          placeholder="Ex: Ramu-chan..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <AddTitle>Chữ ký</AddTitle>
        <InputName
          type="text"
          placeholder="Ex: Wjbu chúa..."
          value={usersign}
          onChange={(e) => setUsersign(e.target.value)}
        />
      </AddModal>

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
      </TitleModal>

      {/* <ImageContainer isAppear={isPreviewed}>
        <ImageBg></ImageBg>
        <PreviewWrap>
          <PreviewContainer>
            <PreviewItem>
              <PreviewZoomWrap>
                <PreviewImgHolder></PreviewImgHolder>
                <ImageShow src={InazumaBg} alt="post-image-zoom" />
              </PreviewZoomWrap>
            </PreviewItem>
          </PreviewContainer>
          <PreviewUi>
            <PreviewTopBar>
              <PreviewCounter>1/1</PreviewCounter>
              <CloseButton />
            </PreviewTopBar>
          </PreviewUi>
        </PreviewWrap>
      </ImageContainer> */}
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

export default UserProfile;
