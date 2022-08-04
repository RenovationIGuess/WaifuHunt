import styled from 'styled-components'

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
  display: flex;
	justify-content: center;
	align-items: center;
`

export const ErrorPart = styled.div`
	display: flex;
	flex-direction: row;
	position: relative;
`

export const Img = styled.img`
	width: 200px;
`

export const ErrorText = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	position: relative;
	margin-left: 24px;

	&::before {
		content: "";
		position: absolute;
		border-right: 3px solid #dddddd;
		height: 100%;
		top: 50%;
		left: -16px;
		transform: translateY(-50%);
	}
`

export const ErrorH1 = styled.h1`
	font-size: 10rem;
	font-weight: bold;
`

export const ErrorH2 = styled.h2`
	font-size: 2rem;
`