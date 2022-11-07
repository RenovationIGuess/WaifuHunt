import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import { AiFillStar } from "react-icons/ai"

export const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

export const WaifuInfoContainer = styled.div`
  width: 768px;
  background: #fff;
  min-height: 615px;
  /* max-height: 1100px; */
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  /* margin: 105px auto 25px; */
  position: relative;
  padding: 4px 16px;
`;

export const WaifuReplyContainer = styled.div`
  width: 768px;
  background: #fff;
  border-radius: 16px;
  margin-top: 8px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #f1f4f9;
  padding: 8px 0;
`;

export const GuideText = styled.div`
  font-size: 16px;
  color: #8592a3;
`;

export const GridDisplay = styled.div`
  display: flex;
  flex-grow: 1;
  /* position: absolute; */
  gap: 25px;
  /* top: 50px;
  left: 25px;
  right: 25px;
  bottom: 25px; */
  /* grid-template-columns: 1fr 3fr; */
  align-items: center;
  // padding-bottom: ${props => props.editActive ? '0' : '20px'};
  /* justify-content: space-between; */
  /* overflow: auto; */
`;

export const ImageHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  /* flex-grow: 1fr; */
  padding-right: 25px;
  height: 100%;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    border-right: 1px solid #f1f4f9;
    height: 80%;
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
    /* margin-left: 4px; */
  }
`;

export const ImgColumn = styled.img`
  width: ${(props) => (props.type ? "200px" : "160px")};
  height: ${(props) => (props.type ? "300px" : "90px")};
  object-fit: ${(props) => (props.type ? "cover" : "contain")};
  border-radius: 16px;

  &:hover {
    cursor: pointer;
  }
`;

export const OwnedLabel = styled.div`
  font-size: 10px;
  color: #fff;
  position: absolute;
  top: 6px;
  right: 6px;
  background: rgb(94, 155, 255);
  padding: 2px 6px;
  border-radius: 10px;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const GridInfo = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  justify-content: ${(props) => (props.editActive ? "" : "center")};
  gap: 25px;
  overflow-y: auto;
  height: 100%;
  /* padding: ${(props) => (props.editActive ? "16px 0" : "")}; */
`;

export const GridInfoTitle = styled.span`
  font-size: 16px;
  color: #000;
  font-weight: bold;
`;

export const GridInfoItem = styled.div`
  font-size: 16px;
  color: #000;
  line-height: 24px;
  /* overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 8px; */
`;

export const GridDescItem = styled.div`
  font-size: 16px;
  color: #000;
  line-height: 24px;
  max-height: 120px;
  word-wrap: break-word;
  word-break: break-word;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const DescArea = styled.textarea`
  width: 100%;
  padding: 10px;
  line-height: 20px;
  border: 2px solid #f1f4f9;
  margin-top: 8px;
  font-size: 14px;
  color: #8592a3;
  border-radius: 8px;
  /* margin-bottom: 8px; */
  /* max-height: 100px;
  overflow: auto; */
`;

export const LeftRouteButton = styled.button`
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 48px;
  border-radius: 16px;
  color: #8592a3;

  &:hover {
    color: #657ef8;
    background-color: #eff2ff;
  }
`;

export const DialogReply = styled.div`
  display: ${props => props.isShown ? 'block' : 'none'};
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.5);
  color: #2f3f56;
  font-size: 14px;
  z-index: 999;
  overflow-y: auto;
  overflow-x: hidden;
  overscroll-behavior: contain;
`;

export const DialogReplyWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 700px;
`;

export const DialogContent = styled.div`
  width: 608px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  background-color: #fff;
  border-radius: 16px;
`;

export const DialogHeader = styled.header`
  padding: 16px;
  line-height: 16px;
  border-bottom: 1px solid #f6f9fb;
  width: 100%;
  position: relative;
`;

export const DialogTitle = styled.p`
  text-align: left;
  font-size: 14px;
  font-weight: bold;
`;

export const DialogClose = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 4px;
  display: inline-block;
  cursor: pointer;
  flex-shrink: 0;
  /* font-size: 14px; */
`;

