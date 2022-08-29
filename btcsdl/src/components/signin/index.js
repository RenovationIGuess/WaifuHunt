import { useState, useContext, useEffect } from "react";
import SignInButton from "../../images/loginpage/button.png";
import CoolButton from "../../images/loginpage/buttonlogo.png"
import LogoImg from "../../images/loginpage/logoweb.png";
import PaiImg from "../../images/loginpage/paim.png";
import { FaFacebook, FaDiscord, FaGithub } from "react-icons/fa";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { MdOutlineDoneOutline, MdErrorOutline } from 'react-icons/md'
import { Link, Navigate } from "react-router-dom";
/* import axios from 'axios' */
import { AuthContext } from "../../contexts/AuthContext";
import { Loading, LoadingWrap } from '../Loading'
import Chilling from '../../videos/chillin.gif'
import "./signin.scss";
import { Toast, ToastMsg } from '../toastMsg'
import { ImageButtonLogin, LoginAll, SwitchBtn } from "./signinelements";

import BgWarm from "../../images/loginpage/Bg.png"
import BgCold1 from "../../images/loginpage/ColdChurl.png"
import BgCold2 from "../../images/loginpage/ColdWinter.png"

function SignIn() {
  // Context 
  const { loginUser } = useContext(AuthContext)
  const { registerUser } = useContext(AuthContext)

  // Login
  const [usernameLog, setUsernameLog] = useState("");
  const [passwordLog, setPasswordLog] = useState("");

  // Register
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  // Change status from login -> sign up
  const [isSignInClick, setSignInClick] = useState(false);

  // Show password in login
  const [showPassLog, setShowPassLog] = useState(false);

  // Show pass and confPass in Register
  const [showPassReg, setShowPassReg] = useState(false);
  const [confShowPass, setShowConfPass] = useState(false);

  const [message, setMessage] = useState('')
  const [desc, setDesc] = useState('')
  const [type, setType] = useState('')

  const [bgArray, setBgArray] = useState(Math.floor(Math.random() * 3));
  
  const [bgState, setBgState] = useState(() => {
    switch(bgArray) {
      case 0:
        return BgWarm;
      case 1:
        return BgCold1;
      case 2:
        return BgCold2;
      default:
        return BgWarm;
    }
  })

  const handleSubmitLog = async () => {
    try {
      const loginData = await loginUser({
        username: usernameLog,
        password: passwordLog,
      })
      if (loginData.success) {
        setMessage('Đăng nhập thành công!')
        setDesc('Chào mừng đến với Waifu Hunt')
        setType('success')
        myFunction()
      } else {
        setMessage('Đăng nhập thất bại!')
        setDesc(loginData.message)
        setType('error')
        myFunction()
      }
    } catch (err) {
      console.log(err)
    }
  };
  
  const handleSubmitReg = async () => {
    if (passwordReg !== confirmPass) {
      setMessage('Đăng ký thất bại!')
      setDesc('Mật khẩu xác nhận không khớp')
      setType('error')
      myFunction()
      return 
    }

    try {
      const registerData = await registerUser({
        username: usernameReg,
        password: passwordReg,
        confirm: confirmPass,
      })
      
      if (registerData.success) {
        setMessage('Đăng ký thành công!')
        setDesc('Chào mừng đến với Waifu Hunt')
        setType('success')
        myFunction()
      } else {
        setMessage('Đăng ký thất bại!')
        setDesc(registerData.message)
        setType('error')
        myFunction()
      }
    } catch (err) {
      console.log(err)
    }
  };

  const toggleShowPassLog = () => {
    setShowPassLog(!showPassLog);
  };

  const toggleShowPassReg = () => {
    setShowPassReg(!showPassReg);
  };

  const toggleShowConfPass = () => {
    setShowConfPass(!confShowPass);
  };

  const handleClick = () => {
    setSignInClick(!isSignInClick);
  };

  const {
    authState: { authLoading, isAuthenticated, user }
  } = useContext(AuthContext)

  let body

  if (authLoading) {
    body = (
      <LoadingWrap>
        <Loading src={Chilling} alt='loading-chilling' />
      </LoadingWrap>
    )
  } else if (isAuthenticated) {
    return <Navigate to={`/user/${user.userid}`} />
  } else {
    body = (
      <div
        className={isSignInClick ? "login-box right-panel-active" : "login-box"}
        id="login-box"
      >
        <div className="form-container sign-up-container">
          <form className="sign-form" action="#">
            <h1 className="sign-h1">ĐĂNG KÝ</h1>
            <div className="social-container">
              <a className="fb-icon" href="https://www.facebook.com/profile.php?id=100017352246348">
                <FaFacebook />
              </a>
              <a className="discord-icon" href="https://www.facebook.com/profile.php?id=100017352246348">
                <FaDiscord />
              </a>
              <a className="git-icon" href="https://www.facebook.com/profile.php?id=100017352246348">
                <FaGithub />
              </a>
            </div>
            <input
              className="sign-input"
              type="text"
              placeholder="Tên tài khoản"
              onChange={e => setUsernameReg(e.target.value)}
              value={usernameReg}
            />
            <div className="pass-container">
              <input
                className="sign-input"
                type={showPassReg ? "text" : "password"}
                placeholder="Mật khẩu"
                value={passwordReg}
                onChange={e => setPasswordReg(e.target.value)} 
              />
              {showPassReg ? (
                <AiFillEyeInvisible
                  style={{
                    marginLeft: "-18px",
                    width: "18px",
                    height: "18px",
                  }}
                  onClick={toggleShowPassReg}
                />
              ) : (
                <AiFillEye
                  style={{
                    marginLeft: "-18px",
                    width: "18px",
                    height: "18px",
                  }}
                  onClick={toggleShowPassReg}
                />
              )}
            </div>
            <div className="pass-container">
              <input
                className="sign-input"
                type={confShowPass ? "text" : "password"}
                placeholder="Nhập lại mật khẩu"
                value={confirmPass}
                onChange={e => setConfirmPass(e.target.value)}
              />
              {confShowPass ? (
                <AiFillEyeInvisible
                  style={{
                    marginLeft: "-18px",
                    width: "18px",
                    height: "18px",
                  }}
                  onClick={toggleShowConfPass}
                />
              ) : (
                <AiFillEye
                  style={{
                    marginLeft: "-18px",
                    width: "18px",
                    height: "18px",
                  }}
                  onClick={toggleShowConfPass}
                />
              )}
            </div>
            <ImageButtonLogin
              src={bgArray === 0 ? SignInButton : CoolButton}
              bgType={bgArray}
              /* className="login-btn" */
              alt="button"
              onClick={handleSubmitReg}
            />
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form className="sign-form" action="#">
            <h1 className="sign-h1">ĐĂNG NHẬP</h1>
            <div className="social-container">
              <a className="fb-icon" href="https://www.facebook.com/profile.php?id=100017352246348">
                <FaFacebook />
              </a>
              <a className="discord-icon" href="https://www.facebook.com/profile.php?id=100017352246348">
                <FaDiscord />
              </a>
              <a className="git-icon" href="https://www.facebook.com/profile.php?id=100017352246348">
                <FaGithub />
              </a>
            </div>
            <input
              className="sign-input"
              type="text"
              placeholder="Tên tài khoản"
              value={usernameLog}
              onChange={e => setUsernameLog(e.target.value)}
            />
            <div className="pass-container">
              <input
                className="sign-input"
                type={showPassLog ? "text" : "password"}
                placeholder="Mật khẩu"
                value={passwordLog}
                onChange={e => setPasswordLog(e.target.value)}
              />
              {showPassLog ? (
                <AiFillEyeInvisible
                  style={{
                    marginLeft: "-18px",
                    width: "18px",
                    height: "18px",
                  }}
                  onClick={toggleShowPassLog}
                />
              ) : (
                <AiFillEye
                  style={{
                    marginLeft: "-18px",
                    width: "18px",
                    height: "18px",
                  }}
                  onClick={toggleShowPassLog}
                />
              )}
            </div>
            <a href="https://www.facebook.com/profile.php?id=100017352246348">Quên mật khẩu?</a>
            <ImageButtonLogin
              src={bgArray === 0 ? SignInButton : CoolButton}
              bgType={bgArray}
              /* className="login-btn" */
              alt="button"
              onClick={handleSubmitLog}
            />
          </form>
        </div>
        <div className="overlay-container">
          {/* <div className="overlay"> */}
          {/* <div className="overlay-panel overlay-left">
              <img src={PaiImg} className="login-img" alt="paimon" />
            </div> */}
          <div
            className={
              isSignInClick
                ? "overlay-panel overlay-left"
                : "overlay-panel overlay-right"
            }
          >
            <img src={PaiImg} className="login-img" alt="paimon" />
          </div>
          {/* </div> */}
        </div>
      </div>
    )
  }

  return (
    <LoginAll img={bgState}>
      <div id="snackbar">
        <Toast>
          {type === 'success' ? 
            <MdOutlineDoneOutline className="alert-icon-success" /> : 
            <MdErrorOutline className="alert-icon-error" />
          }
          {message}
        </Toast>
        <ToastMsg>{desc}</ToastMsg>
      </div>
      <div className="navbar">
        <Link to="/">
          <img className="web-logo" src={LogoImg} alt="webLogo" />
        </Link>
        <div className="right-section">
          <p className="not-have-acc">
            {isSignInClick ? "Đã có tài khoản?" : "Chưa có tài khoản?"}
          </p>
          <SwitchBtn
            colorState={bgArray}
            onClick={handleClick}
            /* className="sign-in-btn" */
            id="toggle-change"
          >
            {isSignInClick ? "Đăng nhập" : "Đăng ký"}
          </SwitchBtn>
        </div>
      </div>
      {body}
   </LoginAll>
  );
}

function myFunction() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

export default SignIn;
