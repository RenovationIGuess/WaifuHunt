import React, { useState, useEffect } from 'react'
import Video from '../../videos/video.mp4'
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroH2,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  MouseScroll,
  Line,
  Mouse,
} from './heroelements'
import { Button } from '../buttonElement'

const HeroSection = () => {
  const [isHover, setHover] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, [])

   const onHover = () => {
    setHover(!isHover)
  }

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Chào mừng đến với WaifuHunt</HeroH1>
        <HeroH2>1 trang web được tạo ra với mục đích giải trí</HeroH2> 
        <HeroBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
          >
            Bắt đầu khám phá {isHover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper> 
      </HeroContent>
      <MouseScroll scrollDown={scrollNav}>
        <div>
          <Mouse />
        </div>
        <Line></Line>
      </MouseScroll>
    </HeroContainer>
  )
}

export default HeroSection