import styled from 'styled-components'
import {
  MdKeyboardArrowRight,
  MdArrowForward
} from 'react-icons/md'

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 0 30px; */
  height: 100vh;
  position: relative;
  z-index: 1;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
                  180deg, 
                  rba(0, 0, 0, 0.2) 0%), 
                  rgba(0, 0, 0, 0.6) 100%
                ),
                linear-gradient(
                  180deg, 
                  rgba(0, 0, 0, 0.2) 0%,
                  transparent 100%
                );
    z-index: 2;
  }
`

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  /* background: #232a34; */
`

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  margin-top: 375px;
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: left;
  text-shadow: 2px 2px 6px rgb(51 51 51 / 60%);


  /* background: linear-gradient(to top right, #7bb1ff, #a6aaff, #f1b9f3, #9dfdfd, #7bb1ff, #a6aaff, #f1b9f3, #9dfdfd, #7bb1ff);
  -webkit-background-clip: text;
  animation: rgb-text 50s infinite linear;
  background-size: 500% 500%; 
  -webkit-text-fill-color: transparent;

  @keyframes rgb-text{
    0% {
      background-position: 250% -250%; 
    }
    100% {
      background-position: -250% 250%;
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  } */
`

export const HeroH2 = styled.h2`
  color: #fff;
  margin-top: 24px;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  text-shadow: 2px 2px 6px rgb(51 51 51 / 60%);

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`