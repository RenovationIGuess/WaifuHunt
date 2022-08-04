import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
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
} from "./pfelement";

import { Loading, LoadingWrap } from "../Loading";

import Chilling from "../../videos/chillin.gif";
import WebLogo from "../../images/logoweb.png";
import { BsChatLeftText } from "react-icons/bs";
import LeftImage from "../../images/logoroll.svg";
import Paimoe from "../../images/paiface.png";

import ToTopBtn from "../../images/arrow/RArrow.png";
import EditBtn from "../../images/editbtn.png";

import { RiLogoutBoxLine } from "react-icons/ri";
import { MdKeyboardArrowRight, MdErrorOutline } from "react-icons/md";
import Footer from "../footer";
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

import Timer from "../timer";

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

  let body;
  let left;
  let numberOfTopTier = 0;

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

  // Used for searching
  const [searchValue, setSearchValue] = useState("");

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
    setOpenTitle(false)
  }

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

  if (waifusLoading) {
    left = (
      <div
        style={{
          width: "232px",
          height: "0",
          marginRight: "25px",
        }}
      ></div>
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
                              <p className="rank-most-owned">#{searchIndex + 1}</p>
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
          <NavLogo to="/">
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
          <User onClick={handleOpen}>
            <UserAva src={userAva} alt="user-ava" />
            <UserName>{user.name}</UserName>
            <IoIosArrowDown />
          </User>
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
      <Container dark={avaModalVisible || bgModalVisible || modalOpen || openTitle}>
        <StickySection>
          {left}
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
                  <span key={item.titleName} onClick={handleOpenTitle} className={item.className}>
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
            <MailCard>
              <EmailAdd>def@gmail.com</EmailAdd>
              <EmailOwner>Kiene</EmailOwner>
            </MailCard>
            <MailCardLast>
              <EmailAdd>xyz@gmail.com</EmailAdd>
              <EmailOwner>Jamnes</EmailOwner>
            </MailCardLast>

            <ContactFooter>
              <PaiFace src={Paimoe} alt="pai-logo" />
              <CopyRight>All Rights Reserved.</CopyRight>
            </ContactFooter>
          </Contact>
        </StickySection>
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
      <Footer />

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
              <TableData style={{ width: "30%" }}>Số roll đạt 100 lần</TableData>
              <TableData style={{ width: "30%" }}>
                <span className="normal-title">Starter &#10024;</span>
              </TableData>
            </TableRow>
            <TableRow>
              <TableData style={{ width: "40%" }}>God of roll</TableData>
              <TableData style={{ width: "30%" }}>Số roll đạt 1000 lần</TableData>
              <TableData style={{ width: "30%" }}>
                <span className="elite-title">God of roll &#127922;</span>
              </TableData>
            </TableRow>
          </tbody>
        </TableDisplay>
      </TitleModal>
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
