import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

export const InfoContainer = styled.div`
  /* background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')}; */ 
  position: relative;
  @media screen and (max-width: 768px) {
      padding: 100px 0;
  }
`

export const BgImg = styled.img`
  position: absolute;
  width: 100%;
  z-index: 1;
`

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100vh;
  background-image: url(${props => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center; 
  /* width: 100vw; */
  margin: 0 auto;
  padding: 0 24px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 1000px;
  }
`

export const InfoRow = styled.div`
  /* background: ${props => (props.imgStart ? 'rgba(0,0,0,0.4)' : 'rgba(98,98,98,0.4)')}; */ 
  background: rgba(0,0,0,0.5);
  padding: 32px;
  border: none;
  border-radius: 10px;
  display: grid;
  grit-auto-column: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
  gap: 80px;

  @media screen and (max-width: 768px) {
      grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
  }
`

export const Column1 = styled.div`
  padding: 0 15px;
  grid-area: col1;
`

export const Column2 = styled.div`
  padding: 0 15px;
  grid-area: col2;
`

export const TextWrapper = styled.div`
  padding: 0 auto;
`

export const TopLine = styled.p`
  color: #7bb1ff;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  /* text-shadow: ${({lightText}) => (lightText ? '2px 2px 6px rgb(51 51 51 / 60%)' : 'none')};
  color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')}; */
  color: #fff;
  text-shadow: 2px 2px 6px rgb(51 51 51 / 60%);

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  /* color: ${({darkText}) => (darkText ? '#010606' : '#fff')}; */
  color: #fff;
`

export const BtnWrap = styled.nav`
  display: flex;
  justify-content: flex-start;
`

export const ImgWrap = styled.div`
  max-width: 750px;
`

export const Img = styled.img`
  width: 684px;
  margin: 0;
`

export const Button = styled(LinkRouter)`
  border-radius: 50px;
  background: #7bb1ff;
  white-space: nowrap;
  padding: 12px 30px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
  }
`
