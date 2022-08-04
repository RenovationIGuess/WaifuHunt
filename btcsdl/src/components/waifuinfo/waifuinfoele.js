import styled from "styled-components";

export const MainContainer = styled.div`
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

export const WaifuInfoContainer = styled.div`
  width: 768px;
  background: #fff;
  min-height: 615px;
  max-height: 1100px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  margin: 105px auto 25px;
  position: relative;
  padding: 4px 16px;
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
  position: absolute;
  gap: 25px;
  top: 50px;
  left: 25px;
  right: 25px;
  bottom: 25px;
  /* grid-template-columns: 1fr 3fr; */
  align-items: center;
  /* justify-content: space-between; */
  /* overflow: auto; */
`;

export const ImageHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-grow: 1fr;
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
  width: ${props => props.type ? '200px' : '160px'};
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
  flex-grow: 3fr;
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  justify-content: ${(props) => (props.editActive ? "" : "center")};
  gap: 25px;
  overflow-y: auto;
  height: 100%;
  padding: ${(props) => (props.editActive ? "16px 0" : "")};
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
`;

export const GridDescItem = styled.div`
  font-size: 16px;
  color: #000;
  line-height: 24px;
  max-height: 120px;
  overflow: auto;
`

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
`

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
`