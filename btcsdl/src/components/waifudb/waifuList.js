import React, { useState, useEffect, useContext, useRef } from "react";
import ReactPaginate from "react-paginate";
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
  ToTopButton,
  LeftNavWrap,
  LeftItem,
  LeftImg,
  ContactFooter,
  PaiFace,
  CopyRight,
  CancelBtn,
  OkBtn,
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
  LeftSideNav,
  NewImgIconWrap,
  NewImgIcon,
  NewVidIconWrap,
  NewVidIcon,
  LoadingRankingDiv,
  UserList,
  WaifuSearchResult,
} from "../profile/pfelement";
import {
  LeftSection,
  CenterSection,
  RightSection,
  PageContainer,
  Category,
  CategoryTitle,
  CateImg,
  CategoryItem,
  HowToRollDesc,
  RollDesc,
  RollLi,
  AmongUs,
  EndDesc,
  ToInfoPage,
  CenterBar,
  LeftPart,
  AddButton,
  EditButton,
  AddModal,
  ModalTitle,
  AddTitle,
  InputName,
  ImgButton,
  ImgContainer,
  ImgShow,
  SelectedImg,
  SelectedSrcImg,
  EmptyImg,
  EmptyText,
  CenterEmpty,
  ModalHeader,
  ModalButton,
  ListOfWaifus,
  PaginateWrap,
  TableDisplay,
  TableRow,
  TableHeader,
  TableData,
  TableRowFirst,
  RgbLine,
  ButtonFlex,
  RemoveWaifu,
  CateList,
  DoneButton,
  ToEditWaifuPage,
  CateSearchBar,
  RankingContainer,
  RankingHeader,
  RankingTitle,
  RatingStar,
  Top3Section,
  TopContainer,
  BronzeCup,
  Top1Image,
  LadderFooterTop1,
  LadderFooterTop2,
  LadderFooterTop3,
  PodiumTitleTop2,
  PodiumTitleTop1,
  PodiumTitleTop3,
  PaiwowImage,
  Top3Image,
  Top2Image,
  TrophyDisplay,
  TrophyImageData,
  RightPart,
  RollGuide,
  NewInfoInputDiv,
  NewInfoInputDivWrap,
  NewInfoInputText,
  NewInfoInputMaxCount,
  CharImageInput,
  CharImageShow,
  CharSrcImageShow,
  CharSrcImageInput,
  IconImageSrcNone,
} from "./waifuElement";
import { Loading, LoadingNoelle, LoadingWrap, LoadingYoi } from "../Loading";
import { Toast, ToastMsg } from "../toastMsg";

import Chilling from "../../videos/chillin.gif";
import LoadingNav from "../../videos/loadingNav.gif";
import HutaoAva from "../../images/hutaostick.png";
import RaidenAva from "../../images/raidenfbi.png";
import DoggoAva from "../../images/realdoggo.png";
import LeftImage from "../../images/logoroll.svg";
import WebLogo from "../../images/logoweb.png";
import ToTopBtn from "../../images/arrow/RArrow.png";
import Paimoe from "../../images/paiface.png";
/* import Top1 from "../../images/top1.png";
import Top2 from "../../images/top2.png";
import Top3 from "../../images/top3.png"; */
import NoWaifu from "../../videos/nowaifu.gif";
import Yoimiya from "../../videos/Yoimiya.gif";
import Noelle from "../../videos/Noelle.gif";

import Platinum from "../../images/trophy/platinum.png";
import Gold from "../../images/trophy/gold.png";
import Silver from "../../images/trophy/silver.png";
import Bronze from "../../images/trophy/bronze.png";
import Paiwow from "../../images/Paiwow.png";
import DeleteIcon from "../../images/deleteIcon.png";

import { TbListSearch } from "react-icons/tb";
import { BsViewStacked, BsJustify } from "react-icons/bs";
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowBack,
} from "react-icons/io";
import { GrUserSettings } from "react-icons/gr";
import { RiLogoutBoxLine } from "react-icons/ri";
import { MdKeyboardArrowRight, MdErrorOutline } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

/* import Footer from "../footer"; */
import { TIME_STORAGE, ROLL_STORAGE } from "../../contexts/constants";

import { Link as LinkRouter, useNavigate } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll/modules";

import { AuthContext } from "../../contexts/AuthContext";
import { WaifuContext } from "../../contexts/WaifuContext";

import Timer from "../timer";

