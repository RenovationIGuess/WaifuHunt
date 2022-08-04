import React from 'react'
import { animateScroll as scroll } from 'react-scroll/modules'
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaDiscord,
  FaGithub,
} from 'react-icons/fa'
import {
  FooterContainer,
  FooterWrap,
  SocialIconLink,
  SocialMedia,
  SocialMediaWrap,
  SocialIcons,
  WebsiteRights
} from './footerelements'
import {
  NavLogo,
  Img
} from '../navbar/navbarelements'
import WebLogo from '../../images/logoweb.png'

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            {/* <SocialLogo to="/" onClick={toggleHome}>
              Hunt Hunt Hunt!
            </SocialLogo> */}
            <NavLogo to='/' onClick={toggleHome}>
                <Img src={WebLogo} alt='weblogo' />
            </NavLogo>
            <WebsiteRights>
              Made in {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <FaDiscord />
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <FaGithub />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer