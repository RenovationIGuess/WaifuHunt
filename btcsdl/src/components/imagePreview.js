import styled from "styled-components";

export const ImageContainer = styled.div`
  position: fixed;
  opacity: ${props => props.isAppear ? '1' : '0'};
  display: ${props => props.isAppear ? 'block' : 'none'};
  will-change: opacity;
  transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
  touch-action: none;
  z-index: 1500;
  -webkit-text-size-adjust: 100%;
  /* -webkit-backface-visibility: hidden; */
  outline: none;
  color: #2f3f56;
`;

export const ImageBg = styled.div`
  opacity: 0.8;
  transition: none;
  will-change: opacity;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  /* box-sizing: border-box; */
`;

export const PreviewWrap = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
`;

export const PreviewContainer = styled.div`
  transform: translate3d(0px, 0px, 0px);
  -webkit-backface-visibility: hidden;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

export const PreviewItem = styled.div`
	transform: translate3d(0px, 0px, 0px);
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  /* overflow: hidden; */
`;

export const PreviewZoomWrap = styled.div`
  transform: translate3d(0px, 100px, 0px) scale(1);
  transition: none;
  /* -webkit-backface-visibility: hidden; */
  position: absolute;
  width: 100%;
  transform-origin: left top;
  touch-action: none;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

export const PreviewImgHolder = styled.div`
  width: 1087px;
  height: 611px;
  display: none;
  cursor: zoom-in;
  background: #222;
  /* -webkit-backface-visibility: hidden; */
  position: absolute;
  /* width: auto;
  height: auto; */
  top: 0;
  left: 0;
  user-select: none;
  /* -webkit-tap-highlight-color: transparent; */
`;

export const ImageShow = styled.img`
  display: block;
  width: 1087px;
  height: 611px;
  cursor: zoom-in;
  max-width: none;
  position: absolute;
  /* width: auto;
  height: auto; */
  top: 0;
  left: 0;
  border-style: none;
`;

// The navbar
export const PreviewUi = styled.div`
  -webkit-font-smoothing: auto;
  visibility: visible;
  opacity: 1;
  z-index: 1550;
`;

export const PreviewTopBar = styled.div`
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.3);
  -webkit-backface-visibility: hidden;
  will-change: opacity;
  transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1);
  position: absolute;
  left: 0;
  top: 0;
  height: 44px;
  width: 100%;
`;

export const PreviewCounter = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 44px;
  font-size: 13px;
  line-height: 44px;
  color: #fff;
  opacity: 0.75;
  padding: 0 10px;
`;

export const CloseButton = styled.button`
  background-position: 0 -44px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQgAAABYCAQAAACjBqE3AAAB6klEQVR4Ae3bsWpUQRTG8YkkanwCa7GzVotsI/gEgk9h4Vu4ySLYmMYgbJrc3lrwZbJwC0FMt4j7F6Y4oIZrsXtgxvx/1c0ufEX4cnbmLCmSJEmSJEmSJEmSJP3XCBPvbJU+8doWmDFwyZpLBmYlNJebz0KwzykwsuSYJSNwykEJreV2BaBMaLIQZ2xYcFgqDlmw4ayE/FwL0dDk4Qh4W37DAjgqIT+3HRbigjH+iikVdxgZStgyN0Su2sXIeTwTT+esdpcbIlfNAuZ/TxresG4zV8kYWSZNiKUTokMMSWeIwTNEn4fK2TW3gRNgVkJLuVksROA9G+bEvoATNlBCa7nZXEwdxEZxzpKRKFh+bsv8LmPFmhX1OwfIz81jIRJQ5eeqG9B+riRJkiRJkiRJkiRJkiRJkiRJUkvA/8RQoEpKlJWINFkJ62AlrEP/mNBibnv2yz/A3t7Uq3LcpoxP8COjC1T5vxoAD5VdoEqdDrd5QuW1swtUSaueh3zkiuBiqgtA2OlkeMcP/uDqugsJdbjHF65VdPMKwS0+WQc/MgKvrIOHysB9vgPwk8+85hmPbnQdvHZyDMAFD7L3EOpgMcVdvnHFS0/vlatrXvCVx0U9gt3fxvnA0/hB4nmRJEmSJEmSJEmSJGmHfgFLaDPoMu5xWwAAAABJRU5ErkJggg==)
    0 0 no-repeat;
  background-size: 264px 88px;
  width: 44px;
  height: 44px;
  position: relative;
  cursor: pointer;
  overflow: visible;
  -webkit-appearance: none;
  display: block;
  border: 0;
  padding: 0;
  margin: 0;
  float: right;
  opacity: 0.75;
  transition: opacity 0.2s;
  box-shadow: none;
`;
