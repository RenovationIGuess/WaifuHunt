import React, {
  useState,
  useEffect,
  useContext,
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
} from "./waifuinfoele";

import { Loading, LoadingWrap } from "../Loading";
import { Toast, ToastMsg } from "../toastMsg";

import Chilling from "../../videos/chillin.gif";
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

import Footer from "../footer";

import { Link as LinkRouter } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import { WaifuContext } from "../../contexts/WaifuContext";

import { TIME_STORAGE, ROLL_STORAGE } from "../../contexts/constants";

import "../profile/profile.scss";
import "../waifudb/waifulist.scss";
import "./waifuinfo.scss";
import { TrashButton } from "../getwaifu/getwaifuele";

import Timer from '../timer';

const WaifuInfo = () => {
  const {
    authState: { user },
    logoutUser,
    addWishlist,
    removeWishlist,
    deleteWaifu,
    increaseRoll,
  } = useContext(AuthContext);
  const {
    waifuState: { waifu, waifuLoading, waifus, waifusLoading },
    editWaifu,
    getWaifus,
    getCertainWaifus,
  } = useContext(WaifuContext);

  const waifuId = useParams();

  let body;
  let left;

  const navigate = useNavigate()

  const [open, setOpen] = useState(false);
  const [userAva, setUserAva] = useState(RaidenAva);

  const [charName, setCharName] = useState("");
  const [charSrc, setCharSrc] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [imageSrcUrl, setImageSrcUrl] = useState(null);
  const [srcLink, setSrcLink] = useState("");
  const [charDesc, setCharDesc] = useState("");
  const [imgSrc, setImgSrc] = useState("");

  const [editActive, setEditActive] = useState(false);
  const [isWishlist, setIsWishlist] = useState(false);
  const [isOwned, setIsOwned] = useState(false);

  const [message, setMessage] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("");

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
    if (dead){
      return parseInt(dead);
    } else return null;
  });

  const initTimer = 3600000; //in miliseconds, 3600000 = 1 hour

  //reset remaining time to initTimer 
  const startTimer = () => { 
    const deadTime = Date.now() + initTimer;
    window.localStorage.setItem(TIME_STORAGE, deadTime);
    setDeadline(deadTime); 
  }

  useEffect(() => {
    window.localStorage.setItem(ROLL_STORAGE, rollTimes);
  }, [rollTimes]);

  const handleDead = () => {
    setRollTimes(10);
  }

  const startReset = async () => {
    try {
      const response = await increaseRoll()
      if (response.success) {
        if (rollTimes > 1) {
          setRollTimes(rollTimes - 1);
        } else if (rollTimes === 1) {
          setRollTimes(rollTimes - 1);
          startTimer();
        }
      }
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    async function fetchData() {
      await getWaifus()
    }
    fetchData()
  }, []);

  useEffect(() => {
    async function fetchData() {
      if (waifus.length !== 0) {
        const waifuToFind = waifus.findIndex(
          (item) => item.waifuid === parseInt(waifuId.id)
        );
        if (user.waifulist.length !== 0) {
          console.log(123)
          const searchIndex = user.waifulist.findIndex(
            (item) => item === waifus[waifuToFind]._id
          );
          if (searchIndex !== -1) {
            setIsOwned(true);
          } else {
            setIsOwned(false)
          }
        }
        if (user.wishlist.length !== 0) {
          console.log(123)
          const wishIndex = user.wishlist.findIndex(
            (item) => item === waifus[waifuToFind]._id
          );
          if (wishIndex !== -1) {
            setIsWishlist(true);
          } else {
            setIsWishlist(false)
          }
        }
      }
      await getCertainWaifus(parseInt(waifuId.id))
    }
    fetchData()
  }, [waifuId.id]);

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
      const searchIndex = waifus.findIndex((item) => item.name.includes(searchValue));
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

  if (!waifusLoading) {
    if (waifus.length !== 0) {
      /* const waifuToFind = waifus.findIndex(
        (item) => item.waifuid === parseInt(waifuId.id)
      );
      if (user.waifulist.length !== 0) {
        const searchIndex = user.waifulist.findIndex(
          (item) => item === waifus[waifuToFind]._id
        );
        if (searchIndex !== -1) {
          isOwned.current = true;
        }
      }
      if (user.wishlist.length !== 0) {
        const wishIndex = user.wishlist.findIndex(
          (item) => item === waifus[waifuToFind]._id
        );
        if (wishIndex !== -1) {
          isWishlist.current = true;
        }
      } */

      waifus.sort((a, b) => {
        return (b.user.length - a.user.length)
      })
    }

    left = (
      <LeftSection>
        <LeftNavWrap
          disabled={rollTimes === 0}
          onClick={startReset}
          to={`/waifudb/${
            waifus[Math.floor(Math.random() * waifus.length)].waifuid
          }/get`}
        >
          <LeftImg src={LeftImage} alt="roll-waifu" />
          <LeftItem>
            {rollTimes === 0 ?
            <Timer 
              countdownTimestampMs={deadline} 
              handleDead={handleDead}
              rollTimes={rollTimes}
            /> : `Roll Waifu (${rollTimes})`
            }
          </LeftItem>
        </LeftNavWrap>
        <LeftNavWrap to="/waifudb" style={{ marginBottom: "4px" }}>
          <Database />
          <LeftItem>Waifu Database</LeftItem>
        </LeftNavWrap>
        {/* <Category>
          <CateImg>
            <TbListSearch />
          </CateImg>
          <CategoryTitle>Categories</CategoryTitle>
        </Category>
        <CategoryItem>
          <div>Genshin Impact</div>
          <div>
            ({waifus.filter((item) => item.source === "Genshin Impact").length})
          </div>
        </CategoryItem>
        <CategoryItem>
          <div>Love is war</div>
          <div>
            ({waifus.filter((item) => item.source === "Love is war").length})
          </div>
        </CategoryItem>
        <CategoryItem>
          <div>Honkai Impact 3</div>
          <div>
            ({waifus.filter((item) => item.source === "Honkai Impact 3").length}
            )
          </div>
        </CategoryItem> */}
        <ContactFooter>
          <PaiFace src={Paimoe} alt="pai-logo" />
          <CopyRight>All Rights Reserved.</CopyRight>
        </ContactFooter>
      </LeftSection>
    );
  }

  if (waifuLoading) {
    body = (
      <LoadingWrap>
        <Loading src={Chilling} alt="loading-chilling" />
      </LoadingWrap>
    );
  } else {
    body = (
      <GridDisplay>
        <ImageHolder>
          <AddTitle>Ảnh nhân vật</AddTitle>
          <div className="image-label">
            <label htmlFor="select-image">
              {/* If has type === true => character image */}
              <ImgColumn
                type={true}
                src={!imageUrl ? waifu.image : imageUrl}
                alt="char-pic"
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
          <AddTitle>Ảnh nguồn</AddTitle>
          <div>
            <label htmlFor="select-source-image">
              <ImgColumn
                type={false}
                src={!imageSrcUrl ? waifu.sourceimg : imageSrcUrl}
                alt="char-src"
              />
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
              <InputName
                type="text"
                placeholder="Ex: Yae Miko,..."
                onChange={(e) => setCharName(e.target.value)}
              />
            ) : (
              waifu.name
            )}
          </GridInfoItem>

          {!editActive && (
            <GridInfoItem>
              <GridInfoTitle>Rank (most-owned): </GridInfoTitle>
              #{waifus.findIndex((item) => item.waifuid === waifu.waifuid) + 1}
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
              <InputName
                type="text"
                placeholder="Ex: Yae Miko,..."
                onChange={(e) => setCharSrc(e.target.value)}
              />
            ) : (
              waifu.source
            )}
          </GridInfoItem>

          <GridInfoItem>
            <GridInfoTitle>Link nguồn: </GridInfoTitle>
            {editActive ? (
              <InputName
                type="text"
                placeholder="Ex: Yae Miko,..."
                onChange={(e) => setSrcLink(e.target.value)}
              />
            ) : (
              waifu.sourcelink
            )}
          </GridInfoItem>

          <GridInfoItem>
            <GridInfoTitle>Link ảnh tham khảo của nhân vật: </GridInfoTitle>
            {editActive ? (
              <InputName
                type="text"
                placeholder="Ex: Yae Miko,..."
                onChange={(e) => setImgSrc(e.target.value)}
              />
            ) : (
              waifu.imagesrc
            )}
          </GridInfoItem>

          <GridDescItem>
            <GridInfoTitle>Mô tả: </GridInfoTitle>
            {editActive ? (
              <DescArea
                type="text"
                placeholder="Ex: Yae Miko,..."
                onChange={(e) => setCharDesc(e.target.value)}
              />
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
                  handleSearch()
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
              <ToInfoPage>Thông tin của tôi</ToInfoPage>
              <LinkRouter
                to={`/user/${user.userid}`}
                className="menu-item"
              >
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
        {left}
        <RightSection>
          <HowToRollDesc>Hướng dẫn cách roll &#127922;</HowToRollDesc>
          <RollDesc>
            <RollLi>
              Click vào nút roll ở bên trái, nếu không thấy có gì thay đổi thì
              reload lại trang
            </RollLi>
            <RollLi>
              Sau khi roll ra nhân vật, nếu muốn lấy thì click vào nút GET, còn
              không thì bỏ qua
            </RollLi>
            <RollLi>
              Sau khi đã GET mà muốn DELETE thì có thể chỉnh sửa trong phần cài
              đặt trang cá nhân
            </RollLi>
            <RollLi>
              Mỗi <span style={{ fontWeight: "bold" }}>1 tiếng</span> bạn sẽ có{" "}
              <span style={{ fontWeight: "bold" }}>10 lần roll</span>, nhớ chú ý
              nhé!
            </RollLi>
          </RollDesc>
          <EndDesc>
            Phần hướng dẫn đến đây là hết, Chúc bạn chơi vui vẻ!
          </EndDesc>
          <AmongUs>
            ⣿⣿⣿⠟⣉⣉⡛⢿⣿⣿⣿⣿⣿⠟⣉⣉⡛⢿⣿⣿ ⣿⡟⡋⢸⡇⠶⠶⠦⢹⣿⣿⡟⡋⢸⡇⠶⠶⠦⢹⣿ ⣿⠁⡇⢸⣷⣶⣶⡆⢸⣿⣿⠁⡇⢸⣷⣶⣶⡆⢸⣿
            ⣿⣧⡁⢸⡏⠉⢩⠁⣾⣿⣿⣧⡁⢸⡏⠉⢩⠁⣾⣿ ⣿⣿⣥⣄⣀⣀⣠⣤⣽⣿⣿⣿⣥⣄⣀⣀⣠⣤⣽⣿
          </AmongUs>
        </RightSection>
        <WaifuInfoContainer>
          <Header>
            {editActive && <GuideText>Click vào ảnh để thay ảnh</GuideText>}
            {editActive ? (
              <ModalButton>
                <CancelBtn onClick={handleCancelEdit}>Hủy</CancelBtn>
                <OkBtn onClick={handleOkEdit}>Lưu</OkBtn>
              </ModalButton>
            ) : (
              <>
                {user.role === "admin" ? (
                  <AddButton onClick={handleEditActive}>Chỉnh sửa</AddButton>
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
                    <RiHeartsLine className="heart-icon" onClick={handleWish} />
                  )}
                  <TrashButton
                    clickable={!isOwned}
                    onClick={handleTrashWaifu}
                  />
                </ModalButton>
              </>
            )}
          </Header>
          {body}
        </WaifuInfoContainer>
      </MainContainer>
      <Footer />

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

export default WaifuInfo;
