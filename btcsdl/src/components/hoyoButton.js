import styled from "styled-components";
/* import { Link as LinkRouter } from 'react-router-dom' */

export const HoyoButton = styled.div`
	background: #efefef;
	border-radius: 50px;
	min-width: 50px;
	/* max-width: 100 */
	font-size: 14px;
	width: auto;
	flex: 0 0 auto;
	color: #4d6eff;
`

export const ButtonWrap = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 32px;
	/* color: #4d6eff;
	font-size: 16px; */
	padding: 10px 24px;
`

export const FillBg = styled.div`
	border-radius: 50px;
	z-index: 1;
	opacity: ${props => props.isHovered ? "0" : ""};
	transition: opacity .4s;
	background: transparent;
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
`

export const SvgWrap = styled.svg`
	z-index: 3;
	position: absolute;
	height: 100%;
	width: 100%;
	overflow: hidden;
	top: 0;
	left: 0;
`

export const Rect = styled.rect`
	position: absolute;
	top: 0;
	left: 0;
	width: calc(100% - 2px);
	height: calc(100% - 2px);
	transform: translate(1px, 1px);
	fill: none;
	stroke: #4d6eff;
	visibility: ${props => props.isHovered ? "visible" : "hidden"}; 
	stroke-width: ${props => props.isHovered ? "2" : "1"};
	stroke-dasharray: ${props => props.isHovered ? "100,0" : "0,100"};
	stroke-dashoffset: ${props => props.isHovered ? "0" : "100"};
	transition: all .6s cubic-bezier(0, 0.5, 0.35, 1);
	rx: 17;

	/* &:hover {
		stroke-width: 2;
		stroke-dasharray: 100,0;
		stroke-dashoffset: 0;
		rx: 17;
		visibility: visible;
	} */
`

export const Desc = styled.div`
	z-index: 2;
	position: relative
`