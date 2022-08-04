import styled from "styled-components";
/* import { Link as LinkRouter } from 'react-router-dom' */

export const Wrap = styled.div`
	background: #efefef;
	border-radius: 50px;
	width: 150px;
	height: 45px;

	&:hover {
		visibility: visible;
		stroke-width: 2;
		stroke-dasharray: 100,0;
		stroke-dashoffset: 0;
	}
`

export const ButtonWrap = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #4d6eff;
	font-size: 16px;
	padding: 12px 30px;
	
`

export const FillBg = styled.div`
	z-index: 1;
	transition: opacity .4s;
	background: transparent;
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


	/* border-radius: 50px;
	white-space: nowrap;
	padding: 12px 30px;
	font-size: 16px;
	background: linear-gradient(270deg,#4D6EFF,#7BB1FF);
	color: #4d6eff; 
	color: #fff;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center; */

	transform: translate(1px, 1px);
	fill: none;
	stroke: #4d6eff;
	visibility: hidden; 
	stroke-width: 1;
	stroke-dasharray: 0,100;
	stroke-dashoffset: 100;
	transition: all .6s cubic-bezier(0, 0.5, 0.35, 1);
`

export const Desc = styled.div`
	z-index: 2;
	position: relative
`