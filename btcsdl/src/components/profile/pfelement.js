import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from 'react-scroll'
import { RiSearchLine } from "react-icons/ri";
import { FiDatabase } from "react-icons/fi";
import { RiProjectorLine } from "react-icons/ri";
import { MdManageAccounts, MdOutlineCancel } from "react-icons/md";
import { AiOutlineLike, AiFillLike, AiOutlineComment } from "react-icons/ai"
import { HiCheck } from "react-icons/hi"
import { BsTrashFill } from "react-icons/bs"
import { FaRegEdit } from "react-icons/fa"
import { IoIosCreate } from "react-icons/io";
import PostsPart from '../../images/posts.png'

export const Container = styled.div`
  /* display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap; */
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  /* background-color: ${(props) =>
    props.dark ? "rgba(0,0,0,0.4)" : "#f5f6fb"};
  display: ${(props) => (props.dark ? "none" : "block")}; 
  z-index: ${(props) => (props.dark ? "1100" : "1")}; */
  opacity ${(props) => (props.dark ? "0.5" : "1")};
  margin-bottom: 80px;
`;

export const ContainerModal = styled.div`
  display: ${(props) => (props.dark ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: ${(props) => (props.dark ? "1100" : "1")};
`;

export const Nav = styled.nav`
  background: rgb(0, 0, 0);
  /* -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px); */
  height: 105px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
  padding-bottom: 25px;
  background-color: #f5f6fb;

  @media screen and {
    max-width: 960px;
  }
   {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* position: fixed; */
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  border-bottom: 1px solid rgba(221, 221, 221, 0.2);
  background-color: #000;
`;

export const NavLogo = styled(LinkRouter)`
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 8px;
`;

