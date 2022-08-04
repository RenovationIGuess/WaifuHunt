import React, { useState, useEffect, useContext } from "react";
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
  RightPart,
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
} from "./waifuElement";
import { Loading, LoadingWrap } from "../Loading";
import { Toast, ToastMsg } from "../toastMsg";

import Chilling from "../../videos/chillin.gif";
import HutaoAva from "../../images/hutaostick.png";
import RaidenAva from "../../images/raidenfbi.png";
import DoggoAva from "../../images/realdoggo.png";
import LeftImage from "../../images/logoroll.svg";
import WebLogo from "../../images/logoweb.png";
import ToTopBtn from "../../images/arrow/RArrow.png";
import Paimoe from "../../images/paiface.png";
import NoWaifu from "../../videos/nowaifu.gif";

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

import Footer from "../footer";
import { TIME_STORAGE, ROLL_STORAGE } from "../../contexts/constants";

import { Link as LinkRouter, useNavigate } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll/modules";

import { AuthContext } from "../../contexts/AuthContext";
import { WaifuContext } from "../../contexts/WaifuContext";

import Timer from "../timer";

import "../profile/profile.scss";
import "./waifulist.scss";

const WaifuList = () => {
  const {
    authState: { user },
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

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [userAva, setUserAva] = useState(RaidenAva);
  const [isActivated, setIsActivated] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [charName, setCharName] = useState("");
  const [charSrc, setCharSrc] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [imageSrcUrl, setImageSrcUrl] = useState(null);
  const [tableEdit, setTableEdit] = useState(false);

  const [currentPage, setCurrentPage] = useState(0);

  const [message, setMessage] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("");
  const [categories, setCategories] = useState([]);
  const [isNewCate, setIsNewCate] = useState(false);
  const [isCateSelected, setIsCateSelected] = useState(false);

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
    window.addEventListener("scroll", scrollBtn);
  }, []);

  useEffect(() => {
    async function fetchData() {
      await getWaifus();
      if (!waifusLoading) {
        /* setData(waifus); */
        for (const waifu of waifus) {
          const index = category.findIndex(
            (item) => item.name === waifu.source
          );
          if (index === -1) {
            category.push({
              name: waifu.source,
              state: false,
            });
          }
        }
        setCategories(category);
      }
    }
    fetchData();
  }, [waifusLoading]);

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
    setModalOpen(true);
  };

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const handleCancelModal = () => {
    setCharName("");
    setCharSrc("");
    setImageUrl(null);
    setImageSrcUrl(null);
    setModalOpen(false);
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
        setModalOpen(false);
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
  };

  const handleRemoveWaifu = async (waifuId) => {
    try {
      const delResponse = await deleteWaifu(waifuId);
      if (delResponse.success) {
        setMessage("Xóa khỏi database thành công!");
        setDesc("Sao nỡ lòng nào...");
        setType("success");
        myFunction();
      } else {
        setMessage("Thêm thất bại!");
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

  const pageCount = Math.ceil(waifus.length / PER_PAGE);

  const handleAllClick = () => {
    for (const item of categories) {
      item.state = false;
    }
    setIsCateSelected(false);
  };

  const handleCateClick = (source) => {
    // use to Re-render when a cate is selected
    source.state = true;
    for (const item of categories) {
      if (item.name !== source.name) {
        item.state = false;
      }
    }
    setIsNewCate(!isNewCate);
    setIsCateSelected(true);
  };

  if (waifusLoading) {
    body = (
      <LoadingWrap>
        <Loading src={Chilling} alt="loading-chilling" />
      </LoadingWrap>
    );
  } else if (waifus.length === 0) {
    body = (
      <>
        <CenterEmpty>
          <EmptyImg src={NoWaifu} alt="no-waifu" />
          <EmptyText>Chưa có waifu nào được tạo trong Database</EmptyText>
        </CenterEmpty>
      </>
    );

    left = (
      <LeftSection>
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
  } else {
    let currentPageData;

    waifus.sort((a, b) => {
      return b.user.length - a.user.length;
    });

    left = (
      <LeftSection>
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
        <Category>
          <CateImg>
            <TbListSearch />
          </CateImg>
          <CategoryTitle>Categories</CategoryTitle>
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
          {/* <CategoryItem>
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
        </CateList>
        <ContactFooter>
          <PaiFace src={Paimoe} alt="pai-logo" />
          <CopyRight>All Rights Reserved.</CopyRight>
        </ContactFooter>
      </LeftSection>
    );

    if (!isCateSelected) {
      if (isActivated) {
        currentPageData = waifus
          .slice(offset, offset + PER_PAGE)
          .map((waifu) => (
            <LinkRouter key={waifu.waifuid} to={`/waifudb/${waifu.waifuid}`}>
              <div className="container">
                <img src={waifu.image} alt="Avatar" className="image" />
                <div className="overlay">
                  <img src={waifu.sourceimg} alt="logo" className="src-image" />
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
                {waifus.slice(offset, offset + PER_PAGE).map((waifu, index) => (
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
                        {index + offset + 1}
                      </TableData>
                    )}
                  </TableRow>
                ))}
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
      const currentTrueCate = categories.findIndex(
        (item) => item.state === true
      );
      const source = categories[currentTrueCate];
      const cateData = waifus.filter((item) => item.source === source.name);
      const catePageNum = Math.ceil(cateData.length / PER_PAGE);
      if (isActivated) {
        currentPageData = cateData
          .slice(offset, offset + PER_PAGE)
          .map((waifu) => (
            <LinkRouter key={waifu.waifuid} to={`/waifudb/${waifu.waifuid}`}>
              <div className="container">
                <img src={waifu.image} alt="Avatar" className="image" />
                <div className="overlay">
                  <img src={waifu.sourceimg} alt="logo" className="src-image" />
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
              {cateData.slice(offset, offset + PER_PAGE).map((waifu) => (
                <TableRow>
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
                </TableRow>
              ))}
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
              pageCount={catePageNum}
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
  }

  return (
    <>
      <ToTopButton visible={visible} to="/waifudb" onClick={toggleHome}>
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
      <PageContainer dark={modalOpen}>
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
        <CenterSection>
          <CenterBar>
            <LeftPart>
              <BsViewStacked
                onClick={handlerTableDisp}
                className={isActivated ? "table-icon chosen" : "table-icon"}
              />
              <BsJustify
                onClick={handlerTableDisp}
                className={!isActivated ? "table-icon chosen" : "table-icon"}
              />
            </LeftPart>
            <RightPart>
              {user.role === "admin" && (
                <AddButton onClick={handleOpenModal}>Thêm Waifu</AddButton>
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
      </PageContainer>
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

      <AddModal open={modalOpen}>
        <ModalHeader>
          <ModalTitle>Thông tin nhân vật</ModalTitle>
          <ModalButton>
            <CancelBtn onClick={handleCancelModal}>Hủy</CancelBtn>
            <OkBtn onClick={handleOkModal}>Lưu</OkBtn>
          </ModalButton>
        </ModalHeader>

        <AddTitle>Tên nhân vật</AddTitle>
        <InputName
          type="text"
          placeholder="Ex: Yae Miko,..."
          value={charName}
          onChange={(e) => setCharName(e.target.value)}
        />
        <AddTitle>Tên nguồn</AddTitle>
        <InputName
          type="text"
          placeholder="Ex: Genshin Impact,..."
          value={charSrc}
          onChange={(e) => setCharSrc(e.target.value)}
        />
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
      </AddModal>
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
