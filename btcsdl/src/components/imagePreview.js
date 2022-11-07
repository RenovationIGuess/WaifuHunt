import styled from "styled-components";
import VaryLogo from "../images/buttonLogos.png"

export const PswpPicturePreview = styled.div`
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
  -webkit-backface-visibility: hidden;
  outline: none;
  color: #2f3f56;
`;

export const PswpBg = styled.div`
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

export const PswpScrollWrap = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const PswpContainer = styled.div`
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

export const PswpItem = styled.div`
	transform: translate3d(0px, 0px, 0px);
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;
`;

export const PswpZoomWrap = styled.div`
  /* transform: translate3d(0px, 100px, 0px) scale(1); */
  transition: none;
  -webkit-backface-visibility: hidden;
  position: absolute;
  width: 100%;
  transform-origin: left top;
  touch-action: none;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

export const PswpImgPlaceholder = styled.div`
  /* width: 1087px;
  height: 611px; 
  display: none; */
  cursor: zoom-in;
  background: #222;
  -webkit-backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
`;

export const PswpImg = styled.img`
  /* display: block;
  width: 1087px;
  height: 611px; */
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
export const PswpUI = styled.div`
  -webkit-font-smoothing: auto;
  visibility: visible;
  opacity: 1;
  z-index: 1550;
`;

export const PswpTopBar = styled.div`
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
  visibility: visible;
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
  background: url(${VaryLogo}) 0 0 no-repeat;
  background-position: 0 -44px;
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

  &:hover {
    opacity: 1;
  }
`;

/* export const PswpCaption = styled.div`

` */