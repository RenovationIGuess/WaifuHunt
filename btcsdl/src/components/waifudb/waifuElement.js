import styled from "styled-components";
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox, MdOutlineRemoveCircle } from 'react-icons/md'
import { AiOutlineEdit } from 'react-icons/ai'

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
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
  max-height: 1100px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  padding: 4px 16px;
  margin: 105px auto 25px;
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
  color: ${props => props.isChoosen ? "#657ef8" : "#8592a3"};
  font-size: 14px;
  margin: 2px 0 4px;
  background: ${props => props.isChoosen ? "#eff2ff" : ""};

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
  top: 15%;
  /* transform: translateY(-50%); */
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  width: 525px;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  display: ${(props) => (props.open ? "flex" : "none")};
  flex-direction: column;
  transition: all 0.2s ease;
  z-index: 990;
  padding: 8px 16px;
  max-height: 525px;
  overflow: auto;
`;

export const ModalTitle = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 16px;
  color: #000;
  line-height: 20px;
`;

export const AddTitle = styled.div`
  font-size: 16px;
  color: #8592a3;
  line-height: 20px;
  margin: 4px 0;
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 8px 0;
`;

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
`;

export const TableRowFirst = styled.tr`
  transition: 0.3s all ease;

  &:hover {
    background: #e1e7ff;
    color: #657ef8;
  }
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
`
export const CheckBox = styled(MdOutlineCheckBox)`
  font-size: 16px;
`

export const UnCheckBox = styled(MdOutlineCheckBoxOutlineBlank)`
  font-size: 16px;
`

export const RemoveWaifu = styled(MdOutlineRemoveCircle)`
  font-size: 20px;
  color: #ffcbd1;

  &:hover {
    color: #c30010;
  }
`

export const ToEditWaifuPage = styled(AiOutlineEdit)`
  font-size: 20px;
  color: #e1e7ff;
  margin-left: 8px;

  &:hover {
    color: #657ef8;
  }
`

export const CateList = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 300px;
  overflow-y: auto;
  overflow-x: hidden;
`

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
`

export const CateSearchBar = styled.input`
  width: 100%;
  padding: 8px;
  outline: none;  
  border: 2px solid #8592a3;
  border-radius: 10px;
  /* box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2); */
`