export const DialogButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  border: none;
  font-size: inherit;
  color: inherit;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 15px;
  font-weight: inherit;
  line-height: inherit;
  transition-duration: 0.2s;
  transition-property: background-color, color;
  overflow: visible;
`;

export const DialogCloseIcon = styled(IoClose)`
  font-size: 20px;
  color: #b2bdce;
  line-height: 1;
`

export const DialogBody = styled.div`
  flex-grow: 1;
  max-height: none;
  padding: 0;
  margin: 0;
  overflow-y: auto;
  overflow-x: hidden;
`

/* export const ReplyDetailContainer = styled.div`

` */

export const ReplyDetailList = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  height: 600px;
`

export const CommentPart = styled.div`
  padding: 16px 24px 0;
  display: flex;
  overflow: visible;
`

export const ReplyListTitle = styled.div`
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
`

export const ReplyListLoadmore = styled.div`
  padding: 16px 0;
  display: flex;
  justify-content: center;
`

export const LoadmoreNomore = styled.div`
  color: #b2bdce;
  font-size: 14px;
  font-weight: normal;
`

export const RatingSection = styled.div`
  width: 768px;
  background: #fff;
  border-radius: 16px;
  margin-top: 8px;
  padding: 24px 32px;
`

export const RatingHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 80px;
`

export const RatingTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  flex-grow: 1;
`

export const AverageRating = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: #fff;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2);
  min-width: 125px;
  border-radius: 16px;
`

export const StarIcon = styled(AiFillStar)`
  font-size: 28px;
  /* line-height: 20px; */
  /* border: 1px solid #EFB153; */
  color: #FFD66C;
`

export const AverageTop = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

export const AverageTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  line-height: 28px;
`

export const AverageContent = styled.div`
  font-size: 14px;
  line-height: 20px;
  margin-top: 4px;
`

export const ReviewText = styled.div`
  font-size: 16px;
  line-height: 20px;
  margin: 16px 0 8px;
  font-weight: 700;
`

export const RatingRowContainer = styled.div`
  /* display: flex;
  flex-direction: column; */
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  column-gap: 8px;
  row-gap: 16px;
  align-items: center;
`

export const RatingRowItem = styled.div`
  /* pointer-events: ${props => props.isRated ? "none" : ""}; */
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  gap: 8px;

  &:hover {
    cursor: pointer;
  }
`

export const RatingType = styled.div`
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  justify-self: flex-end;
`

export const RatingCount = styled.div`
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  justify-self: flex-start;
`

export const RatingGuide = styled.div`
  font-size: 14px;
  line-height: 20px;
  margin: 0 0 8px;
  font-weight: 500;
`

export const RowStarIcon = styled(AiFillStar)`
  font-size: 24px;
  /* line-height: 24px; */
  /* border: 1px solid #EFB153; */
  color: #FFD66C;
  /* margin: 0 6px; */
`

export const RatingRange = styled.div`
  position: relative;
  flex-grow: 1;
  /* max-width: 635px; */
  height: 10px;
  background-color: #EEEEEE;
  /* border: 1px solid #C9C9C9; */
  border-radius: 100px;
  overflow: hidden;
  /* --border-width: 1px; */

  &::after {
    content: "";
    /* border: 1px solid #9dfdfd;
    z-index: 100;
    position: absolute;
    top: calc(-1 * var(--border-width));
    bottom: calc(-1 * var(--border-width));
    left: calc(-1 * var(--border-width));
    right: calc(-1 * var(--border-width));
    width: calc(2 * var(--border-width) + 100%); */
    width: 100%;
    display: block;
    height: 100%;
    /* background: #657ef8; */
    background: linear-gradient(
      to right,
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

    border-radius: inherit;
    transition: transform 1s linear;
    transform: translateX(${props => props.percent});
  }

  @keyframes rgb-text {
    0% {
      background-position: 250% -250%;
    }
    100% {
      background-position: -250% 250%;
    }
  }
`