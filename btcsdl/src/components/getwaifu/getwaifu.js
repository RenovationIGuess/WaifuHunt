import React, { useState, useEffect, useContext, useLayoutEffect } from "react";
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
  NewVidIconWrap,
  NewVidIcon,
  NewImgIconWrap,
  NewImgIcon,
  UserList,
  WaifuSearchResult,
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
  DialogClose,
  DialogButton,
  DialogCloseIcon,
} from "../waifuinfo/waifuinfoele";

import { Loading, LoadingWrap } from "../Loading";
import { Toast, ToastMsg } from "../toastMsg";

import Chilling from "../../videos/chillin.gif";
import LoadingNav from "../../videos/loadingNav.gif";
import HutaoAva from "../../images/hutaostick.png";
import RaidenAva from "../../images/raidenfbi.png";
import DoggoAva from "../../images/realdoggo.png";
import LeftImage from "../../images/logoroll.svg";
import WebLogo from "../../images/logoweb.png";
import Paimoe from "../../images/paiface.png";

import { IoIosArrowDown } from "react-icons/io";
import { GrUserSettings } from "react-icons/gr";
import { RiLogoutBoxLine } from "react-icons/ri";
import { MdKeyboardArrowRight, MdErrorOutline } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { RiHeartsLine, RiHeartsFill } from "react-icons/ri";

/* import Footer from "../footer"; */

import { TIME_STORAGE, ROLL_STORAGE } from "../../contexts/constants";

import { Link as LinkRouter } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import { WaifuContext } from "../../contexts/WaifuContext";

import "../profile/profile.scss";
import "../waifudb/waifulist.scss";
import "../waifuinfo/waifuinfo.scss";
import "../imgprev.scss";
import { GetButton, TrashButton } from "./getwaifuele";

import Timer from "../timer";
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
import { MessageBoxButton, MessageBoxContent, MessageBoxFooter, MessageBoxHeader } from "../modals/confirmModal";
import { UserReplyBody, UserReplyMaxCount, UserReplyTextArea } from "../postDetail/postDetailEle";
import { CloseButton } from "../imagePreview";

const GetWaifu = () => {
  const {
    authState: { user },
    logoutUser,
    rollAndGetWaifu,
    addWishlist,
    removeWishlist,
    deleteWaifu,
    increaseRoll,
  } = useContext(AuthContext);
  const {
    waifuState: { waifus, waifusLoading },
    editWaifu,
    getWaifus,
    /* getCertainWaifus, */
  } = useContext(WaifuContext);

  const waifuId = useParams();

  let body;
  let left;
  let waifuSearchBar;

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [userAva, setUserAva] = useState(RaidenAva);

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

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

  const [editActive, setEditActive] = useState(false);
  const [isWishlist, setIsWishlist] = useState(false);
  const [isOwned, setIsOwned] = useState(false);

  const [message, setMessage] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("");

  const [searchValue, setSearchValue] = useState("");

  const initTimer = 3600000; //in miliseconds, 3600000 = 1 hour

  // Controlling NavPostDialog
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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
    document.title = "Roll Waifu :D";
  }, []);

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
    if (rollTimes !== 1 && rollTimes !== 0) {
      setRollTimes(rollTimes - 1);
    } else if (rollTimes !== 0) {
      setRollTimes(rollTimes - 1);
      startTimer();
    }
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
  }, [waifuId.id, waifusLoading]);

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

  const handleCancelEdit = () => {
    setCharName("");
    setCharSrc("");
    setImageUrl(null);
    setImageSrcUrl(null);
    setSrcLink("");
    setCharDesc("");
    setImgSrc("");
    setEditActive(false);
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

  const handleGetWaifu = async () => {
    try {
      const userResponse = await rollAndGetWaifu({
        waifuid: parseInt(waifuId.id),
      });
      if (userResponse.success) {
        setIsOwned(true);
        setMessage("Get waifu thành công!");
        setDesc("Chúc mừng :v!");
        setType("success");
        myFunction();
      } else {
        setMessage("Get waifu thất bại!");
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
    handleCloseConfirmBox()
    handleTrashWaifu();
  };

  const handleOpenConfirmBox = () => {
    const messageBox = document.querySelector(".msg-box-in");
    messageBox.classList.remove("msg-box-gone");
  }

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

  if (!waifusLoading) {
    /* if (waifus.length !== 0) { */
    const waifuParamId = parseInt(waifuId.id);
    const waifuParamIndex = waifus.findIndex((w) => w.waifuid === waifuParamId);
    const waifu = waifus[waifuParamIndex];

    waifus.sort((a, b) => {
      return b.user.length - a.user.length;
    });

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
    /* } else {
      waifuSearchBar = <div style={{ width: "300px" }}></div>;
    } */

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
          <LeftNavWrap to="/userlist" style={{ marginBottom: '4px' }}>
            <UserList />
            <LeftItem>User Database</LeftItem>
          </LeftNavWrap>
        )}
        <ContactFooter>
          <PaiFace src={Paimoe} alt="pai-logo" />
          <CopyRight>All Rights Reserved.</CopyRight>
        </ContactFooter>
      </>
    );
    body = (
      <GridDisplay editActive={editActive}>
        <ImageHolder>
          <AddTitle style={{ margin: '0' }}>Ảnh nhân vật</AddTitle>
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
          <AddTitle style={{ margin: '0' }}>Ảnh nguồn</AddTitle>
          <div>
            <label htmlFor="select-source-image">
              {(!waifu.sourceimg && !imageSrcUrl) ? (
                <CharSrcImageInput>
                  {editActive ? <IconSrcImageAdd /> : <IconImageSrcNone />}
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
              {/* <ImgColumn
                type={false}
                src={!imageSrcUrl ? waifu.sourceimg : imageSrcUrl}
                alt="char-src"
              /> */}
              {editActive && (
                <input
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
  } else {
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
    waifuSearchBar = <div style={{ width: "300px" }}></div>;
  }

  return (
    <>
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
                        <CancelBtn onClick={handleCancelEdit}>Hủy</CancelBtn>
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
                          <GetButton
                            available={isOwned}
                            onClick={handleGetWaifu}
                          />
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
                            onClick={handleOpenConfirmBox}
                          />
                        </ModalButton>
                      </>
                    )}
                  </Header>
                  {body}
                </WaifuInfoContainer>
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
          <MessageBoxContent>Xác nhận xóa khỏi waifulist?</MessageBoxContent>
          <MessageBoxFooter>
            <MessageBoxButton onClick={handleCloseConfirmBox} notClose={false}>
              <span>Hủy</span>
            </MessageBoxButton>
            <MessageBoxButton
              onClick={handleCancelConfirmBox}
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

export default GetWaifu;
