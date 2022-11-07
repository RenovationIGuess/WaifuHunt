import React, { useEffect, useState } from "react";
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
import { useNavigate } from "react-router";
import { Toast, ToastMsg } from "../toastMsg";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdErrorOutline } from "react-icons/md";

const NotFound = () => {
  const navigate = useNavigate();

  // Modal message
  const [message, setMessage] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("");
  
  useEffect(() => {
    document.title = "404 Not Found"
  }, [])

  useEffect(() => {
    setMessage("Không có trang nào url như vậy nha!");
    setDesc("Chuẩn bị về trang cũ trong 3...");
    setType("error");
    myFunction();
    setTimeout(() => navigate(-2), 3000);
  }, [])

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

      <div id="snackbar">
        <Toast>
          {type === "success" ? (
            <AiOutlineCheckCircle className="alert-icon-success" />
          ) : (
            <MdErrorOutline className="alert-icon-error" />
          )}
          {message}
        </Toast>
        <ToastMsg>{desc}</ToastMsg>
      </div>
    </>
  );
};

function myFunction() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}

export default NotFound;
