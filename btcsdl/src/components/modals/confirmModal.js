import styled from "styled-components";

export const MessageBox = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${(props) => (props.opac ? "1" : "0")};
  display: ${(props) => (props.opac ? "block" : "none")};
  transition: opacity 200ms;
  z-index: 999;
`;

export const MessageBoxContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: #fff;
  width: 380px;
  border-radius: 16px;
  /* ${props => props.animateType ? 'messageBoxOut 200ms' : 'messageBoxIn 200ms'}; */
  animation: messageBoxIn 200ms;
	transform: ${props => props.animateType ? 'translate(-50%, -50%) scale(1)' : ''};

  @keyframes messageBoxIn {
    0% {
      transform: translate(-50%, -50%) scale(0);
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
    }
  }

  @keyframes messageBoxOut {
    0% {
      transform: translate(-50%, -50%) scale(1);
    }
    100% {
      transform: translate(-50%, -50%) scale(0);
    }
  }
`;

export const MessageBoxHeader = styled.header`
  padding-top: 30px;
  width: 100%;
  line-height: 20px;
  position: relative;
  padding-left: 52px;
  padding-right: 52px;
`;
// equal to dialog close, dialog button, dialog icon
/* export const MessageBoxClose = styled.div`
	position: absolute;
	top: 12px;
	right: 12px;
	padding: 4px;
	display: inline-block;
	cursor: pointer;
	flex-shrink: 0;
	font-size: 14px;
` */

export const MessageBoxContent = styled.div`
  text-align: center;
  padding: 0 32px;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 454px;
  line-height: 20px;
  word-break: break-word;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
`;

export const MessageBoxFooter = styled.div`
  padding: 24px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const MessageBoxButton = styled.div`
  min-width: 120px;
  max-width: 400px;
  background-color: ${(props) => (props.notClose ? "#e1e7ff" : "#f1f4f9")};
  color: ${(props) => (props.notClose ? "#657ef8" : "rgba(0,0,0,0.65)")};
  height: 36px;
  line-height: 36px;
  padding: 0 20px;
  font-size: 14px;
  border-radius: 18px;
  font-weight: 700;
  margin: 0 8px 8px;
  text-align: center;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: no-wrap;

  &:hover {
    background-color: ${(props) => (props.notClose ? "#657ef8" : "#8592a3")};
    color: #fff;
  }
`;
