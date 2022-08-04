import { useState, useEffect, useRef } from "react";
import {
  /* RiArrowRightSLine,
  RiArrowLeftSLine, */
  RiArrowRightSFill,
  RiArrowLeftSFill,
} from "react-icons/ri";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  Img,
  NavBtn,
  NavBtnLink,
} from "../aboutus/abuelement";
import { sliderData } from "./slideData";
import WebLogo from "../../images/weblogo.svg";
import Footer from "../footer";
import "./pj.scss";
import { BtnWrap, Button } from "./aboutpjele";
/* import { 
  Wrap,
  ButtonWrap, 
  FillBg, 
  SvgWrap,
  Rect,
  Desc
} from "../hoyoButton"; */

const AboutPj = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  /* const [enter, setEnter] = useState(0); */
  const slideLength = sliderData.length;
  const timeoutRef = useRef(null);
  const delay = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentSlide(
          currentSlide === slideLength - 1 ? 0 : currentSlide + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [currentSlide, slideLength]);

  return (
    <>
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
      <div className="slider">
        <RiArrowLeftSFill className="arrow prev" onClick={prevSlide} />
        <RiArrowRightSFill className="arrow next" onClick={nextSlide} />

        <div
          className="slideShowSlider"
          style={{ transform: `translate3d(${-currentSlide * 100}%, 0, 0)` }}
        >
          {sliderData.map((slide, index) => {
            return (
              <div
                className={index === currentSlide ? "slide current" : "slide"}
                key={index}
              >
                <img src={slide.image} alt="slide" className="image" />
                {index === currentSlide && (
                  <>
                    <div className="content">
                      <h1 className="heading">{slide.heading}</h1>
                      <p>{slide.desc}</p>
                      <hr />
                      {currentSlide === 0 && (
                        <BtnWrap>
                          <Button to="/about-pj/db">Xem thêm</Button>
                        </BtnWrap>
                      )}
                      {/* {currentSlide === slideLength - 1 && (
                        <Wrap>
                          <ButtonWrap>
                            <FillBg></FillBg>
                            <SvgWrap>
                              <Rect></Rect>
                            </SvgWrap>
                            <Desc>Xem thêm</Desc>
                          </ButtonWrap>
                        </Wrap>
                      )} */}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        <div className="slideShowImgs">
          {sliderData.map((slide, index) => (
            <div
              key={index}
              className={
                currentSlide === index ? "slideShowImg active" : "slideShowImg"
              }
              onClick={() => {
                setCurrentSlide(index);
              }}
            >
              <img src={slide.image} className="imageShow" alt="show" />
              <div
                className={
                  index === currentSlide ? "timeline isactive" : "timeline"
                }
              ></div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPj;
