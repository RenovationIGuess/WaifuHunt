import styled from "styled-components";
import { IoIosCreate, IoIosArrowForward } from "react-icons/io";

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
`

export const NoPostImg = styled.img`
  width: 200px;
`

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

export const PostNewArrow = styled(IoIosArrowForward)`
  font-size: 16px;
	color: #b2bdce;
	line-height: 1;
  flex-srhink: 0;
`;