export const Img = styled.img`
  width: 200px;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkRouter)`
  border-radius: 50px;
  /* background: #7bb1ff; */
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  background: linear-gradient(
    to top right,
    #7bb1ff,
    #a6aaff,
    #f1b9f3,
    #9dfdfd,
    #7bb1ff,
    #a6aaff,
    #f1b9f3,
    #9dfdfd,
    #7bb1ff
  );
  -webkit-background-clip: border-box;
  animation: rgb-text 50s infinite linear;
  background-size: 500% 500%;

  @keyframes rgb-text {
    0% {
      background-position: 250% -250%;
    }
    100% {
      background-position: -250% 250%;
    }
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const SearchBarContainer = styled.div`
  width: 300px;
  /* padding: 8px 10px; */
  position: relative;
  font-size: 16px;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: none;
  outline: none;

  &::before {
    content: "";
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    inset: 0;
    border-radius: 10px;
    border: none;
    outline: none;
    padding: 3px;
    background: linear-gradient(
      to top right,
      #7bb1ff,
      #a6aaff,
      #f1b9f3,
      #9dfdfd,
      #7bb1ff,
      #a6aaff,
      #f1b9f3,
      #9dfdfd,
      #7bb1ff
    );

    -webkit-background-clip: border-box;
    animation: rgb-text 50s infinite linear;
    background-size: 500% 500%;

    @keyframes rgb-text {
      0% {
        background-position: 250% -250%;
      }
      100% {
        background-position: -250% 250%;
      }
    }

    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }
`;

export const SearchBarIcon = styled(RiSearchLine)`
  width: 18px;
  /* height: 16px; */
  z-index: 999;
  margin-left: 8px;
`;

export const SearchBar = styled.input`
  width: 100%;
  padding: 8px 10px 8px 30px;
  outline: none;
  border: none;
  border-radius: 10px;
  margin-left: -26px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  /* width: 200px; */
  padding: 4px 8px;
  background: #fff;
  border-radius: 50px;

  &:hover {
    background: linear-gradient(
      to top right,
      #7bb1ff,
      #a6aaff,
      #f1b9f3,
      #9dfdfd,
      #7bb1ff,
      #a6aaff,
      #f1b9f3,
      #9dfdfd,
      #7bb1ff
    );

    -webkit-background-clip: border-box;
    animation: rgb-text 50s infinite linear;
    background-size: 500% 500%;

    @keyframes rgb-text {
      0% {
        background-position: 250% -250%;
      }
      100% {
        background-position: -250% 250%;
      }
    }

    cursor: pointer;
  }

  &:active {
    background: linear-gradient(
      to top right,
      #7bb1ff,
      #a6aaff,
      #f1b9f3,
      #9dfdfd,
      #7bb1ff,
      #a6aaff,
      #f1b9f3,
      #9dfdfd,
      #7bb1ff
    );

    -webkit-background-clip: border-box;
    animation: rgb-text 50s infinite linear;
    background-size: 500% 500%;

    @keyframes rgb-text {
      0% {
        background-position: 250% -250%;
      }
      100% {
        background-position: -250% 250%;
      }
    }

    cursor: pointer;
  }
`;

export const UserAva = styled.img`
  border-radius: 50%;
  border: 2px solid #dddddd;
  box-sizing: content-box;
  width: 35px;
  margin-right: 10px;
`;

export const UserName = styled.div`
  color: #000;
  margin-right: 10px;
`;

export const StickySection = styled.div`
  display: flex;
  /* overflow-x: hidden; */
  justify-content: center;
  align-items: flex-start;
  margin-top: 80px;
`;

export const LeftSideNav = styled.div`
  position: fixed;
  top: 80px;
  left: calc(50% - 304px - 40px - 232px);
  background: #fff;
  width: 232px;
  /* height: 500px; */
  border-radius: 16px;
  margin-right: 25px;
  margin-top: 25px;
  padding: 4px;
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start;
  align-items: center; */
  z-index: 100;
`;

export const LeftSideNavLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 8px;
`

export const LeftSideNavLoadingIcon = styled.img`
  width: 100px;
`

export const InfoLoadingImg = styled.img`
  width: 300px;
`

export const LeftSideNavLoadingDiv = styled.div`
  font-size: 14px;
  margin-top: 8px;
  color: #8592a3;
`

export const AvaBgLoadingDiv = styled.div`
  font-size: 16px;
  line-height: 24px;
  margin-top: 16px;
  color: #8592a3;
`

export const LeftNavWrap = styled(LinkRouter)`
  padding: 4px 12px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 48px;
  border-radius: 16px;
  color: #8592a3;
  opacity: ${props => props.disabled ? '0.5' : '1'};
  pointer-events: ${props => props.disabled ? 'none' : ''};

  &:hover {
    color: #657ef8;
    background-color: #eff2ff;
  }
`;

export const LeftItem = styled.span`
  flex-grow: 1;
  font-size: 16px;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: no-wrap;
`;

export const Database = styled(FiDatabase)`
  width: 30px;
  height: 30px;
  margin-right: 8px;
  display: flex;
  align-items: center;
`;

export const Posting = styled(IoIosCreate)`
  width: 30px;
  height: 30px;
  margin-right: 8px;
  display: flex;
  align-items: center;
`

export const Prj = styled(RiProjectorLine)`
  width: 30px;
  height: 30px;
  margin-right: 8px;
  display: flex;
  align-items: center;
`;

export const Us = styled(MdManageAccounts)`
  width: 30px;
  height: 30px;
  margin-right: 8px;
  display: flex;
  align-items: center;
`;

export const LeftImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 8px;
  display: flex;
  align-items: center;
`;

export const AvaBgSection = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  border-radius: 16px;
  border: none;
  overflow: hidden;
  width: 608px;
  height: 428px;
  margin-top: 25px;
  margin-right: 25px;
  background-image: url(${(props) => props.bgImage});
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top;
`;

export const AvaBgSectionLoading = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
  position: relative;
  border-radius: 16px;
  border: none;
  overflow: hidden;
  width: 608px;
  height: 428px;
  margin-top: 25px;
  margin-right: 25px;
  background-image: url(${(props) => props.bgImage});
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top;
`;

export const UserBigAva = styled.img`
  width: 112px;
  border: 2px solid #f1f4f9;
  border-radius: 50%;
  background: #fff;

  &:hover {
    cursor: pointer;
  }
`;

export const UserInfo = styled.div`
  width: 100%;
  height: 50%;
  position: absolute;
  bottom: 0;
  background: #fff;
  padding: calc(56px + 16px) 32px 26px;
`;

export const Name = styled.div`
  display: flex;
  align-items: center;
`;

export const Sign = styled.div`
  display: flex;
  margin-top: 10px;
  line-height: 16px;
  font-size: 14px;
  color: #b2bdce;
  white-space: pre-wrap;
`;

export const SignTitle = styled.p`
  margin-left: 4px;
  word-wrap: break-word;
  word-break: break-word;
`;

export const Counter = styled.div`
  display: flex;
  height: 48px;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  -webkit-box-align: center;
  -webkit-box-pack: center;
`;

export const CounterTitle = styled.div`
  min-width: 80px;
  margin: 0 20px;
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* cursor: pointer; */
`;

export const CTNum = styled.div`
  font-size: 20px;
  font-weight: bold;
  line-height: 24px;
  color: #2f3f56;
`;

export const CTText = styled.div`
  color: #8592a3;
  margin-top: 4px;
  line-height: 16px;
  min-height: 16px;
`;

export const ProfileName = styled.span`
  font-size: 21px;
  color: #000;
  margin-right: 16px;
`;

export const Title = styled.span`
  margin-left: 8px;
  font-size: 14px;
  background: #ffd64e;
  /* text-weight: bold; */
  color: #fff;
  padding: 1px 3px;
  text-align: center;
  border-radius: 5px;
`;

export const Contact = styled.div`
  position: fixed;
  top: 80px;
  right: calc(50% - 304px - 272px);
  background: #fff;
  width: 272px;
  /* height: 500px; */
  border-radius: 16px;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  word-break: break-word;
  padding: 4px 16px;
  /* z-index: 10; */
`;

export const ContactHeader = styled.header`
  padding: 5px 0;
  min-height: 48px;
  display: flex;
  align-items: center;
  /* margin: 0 16px; */
  border-bottom: 1px solid #f1f4f9;
`;

export const ContactTitle = styled.p`
  font-size: 16px;
  font-weight: normal;
  line-height: 24px;
  color: #8592a3;
`;

export const MailWrap = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 4px;
  /* padding: 0 16px; */
`;

export const MailTitle = styled.div`
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
  color: #2f3f56;
  margin-top: 6px;
`;

export const MailCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 4px 8px;
  background: #f1f4f9;
  margin: 4px 0;
  border-radius: 8px;
`;

export const MailCardLast = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 4px 8px;
  background: #f1f4f9;
  margin: 4px 0 16px;
  border-radius: 8px;
`;

export const EmailAdd = styled.div`
  font-size: 10px;
  color: #8592a3;
`;

export const EmailOwner = styled.div`
  font-weight: bold;
  font-size: 12px;
  color: #2f3f56;
  margin-left: 4px;
`;

export const ContactFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 6px;
  border-top: 1px solid #f1f4f9;
`;

export const PaiFace = styled.img`
  width: 50px;
`;

export const CopyRight = styled.div`
  color: #b2bdce;
  line-height: 16px;
  font-size: 12px;
  margin-top: 4px;
  margin-bottom: 12px;
`;

export const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 16px 0;
`;

export const ListWrap = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  flex-wrap: wrap;
  /* align-items: center; */
  margin-right: 25px;
  width: 608px;
  padding: 4px 32px;
  background: #fff;
  border-radius: 16px;
  min-height: 525px;
  max-height: 825px;
  position: relative;
`;

export const ListHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #f1f4f9;
  width: 100%;
  /* margin-bottom: 20px; */
`;

export const ToTopButton = styled(LinkRouter)`
  position: fixed;
  /* right: calc(50% - 329px - 50px); */
  right: 25px;
  bottom: 25px;
  z-index: 990;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${props => (props.visible ? "1" : "0")};
  visibility: ${props => (props.visible ? "visible" : "hidden")};
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const AvaEditContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: calc(50% - 56px);
  margin: 0 32px;
  width: 544px;
  z-index: 10;
`;

export const EditButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  margin-top: 68px;
  color: #657ef8;
  font-size: 14px;
  background-color: #e1e7ff;
  border: none;
  border-radius: 16px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #657ef8;
    color: #fff;
    cursor: pointer;
  }
`;

export const FollowedButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  margin-top: 68px;
  line-height: 30px;
  height: 30px;
  color: #8592a3;
  font-size: 20px;
  background-color: #f1f4f9;
  border: none;
  border-radius: 16px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #8592a3;
    color: #fff;
    cursor: pointer;
  }