import "../profile/profile.scss";
import "./waifulist.scss";
import { PostNewArrow } from "../postList/postListEle";
import useComponentVisible from "../../utils/useComponentVisible";
import {
  FormImgUploadDelete,
  FormImgUploadDeleteIcon,
  IconImageAdd,
  IconSrcImageAdd,
  InputSearchContainer,
  MainPage,
  RightContainer,
  RootPageContainer,
  RootPageLayout,
  SideMenu,
  StickyNavFixed,
  StickyNavLeft,
  StickyNavLeftHolder,
  StickyNavScroll,
} from "../createpost/createPostElement";
import {
  AutoCompleteCateResult,
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
import useWaifuVisible from "../../utils/useWaifuVisible";
import { UserListLayout, UserListMain } from "../userlist/userListEle";
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

const WaifuList = () => {
  const {
    authState: { user },
    loadUser,
    logoutUser,
    increaseRoll,
  } = useContext(AuthContext);
  const {
    waifuState: { waifus, waifusLoading },
    getWaifus,
    createWaifu,
    deleteWaifu,
  } = useContext(WaifuContext);

  let body;
  let left;
  let category = [];
  let rankingSection;
  let waifuSearchBar;

  const imageInputRef = useRef(null);
  const imageSrcInputRef = useRef(null);

  const navigate = useNavigate();

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const [open, setOpen] = useState(false);
  const [deleteWaifuId, setDeleteWaifuId] = useState(-1);
  const [confirmMsg, setConfirmMsg] = useState("");
  const [visible, setVisible] = useState(false);
  const [userAva, setUserAva] = useState(RaidenAva);
  const [isActivated, setIsActivated] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [charName, setCharName] = useState("");
  const [charSrc, setCharSrc] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [imageSrcUrl, setImageSrcUrl] = useState(null);
  const [tableEdit, setTableEdit] = useState(false);
  const [ratingRank, setRatingRank] = useState([]);

  const [currentPage, setCurrentPage] = useState(0);

  // Controlling NavPostDialog
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Controll fetching data
  /* const [hasRemoved, setHasRemoved] = useState(false); */
  const [makeChange, setMakeChange] = useState(false);

  const [tempWaifu, setTempWaifu] = useState([]);

  const [message, setMessage] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("");
  const [categories, setCategories] = useState([]);
  const [allCate, setAllCate] = useState([]);
  const [isNewCate, setIsNewCate] = useState(false);
  const [isCateSelected, setIsCateSelected] = useState(false);

  // Control add new waifu modal
  const [isNewNameFocused, setIsNewNameFocused] = useState(false);
  const [isNewSrcFocused, setIsNewSrcFocused] = useState(false);

  const PER_PAGE = 16;
  const offset = currentPage * PER_PAGE;

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

  const [searchValue, setSearchValue] = useState("");
  const { waifuRef, isWaifuVisible, setIsWaifuVisible } =
    useWaifuVisible(false);
  const [cateSearchValue, setCateSearchValue] = useState("");

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

  /* useEffect(() => {
    async function fetchData() {
      await loadUser();
    }
    fetchData();
  }, [hasRemoved]) */

  useEffect(() => {
    window.localStorage.setItem(ROLL_STORAGE, rollTimes);
  }, [rollTimes]);

  useEffect(() => {
    window.addEventListener("scroll", scrollBtn);
  }, []);

  useEffect(() => {
    document.title = "Waifu Database";
  }, []);

  useEffect(() => {
    async function fetchData() {
      await getWaifus();
    }
    fetchData();
  }, []);

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

  const handleOpenModal = () => {
    const infoModalContainer = document.querySelector(".info-modal-container");
    infoModalContainer.classList.remove("dialog-gone");
    setModalOpen(true);
  };

  const handlePageClick = ({ selected: selectedPage }) => {
    /* console.log(selectedPage) */
    setCurrentPage(selectedPage);
    toggleHome();
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

  const handleImageInputClick = () => {
    imageInputRef.current.click();
  };

  const handleImageSrcInputClick = () => {
    imageSrcInputRef.current.click();
  };

  const handleCateSearch = (value) => {
    if (value !== "") {
      const searchIndex = categories.findIndex((item) =>
        item.name.includes(value)
      );
      if (searchIndex !== -1) {
        const source = categories[searchIndex];
        source.state = true;
        for (const item of categories) {
          if (item.name !== source.name) {
            item.state = false;
          }
        }
        handlePageClick({ selected: 0 });
        setCateSearchValue("");
        /* setIsComponentVisible(false); */
        setTempWaifu(waifus.filter((w) => w.source === source.name));
        setIsNewCate(!isNewCate);
        setIsCateSelected(true);
        toggleHome();
      } else {
        setMessage("Không tìm thấy tên category!");
        setDesc("Hãy nhập đúng tên category muốn tìm");
        setType("error");
        myFunction();
        setCateSearchValue("");
      }
    } else {
      setMessage("Không tìm thấy tên category!");
      setDesc("Hãy nhập đúng tên category muốn tìm");
      setType("error");
      myFunction();
    }
  };

  /* const handleChooseFromCateSearch = (value) => {
    setCateSearchValue(value);
    handleCateSearch();
  };
 */
  const handleOkModal = async () => {
    try {
      const newWaifu = await createWaifu({
        name: charName,
        source: charSrc,
        sourceimg: imageSrcUrl,
        image: imageUrl,
      });

      if (newWaifu.success) {
        setMessage("Thêm thành công!");
        setDesc("Welcome home new girl :v...");
        setType("success");
        myFunction();
        setCharName("");
        setCharSrc("");
        setImageUrl(null);
        setImageSrcUrl(null);
        const infoModalContainer = document.querySelector(
          ".info-modal-container"
        );
        const infoModal = document.querySelector(".info-modal");
        infoModal.classList.add("modal-leave");
        infoModalContainer.classList.add("dialog-leave");
        setTimeout(() => {
          infoModalContainer.classList.add("dialog-gone");
          infoModalContainer.classList.remove("dialog-leave");
          infoModal.classList.remove("modal-leave");
        }, 200);
        setModalOpen(false);
        /* waifus = [...waifus, newWaifu.newWaifu];
        waifus = waifus.push(newWaifu.newWaifu); */
        const cateIndex = categories.findIndex(
          (c) => c.name === newWaifu.newWaifu.source
        );
        if (cateIndex === -1) {
          /* setCategories([...categories, {
            name: newWaifu.newWaifu.source,
            state: false,
          }]) */
          categories.push({ name: newWaifu.newWaifu.source, state: false });
        }
        setRatingRank([...ratingRank, newWaifu.newWaifu]);
        setTempWaifu([...tempWaifu, newWaifu.newWaifu]);
        setMakeChange(!makeChange);
      } else {
        setMessage("Thêm thất bại!");
        setDesc(newWaifu.message);
        setType("error");
        myFunction();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handlerTableDisp = () => {
    setIsActivated(!isActivated);
  };

  const scrollBtn = () => {
    if (window.scrollY >= 80) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

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

  const handleRemoveWaifu = async (waifuId) => {
    try {
      const delResponse = await deleteWaifu(waifuId);
      if (delResponse.success) {
        setMessage("Xóa khỏi database thành công!");
        setDesc("Sao nỡ lòng nào...");
        setType("success");
        myFunction();
        const deletedWaifuIndex = waifus.findIndex(
          (w) => w.waifuid === waifuId
        );
        const deletedWaifuCate = waifus.filter(
          (w) => w.source === waifus[deletedWaifuIndex].source
        );
        if (deletedWaifuCate.length === 1) {
          /* setTimeout(() => {
            setCategories(
              categories.filter(
                (c) => c.name !== waifus[deletedWaifuIndex].source
              )
            );
          }, 1000); */
          setCategories(
            categories.filter(
              (c) => c.name !== waifus[deletedWaifuIndex].source
            )
          );
          for (const item of categories) {
            item.state = false;
          }
          setIsCateSelected(false);
        }
        setRatingRank(ratingRank.filter((w) => w.waifuid !== waifuId));
        setTempWaifu(tempWaifu.filter((w) => w.waifuid !== waifuId));
        /* const deleteRankingIndex = ratingRank.findIndex((r) => r.waifuid === waifuId); */
        /* waifus = waifus.filter((w) => w.waifuid !== waifuId) */
        /* setHasRemoved(!hasRemoved); */
        setMakeChange(!makeChange);
      } else {
        setMessage("Xóa khỏi database thất bại!");
        setDesc(delResponse.message);
        setType("error");
        myFunction();
      }
    } catch (err) {
      console.log(err);
    }
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

  const handleAllClick = () => {
    for (const item of categories) {
      item.state = false;
    }
    setIsCateSelected(false);
    setTempWaifu(waifus);
    toggleHome();
  };

  const handleCateClick = (source) => {
    // use to Re-render when a cate is selected
    source.state = true;
    for (const item of categories) {
      if (item.name !== source.name) {
        item.state = false;
      }
    }
    handlePageClick({ selected: 0 });
    setIsNewCate(!isNewCate);
    setIsCateSelected(true);
    setTempWaifu(waifus.filter((w) => w.source === source.name));
    toggleHome();
  };

  const handleCancelImageUrl = () => {
    setImageUrl(null);
  };

  const handleCancelSrcImageUrl = () => {
    setImageSrcUrl(null);
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

  const handleConfirmOption = () => {
    handleCloseConfirmBox();
    if (modalOpen) {
      setCharName("");
      setCharSrc("");
      setImageUrl(null);
      setImageSrcUrl(null);
      const infoModalContainer = document.querySelector(
        ".info-modal-container"
      );
      const infoModal = document.querySelector(".info-modal");
      infoModal.classList.add("modal-leave");
      infoModalContainer.classList.add("dialog-leave");
      setTimeout(() => {
        infoModalContainer.classList.add("dialog-gone");
        infoModalContainer.classList.remove("dialog-leave");
        infoModal.classList.remove("modal-leave");
      }, 200);
      setModalOpen(false);
    } else {
      handleRemoveWaifu(deleteWaifuId);
    }
  };

  const handleCancelModal = () => {
    if (!charName && !charSrc && !imageUrl && !imageSrcUrl) {
      const infoModalContainer = document.querySelector(
        ".info-modal-container"
      );
      const infoModal = document.querySelector(".info-modal");
      infoModal.classList.add("modal-leave");
      infoModalContainer.classList.add("dialog-leave");
      setTimeout(() => {
        infoModalContainer.classList.add("dialog-gone");
        infoModalContainer.classList.remove("dialog-leave");
        infoModal.classList.remove("modal-leave");
      }, 200);
      setModalOpen(false);
    } else {
      const messageBox = document.querySelector(".msg-box-in");
      messageBox.classList.remove("msg-box-gone");
      setConfirmMsg("Xác nhận hủy thao tác?");
    }
  };

  const handleOpenConfirmBox = (waifuId) => {
    const messageBox = document.querySelector(".msg-box-in");
    messageBox.classList.remove("msg-box-gone");
    setConfirmMsg("Xác nhận xóa character này?");
    setDeleteWaifuId(waifuId);
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
    rankingSection = (
      <RankingContainer>
        {/* <PaiwowImage src={Paiwow} alt="flying-wow" /> */}
        <RankingHeader>
          <svg
            class="star-icon"
            viewBox="0 0 43 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: "12px" }}
          >
            <path
              class="icon-path"
              d="M21.1363 1.42392C21.2826 1.11848 21.7174 1.11848 21.8637 1.42392L27.2274 12.6267C27.4958 13.1871 28.0288 13.5743 28.6447 13.6564L40.9566 15.2958C41.2923 15.3405 41.4267 15.754 41.1814 15.9875L32.1845 24.5506C31.7344 24.979 31.5308 25.6056 31.6431 26.2167L33.8885 38.4326C33.9497 38.7657 33.5979 39.0213 33.3001 38.8602L22.3759 32.9497C21.8294 32.654 21.1706 32.654 20.6241 32.9497L9.6999 38.8602C9.40205 39.0213 9.05025 38.7657 9.11147 38.4326L11.3569 26.2167C11.4692 25.6056 11.2656 24.979 10.8155 24.5506L1.81861 15.9875C1.57331 15.754 1.70768 15.3405 2.04336 15.2958L14.3553 13.6564C14.9712 13.5743 15.5042 13.1871 15.7726 12.6267L21.1363 1.42392Z"
              stroke-width="1.4375"
            />
          </svg>
          <RankingTitle>Bảng xếp hạng theo Rating</RankingTitle>
          <svg
            class="star-icon"
            viewBox="0 0 43 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginLeft: "12px" }}
          >
            <path
              class="icon-path"
              d="M21.1363 1.42392C21.2826 1.11848 21.7174 1.11848 21.8637 1.42392L27.2274 12.6267C27.4958 13.1871 28.0288 13.5743 28.6447 13.6564L40.9566 15.2958C41.2923 15.3405 41.4267 15.754 41.1814 15.9875L32.1845 24.5506C31.7344 24.979 31.5308 25.6056 31.6431 26.2167L33.8885 38.4326C33.9497 38.7657 33.5979 39.0213 33.3001 38.8602L22.3759 32.9497C21.8294 32.654 21.1706 32.654 20.6241 32.9497L9.6999 38.8602C9.40205 39.0213 9.05025 38.7657 9.11147 38.4326L11.3569 26.2167C11.4692 25.6056 11.2656 24.979 10.8155 24.5506L1.81861 15.9875C1.57331 15.754 1.70768 15.3405 2.04336 15.2958L14.3553 13.6564C14.9712 13.5743 15.5042 13.1871 15.7726 12.6267L21.1363 1.42392Z"
              stroke-width="1.4375"
            />
          </svg>
        </RankingHeader>
        <LeftSideNavLoading>
          <LoadingRankingDiv>
            <LoadingYoi src={Yoimiya} alt="yoimiya" />
            <LoadingNoelle src={Noelle} alt="noelle" />
          </LoadingRankingDiv>
          <LeftSideNavLoadingDiv>
            Đang tải dữ liệu để thống kê...
          </LeftSideNavLoadingDiv>
        </LeftSideNavLoading>
      </RankingContainer>
    );
  } else if (waifus.length === 0) {
    waifuSearchBar = <div style={{ width: "300px" }}></div>;
    body = (
      <>
        <CenterEmpty>
          <EmptyImg src={NoWaifu} alt="no-waifu" />
          <EmptyText>Chưa có waifu nào được tạo trong Database</EmptyText>
        </CenterEmpty>
      </>
    );

    left = (
      <>
        <LeftNavWrap
          disabled={rollTimes === 0}
          onClick={startReset}
          /* to={`/waifudb/${
            waifus[Math.floor(Math.random() * waifus.length)].waifuid
          }/get`} */
          to="/waifudb"
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
        {user.role === "admin" && (
          <LeftNavWrap to="/userlist">
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
  } else {
    let currentPageData;

    waifus.sort((a, b) => {
      return b.user.length - a.user.length;
    });

    if (tempWaifu.length === 0) {
      if (isCateSelected) {
        const currentTrueCate = categories.findIndex(
          (item) => item.state === true
        );
        const source = categories[currentTrueCate];
        const cateData = waifus.filter((item) => item.source === source.name);
        for (let i = 0; i < cateData.length; ++i) {
          tempWaifu.push(cateData[i]);
        }
      } else {
        for (let i = 0; i < waifus.length; ++i) {
          tempWaifu.push(waifus[i]);
        }
      }
    }

    const pageCount = Math.ceil(tempWaifu.length / PER_PAGE);

    if (allCate.length === 0) {
      for (const waifu of waifus) {
        const index = allCate.findIndex((item) => item.name === waifu.source);
        if (index === -1) {
          allCate.push({
            name: waifu.source,
            state: false,
          });
        }
      }
    }

    if (categories.length === 0 || cateSearchValue === "") {
      /* setData(waifus); */
      for (const waifu of waifus) {
        const index = categories.findIndex(
          (item) => item.name === waifu.source
        );
        if (index === -1) {
          categories.push({
            name: waifu.source,
            state: false,
          });
        }
      }
      /* setCategories(category); */
    }

    left = (
      <>
        <LeftNavWrap
          disabled={rollTimes === 0}
          onClick={startReset}
          to={`/waifudb/${
            waifus[Math.floor(Math.random() * waifus.length)].waifuid
          }/get`}
          /* to="/waifudb" */
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
        {user.role === "admin" && (
          <LeftNavWrap to="/userlist">
            <UserList />
            <LeftItem>User Database</LeftItem>
          </LeftNavWrap>
        )}
        <Category>
          {/* <CateSearchBar
            placeholder="Nhập tên source cần tìm"
            type="text"
            value={cateSearchValue}
            onChange={(e) => setCateSearchValue(e.target.value)}
            autoComplete="off"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleCateSearch();
              }
            }}
          /> */}
          <InputSearchContainer style={{ padding: "0" }}>
            <div style={{ width: "100%" }}>
              <WFForm>
                <SearchBarInput isFocused={isComponentVisible}>
                  <SearchAutoComplete>
                    <AutoCompleteWrap>
                      <SearchInput
                        type="text"
                        placeholder="Nhập category cần tìm"
                        autoComplete="off"
                        value={cateSearchValue}
                        onChange={(e) => {
                          setCateSearchValue(e.target.value);
                          if (isCateSelected) {
                            handleAllClick();
                          }
                          setCategories(
                            allCate.filter((cate) =>
                              cate.name.includes(e.target.value)
                            )
                          );
                        }}
                        /* onBlur={() => setIsUserInputOn(false)}
                        onFocus={() => setIsUserInputOn(true)} */
                        onClick={() => setIsComponentVisible(true)}
                        ref={ref}
                        onKeyPress={(e) => {
                          if (e.key === "Enter") {
                            handleCateSearch(cateSearchValue);
                          }
                        }}
                      />
                      <ClearInput
                        isDisplay={cateSearchValue !== ""}
                        onClick={() => setCateSearchValue("")}
                      ></ClearInput>
                    </AutoCompleteWrap>
                    <AutoCompleteCateResult
                      style={{ left: "-33px" }}
                      isDisplay={isComponentVisible}
                      onClick={() => setIsComponentVisible(true)}
                    >
                      {cateSearchValue !== "" ? (
                        <AutoCompleteList isDisplay={isComponentVisible}>
                          <AutoCompleteItem
                            onClick={() => handleCateSearch(cateSearchValue)}
                          >{`Tìm kiếm "${cateSearchValue}"`}</AutoCompleteItem>
                        </AutoCompleteList>
                      ) : (
                        <div>
                          <SearchBarPlaceHolder>
                            <SBPHTitle>Gợi ý tìm kiếm</SBPHTitle>
                            <SBPHList>
                              {categories.map((item, iter) => {
                                if (categories.length >= 4) {
                                  if (iter <= 4) {
                                    return (
                                      <SBPHListItem
                                        onClick={() =>
                                          handleCateSearch(item.name)
                                        }
                                      >
                                        {item.name}
                                      </SBPHListItem>
                                    );
                                  }
                                } else {
                                  return (
                                    <SBPHListItem
                                      onClick={() =>
                                        handleCateSearch(item.name)
                                      }
                                    >
                                      {item.name}
                                    </SBPHListItem>
                                  );
                                }
                              })}
                            </SBPHList>
                          </SearchBarPlaceHolder>
                        </div>
                      )}
                    </AutoCompleteCateResult>
                  </SearchAutoComplete>
                  <IconSearch
                    onClick={() => handleCateSearch(cateSearchValue)}
                  />
                </SearchBarInput>
              </WFForm>
            </div>
          </InputSearchContainer>
        </Category>
        <CateList>
          <CategoryItem onClick={handleAllClick} isChoosen={!isCateSelected}>
            <div>Tất cả</div>
            <div>({waifus.length})</div>
          </CategoryItem>
          {categories.map((source) => (
            <CategoryItem
              key={source.name}
              onClick={() => handleCateClick(source)}
              isChoosen={source.state}
            >
              <div>{source.name}</div>
              <div>
                ({waifus.filter((item) => item.source === source.name).length})
              </div>
            </CategoryItem>
          ))}
        </CateList>
        <ContactFooter>
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
          onChange={(e) => {
            setSearchValue(e.target.value);
            if (isCateSelected) {
              const currentTrueCate = categories.findIndex(
                (item) => item.state === true
              );
              const source = categories[currentTrueCate];
              const cateData = waifus.filter(
                (item) => item.source === source.name
              );
              setTempWaifu(
                cateData.filter((w) => w.name.includes(e.target.value))
              );
            } else
              setTempWaifu(
                waifus.filter((w) => w.name.includes(e.target.value))
              );
          }}
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

    if (!isCateSelected) {
      /* waifuSearchBar = (
        <SearchBarContainer>
          <SearchBarIcon />
          <SearchBar
            type="text"
            placeholder="Nhập tên waifu muốn tìm"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
              setTempWaifu(
                waifus.filter((w) => w.name.includes(e.target.value))
              );
            }}
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
      ); */

      if (isActivated) {
        currentPageData = tempWaifu
          .slice(offset, offset + PER_PAGE)
          .map((waifu) => (
            <LinkRouter key={waifu.waifuid} to={`/waifudb/${waifu.waifuid}`}>
              <div className="container">
                <img src={waifu.image} alt="Avatar" className="image" />
                <div className="overlay">
                  {!waifu.sourceimg ? (
                    <IconImageSrcNone
                      className="src-image"
                      style={{ fontSize: '45px', color: '#b2bdce' }}
                    />
                  ) : (
                    <img
                      src={waifu.sourceimg}
                      alt="logo"
                      className="src-image"
                    />
                  )}
                  <div className="text">{waifu.name}</div>
                  <div className="rank-most-owned">
                    #
                    {waifus.findIndex(
                      (item) => item.waifuid === waifu.waifuid
                    ) + 1}
                  </div>
                  <div className="rank-most-owned-content">
                    Most owned Waifu
                  </div>
                </div>
              </div>
            </LinkRouter>
          ));
      } else {
        currentPageData = (
          <>
            <TableDisplay>
              <thead>
                <TableRowFirst>
                  <TableHeader style={{ width: "30%" }}>
                    Tên nhân vật
                  </TableHeader>
                  <TableHeader style={{ width: "30%" }}>Nguồn</TableHeader>
                  <TableHeader style={{ width: "20%" }}>
                    Số người sở hữu
                  </TableHeader>
                  {tableEdit ? (
                    <TableHeader style={{ width: "20%" }}>Tùy chọn</TableHeader>
                  ) : (
                    <TableHeader style={{ width: "20%" }}>
                      Rank (most-owned)
                    </TableHeader>
                  )}
                </TableRowFirst>
              </thead>
            </TableDisplay>
            <RgbLine></RgbLine>
            <TableDisplay>
              <tbody>
                {tempWaifu.slice(offset, offset + PER_PAGE).map((waifu) => {
                  const waifuIndex = waifus.findIndex(
                    (w) => w.waifuid === waifu.waifuid
                  );
                  return (
                    <TableRow key={waifu.waifuid}>
                      <TableData
                        onClick={() => navigate(`/waifudb/${waifu.waifuid}`)}
                        style={{ width: "30%" }}
                      >
                        {waifu.name}
                      </TableData>
                      <TableData style={{ width: "30%" }}>
                        {waifu.source}
                      </TableData>
                      <TableData style={{ width: "20%" }}>
                        {waifu.user.length}
                      </TableData>
                      {tableEdit ? (
                        <TableData style={{ width: "20%" }}>
                          <ButtonFlex>
                            <RemoveWaifu
                              onClick={() =>
                                handleOpenConfirmBox(waifu.waifuid)
                              }
                            />
                            <ToEditWaifuPage
                              onClick={() =>
                                navigate(`/waifudb/${waifu.waifuid}`)
                              }
                            />
                          </ButtonFlex>
                        </TableData>
                      ) : (
                        <TableData style={{ width: "20%" }}>
                          <TrophyDisplay>
                            <span>{waifuIndex + 1}</span>
                            {currentPage === 0 && (
                              <TrophyImageData
                                src={
                                  waifuIndex === 0
                                    ? Platinum
                                    : waifuIndex === 1
                                    ? Gold
                                    : waifuIndex === 2
                                    ? Silver
                                    : waifuIndex <= 9 && Bronze
                                }
                              />
                            )}
                          </TrophyDisplay>
                        </TableData>
                      )}
                    </TableRow>
                  );
                })}
              </tbody>
            </TableDisplay>
          </>
        );
      }

      body = (
        <>
          <ListOfWaifus>{currentPageData}</ListOfWaifus>
          <PaginateWrap>
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
          </PaginateWrap>
        </>
      );
    } else {
      /* const currentTrueCate = categories.findIndex(
        (item) => item.state === true
      );
      const source = categories[currentTrueCate];
      const cateData = waifus.filter((item) => item.source === source.name);
      const catePageNum = Math.ceil(cateData.length / PER_PAGE); */

      if (isActivated) {
        currentPageData = tempWaifu
          .slice(offset, offset + PER_PAGE)
          .map((waifu) => (
            <LinkRouter key={waifu.waifuid} to={`/waifudb/${waifu.waifuid}`}>
              <div className="container">
                <img src={waifu.image} alt="Avatar" className="image" />
                <div className="overlay">
                  {!waifu.sourceimg ? (
                    <IconImageSrcNone
                      className="src-image"
                      style={{ fontSize: '45px', color: '#b2bdce' }}
                    />
                  ) : (
                    <img
                      src={waifu.sourceimg}
                      alt="logo"
                      className="src-image"
                    />
                  )}
                  <div className="text">{waifu.name}</div>
                  <div className="rank-most-owned">
                    #
                    {waifus.findIndex(
                      (item) => item.waifuid === waifu.waifuid
                    ) + 1}
                  </div>
                  <div className="rank-most-owned-content">
                    Most owned Waifu
                  </div>
                </div>
              </div>
            </LinkRouter>
          ));
      } else {
        currentPageData = (
          <>
            <TableDisplay>
              <TableRowFirst>
                <TableHeader style={{ width: "30%" }}>Tên nhân vật</TableHeader>
                <TableHeader style={{ width: "30%" }}>Nguồn</TableHeader>
                <TableHeader style={{ width: "20%" }}>
                  Số người sở hữu
                </TableHeader>
                {tableEdit ? (
                  <TableHeader style={{ width: "20%" }}>Tùy chọn</TableHeader>
                ) : (
                  <TableHeader style={{ width: "20%" }}>
                    Rank (most-owned)
                  </TableHeader>
                )}
              </TableRowFirst>
            </TableDisplay>
            <RgbLine></RgbLine>
            <TableDisplay>
              {tempWaifu.slice(offset, offset + PER_PAGE).map((waifu) => {
                {
                  /* <TableRow>
                  <TableData
                    onClick={() => navigate(`/waifudb/${waifu.waifuid}`)}
                    style={{ width: "30%" }}
                  >
                    {waifu.name}
                  </TableData>
                  <TableData style={{ width: "30%" }}>{waifu.source}</TableData>
                  <TableData style={{ width: "20%" }}>
                    {waifu.user.length}
                  </TableData>
                  {tableEdit ? (
                    <TableData style={{ width: "20%" }}>
                      <ButtonFlex>
                        <RemoveWaifu
                          onClick={() => handleRemoveWaifu(waifu.waifuid)}
                        />
                        <ToEditWaifuPage
                          onClick={() => navigate(`/waifudb/${waifu.waifuid}`)}
                        />
                      </ButtonFlex>
                    </TableData>
                  ) : (
                    <TableData style={{ width: "20%" }}>
                      {waifus.findIndex(
                        (item) => item.waifuid === waifu.waifuid
                      ) + 1}
                    </TableData>
                  )}
                </TableRow> */
                }
                const waifuIndex = waifus.findIndex(
                  (w) => w.waifuid === waifu.waifuid
                );
                return (
                  <TableRow key={waifu.waifuid}>
                    <TableData
                      onClick={() => navigate(`/waifudb/${waifu.waifuid}`)}
                      style={{ width: "30%" }}
                    >
                      {waifu.name}
                    </TableData>
                    <TableData style={{ width: "30%" }}>
                      {waifu.source}
                    </TableData>
                    <TableData style={{ width: "20%" }}>
                      {waifu.user.length}
                    </TableData>
                    {tableEdit ? (
                      <TableData style={{ width: "20%" }}>
                        <ButtonFlex>
                          <RemoveWaifu
                            onClick={() => handleRemoveWaifu(waifu.waifuid)}
                          />
                          <ToEditWaifuPage
                            onClick={() =>
                              navigate(`/waifudb/${waifu.waifuid}`)
                            }
                          />
                        </ButtonFlex>
                      </TableData>
                    ) : (
                      <TableData style={{ width: "20%" }}>
                        <TrophyDisplay>
                          <span>{waifuIndex + 1}</span>
                          {currentPage === 0 && (
                            <TrophyImageData
                              src={
                                waifuIndex === 0
                                  ? Platinum
                                  : waifuIndex === 1
                                  ? Gold
                                  : waifuIndex === 2
                                  ? Silver
                                  : waifuIndex <= 9 && Bronze
                              }
                            />
                          )}
                        </TrophyDisplay>
                      </TableData>
                    )}
                  </TableRow>
                );
              })}
            </TableDisplay>
          </>
        );
      }

      body = (
        <>
          <ListOfWaifus>{currentPageData}</ListOfWaifus>
          <PaginateWrap>
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
          </PaginateWrap>
        </>
      );
    }

    if (ratingRank.length === 0) {
      for (let i in waifus) {
        ratingRank.push(waifus[i]);
      }
      /* let ratingRank = [...waifus]; */
      let averageRatingA;
      let totalOfRatesA;
      let totalOfRatesB;
      let averageRatingB;
      ratingRank.sort((a, b) => {
        averageRatingA = 0;
        totalOfRatesA = 0;
        totalOfRatesB = 0;
        averageRatingB = 0;
        for (let key in a.rating) {
          switch (key) {
            case "five":
              totalOfRatesA += a.rating[key].length;
              averageRatingA += a.rating[key].length * 5;
              break;
            case "four":
              totalOfRatesA += a.rating[key].length;
              averageRatingA += a.rating[key].length * 4;
              break;
            case "three":
              totalOfRatesA += a.rating[key].length;
              averageRatingA += a.rating[key].length * 3;
              break;
            case "two":
              totalOfRatesA += a.rating[key].length;
              averageRatingA += a.rating[key].length * 2;
              break;
            case "one":
              totalOfRatesA += a.rating[key].length;
              averageRatingA += a.rating[key].length * 1;
              break;
          }
        }
        for (let key in b.rating) {
          switch (key) {
            case "five":
              totalOfRatesB += b.rating[key].length;
              averageRatingB += b.rating[key].length * 5;
              break;
            case "four":
              totalOfRatesB += b.rating[key].length;
              averageRatingB += b.rating[key].length * 4;
              break;
            case "three":
              totalOfRatesB += b.rating[key].length;
              averageRatingB += b.rating[key].length * 3;
              break;
            case "two":
              totalOfRatesB += b.rating[key].length;
              averageRatingB += b.rating[key].length * 2;
              break;
            case "one":
              totalOfRatesB += b.rating[key].length;
              averageRatingB += b.rating[key].length * 1;
              break;
          }
        }
        if (totalOfRatesA !== 0) {
          averageRatingA /= totalOfRatesA;
          averageRatingA = parseFloat(averageRatingA.toFixed(2));
        }
        if (totalOfRatesB !== 0) {
          averageRatingB /= totalOfRatesB;
          averageRatingB = parseFloat(averageRatingB.toFixed(2));
        }
        return averageRatingB - averageRatingA;
      });
    }

    rankingSection = (
      <RankingContainer>
        <PaiwowImage src={Paiwow} alt="flying-wow" />
        <RankingHeader>
          <svg
            class="star-icon"
            viewBox="0 0 43 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: "12px" }}
          >
            <path
              class="icon-path"
              d="M21.1363 1.42392C21.2826 1.11848 21.7174 1.11848 21.8637 1.42392L27.2274 12.6267C27.4958 13.1871 28.0288 13.5743 28.6447 13.6564L40.9566 15.2958C41.2923 15.3405 41.4267 15.754 41.1814 15.9875L32.1845 24.5506C31.7344 24.979 31.5308 25.6056 31.6431 26.2167L33.8885 38.4326C33.9497 38.7657 33.5979 39.0213 33.3001 38.8602L22.3759 32.9497C21.8294 32.654 21.1706 32.654 20.6241 32.9497L9.6999 38.8602C9.40205 39.0213 9.05025 38.7657 9.11147 38.4326L11.3569 26.2167C11.4692 25.6056 11.2656 24.979 10.8155 24.5506L1.81861 15.9875C1.57331 15.754 1.70768 15.3405 2.04336 15.2958L14.3553 13.6564C14.9712 13.5743 15.5042 13.1871 15.7726 12.6267L21.1363 1.42392Z"
              stroke-width="1.4375"
            />
          </svg>
          <RankingTitle>Bảng xếp hạng theo Rating</RankingTitle>
          <svg
            class="star-icon"
            viewBox="0 0 43 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginLeft: "12px" }}
          >
            <path
              class="icon-path"
              d="M21.1363 1.42392C21.2826 1.11848 21.7174 1.11848 21.8637 1.42392L27.2274 12.6267C27.4958 13.1871 28.0288 13.5743 28.6447 13.6564L40.9566 15.2958C41.2923 15.3405 41.4267 15.754 41.1814 15.9875L32.1845 24.5506C31.7344 24.979 31.5308 25.6056 31.6431 26.2167L33.8885 38.4326C33.9497 38.7657 33.5979 39.0213 33.3001 38.8602L22.3759 32.9497C21.8294 32.654 21.1706 32.654 20.6241 32.9497L9.6999 38.8602C9.40205 39.0213 9.05025 38.7657 9.11147 38.4326L11.3569 26.2167C11.4692 25.6056 11.2656 24.979 10.8155 24.5506L1.81861 15.9875C1.57331 15.754 1.70768 15.3405 2.04336 15.2958L14.3553 13.6564C14.9712 13.5743 15.5042 13.1871 15.7726 12.6267L21.1363 1.42392Z"
              stroke-width="1.4375"
            />
          </svg>
        </RankingHeader>
        <Top3Section>
          <TopContainer>
            <Top2Image src={Gold} alt="top2-cup" />
            <LinkRouter to={`/waifudb/${ratingRank[1].waifuid}`}>
              <div className="container" style={{ marginBottom: "4px" }}>
                <img src={ratingRank[1].image} alt="Avatar" className="image" />
                <div className="overlay">
                  {!ratingRank[1].sourceimg ? (
                    <IconImageSrcNone
                      className="src-image"
                      style={{ fontSize: '45px', color: '#b2bdce' }}
                    />
                  ) : (
                    <img
                      src={ratingRank[1].sourceimg}
                      alt="logo"
                      className="src-image"
                    />
                  )}
                  <div className="text">{ratingRank[1].name}</div>
                  <div className="rank-most-owned">#2</div>
                  <div className="rank-most-owned-content">
                    Most rated Waifu
                  </div>
                </div>
              </div>
            </LinkRouter>
            <LadderFooterTop2>
              <PodiumTitleTop2>2</PodiumTitleTop2>
            </LadderFooterTop2>
          </TopContainer>
          <TopContainer>
            <Top1Image src={Platinum} alt="top1-cup" />
            <LinkRouter to={`/waifudb/${ratingRank[0].waifuid}`}>
              <div className="container-top">
                <img src={ratingRank[0].image} alt="Avatar" className="image" />
                <div className="overlay">
                  {!ratingRank[0].sourceimg ? (
                    <IconImageSrcNone
                      className="src-image"
                      style={{ fontSize: '50px', color: '#b2bdce' }}
                    />
                  ) : (
                    <img
                      src={ratingRank[0].sourceimg}
                      alt="logo"
                      className="src-image"
                    />
                  )}
                  <div className="text">{ratingRank[0].name}</div>
                  <div className="rank-most-owned">#1</div>
                  <div className="rank-most-owned-content">
                    Most rated Waifu
                  </div>
                </div>
              </div>
            </LinkRouter>
            <LadderFooterTop1>
              <PodiumTitleTop1>1</PodiumTitleTop1>
            </LadderFooterTop1>
          </TopContainer>
          <TopContainer>
            <Top3Image src={Silver} alt="top3-cup" />
            <LinkRouter to={`/waifudb/${ratingRank[2].waifuid}`}>
              <div className="container" style={{ marginBottom: "4px" }}>
                <img src={ratingRank[2].image} alt="Avatar" className="image" />
                <div className="overlay">
                  {!ratingRank[2].sourceimg ? (
                    <IconImageSrcNone
                      className="src-image"
                      style={{ fontSize: '45px', color: '#b2bdce' }}
                    />
                  ) : (
                    <img
                      src={ratingRank[2].sourceimg}
                      alt="logo"
                      className="src-image"
                    />
                  )}
                  <div className="text">{ratingRank[2].name}</div>
                  <div className="rank-most-owned">#3</div>
                  <div className="rank-most-owned-content">
                    Most rated Waifu
                  </div>
                </div>
              </div>
            </LinkRouter>
            <LadderFooterTop3>
              <PodiumTitleTop3>3</PodiumTitleTop3>
            </LadderFooterTop3>
          </TopContainer>
        </Top3Section>
        <TableDisplay>
          <thead>
            <TableRowFirst>
              <TableHeader style={{ width: "10%" }}>Rank #</TableHeader>
              <TableHeader style={{ width: "20%" }}>Tên nhân vật</TableHeader>
              <TableHeader style={{ width: "30%" }}>Nguồn</TableHeader>
              <TableHeader style={{ width: "20%" }}>
                Số người đánh giá
              </TableHeader>
              <TableHeader style={{ width: "20%" }}>
                Rating trung bình ⭐
              </TableHeader>
            </TableRowFirst>
          </thead>
        </TableDisplay>
        <RgbLine></RgbLine>
        <TableDisplay style={{ marginBottom: "16px" }}>
          <tbody>
            {ratingRank.map((waifu, index) => {
              if (index >= 0 && index <= 9) {
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
                  averageRating /= totalOfRates;
                  averageRating = parseFloat(averageRating.toFixed(2));
                }
                return (
                  <TableRow key={waifu.waifuid}>
                    <TableData style={{ width: "10%" }}>{index + 1}</TableData>
                    <TableData
                      onClick={() => navigate(`/waifudb/${waifu.waifuid}`)}
                      style={{ width: "20%" }}
                    >
                      {waifu.name}
                    </TableData>
                    <TableData style={{ width: "30%" }}>
                      {waifu.source}
                    </TableData>
                    <TableData style={{ width: "20%" }}>
                      {totalOfRates}
                    </TableData>
                    <TableData style={{ width: "20%" }}>
                      <TrophyDisplay>
                        <span>{averageRating}</span>
                        <TrophyImageData
                          src={
                            index === 0
                              ? Platinum
                              : index === 1
                              ? Gold
                              : index === 2
                              ? Silver
                              : Bronze
                          }
                        />
                      </TrophyDisplay>
                    </TableData>
                  </TableRow>
                );
              }
            })}
          </tbody>
        </TableDisplay>
      </RankingContainer>
    );
  }

  return (
    <>
      <ToTopButton visible={visible} to="/waifudb" onClick={toggleHome}>
        <img src={ToTopBtn} alt="to-top-btn" />
      </ToTopButton>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/postlist">
            <Img src={WebLogo} alt="weblogo" />
          </NavLogo>
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
      <PageContainer /* dark={modalOpen} */>
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
              <CenterSection>
                <CenterBar>
                  <LeftPart>
                    <BsViewStacked
                      onClick={handlerTableDisp}
                      className={
                        isActivated ? "table-icon chosen" : "table-icon"
                      }
                    />
                    <BsJustify
                      onClick={handlerTableDisp}
                      className={
                        !isActivated ? "table-icon chosen" : "table-icon"
                      }
                    />
                  </LeftPart>
                  {waifuSearchBar}
                  <RightPart>
                    {user.role === "admin" && (
                      <AddButton onClick={handleOpenModal}>
                        Thêm Waifu
                      </AddButton>
                    )}
                    {user.role === "admin" &&
                      (tableEdit ? (
                        <DoneButton
                          onClick={() => setTableEdit(false)}
                          appear={!isActivated}
                        >
                          Hoàn tất
                        </DoneButton>
                      ) : (
                        <EditButton
                          onClick={() => setTableEdit(true)}
                          appear={!isActivated}
                        >
                          Chỉnh sửa
                        </EditButton>
                      ))}
                  </RightPart>
                </CenterBar>
                {body}
              </CenterSection>
              {rankingSection}
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
      </PageContainer>
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
            <MessageBoxButton onClick={handleConfirmOption} notClose={true}>
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

      <div className="info-modal-container dialog-container dialog-in dialog-gone">
        <div className="info-modal modal-in">
          <ModalHeader>
            <ModalTitle>Thông tin nhân vật</ModalTitle>
            <ModalButton>
              <CancelBtn onClick={handleCancelModal}>Hủy</CancelBtn>
              <OkBtn onClick={handleOkModal}>Lưu</OkBtn>
            </ModalButton>
          </ModalHeader>
          <AddTitle>Tên nhân vật</AddTitle>
          <NewInfoInputDiv>
            <NewInfoInputDivWrap borderChange={isNewNameFocused}>
              <NewInfoInputText
                type="text"
                maxLength="100"
                placeholder="Ex: Yae Miko,..."
                value={charName}
                onChange={(e) => setCharName(e.target.value)}
                onBlur={() => setIsNewNameFocused(false)}
                onFocus={() => setIsNewNameFocused(true)}
              />
              <NewInfoInputMaxCount>{charName.length}/100</NewInfoInputMaxCount>
            </NewInfoInputDivWrap>
          </NewInfoInputDiv>
          {/* <InputName
            type="text"
            placeholder="Ex: Yae Miko,..."
            value={charName}
            onChange={(e) => setCharName(e.target.value)}
          /> */}
          <AddTitle>Tên nguồn</AddTitle>
          <NewInfoInputDiv>
            <NewInfoInputDivWrap borderChange={isNewSrcFocused}>
              <NewInfoInputText
                type="text"
                maxLength="100"
                placeholder="Ex: Genshin Impact,..."
                value={charSrc}
                onChange={(e) => setCharSrc(e.target.value)}
                onBlur={() => setIsNewSrcFocused(false)}
                onFocus={() => setIsNewSrcFocused(true)}
              />
              <NewInfoInputMaxCount>{charSrc.length}/100</NewInfoInputMaxCount>
            </NewInfoInputDivWrap>
          </NewInfoInputDiv>
          {/* <InputName
            type="text"
            placeholder="Ex: Genshin Impact,..."
            value={charSrc}
            onChange={(e) => setCharSrc(e.target.value)}
          /> */}
          <AddTitle>Chọn ảnh nhân vật</AddTitle>
          {/* <ImgButton htmlFor="select-image">
              <input
                accept="image/*"
                type="file"
                id="select-image"
                style={{ display: "none" }}
                onChange={imageHandler}
              />
              Upload ảnh
            </ImgButton> */}
          {imageUrl ? (
            <ImgShow>
              {/* <AddTitle>Preview ảnh nhân vật:</AddTitle>
                <SelectedImg src={imageUrl} alt="char-image" /> */}
              <CharImageShow image={imageUrl}>
                <FormImgUploadDelete>
                  <FormImgUploadDeleteIcon
                    src={DeleteIcon}
                    alt="delete-uploaded"
                    onClick={() => handleCancelImageUrl()}
                  />
                </FormImgUploadDelete>
              </CharImageShow>
            </ImgShow>
          ) : (
            <ImgShow>
              <CharImageInput
                htmlFor="select-image"
                onClick={handleImageInputClick}
              >
                <IconImageAdd />
                <input
                  ref={imageInputRef}
                  accept="image/*"
                  type="file"
                  id="select-image"
                  // multiple="multiple"
                  style={{ display: "none" }}
                  onChange={imageHandler}
                />
              </CharImageInput>
            </ImgShow>
          )}

          <AddTitle>Chọn ảnh nguồn</AddTitle>
          {/* <ImgButton htmlFor="select-source-image">
              <input
                accept="image/*"
                type="file"
                id="select-source-image"
                style={{ display: "none" }}
                onChange={imageSrcHandler}
              />
              Upload ảnh
            </ImgButton> */}
          {imageSrcUrl ? (
            <ImgShow>
              {/* <AddTitle>Preview ảnh nguồn:</AddTitle>
                <SelectedSrcImg src={imageSrcUrl} alt="source-image" /> */}
              <CharSrcImageShow image={imageSrcUrl}>
                <FormImgUploadDelete>
                  <FormImgUploadDeleteIcon
                    src={DeleteIcon}
                    alt="delete-uploaded"
                    onClick={() => handleCancelSrcImageUrl()}
                  />
                </FormImgUploadDelete>
              </CharSrcImageShow>
            </ImgShow>
          ) : (
            <ImgShow>
              <CharSrcImageInput
                htmlFor="select-source-image"
                onClick={handleImageSrcInputClick}
              >
                <IconSrcImageAdd />
                <input
                  ref={imageSrcInputRef}
                  accept="image/*"
                  type="file"
                  id="select-source-image"
                  style={{ display: "none" }}
                  onChange={imageSrcHandler}
                />
              </CharSrcImageInput>
            </ImgShow>
          )}
        </div>
      </div>

      {/* <AddModal open={modalOpen}>
        <ModalHeader>
          <ModalTitle>Thông tin nhân vật</ModalTitle>
          <ModalButton>
            <CancelBtn onClick={handleCancelModal}>Hủy</CancelBtn>
            <OkBtn onClick={handleOkModal}>Lưu</OkBtn>
          </ModalButton>
        </ModalHeader>
        <AddTitle>Tên nhân vật</AddTitle>
        <NewInfoInputDiv>
          <NewInfoInputDivWrap borderChange={isNewNameFocused}>
            <NewInfoInputText
              type="text"
              maxLength="100"
              placeholder="Ex: Yae Miko,..."
              value={charName}
              onChange={(e) => setCharName(e.target.value)}
              onBlur={() => setIsNewNameFocused(false)}
              onFocus={() => setIsNewNameFocused(true)}
            />
            <NewInfoInputMaxCount>{charName.length}/100</NewInfoInputMaxCount>
          </NewInfoInputDivWrap>
        </NewInfoInputDiv>
        <AddTitle>Tên nguồn</AddTitle>
        <NewInfoInputDiv>
          <NewInfoInputDivWrap borderChange={isNewSrcFocused}>
            <NewInfoInputText
              type="text"
              maxLength="100"
              placeholder="Ex: Genshin Impact,..."
              value={charSrc}
              onChange={(e) => setCharSrc(e.target.value)}
              onBlur={() => setIsNewSrcFocused(false)}
              onFocus={() => setIsNewSrcFocused(true)}
            />
            <NewInfoInputMaxCount>{charSrc.length}/100</NewInfoInputMaxCount>
          </NewInfoInputDivWrap>
        </NewInfoInputDiv>
        <ImgContainer>
          <AddTitle>Chọn ảnh nhân vật</AddTitle>
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
        </ImgContainer>
        {imageUrl && (
          <ImgShow>
            <AddTitle>Preview ảnh nhân vật:</AddTitle>
            <SelectedImg src={imageUrl} alt="char-image" />
          </ImgShow>
        )}
        <ImgContainer>
          <AddTitle>Chọn ảnh nguồn</AddTitle>
          <ImgButton htmlFor="select-source-image">
            <input
              accept="image/*"
              type="file"
              id="select-source-image"
              style={{ display: "none" }}
              onChange={imageSrcHandler}
            />
            Upload ảnh
          </ImgButton>
        </ImgContainer>
        {imageSrcUrl && (
          <ImgShow>
            <AddTitle>Preview ảnh nguồn:</AddTitle>
            <SelectedSrcImg src={imageSrcUrl} alt="source-image" />
          </ImgShow>
        )}
      </AddModal> */}
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

export default WaifuList;
