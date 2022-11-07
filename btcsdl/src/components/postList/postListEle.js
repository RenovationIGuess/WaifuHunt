import styled from "styled-components";
import { IoIosCreate, IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { IoImages } from "react-icons/io5";
import { BsFillCameraVideoFill } from "react-icons/bs";

export const PostNew = styled.div`
  background-color: #fff;
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 8px;
`;

export const NoPosts = styled.div`
  width: 100%:
  height: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 16px;
`;

export const NoPostImg = styled.img`
  width: 200px;
`;

export const PostNewTitle = styled.div`
  font-size: 12px;
  line-height: 1;
  color: #8592a3;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const PostNewContent = styled.div`
  display: flex;
  align-items: center;
`;

export const PostNewButtonDiv = styled.div`
  margin-left: 0;
  display: inline-block;
  flex-shrink: 0;
  font-size: 14px;
  width: 181px;
  height: 40px;
`;

export const PostNewButtonDivAfter = styled.div`
  margin-left: 16px;
  display: inline-block;
  flex-shrink: 0;
  font-size: 14px;
  width: 181px;
  height: 40px;
`;

export const PostNewButton = styled.button`
  background-color: #f6f9fb;
  color: #2f3f56;
  border-radius: 8px;
  padding: 0 8px;
  display: inline-flex;
  align-items: center;
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  transition-duration: 0.2s;
  transition-property: background-color, color;
  overflow: visible;

  &:hover {
    background-color: #c7f8e4;
    color: #2f3f56;
    cursor: pointer;
  }
`;

export const PostNewButtonImg = styled.button`
  background-color: #f6f9fb;
  color: #2f3f56;
  border-radius: 8px;
  padding: 0 8px;
  display: inline-flex;
  align-items: center;
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  transition-duration: 0.2s;
  transition-property: background-color, color;
  overflow: visible;

  &:hover {
    background-color: #d0e9fc;
    color: #2f3f56;
    cursor: pointer;
  }
`;

export const PostNewButtonVid = styled.button`
  background-color: #f6f9fb;
  color: #2f3f56;
  border-radius: 8px;
  padding: 0 8px;
  display: inline-flex;
  align-items: center;
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  transition-duration: 0.2s;
  transition-property: background-color, color;
  overflow: visible;

  &:hover {
    background-color: #ffeed0;
    color: #2f3f56;
    cursor: pointer;
  }
`;

export const PostNewBtnSpan = styled.span`
  flex-grow: 1;
  text-align: left;
  line-height: 20px;
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const PostNewSymbolIcon = styled(IoIosCreate)`
  font-size: 24px;
  color: #36d6b7;
  margin-right: 8px;
  flex-shrink: 0;
`;

export const NewImageIcon = styled(IoImages)`
  font-size: 24px;
  color: #55d2ff;
  margin-right: 8px;
  flex-shrink: 0;
`;

export const NewVideoIcon = styled(BsFillCameraVideoFill)`
  font-size: 24px;
  color: #fcae59;
  margin-right: 8px;
  flex-shrink: 0;
`;

export const PostNewArrow = styled(IoIosArrowForward)`
  font-size: 16px;
  color: #b2bdce;
  line-height: 1;
  flex-srhink: 0;
`;

export const Banner = styled.div`
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 16px;
`;

export const BannerWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
`;

export const SwiperWrapper = styled.div`
  transition-duration: 300ms;
  transform: translate3d(${props => props.transform}, 0, 0);
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: border-box;
`;

export const BannerItem = styled.div`
  width: 272px;
  height: 153px;
  cursor: pointer;
  flex-shrink: 0;
  position: relative;
  /* transition-property: transform; */
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const BannerImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-style: none;
`;

export const BannerPrev = styled.div`
  left: 16px;
  position: absolute;
  top: 50%;
  width: 24px;
  height: 24px;
  margin-top: -12px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  z-index: 55;
  cursor: pointer;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  display: flex;

  &:hover { 
    background-color: #657ef8;
  }
`;

export const BannerNext = styled.div`
  right: 16px;
  position: absolute;
  top: 50%;
  width: 24px;
  height: 24px;
  margin-top: -12px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  z-index: 55;
  cursor: pointer;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  display: flex;

  &:hover { 
    background-color: #657ef8;
  }
`;

export const PrevIcon = styled(IoIosArrowBack)`
  /* transform: scaleX(-1); */
  color: #fff;
  line-height: 1;
`;

export const NextIcon = styled(IoIosArrowForward)`
  /* transform: scaleX(-1); */
  color: #fff;
  line-height: 1;
`;

export const BannerPagination = styled.div`
  position: absolute;
  bottom: 8px !important;
  left: auto !important;
  width: auto !important;
  right: 16px;
  height: 6px;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const BannerBullet = styled.span`
  background-color: rgba(0, 0, 0, 0.5);
  width: ${props => props.isCurrent ? "30px" : "6px"};
  height: 6px;
  border-radius: 3px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  margin: 0 0 0 10px;
  position: relative;
  cursor: pointer;
  overflow: hidden;

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 0%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: #657ef8;
    /* -webkit-animation: bullet 3s linear forwards; */
    animation: ${props => props.isCurrent ? "bullet 3s linear forwards" : ""};
    /* transform: translateX(${props => props.isCurrent ? "0" : "-100%"});
    transition: all 3s linear; */
  }

  @keyframes bullet {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    } 
  }
`;

export const ArticleCardImagePreview = styled.div`
  margin-top: 8px;
  overflow: hidden;
  display: flex;
  vertical-align: top;
  position: relative;
  width: 100%;
  max-width: 100%;
`

export const ArticleCardImageItem = styled.div`
  background-image: url(${props => props.image});
  // 23.5% - 49% - 100%
  width: ${props => props.percent};
  max-height: 576px;
  max-width: 100%;
  margin-left: ${props => props.notFirst ? "8px" : "0"};
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

export const ArticleCardMark = styled.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  display: flex;
  align-items: center;
`

export const ArticleImageNum = styled.span`
  display: flex;
  align-items: center;
  height: 14px;
  margin-left: 4px;
  background-color: rgba(0,0,0,.6);
  border-radius: 10px;
  font-size: 10px;
  color: #fff;
  padding: 0 5px;
`

export const ArticleImageNumIcon = styled(IoImages)`
  color: #fff;
  margin-right: 3px;
  font-size: 12px;
  line-height: 1;
`
