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
  Posting,
  NavRightPart,
  PostIconNavContainer,
  PostIconNavWrap,
  PostIconNav,
  NavPostDialog,
  NavPostNew,
  NavPostNewContent,
  NavPostNewItem,
  DialogPostButton,
  NewPostIconWrap,
  NewPostIcon,
  DialogSpan,
  LeftSideNavLoading,
  LeftSideNavLoadingIcon,
  LeftSideNavLoadingDiv,
  NewImgIconWrap,
  NewImgIcon,
  NewVidIcon,
  NewVidIconWrap,
  UserList,
  WaifuSearchResult,
  PostsContainer,
  NavLogoNotLink,
} from "../profile/pfelement";

import { Loading } from "../Loading";

import Chilling from "../../videos/chillin.gif";
import LoadingNav from "../../videos/loadingNav.gif";
import WebLogo from "../../images/logoweb.png";
import LeftImage from "../../images/logoroll.svg";
import Paimoe from "../../images/paiface.png";

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
import "../modals/cfBox.scss";

import HutaoAva from "../../images/hutaostick.png";
import RaidenAva from "../../images/raidenfbi.png";
import DoggoAva from "../../images/realdoggo.png";
import DeleteIcon from "../../images/deleteIcon.png";

import { ImgButton, ImgShow } from "../waifudb/waifuElement";

import { ToastMsg } from "../toastMsg";

import { TIME_STORAGE, ROLL_STORAGE } from "../../contexts/constants";

import { WaifuContext } from "../../contexts/WaifuContext";
import { PostContext } from "../../contexts/PostContext";

