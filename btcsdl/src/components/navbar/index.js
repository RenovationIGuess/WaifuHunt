import { React, useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll/modules'
import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks, 
  NavBtn,
  NavBtnLink,
  Img
} from './navbarelements'
import { IconContext } from 'react-icons/lib'
import WebLogo from '../../images/logoweb.png'

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)
  
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }
  
  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <>
      <IconContext.Provider value={{color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
              <NavLogo to='/' onClick={toggleHome}>
                <Img src={WebLogo} alt='weblogo' />
              </NavLogo>
              <MobileIcon onClick={toggle}>
                <FaBars />
              </MobileIcon>
              <NavMenu>
                <NavItem>
                  <NavLinks 
                    to="about"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                  >
                    Về chúng tôi
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks 
                    to="collection"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                  >
                    Về dự án
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks 
                    to="services"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                  >
                    Các tính năng
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks 
                    to="signup"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                  >
                    Đăng nhập
                  </NavLinks>
                </NavItem>
              </NavMenu>
              <NavBtn>
                <NavBtnLink to="/signin">Đăng nhập</NavBtnLink>
              </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar