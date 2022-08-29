import React, { useState, useEffect, useContext } from "react";
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
} from "../profile/pfelement";

import { Loading } from "../Loading";

import Chilling from "../../videos/chillin.gif";
import LoadingNav from "../../videos/loadingNav.gif"
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

import HutaoAva from "../../images/hutaostick.png";
import RaidenAva from "../../images/raidenfbi.png";
import DoggoAva from "../../images/realdoggo.png";

import { ImgButton, ImgShow } from "../waifudb/waifuElement";

import { ToastMsg } from "../toastMsg";

import { TIME_STORAGE, ROLL_STORAGE } from "../../contexts/constants";

import { WaifuContext } from "../../contexts/WaifuContext";
import { PostContext } from "../../contexts/PostContext";

import Timer from "../timer";
import {
  AllContainer,
  CancelImage,
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
} from "./createPostElement";
import { PostNewArrow } from "../postList/postListEle";

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

  const navigate = useNavigate();

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

  const handleCreatePost = async () => {
    const tags = postTag.split(",");
    try {
      const newPost = await createPost({
        postTitle: postTitle,
        postContent: postContent,
        postTag: tags,
        postImage: imageUrl,
      });

      if (newPost.success) {
        setMessage("Đăng bài thành công!");
        setDesc("Chuẩn bị về trang chủ trong 3s...");
        setType("success");
        myFunction();
        setPostTitle("");
        setPostContent("");
        setPostTag("");
        setImageUrl(null);
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
            <MainPageWrp>
              <NewArticleHeader>
                <HeaderH1>Tạo bài viết mới</HeaderH1>
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
                      <CancelImage onClick={handleCancelImage}>Hủy</CancelImage>
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
                  <SavePostButton onClick={handleCreatePost}>
                    Đăng bài
                  </SavePostButton>
                </CreatePostFooter>
              </NewArticleEditor>
            </MainPageWrp>
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
