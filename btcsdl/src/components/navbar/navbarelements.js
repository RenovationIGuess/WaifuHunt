import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'

export const Nav = styled.nav`
  background: ${({scrollNav}) => (scrollNav ? 'rgba(0,0,0,0.5)' : 'transparent')};
  -webkit-backdrop-filter: ${({scrollNav}) => (scrollNav ? 'blur(6px)' : '')};
  backdrop-filter: ${({scrollNav}) => (scrollNav ? 'blur(6px)' : '')};
  height: 80px;
  /* margin-top: -80px; */ 
  display: flex;
  justify-content: center;
  align-items: center; 
  /* font-size: 1rem; */
  position: fixed;
  left: 0;
  right: 0;
  /* width: 100%; */
  top: 0;
  z-index: 10;
  /* overflow-x: hidden; */

  @media screen and {max-width: 960px} {
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
`

export const NavLogo = styled(LinkRouter)`
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 8px;
`

export const Img = styled.img`
  width: 200px;
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.li`
  height: 80px;
`

export const NavLinks = styled(LinkScroll)`
  color: #fff;
  font-size: 16px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #7bb1ff;
  }

  &.active {
    border-bottom: 3px solid #7bb1ff;
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtnLink = styled(LinkRouter)`
  border-radius: 50px;
  background: #7bb1ff;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`