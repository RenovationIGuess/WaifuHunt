import styled from "styled-components";
import {
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineCheckBox,
  MdOutlineRemoveCircle,
} from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { MdImageNotSupported } from "react-icons/md"
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: row;
	opacity ${(props) => (props.dark ? "0.5" : "1")};
`;

export const BodySection = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  width: 768px;
  top: 105px;
`;

export const LeftSection = styled.div`
  position: fixed;
  top: 105px;
  left: calc(50% - 384px - 24px - 232px);
  background: #fff;
  width: 232px;
  border-radius: 16px;
  padding: 4px 8px;
  display: flex;
  flex-direction: column;
`;

export const CenterSection = styled.div`
  width: 768px;
  background: #fff;
  min-height: 615px;
  /* max-height: 1100px; */
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  padding: 4px 16px;
  /* margin: 105px auto 16px; */
  position: relative;
`;

export const RightSection = styled.div`
  position: fixed;
  top: 105px;
  right: calc(50% - 384px - 32px - 272px);
  background: #fff;
  width: 272px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  word-break: break-word;
  padding: 4px 16px;
`;

export const Category = styled.header`
  padding: 12px 0px;
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4px 0;
  border-top: 1px solid #f1f4f9;
  border-bottom: 1px solid #f1f4f9;
`;

export const CategoryTitle = styled.p`
  font-size: 16px;
  font-weight: normal;
  line-height: 24px;
  color: #000;
`;

export const CateImg = styled.span`
  font-size: 24px;
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CategoryItem = styled.div`
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* min-height: 36px;
  max-height: 144px; */
  border-radius: 5px;
  color: ${(props) => (props.isChoosen ? "#657ef8" : "#8592a3")};
  font-size: 14px;
  margin: 2px 0 4px;
  background: ${(props) => (props.isChoosen ? "#eff2ff" : "")};

  &:hover {
    color: #657ef8;
    background-color: #eff2ff;
    cursor: pointer;
  }
`;

export const HowToRollDesc = styled.div`
  padding: 4px 0;
  min-height: 48px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f1f4f9;
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  color: #000;
  margin-bottom: 4px;
`;

export const RollDesc = styled.ol`
  list-style-position: inside;
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  color: #000;
`;

export const RollLi = styled.li`
  margin: 8px 0;
`;

export const EndDesc = styled.div`
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  padding: 12px 0 4px;
  min-height: 48px;
  text-align: center;
  margin: 4px 0;
  border-top: 1px solid #f1f4f9;
`;

export const AmongUs = styled.div`
  text-align: center;
  padding: 4px 0;
  margin: 4px 0 8px;
  color: #fff;
  background: #000;
  font-size: 14px;
  border-radius: 0 0 16px 16px;
`;

export const ToInfoPage = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  padding: 8px 0 16px;
  border-bottom: 1px solid #f1f4f9;
  margin-bottom: 8px;
`;

export const CenterBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #f1f4f9;
  padding: 8px 0;
`;

export const LeftPart = styled.div`
  display: flex;
  align-items: center;
`;

export const RightPart = styled.div`
  display: flex;
  align-items: center;
`;

export const RollGuide = styled.div`
  background: #fff;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  word-break: break-word;
  padding: 4px 16px;
  height: auto;
`

export const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
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

export const EditButton = styled.button`
  display: ${(props) => (props.appear ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  color: #657ef8;
  font-size: 14px;
  background-color: #e1e7ff;
  border: none;
  border-radius: 16px;
  transition: all 0.2s ease-in-out;
  margin-left: 12px;

  &:hover {
    background-color: #657ef8;
    color: #fff;
    cursor: pointer;
  }
`;

export const AddModal = styled.div`
  position: fixed;
  /* top: 15%;
  transform: translateY(-50%);
  left: 50%;
  transform: translateX(-50%); */
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(1);
  background: #fff;
  width: 525px;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  display: ${(props) => (props.open ? "flex" : "none")};
  flex-direction: column;
  transition: all 0.2s ease;
  z-index: 990;
  padding: 8px 16px 16px;
  max-height: 525px;
  overflow: auto;
`;

export const ModalTitle = styled.div`
  display: inline-flex;
  align-items: center;
  font-weight: bold;
  font-size: 16px;
  color: #000;
  line-height: 20px;
`;

export const MyCurrentProgress = styled.div`
  display: inline-flex;
  align-items: center;
  font-weight: normal;
  font-size: 16px;
  color: #000;
  line-height: 20px;
  margin-left: 8px;
`;

export const AddTitle = styled.div`
  font-size: 16px;
  color: #8592a3;
  line-height: 20px;
  margin: 12px 0;
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  // justify-content: flex-start;
  // margin: 8px 0;
`;

export const CharImageShow = styled.div`
  background-image: url(${(props) =>
    props.image ? props.image : "no-repeat center #fff"});
  width: 160px;
  height: 200px;
  border-radius: 8px;
  text-align: center;
  font-size: 14px;
  background-size: cover;
  // margin: 0 16px 16px 0;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  box-shadow: inset 0 0 5px 0 rgb(0 0 0 / 4%);
`

export const CharImageInput = styled.div`
  background-color: #b2bdce;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  width: 160px;
  height: 200px;
  border-radius: 8px;
  text-align: center;
  font-size: 14px;
  /* background: no-repeat center #fff;
  background-size: cover;
  margin: 0 16px 16px 0; */
  position: relative;
  cursor: pointer;
  box-shadow: inset 0 0 5px 0 rgb(0 0 0 / 4%);
`

export const CharSrcImageInput = styled.div`
  background-color: #b2bdce;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  width: 160px;
  height: 90px;
  border-radius: 8px;
  text-align: center;
  font-size: 14px;
  /* background: no-repeat center #fff;
  background-size: cover;
  margin: 0 16px 16px 0; */
  position: relative;
  cursor: pointer;
  box-shadow: inset 0 0 5px 0 rgb(0 0 0 / 4%);
`

export const CharSrcImageShow = styled.div`
  background-image: url(${(props) =>
    props.image ? props.image : "no-repeat center #fff"});
  width: 160px;
  height: 90px;
  border-radius: 8px;
  text-align: center;
  font-size: 14px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  // margin: 0 16px 16px 0;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  box-shadow: inset 0 0 5px 0 rgb(0 0 0 / 4%);
`

export const IconImageNone = styled(MdImageNotSupported)`
  font-size: 85px;
  color: #fff;
  line-height: 1;
`

export const IconImageSrcNone = styled(MdImageNotSupported)`
  font-size: 55px;
  color: #fff;
  line-height: 1;
`

export const InputName = styled.input`
  width: 100%;
  padding: 10px;
  /* line-height: 20px; */
  border: 2px solid #f1f4f9;
  margin-top: 8px;
  font-size: 14px;
  color: #8592a3;
  border-radius: 8px;
  margin-bottom: 8px;
`;

export const NewInfoInputDiv = styled.div`
  height: 42px;
  font-size: 14px;
  position: relative;
  line-height: 20px;
`

export const NewInfoInputDivWrap = styled.div`
  display: flex;
  border: ${(props) =>
    props.borderChange ? "1px solid #657ef8" : "1px solid #f1f4f9"};
  border-radius: 8px;
  position: relative;
  height: 100%;
  transition: 0.3s border-color;

  &:hover {
    border-color: #657ef8;
  }
`;

export const NewInfoInputText = styled.input`
  padding-left: 24px;
  padding-right: 16px;
  border: none;
  flex-grow: 1;
  z-index: 2;
  background-color: #fff;
  outline: none;
  border-radius: 8px;
  height: 100%;
`;

export const NewInfoInputMaxCount = styled.span`
  color: #b2bdce;
  line-height: 42px;
  margin-right: 24px;
  font-size: 14px;
`;

export const ImgButton = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  color: #657ef8;
  font-size: 14px;
  background-color: #e1e7ff;
  border: none;
  border-radius: 16px;
  transition: all 0.2s ease-in-out;
  margin-left: 12px;

  &:hover {
    background-color: #657ef8;
    color: #fff;
    cursor: pointer;
  }
`;

export const ImgShow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 4px;
`;

export const SelectedImg = styled.img`
  width: 150px;
  /* height: 190px; */
  border-radius: 10px;
`;

export const CenterEmpty = styled.div`
  position: absolute;
  top: 25%;
  transform: translateY(50%);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const EmptyImg = styled.img`
  width: 200px;
`;

export const EmptyText = styled.div`
  margin-top: 32px;
  font-size: 16px;
  color: #8592a3;
  line-height: 20px;
`;

export const SelectedSrcImg = styled.img`
  width: 150px;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px 0 8px;
  border-bottom: 1px solid #f1f4f9;
  margin-bottom: 8px;
`;

export const CurrentProgressTitle = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  padding: 8px 0 16px;
  border-bottom: 1px solid #f1f4f9;
  margin: 8px 0 16px;
`;

export const ModalButton = styled.div`
  display: flex;
  align-items: center;
`;

export const ListOfWaifus = styled.div`
  display: flex;
  padding: 16px 0 54px;
  /* gap: 25px; */
  justify-content: space-around;
  flex-wrap: wrap;
  /* position: relative; */
`;

export const PaginateWrap = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  /* width: 100%; */
  padding: 8px 0;
  margin-top: 4px;
  border-top: 1px solid #f1f4f9;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TableDisplay = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
`;

export const TableData = styled.td`
  padding: 8px;
  font-size: 14px;
  line-height: 18px;
  /* color: #000; */
  height: 40px;
  /* border-bottom: 1px solid #f1f4f9; */
  word-wrap: break-word;
  word-break: break-word;
`;

export const RgbLine = styled.div`
  display: block;
  height: 3px;
  width: 100%;
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

  @keyframes rgb-text {
    0% {
      background-position: 250% -250%;
    }
    100% {
      background-position: -250% 250%;
    }
  }
`;

export const TableHeader = styled.th`
  padding: 8px;
  font-weight: bold;
  font-size: 16px;
  color: #000;
  line-height: 20px;
  min-height: 48px;
  /* white-space: nowrap; */
  word-break: break-word;
  word-wrap: break-word;
`;

export const TableRowFirst = styled.tr`
  transition: 0.3s all ease;

  /* &:hover {
    background: #e1e7ff;
    color: #657ef8;
  } */
`;

export const TableRow = styled.tr`
  transition: 0.3s all ease;

  &:nth-child(even) {
    background: #f1f4f9;
  }

  &:hover {
    cursor: pointer;
    background: #e1e7ff;
    color: #657ef8;
  }
`;

export const ButtonFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const CheckBox = styled(MdOutlineCheckBox)`
  font-size: 16px;
`;

export const UnCheckBox = styled(MdOutlineCheckBoxOutlineBlank)`
  font-size: 16px;
`;

export const RemoveWaifu = styled(MdOutlineRemoveCircle)`
  font-size: 20px;
  color: #ffcbd1;

  &:hover {
    color: #c30010;
  }
`;

export const ToEditWaifuPage = styled(AiOutlineEdit)`
  font-size: 20px;
  color: #e1e7ff;
  margin-left: 8px;

  &:hover {
    color: #657ef8;
  }
`;

export const CateList = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 300px;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const DoneButton = styled.button`
  display: ${(props) => (props.appear ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  color: #8592a3;
  background: #f1f4f9;
  font-size: 14px;
  border: none;
  border-radius: 16px;
  transition: all 0.2s ease-in-out;
  margin-left: 12px;

  &:hover {
    background-color: #8592a3;
    color: #000;
    cursor: pointer;
  }
`;

export const CateSearchBar = styled.input`
  width: 100%;
  padding: 8px;
  outline: none;
  border: 2px solid #8592a3;
  border-radius: 10px;
  /* box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2); */
`;

export const CurrentProgress = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 8px;
`;

export const ProgressImgContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const ProgressImgBg = styled.img`
  width: 100%;
  border-radius: 16px;
`;

export const ProgressBar = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  width: 80%;
  height: 8px;
  /* background: rgba(214, 214, 214, 0.6); */
  box-shadow: 0 1px 8px 0 rgb(0 0 0 / 20%);
  background: #fff;
  overflow: hidden;
  border-radius: 100px;
  display: flex;
  align-items: center;

  &::after {
    content: "";
    /* position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(1); */
    display: block;
    width: 100%;
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
    /* -webkit-transform: ${(props) =>
      props.isActivated
        ? `translateX(${props.percent})`
        : "translateX(-100%)"}; */
    transition: transform 1s linear;
    /* transition-delay: 1s; */
    transform: ${(props) =>
      props.isActivated ? `translateX(${props.percent})` : "translateX(-100%)"};
    /* transition: 5s ease; */
  }

  @keyframes rgb-text {
    0% {
      background-position: 250% -250%;
    }
    100% {
      background-position: -250% 250%;
    }
  }
`;

export const AvaHolder = styled.img`
  width: 36px;
  height: 36px;
  position: absolute;
  /* left: ${(props) =>
    props.isActivated ? `calc(${props.percent} + 18px + 10%)` : "10%"}; */
  left: ${(props) =>
    props.isActivated ? `calc(${props.percent}  + 10%)` : "10%"};
  top: calc(50% - 30px);
  transform: translate(-50%, -50%) scale(1);
  /* background: #fff; */
  border: 2px solid #e1e7ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1s linear;
  /* transition-delay: 1s; */
  /* transform: ${(props) =>
    props.isActivated ? "translateX(0)" : "translateX(50%)"}; */
`;

export const AvaArrow = styled(TiArrowSortedDown)`
  font-size: 14px;
  /* background: #4cc2ff; */
  color: #e1e7ff;
  position: absolute;
  /* left: ${(props) =>
    props.isActivated ? `calc(${props.percent} + 18px + 10%)` : "10%"}; */
  left: ${(props) =>
    props.isActivated ? `calc(${props.percent} + 10%)` : "10%"};
  transition: all 1s linear;
  top: calc(50% - 11px);
  transform: translate(-50%, -50%) scale(1);
`;

export const FirstMilestone = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  background: #4cc2ff;
  position: absolute;
  left: 10%;
  top: calc(50% + 2px);
  transform: translate(-50%, 30%) scale(1);
  font-size: 16px;
  border-radius: 50%;
`;

export const SecondMilestone = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  background: #f1496b;
  position: absolute;
  left: 18%;
  top: calc(50% + 2px);
  transform: translate(-50%, 30%) scale(1);
  font-size: 16px;
  border-radius: 50%;
`;

export const ThirdMilestone = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
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

  @keyframes rgb-text {
    0% {
      background-position: 250% -250%;
    }
    100% {
      background-position: -250% 250%;
    }
  }
  position: absolute;
  left: 90%;
  top: calc(50% + 2px);
  transform: translate(-50%, 30%) scale(1);
  font-size: 16px;
  border-radius: 50%;
`;

export const ArrowFirstMile = styled(TiArrowSortedUp)`
  font-size: 14px;
  /* background: #4cc2ff; */
  color: #4cc2ff;
  position: absolute;
  left: 10%;
  top: calc(50% + 11px);
  transform: translate(-50%, -50%) scale(1);
`;

export const ArrowSecondMile = styled(TiArrowSortedUp)`
  font-size: 14px;
  /* background: #f1496b; */
  color: #f1496b;
  position: absolute;
  left: 18%;
  top: calc(50% + 11px);
  transform: translate(-50%, -50%) scale(1);
`;

export const ArrowThirdMile = styled(TiArrowSortedUp)`
  font-size: 14px;
  color: #9dfdfd;
  position: absolute;
  left: 90%;
  top: calc(50% + 11px);
  transform: translate(-50%, -50%) scale(1);
  /* background: linear-gradient(
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
  -webkit-background-clip: text;
  animation: rgb-text 50s infinite linear;
  background-size: 500% 500%;
  -webkit-text-fill-color: transparent;

  @keyframes rgb-text {
    0% {
      background-position: 250% -250%;
    }
    100% {
      background-position: -250% 250%;
    }
  } */
`;

/* export const AvaProgress = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
` */

export const RankingContainer = styled.div`
  width: 768px;
  background: #fff;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
  margin: 16px 0 0;
  position: relative;
`;

export const RankingHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #f1f4f9;
  padding: 16px 0 24px;
`;

export const RankingTitle = styled.div`
  font-size: 24px;
  line-height: 28px;
  font-weight: bold;
  color: #2f3f56;
`;

/* export const RatingStar = styled.svg`
  width: 32px;
  height: 32px;
  fill: #FFD66C;
  stroke: #EFB153;
` */

export const Top3Section = styled.div`
  display: flex;
  padding: 24px 0;
  align-items: flex-end;
  justify-content: center;
  gap: 32px;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  gap: 12px;
`;

export const LadderFooterTop1 = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100% + 32px + 6px);
  height: 80px;
  border: none;
  outline: none;
  z-index: 100;

  &::before {
    content: "";
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    inset: 0;
    border-radius: 10px 10px 0 0;
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

export const PodiumTitleTop1 = styled.div`
  font-size: 36px;
  font-weight: bold;
  /* line-height: 32px; */
`

export const LadderFooterTop2 = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100% + 32px);
  height: 60px;
  border: none;
  outline: none;

  &::before {
    content: "";
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    inset: 0;
    border-radius: 10px 0 0 0;
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

export const PodiumTitleTop2 = styled.div`
  font-size: 28px;
  font-weight: bold;
  /* line-height: 32px; */
`

export const LadderFooterTop3 = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100% + 32px);
  height: 40px;
  border: none;
  outline: none;

  &::before {
    content: "";
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    inset: 0;
    border-radius: 0 10px 0 0;
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

export const PodiumTitleTop3 = styled.div`
  font-size: 20px;
  font-weight: bold;
  /* line-height: 32px; */
`

export const Top1Image = styled.img`
  width: 105px;
  /* border-radius: 8px; */
`;

export const Top2Image = styled.img`
  width: 90px;
`

export const Top3Image = styled.img`
  width: 75px;
  /* border-radius: 8px; */
`;

export const PaiwowImage = styled.img`
  position: absolute;
  top: 50px;
  right: -15px;
  width: 325px;
  transform: rotateY(180deg);
`

export const TrophyDisplay = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  /* margin-left: 4px; */
  width: 100%;
  /* height: auto; */
  padding: 4px 4px 4px 0;
`

export const TrophyImageData = styled.img`
  width: 36px;
`