`;

export const FollowedIcon = styled(HiCheck)`
  /* font-size: inherit;
  font-style: normal; */
  line-height: 1;
`

export const EditIconWrap = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: #e1e7ff;
  border: none;
  border-radius: 50%;
  z-index: 15;
  transition: all 0.2s ease-in-out;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #657ef8;
    cursor: pointer;
  }
`;

export const EditIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const ImgSelect = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 8px 0;
`;

export const AvaToChoose = styled.img`
  width: 100%;
  border: 2px solid #f1f4f9;
  border-radius: 50%;
  background: #fff;
  box-shadow: ${(props) =>
    props.active ? "0 1px 8px 0 rgba(0, 0, 0, 0.2)" : ""};

  &:hover {
    cursor: pointer;
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const BgToChoose = styled.img`
  width: 100%;
  border-radius: 12px;
  background: #fff;
  box-shadow: ${(props) =>
    props.active ? "0 1px 8px 0 rgba(0, 0, 0, 0.2)" : ""};

  &:hover {
    cursor: pointer;
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const Modal = styled.div`
  background-color: #fff;
  position: fixed;
  top: 35%;
  transform: translateY(-50%);
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 16px;
  width: 500px;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  display: ${({ visible }) => (visible ? "block" : "none")};
  transition: all 0.2s ease;
  z-index: 990;
`;

export const ModalFooter = styled.div`
  border-top: 1px solid #f1f4f9;
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
  padding-top: 8px;
`;

export const OkBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  color: #657ef8;
  font-size: 14px;
  background-color: #e1e7ff;
  border: none;
  border-radius: 6px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #657ef8;
    color: #fff;
    cursor: pointer;
  }
`;

export const CancelBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  color: #8592a3;
  background: #f1f4f9;
  font-size: 14px;
  border: none;
  border-radius: 6px;
  transition: all 0.2s ease-in-out;
  margin-right: 8px;

  &:hover {
    background-color: #8592a3;
    color: #000;
    cursor: pointer;
  }
`;

export const SelectedContainer = styled.div`
  width: ${props => props.width + 'px'};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: ${props => props.borderR ? '50%' : '10px'};

  &::before {
    content: "";
    opacity: ${(props) => (props.active ? "1" : "0")};
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    inset: 0;
    border-radius: ${props => props.borderR ? '50%' : '10px'};
    border: none;
    padding: 3px;
    background: linear-gradient(
      to top right,
      #7bb1ff,
      #a6aaff,
      #f1b9f3,
      #9dfdfd,
      #7bb1ff,
      #a6aaff,
      #f1b9f3,
      #9dfdfd,
      #7bb1ff
    );

    -webkit-background-clip: border-box;
    animation: rgb-text 50s infinite linear;
    background-size: 500% 500%;

    @keyframes rgb-text {
      0% {
        background-position: 250% -250%;
      }
      100% {
        background-position: -250% 250%;
      }
    }

    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  &:hover::before { 
    opacity: 1;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    inset: 0;
    border-radius: ${props => props.borderR ? '50%' : '10px'};
    padding: 3px;
    background: linear-gradient(
      to top right,
      #7bb1ff,
      #a6aaff,
      #f1b9f3,
      #9dfdfd,
      #7bb1ff,
      #a6aaff,
      #f1b9f3,
      #9dfdfd,
      #7bb1ff
    );

    -webkit-background-clip: border-box;
    animation: rgb-text 50s infinite linear;
    background-size: 500% 500%;

    @keyframes rgb-text {
      0% {
        background-position: 250% -250%;
      }
      100% {
        background-position: -250% 250%;
      }
    }

    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;

export const TitleModal = styled.div`
  position: fixed;
  top: 15%;
  /* transform: translateY(-50%); */
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  width: 525px;
  max-height: 625px;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  transition: all 0.2s ease;
  z-index: 990;
  padding: 8px 16px;
  max-height: 525px;
  overflow: auto;
`

export const PostWrap = styled.div`
  /* margin: 8px 0; */
  width: 608px;
  min-height: 76px;
  height: auto;
  cursor: pointer;
  background: no-repeat url(${PostsPart});
  background-size: 100% 100%;
  border-radius: 16px;
  padding: 16px 148px 16px 20px;
  position: relative;
  overflow: hidden;
  margin-right: 25px;
`

export const PostEntryTitle = styled.p`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
`

export const PostEntryInfo = styled.p`
  font-size: 14px;
  color: rgba(255,255,255,.65);
  line-height: 20px;
  max-height: 40px;
  word-wrap: break-word;
  word-break: break-word;
`

// For a single post
export const PostsContainer = styled.div`
  padding: 16px;
  border-radius: 16px;
  background-color: #fff;
  width: 608px;
  margin-right: 25px;
  margin-bottom: 8px;
  height: auto;
`

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
`

export const CardUserInfo = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  max-width: 100%;
  width: 100%;
`

export const CardArticle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

export const PostAva = styled(LinkRouter)`
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;
`

export const PostAvaImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid #f1f4f9;
  vertical-align: top;
  background-color: #fff;
`

export const PostCardInfo = styled.div`
  margin-left: 12px;
  display: inline-flex;
  flex-grow: 1;
  overflow: hidden;
  flex-direction: column;
`

export const PostCardName = styled(LinkRouter)`
  display: flex;
  align-items: center;
  white-space: no-wrap;
  overflow: hidden;
  max-width: 100%;
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  text-overflow: ellipsis;

  &:hover {
    color: #657ef8;
    cursor: pointer;
  }
`

export const ArticleCardInfo = styled.p`
  color: #b2bdce;
  margin-top: 4px;
  font-size: 12px;
  line-height: 16px;
`

export const PostRouter = styled(LinkRouter)`
  display: block;
  text-decoration: none;
  outline: none;
  background-color: rgba(0,0,0,0);
`

export const ArticleCardTitle = styled.h3`
  overflow: hidden;
  line-height: 24px;
  max-height: 72px;
  word-wrap: break-word;
  word-break: break-word;
  margin-top: 8px;
  font-size: 16px;
  font-weight: bold;
  color: #2f3f56;
  vertical-align: top;
  
  &:hover {
    color: #657ef8;
    cursor: pointer;
  }
`

export const ArticleCardContent = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 20px;
  max-height: 80px;
  word-wrap: break-word;
  word-break: break-word;
  margin-top: 8px;
  color: #8592a3;
`

export const ArticleCardPreview = styled.div`
  margin-top: 8px;
  overflow: hidden;
  display: flex;
  vertical-align: top;
  position: relative;
  width: 100%;
  max-width: 100%;
`

export const ArticleImage = styled.img`
  border-radius: 8px;
  width: 100%;
`

export const ArticleCardImg = styled.div`
  background-image: url(${props => props.imgSrc});
  /* width: calc(50% - 4px); */
  width: 100%;
  background-size: cover;
  display: inline-block;
  background-position: 50%;
  background-repeat: no-repeat;
  border-radius: 8px;
  position: relative;
  cursor: pointer;
  box-shadow: inset 0 0 8px 0 rgb(0 0 0 / 4%);

  &::before {
    content: "";
    padding-top: 100%;
    display: block;
  }
`

export const ArticleMark = styled.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  display: flex;
  align-items: center;
`

export const ArticleCardTopic = styled.div`
  margin-top: 8px;
`

export const ArticleCardTopicLabel = styled.div`
  display: inline-flex;
  font-size: 14px;
  line-height: 20px;
  margin-right: 16px;
`

export const TopicRouter = styled(LinkRouter)`
  color: #657ef8;
  text-decoration: none;
  outline: none;
  background-color: rgba(0,0,0,0);
  cursor: pointer;
`

export const ArticleCardFooter = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: flex-start
`

export const ArticleCardData = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  height: 24px;
  justify-content: flex-end;
`

export const CardDataItem = styled.div`
  display: flex;
  align-items: center;
  width: 144px;
`

export const CardItemComment = styled(LinkRouter)`
  position: relative;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  color: #b2bdce;

  &:hover {
    color: #657ef8;
    cursor: pointer;
  }
`

export const CardItemCommentScroll = styled(LinkScroll)`
  position: relative;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  color: #b2bdce;

  &:hover {
    color: #657ef8;
    cursor: pointer;
  }
`

export const CardItemLike = styled.div`
  position: relative;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  color: ${props => props.isLiked ? '#657ef8' : '#b2bdce'};

  &:hover {
    color: #657ef8;
    cursor: pointer;
  }
`

export const CardIconLike = styled(AiOutlineLike)`
  font-size: 20px;
  line-height: 1;
  /* color: rgba(0, 0, 0, 0.25); */
`

export const CardIconLikeFill = styled(AiFillLike)`
  font-size: 20px;
  line-height: 1;
  /* color: #657ef8; */
`

export const CardIconComment = styled(AiOutlineComment)`
  font-size: 20px;
  line-height: 1;
  /* color: rgba(0, 0, 0, 0.25); */
`

export const CardDataSpan = styled.span`
  margin-left: 8px;
  /* color: #b2bdce; */
  display: inline-block;
  font-size: 12px;
  line-height: 16px;
`

export const ArticleCardAction = styled.div`
  display: inline-flex;
  align-items: center;
`

export const CardAction = styled.div`
  margin-left: 16px;
  position: relative;
  background-color: ${props => props.isActive ? '#657ef8' : '#e1e7ff'};
  z-index: 100;
  border: none;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #657ef8;
    cursor: pointer;
  }
`

export const FollowDiv = styled.div`
  margin-left: 16px;
  flex-shrink: 0;
`

export const FollowButton = styled.div`
  width: auto;
  padding: 0 16px;
  background-color: #e1e7ff;
  border-radius: 16px;
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #657ef8;
  flex-shrink: 0;
  transition-duration: .2s;
  transition-property: background-color,color;
  min-width: 88px;

  &:hover {
    cursor: pointer;
    color: #fff;
    background-color: #657ef8;
  }
`

export const UnfollowButton = styled.div`
  width: auto;
  padding: 0 16px;
  background-color: #f1f4f9;
  border-radius: 16px;
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #8592a3;
  flex-shrink: 0;
  transition-duration: .2s;
  transition-property: background-color,color;
  min-width: 88px;

  &:hover {
    cursor: pointer;
    color: #fff;
    background-color: #8592a3;
  }
`

export const FollowSpan = styled.span`
  vertical-align: top;
  display: inline-block;
  font-weight: bold;
`

export const PostSelectMenu = styled.div`
  display: ${props => props.isActive ? 'block' : 'none'};
  min-width: 200px;
  z-index: 100;
  top: 50px;
  right: -6px;
  border-radius: 12px;
  padding: 0 8px;
  position: absolute;
  background-color: #fff;
  box-shadow: 0px 12px 24px rgba(47, 63, 86, 0.2);
`

export const SelectMenuTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  padding: 10px 16px;
  line-height: 20px;
  border-bottom: 1px solid #f1f4f9;
  margin-bottom: 8px;
`

export const SelectMenuList = styled.ul`
  padding: 0 0 8px 0;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  overscroll-behavior: contain;
  list-style: none;
`

export const SelectMenuItem = styled.li`
  padding: 8px 12px;
  margin: 0;
  border-radius: 12px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.65);
  white-space: nowrap;
  line-height: 20px;
  list-style: none;
  color: #8592a3;

  &:hover {
    color: #657ef8;
    background-color: #eff2ff;
  }
`

export const TrashFillIcon = styled(BsTrashFill)`
  font-size: 20px;
  margin-right: 8px;
  /* color: #8592a3; */
`

export const EditPostIcon = styled(FaRegEdit)`
  font-size: 20px;
  margin-right: 8px;
  /* color: #8592a3; */
`

export const CancelSelectMenuIcon = styled(MdOutlineCancel)`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`

export const SelectMenuItemSpan = styled.span`
  /* color: #2f3f56; */
  line-height: 22px;
  font-size: 14px;
`

export const NavRightPart = styled.div`
  display: flex;
  align-items: center;
`

export const PostIconNavContainer = styled.div`
  position: relative;
  margin-right: 16px;
`

export const PostIconNavWrap = styled.div`
  display: flex;
  padding: 8px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #fff;
  border: none;

  &:hover {
    background: linear-gradient(
      to top right,
      #7bb1ff,
      #a6aaff,
      #f1b9f3,
      #9dfdfd,
      #7bb1ff,
      #a6aaff,
      #f1b9f3,
      #9dfdfd,
      #7bb1ff
    );

    -webkit-background-clip: border-box;
    animation: rgb-text 50s infinite linear;
    background-size: 500% 500%;

    @keyframes rgb-text {
      0% {
        background-position: 250% -250%;
      }
      100% {
        background-position: -250% 250%;
      }
    }
    cursor: pointer;
  }
`

export const PostIconNav = styled(IoIosCreate)`
  font-size: 30px;
  color: #2f3f56;
`

export const NavPostDialog = styled.div`
  display: ${props => props.isTurnOn ? 'block' : 'none'};
  position: absolute;
  box-shadow: 0px 12px 24px rgba(47, 63, 86, 0.2);
  background-color: #fff;
  border-radius: 10px;
  top: 60px;
  right: -6px;
  width: 364px;
  overflow: hidden;
`

export const NavPostNew = styled.div`
  padding: 16px 16px 0 16px;
  margin-bottom: 0;
  background-color: #fff;
  border-radius: 16px;
`

export const NavPostNewContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const NavPostNewItem = styled.div`
  width: 100%;
  height: 56px;
  margin-bottom: 8px;
  margin-left: 0;
  display: inline-block;
  flex-shrink: 0;
  font-size: 14px;

  /* &:hover {
    cursor: pointer;
  } */
`

export const DialogPostButton = styled.button`
  padding: 0 14px 0 16px;
  background-color: #f6f9fb;
  color: #2f3f56;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  transition-duration: .2s;
  transition-property: background-color,color;

  &:hover {
    color: #657ef8;
    background-color: #eff2ff;
    cursor: pointer;
  }
`

export const DialogSpan = styled.span`
  font-weight: bold;
  flex-grow: 1;
  text-align: left;
  line-height: 20px;
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const NewPostIconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  /* width: 44px;
  height: 44px; */
  border-radius: 6px;
  background-color: #c7f8e4;
  margin-right: 16px;
`

export const NewPostIcon = styled(IoIosCreate)`
  font-size: 24px;
  color: #36d6b7;
  flex-shrink: 0;
`