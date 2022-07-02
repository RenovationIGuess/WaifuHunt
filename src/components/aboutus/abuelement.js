import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import StarGlit from "../../images/starglit2.png";
import square from "../../images/square.svg"

export const HeadContainer = styled.div`
  height: 250px;
  width: 100vw;
  background: linear-gradient(
    to bottom right,
    rgb(2, 4, 8) 5%,
    #050c1e 20%,
    #04071a 40%,
    #04121d 70%,
    #050a24
  );
`;

export const HeadSection = styled.div`
  height: 250px;
  width: 100vw;
  background-image: url(${StarGlit});
  background-size: 125vw 125vh;
  background-position: center;
`;

export const Nav = styled.nav`
  background: rgba(0, 0, 0, 0.2);
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10;

  @media screen and {
    max-width: 960px;
  }
   {
    transition: 0.8s all ease;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 36px;
  display: flex;
  align-items: center;
  color: #fff;
  padding: 64px 100px 0;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  border-bottom: 1px solid rgba(221, 221, 221, 0.2);
`;

export const NavLogo = styled(LinkRouter)`
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 8px;
`;

export const Img = styled.img`
  width: 200px;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkRouter)`
  border-radius: 50px;
  /* background: #7bb1ff; */
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  background: linear-gradient(
    to top right,
    #7bb1ff,
    #a6aaff,
    #f1b9f3,
    #9dfdfd,
    #7bb1ff,
    #a6aaff,
    #f1b9f3,
    #9dfdfd,
    #7bb1ff
  );
  -webkit-background-clip: border-box;
  animation: rgb-text 50s infinite linear;
  background-size: 500% 500%;

  @keyframes rgb-text {
    0% {
      background-position: 250% -250%;
    }
    100% {
      background-position: -250% 250%;
    }
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const WhoContainer = styled.div`
  /* position: relative; */
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 0 100px;
	width: 100vw;
	height: 350px;
  background: linear-gradient(
    to right,
    #dfebfb,
    #dfebfb 10%,
    #f3f4f6 30%,
    #f4f3f9 40%,
    #f8f9fa 70%,
    #f0f9fb
  );
`;

export const WhoBg = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 100px;
  width: 100vw;
  height: 350px;
  background-image: url(${square});
  background-size: 0.32px 0.32px;
  background-position: 0 0; 
`

export const WhoH2 = styled.h2`
	font-size: 32px;
	/* position: absolute;
	left: 100px;
  top: 75px; */
	color: #333;
	margin-bottom: 12px;
`

export const Underline = styled.div`
	width: 150px;
	height: 4px;
	border-top-right-radius: 100px;
	/* position: absolute;
	top: 123px;
	left: 100px; */
	background: linear-gradient(
    to right,
    #7bb1ff,
    #a6aaff,
    #f1b9f3,
    #9dfdfd,
    #7bb1ff,
    #a6aaff,
    #f1b9f3,
    #9dfdfd,
    #7bb1ff
  );
  animation: rgb-text 50s infinite linear;
  background-size: 500% 500%;
  -webkit-text-fill-color: transparent;

  @keyframes rgb-text {
    0% {
      background-position: 250% -250%;
    }
    100% {
      background-position: -250% 250%;
    }
  }
`

export const Monke = styled.div`
	/* position: absolute;
	top: 180px;
	left: 100px; */
	font-size: 72px;
	font-weight: bold;
	margin-top: 48px;

	background: linear-gradient(
    to top right,
    #7bb1ff,
    #a6aaff,
    #f1b9f3,
    #9dfdfd,
    #7bb1ff,
    #a6aaff,
    #f1b9f3,
    #9dfdfd,
    #7bb1ff
  );
  -webkit-background-clip: text;
  animation: rgb-text 50s infinite linear;
  background-size: 500% 500%;
  -webkit-text-fill-color: transparent;

  @keyframes rgb-text {
    0% {
      background-position: 250% -250%;
    }
    100% {
      background-position: -250% 250%;
    }
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`
export const InfoSection = styled.div`
  position: relative;
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 100px;
`

export const InfoElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
`

export const MemberImg = styled.img`
  width: 400px;
  margin-right: 50px;
`

export const DivideLine = styled.div`
  border-right: 3px solid #dddddd;
  height: 400px;
  margin: 0;
  z-index: 10;
`

export const MemberInfo = styled.div`
  flex-grow: 1fr;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 75px;
`

export const MemberTitle = styled.h1`
  text-transform: uppercase;
  margin-bottom: 6px;
`

export const MemberName = styled.h2`
  margin-top: 25px;
`

export const MemDesc = styled.div`
  margin-top: 16px;
`

export const BtnWrap = styled.nav`
  display: flex;
  justify-content: flex-start;
  margin-top: 16px;
`

export const Button = styled.button`
  border-radius: 50px;
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

  background: linear-gradient(
    to top right,
    #7bb1ff,
    #a6aaff,
    #f1b9f3,
    #9dfdfd,
    #7bb1ff,
    #a6aaff,
    #f1b9f3,
    #9dfdfd,
    #7bb1ff
  );

  animation: rgb-text 50s infinite linear;
  background-size: 500% 500%;

  @keyframes rgb-text {
    0% {
      background-position: 250% -250%;
    }
    100% {
      background-position: -250% 250%;
    }
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #7bb1ff;
  }
`