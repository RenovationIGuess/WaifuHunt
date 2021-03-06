import React from "react";
import {
  HeadContainer,
  HeadSection,
  Nav,
  HeaderTitle,
  NavbarContainer,
  NavLogo,
  Img,
  NavBtn,
  NavBtnLink,
  WhoContainer,
  WhoBg,
  WhoH2,
  Underline,
  Monke,
  InfoSection,
  InfoElement,
  MemberImg,
  DivideLine,
  MemberInfo,
  MemberTitle,
  MemberName,
  MemDesc,
  Button,
  BtnWrap,
} from "./abuelement";
import Footer from "../footer";
import WebLogo from "../../images/weblogo.svg";
import Ramu from "../../images/aboutus/chadramu.png";
import Jamnes from "../../images/aboutus/ramu.png";
import Kiene from "../../images/aboutus/fatramu.png";

const AboutUs = () => {
  return (
    <>
      <HeadContainer>
        <HeadSection>
          <Nav>
            <NavbarContainer>
              <NavLogo to="/">
                <Img src={WebLogo} alt="weblogo" />
              </NavLogo>
              <NavBtn>
                <NavBtnLink to="/signin">Đăng nhập</NavBtnLink>
              </NavBtn>
            </NavbarContainer>
          </Nav>
          <HeaderTitle>Về chúng tôi | About us</HeaderTitle>
        </HeadSection>
      </HeadContainer>
      <WhoContainer>
        {/* <WhoBg> */}
        <WhoH2>Chúng mình là là ai?</WhoH2>
        <Underline></Underline>
        <Monke>MonKe Gang</Monke>
        {/* </WhoBg> */}
      </WhoContainer>
      <InfoSection>
        <InfoElement>
          <MemberImg src={Ramu} alt="ramu" />
          <DivideLine></DivideLine>
          <MemberInfo>
            <MemberTitle>Thành viên số 1</MemberTitle>
            <Underline></Underline>
            <MemberName>Nguyễn Tùng Lâm - 20204998</MemberName>
            <MemDesc>
							React carousels are another element form the massive collection of
              features of React. They have great popularity in eCommerce
              services. In eCommerce websites or apps, they are involved in
              improving the functionality of the app. A React carousel also gets
              more engagement than other elements of a UI. Hence every shopping
              or eCommerce site has several carousels in their display. Creating
              a React carousel is a tedious job, but hard work is not wasted.
              You get a seamless architecture for your React app. Also, with the
              availability of plugins and React libraries, you can design
              carousels in no time. The only catch is that you are not permitted
              to modify everything in a plugin, as compared to development from
              scratch. Overall, React carousels are an excellent element to
              include in your React projects.
						</MemDesc>
            <BtnWrap>
              <Button>Link to Ramu</Button>
            </BtnWrap>
          </MemberInfo>
        </InfoElement>
        <InfoElement>
          <MemberImg src={Jamnes} alt="jamnes" />
          <DivideLine></DivideLine>
          <MemberInfo>
            <MemberTitle>Thành viên số 2</MemberTitle>
            <Underline></Underline>
            <MemberName>Lê Trường Giang - 2020</MemberName>
            <MemDesc>
							React carousels are another element form the massive collection of
              features of React. They have great popularity in eCommerce
              services. In eCommerce websites or apps, they are involved in
              improving the functionality of the app. A React carousel also gets
              more engagement than other elements of a UI. Hence every shopping
              or eCommerce site has several carousels in their display. Creating
              a React carousel is a tedious job, but hard work is not wasted.
              You get a seamless architecture for your React app. Also, with the
              availability of plugins and React libraries, you can design
              carousels in no time. The only catch is that you are not permitted
              to modify everything in a plugin, as compared to development from
              scratch. Overall, React carousels are an excellent element to
              include in your React projects.
            </MemDesc>
            <BtnWrap>
              <Button>Link to Jamnes</Button>
            </BtnWrap>
          </MemberInfo>
        </InfoElement>
        <InfoElement>
          <MemberImg src={Kiene} alt="kiene" />
          <DivideLine></DivideLine>
          <MemberInfo>
            <MemberTitle>Thành viên số 3</MemberTitle>
            <Underline></Underline>
            <MemberName>Phùng Trung Kiene - 20204994</MemberName>
            <MemDesc>
              React carousels are another element form the massive collection of
              features of React. They have great popularity in eCommerce
              services. In eCommerce websites or apps, they are involved in
              improving the functionality of the app. A React carousel also gets
              more engagement than other elements of a UI. Hence every shopping
              or eCommerce site has several carousels in their display. Creating
              a React carousel is a tedious job, but hard work is not wasted.
              You get a seamless architecture for your React app. Also, with the
              availability of plugins and React libraries, you can design
              carousels in no time. The only catch is that you are not permitted
              to modify everything in a plugin, as compared to development from
              scratch. Overall, React carousels are an excellent element to
              include in your React projects.
            </MemDesc>
            <BtnWrap>
              <Button>Link to Kiene</Button>
            </BtnWrap>
          </MemberInfo>
        </InfoElement>
      </InfoSection>
      <Footer />
    </>
  );
};

export default AboutUs;