import Timer from "../timer";
import {
  AllContainer,
  CancelImage,
  ConfirmVidContainer,
  CreatePostFooter,
  EditorContainer,
  EditorInput,
  EditorMaxCount,
  FormImgUploadCover,
  FormImgUploadDelete,
  FormImgUploadDeleteIcon,
  FormImgUploaded,
  FormItemContainer,
  FormItemContainerLabel,
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
  MenuItemNotLink,
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
} from "./createPostElement";
import { PostNewArrow } from "../postList/postListEle";
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
    authState: { user },
    logoutUser,
    increaseRoll,
  } = useContext(AuthContext);

  const {
    waifuState: { waifus, waifusLoading },
    getWaifus,
  } = useContext(WaifuContext);

  const {
    /* postState: { post, postLoading },
    getPosts, */
    createPost,
  } = useContext(PostContext);

  let body;
  let left;
  let waifuSearchBar;

  const imageInputRef = useRef(null);

  const navigate = useNavigate();

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [userAva, setUserAva] = useState(RaidenAva);

  // Ava handler
  const [AvaRaiden, setAvaRaiden] = useState(false);
  const [AvaHutao, setAvaHutao] = useState(false);
  const [AvaDoggo, setAvaDoggo] = useState(false);

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

  // Controlling the header bar
  const [isPHRMenuOn, setIsPHRMenuOn] = useState(false);
  const [normalPost, setNormalPost] = useState(true);
  const [picturePost, setPicturePost] = useState(false);
  const [videoPost, setVideoPost] = useState(false);

  // Form Control
  /* const inputFocused = useRef(null) */
  const [isTitleInputFocused, setIsTitleInputFocused] = useState(false);
  const [isTagInputFocused, setIsTagInputFocused] = useState(false);
  const [isContentInputFocused, setIsContentInputFocused] = useState(false);
  const [isVideoInputFocused, setIsVideoInputFocused] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postTag, setPostTag] = useState("");
  const [postContent, setPostContent] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [hasChosenVid, setHasChosenVid] = useState(false);
  /* const [imageUrl, setImageUrl] = useState(null); */
  const [imageArr, setImageArr] = useState([]);
  const [isFixed, setIsFixed] = useState(false);
  const [nextRoute, setNextRoute] = useState("");
  const [isRollRouteClicked, setIsRollRouteClicked] = useState(false);

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
    document.title = "Đăng bài viết";
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
    if (window.scrollY >= 8) {
      setIsFixed(true);
      if (window.scrollY >= 80) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    } else {
      setVisible(false);
      setIsFixed(false);
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
        handleOpenConfirmBox(`/waifudb/${waifus[searchIndex].waifuid}`);
        /* navigate(`/waifudb/${waifus[searchIndex].waifuid}`); */
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

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        /* setImageUrl(reader.result); */
        setImageArr([...imageArr, reader.result]);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleNormalPost = () => {
    setNormalPost(true);
    setPicturePost(false);
    setVideoPost(false);
    setIsPHRMenuOn(false);
  };

  const handlePicturePost = () => {
    setNormalPost(false);
    setPicturePost(true);
    setVideoPost(false);
    setIsPHRMenuOn(false);
  };

  const handleVideoPost = () => {
    setNormalPost(false);
    setPicturePost(false);
    setVideoPost(true);
    setIsPHRMenuOn(false);
  };

  const handleCreatePost = async () => {
    const tags = postTag.split(",");
    const postType = picturePost ? "picture" : videoPost ? "video" : "normal";
    try {
      const newPost = await createPost({
        postTitle: postTitle,
        postContent: postContent,
        postTag: tags,
        postImage: [...imageArr],
        type: postType,
        videoUrl: videoUrl,
      });

      if (newPost.success) {
        setMessage("Đăng bài thành công!");
        setDesc("Chuẩn bị về trang chủ trong 3s...");
        setType("success");
        myFunction();
        setPostTitle("");
        setPostContent("");
        setPostTag("");
        setVideoUrl("");
        setHasChosenVid(false);
        /* setImageUrl(null); */
        setImageArr([]);
        /* const id = setInterval(() => navigate("/postlist"), 3000);
        clearInterval(id); */
        setTimeout(() => navigate("/postlist"), 3000);
      } else {
        setMessage("Đăng bài thất bại!");
        setDesc(newPost.message);
        setType("error");
        myFunction();
      }
    } catch (err) {
      console.log(err);
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

  const handleImageInputClick = () => {
    imageInputRef.current.click();
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
    if (isRollRouteClicked) setIsRollRouteClicked(false);
  };

  const handleOpenConfirmBox = (route) => {
    if (
      !postTitle &&
      !postContent &&
      !postTag &&
      !videoUrl &&
      imageArr.length === 0
    ) {
      navigate(route);
    } else {
      const messageBox = document.querySelector(".msg-box-in");
      messageBox.classList.remove("msg-box-gone");
      setNextRoute(route);
    }
  };

  const handleOpenConfirmBoxRoll = (route) => {
    if (
      !postTitle &&
      !postContent &&
      !postTag &&
      !videoUrl &&
      imageArr.length === 0
    ) {
      startReset();
      navigate(route);
    } else {
      const messageBox = document.querySelector(".msg-box-in");
      messageBox.classList.remove("msg-box-gone");
      setIsRollRouteClicked(true);
      setNextRoute(route);
    }
  };

  const handleConfirmBox = () => {
    if (isRollRouteClicked) startReset();
    /* setPostTitle("");
    setPostContent("");
    setPostTag("");
    setVideoUrl("");
    setHasChosenVid(false);
    setImageArr([]); */
    navigate(nextRoute);
  };

  if (waifusLoading) {
    waifuSearchBar = <div style={{ width: "300px" }}></div>;
    left = (
      <LeftSideNav>
        <LeftSideNavLoading>
          <LeftSideNavLoadingIcon src={LoadingNav} alt="loading-nav" />
          <LeftSideNavLoadingDiv>Đang tải</LeftSideNavLoadingDiv>
        </LeftSideNavLoading>
      </LeftSideNav>
    );
  } else if (waifus.length === 0) {
    waifuSearchBar = <div style={{ width: "300px" }}></div>;
    left = (
      <>
        <MenuItemNotLink onClick={() => handleOpenConfirmBox(`/waifudb`)}>
          <LeftImg src={LeftImage} alt="roll-waifu" />
          <LeftItem>Roll Waifu</LeftItem>
        </MenuItemNotLink>
        <MenuItemNotLink onClick={() => handleOpenConfirmBox("/postlist")}>
          <Posting />
          <LeftItem>Trang chủ</LeftItem>
        </MenuItemNotLink>
        <MenuItemNotLink onClick={() => handleOpenConfirmBox("/waifudb")}>
          <Database />
          <LeftItem>Waifu Database</LeftItem>
        </MenuItemNotLink>
        {user.role === "admin" && (
          <MenuItemNotLink onClick={() => handleOpenConfirmBox("/userlist")}>
            <UserList />
            <LeftItem>User Database</LeftItem>
          </MenuItemNotLink>
        )}
        <MenuItemNotLink onClick={() => handleOpenConfirmBox("/about-us")}>
          <Us />
          <LeftItem>Về chúng tôi</LeftItem>
        </MenuItemNotLink>
        <MenuItemNotLink onClick={() => handleOpenConfirmBox("/about-pj")}>
          <Prj />
          <LeftItem>Về Project</LeftItem>
        </MenuItemNotLink>
      </>
    );
  } else {
    left = (
      <>
        <MenuItemNotLink
          disabled={rollTimes === 0}
          /* onClick={startReset} */
          onClick={() => {
            handleOpenConfirmBoxRoll(
              `/waifudb/${
                waifus[Math.floor(Math.random() * waifus.length)].waifuid
              }/get`
            );
          }}
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
        </MenuItemNotLink>
        <MenuItemNotLink onClick={() => handleOpenConfirmBox("/postlist")}>
          <Posting />
          <LeftItem>Trang chủ</LeftItem>
        </MenuItemNotLink>
        <MenuItemNotLink onClick={() => handleOpenConfirmBox("/waifudb")}>
          <Database />
          <LeftItem>Waifu Database</LeftItem>
        </MenuItemNotLink>
        {user.role === "admin" && (
          <MenuItemNotLink onClick={() => handleOpenConfirmBox("/userlist")}>
            <UserList />
            <LeftItem>User Database</LeftItem>
          </MenuItemNotLink>
        )}
        <MenuItemNotLink onClick={() => handleOpenConfirmBox("/about-us")}>
          <Us />
          <LeftItem>Về chúng tôi</LeftItem>
        </MenuItemNotLink>
        <MenuItemNotLink onClick={() => handleOpenConfirmBox("/about-pj")}>
          <Prj />
          <LeftItem>Về Project</LeftItem>
        </MenuItemNotLink>
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
                          <div
                            onClick={() =>
                              handleOpenConfirmBox(`/waifudb/${item.waifuid}`)
                            }
                          >
                            <SBPHListItem>{item.name}</SBPHListItem>
                          </div>
                        );
                      }
                    } else {
                      return (
                        <div
                          onClick={() =>
                            handleOpenConfirmBox(`/waifudb/${item.waifuid}`)
                          }
                        >
                          <SBPHListItem>{item.name}</SBPHListItem>
                        </div>
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
        <ToTopButton
          visible={visible}
          to={`/user/${user.userid}`}
          onClick={toggleHome}
        >
          <img src={ToTopBtn} alt="to-top-btn" />
        </ToTopButton>
        <Nav>
          <NavbarContainer>
            <NavLogoNotLink onClick={() => handleOpenConfirmBox("/postlist")}>
              <Img src={WebLogo} alt="weblogo" />
            </NavLogoNotLink>
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
                            /* onClick={() => navigate("/createpost")} */
                            onClick={() => handleOpenConfirmBox("/createpost")}
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
                            /* onClick={() => navigate("/createpost")} */
                            onClick={() => handleOpenConfirmBox("/createpost")}
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
                            /* onClick={() => navigate("/createpost")} */
                            onClick={() => handleOpenConfirmBox("/createpost")}
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
                <div
                  onClick={() => handleOpenConfirmBox(`/user/${user.userid}`)}
                  className="menu-item"
                >
                  <span className="icon-left">
                    <GrUserSettings />
                  </span>
                  Thiết lập hồ sơ
                  <span className="icon-right">
                    <MdKeyboardArrowRight />
                  </span>
                </div>
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
                <PostHeaderMask isFixed={isFixed}>
                  <PostHeaderWrap isLined={isFixed}>
                    <PostHeaderContent isLined={isFixed}>
                      <PostHeaderMain>
                        <PostHeaderLeft>
                          <PostHeaderLeftH1>Tạo bài viết</PostHeaderLeftH1>
                        </PostHeaderLeft>
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
                      </PostHeaderMain>
                    </PostHeaderContent>
                  </PostHeaderWrap>
                </PostHeaderMask>
              </PostDetailHeader>
              {/* <NewArticleHeader>
                <HeaderH1>Tạo bài viết mới</HeaderH1>
              </NewArticleHeader> */}
              {/* <NewArticleEditor></NewArticleEditor> */}
              <NewArticleEditor>
                <FormItemContainer style={{ marginTop: "16px" }}>
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
                    <EditorMaxCount>{postContent.length}/10000</EditorMaxCount>
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
                {/* <PostImageContainer>
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
                      <CancelImage onClick={handleCancelImage}>Hủy</CancelImage>
                    )}
                  </PostImageContainer>
                  {imageUrl && (
                    <ImgShow>
                      <ImageShowTitle>Preview ảnh đã chọn:</ImageShowTitle>
                      <PreviewPostImage src={imageUrl} alt="char-image" />
                    </ImgShow>
                  )} */}
                {picturePost ? (
                  <FormItemContainer>
                    <FormItemLabel>Tải lên hình ảnh</FormItemLabel>
                    <FormUploadTip>
                      Cùng lúc có thể tải lên tối đa 20 ảnh (Định dạng .jpg,
                      .png, .jpeg, .gif, kích thước đề xuất trên 420 pixel)
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
                        <InputDivContainer borderChange={isVideoInputFocused}>
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
                              setDesc("Hãy nhập URL rồi nhấn nút xác nhận");
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
                  <SavePostButton onClick={handleCreatePost}>
                    Đăng bài
                  </SavePostButton>
                </CreatePostFooter>
              </NewArticleEditor>
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
          <MessageBoxContent>Xác nhận bỏ đăng bài?</MessageBoxContent>
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
