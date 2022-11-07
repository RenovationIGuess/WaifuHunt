import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import ClearIcon from "../images/delbutton.png";

export const WFSearchBar = styled.div``;

export const WFForm = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchBarInput = styled.div`
  width: 100%;
  font-size: 14px;
  height: 36px;
  background-color: ${(props) => (props.isFocused ? "#fff" : "#f1f4f9")};
  border: ${(props) => (props.isFocused ? "1px solid #657ef8" : "")};
  padding: 0 16px;
  border-radius: 24px;
  position: relative;
  display: flex;
  align-items: center;
  transition-property: background-color, border-color;
  transition-duration: 0.2s;

  &:hover {
    background-color: #fff;
    border: 1px solid #657ef8;
  }
`;

export const SearchAutoComplete = styled.div`
  flex: 1;
  position: relative;
`;

export const IconSearch = styled(FiSearch)`
  font-size: 16px;
  color: #8592a3;
  margin-right: 0px;
  line-height: 1;

  &:hover {
    cursor: pointer;
    color: #657ef8;
  }
`;

export const AutoCompleteWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const SearchInput = styled.input`
  height: 20px;
  line-height: 20px;
  width: 100%;
  flex-grow: 1;
  border: none;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
  color: rgba(0, 0, 0, 0.85);
  caret-color: #2f3f56;
  overflow: visible;
  margin: 0;

  &::placeholder {
    color: #8592a3;
  }
`;

export const ClearInput = styled.div`
  display: ${(props) => (props.isDisplay ? "flex" : "none")};
  margin-right: 4px;
  align-items: center;
  width: 16px;
  height: 16px;
  background: url(${ClearIcon});

  &:hover {
    cursor: pointer;
  }
`;

export const AutoCompleteResult = styled.div`
  position: absolute;
  overflow: hidden;
  z-index: 100;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 12px 24px rgba(47, 63, 86, 0.2);
  padding: 0 16px;
  left: -16px;
  top: 38px;
  width: 240px;
  display: ${(props) => (props.isDisplay ? "block" : "none")};
`;

export const AutoCompleteCateResult = styled.div`
  position: absolute;
  overflow: hidden;
  z-index: 100;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 12px 24px rgba(47, 63, 86, 0.2);
  padding: 0 16px;
  left: -28px;
  top: 38px;
  width: 240px;
  display: ${(props) => (props.isDisplay ? "block" : "none")};
`;

export const SearchBarPlaceHolder = styled.div`
  border-bottom: none;
  padding-bottom: 8px;
`;

// Search Bar PlaceHolder
export const SBPHTitle = styled.div`
  padding: 14px 0;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  font-size: 16px;
`;

export const SBPHList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -8px;
`;

export const SBPHListItem = styled.div`
  line-height: 30px;
  border-radius: 15px;
  padding: 0 8px;
  cursor: pointer;
  background-color: #f1f4f9;
  margin-right: 8px;
  margin-bottom: 8px;
  color: #8592a3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;

  &:hover {
    background-color: #eff2ff;
    color: #657ef8;
  }
`;

export const AutoCompleteList = styled.div`
  display: ${(props) => (props.isDisplay ? "block" : "none")};
  flex-direction: column;
  padding: 8px 0;
`;

export const AutoCompleteItem = styled.div`
	cursor: pointer;
	line-height: 20px;
	font-size: 14px;
	padding: 10px; 12px;
	margin: 4px 0;
	font-weight: bold;
	color: #8592a3;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;

	&:hover {
		background-color: #eff2ff;
		border-radius: 8px;
		color: #657ef8;
	}
`;
