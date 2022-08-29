import React from "react";
import StandingHere from "../../videos/standinghere.gif";
import { 
  Container, 
  ErrorPart, 
  Img,
  ErrorText,
  ErrorH1,
  ErrorH2, 
} from "./404element";
import { Nav, NavbarContainer, NavLogo } from "../profile/pfelement";
import WebLogo from "../../images/logoweb.png";

const NotFound = () => {
  return (
    <>
      <Container>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/postlist">
              <Img src={WebLogo} alt="weblogo" />
            </NavLogo>
          </NavbarContainer>
        </Nav>
        <ErrorPart>
          <Img src={StandingHere} alt="404-error" />
          <ErrorText>
            <ErrorH1>404</ErrorH1>
            <ErrorH2>Trang bạn đến không tồn tại</ErrorH2>
          </ErrorText>
        </ErrorPart>
      </Container>
    </>
  );
};

export default NotFound;
