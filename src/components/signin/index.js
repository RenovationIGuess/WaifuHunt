import { useState } from "react";
import SignInButton from "../../images/loginpage/button.png";
import LogoImg from "../../images/loginpage/logoweb.png";
import PaiImg from "../../images/loginpage/paim.png";
import { FaFacebook, FaDiscord, FaGithub } from "react-icons/fa";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./signin.css";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSignInClick, setSignInClick] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showPass1, setShowPass1] = useState(false);
  const [showPass2, setShowPass2] = useState(false);

  const handleSubmit = () => {
    console.log(username);
    console.log(password);
  };

  const toggleShowPass = () => {
    setShowPass(!showPass);
  };

  const toggleShowPass1 = () => {
    setShowPass1(!showPass1);
  };

  const toggleShowPass2 = () => {
    setShowPass2(!showPass2);
  };

  const handleClick = () => {
    setSignInClick(!isSignInClick);
  };

  return (
    <div className="App">
      <div className="navbar">
        <Link to="/">
          <img className="web-logo" src={LogoImg} alt="webLogo" />
        </Link>
        <div className="right-section">
          <p className="not-have-acc">
            {isSignInClick ? "Đã có tài khoản?" : "Chưa có tài khoản?"}
          </p>
          <button
            onClick={handleClick}
            className="sign-in-btn"
            id="toggle-change"
          >
            {isSignInClick ? "Đăng nhập" : "Đăng ký"}
          </button>
        </div>
      </div>
      <div
        className={isSignInClick ? "login-box right-panel-active" : "login-box"}
        id="login-box"
      >
        <div className="form-container sign-up-container">
          <form className="sign-form" action="#">
            <h1 className="sign-h1">ĐĂNG KÝ</h1>
            <div className="social-container">
              <a className="fb-icon" href="#">
                <FaFacebook />
              </a>
              <a className="discord-icon" href="#">
                <FaDiscord />
              </a>
              <a className="git-icon" href="#">
                <FaGithub />
              </a>
            </div>
            <input
              className="sign-input"
              type="text"
              placeholder="Tên tài khoản"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <div className="pass-container">
              <input
                className="sign-input"
                type={showPass ? "text" : "password"}
                placeholder="Mật khẩu"
                /* value={password}
                onChange={e => setPassword(e.target.value)} */
              />
              {showPass ? (
                <AiFillEyeInvisible
                  style={{
                    marginLeft: "-18px",
                    width: "18px",
                    height: "18px",
                  }}
                  onClick={toggleShowPass}
                />
              ) : (
                <AiFillEye
                  style={{
                    marginLeft: "-18px",
                    width: "18px",
                    height: "18px",
                  }}
                  onClick={toggleShowPass}
                />
              )}
            </div>
            <div className="pass-container">
              <input
                className="sign-input"
                type={showPass1 ? "text" : "password"}
                placeholder="Nhập lại mật khẩu"
              />
              {showPass1 ? (
                <AiFillEyeInvisible
                  style={{
                    marginLeft: "-18px",
                    width: "18px",
                    height: "18px",
                  }}
                  onClick={toggleShowPass1}
                />
              ) : (
                <AiFillEye
                  style={{
                    marginLeft: "-18px",
                    width: "18px",
                    height: "18px",
                  }}
                  onClick={toggleShowPass1}
                />
              )}
            </div>
            <img
              src={SignInButton}
              className="login-btn"
              alt="button"
              onClick={handleSubmit}
            />
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form className="sign-form" action="#">
            <h1 className="sign-h1">ĐĂNG NHẬP</h1>
            <div className="social-container">
              <a className="fb-icon" href="#">
                <FaFacebook />
              </a>
              <a className="discord-icon" href="#">
                <FaDiscord />
              </a>
              <a className="git-icon" href="#">
                <FaGithub />
              </a>
            </div>
            <input
              className="sign-input"
              type="text"
              placeholder="Tên tài khoản"
            />
            <div className="pass-container">
              <input
                className="sign-input"
                type={showPass2 ? "text" : "password"}
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {showPass2 ? (
                <AiFillEyeInvisible
                  style={{
                    marginLeft: "-18px",
                    width: "18px",
                    height: "18px",
                  }}
                  onClick={toggleShowPass2}
                />
              ) : (
                <AiFillEye
                  style={{
                    marginLeft: "-18px",
                    width: "18px",
                    height: "18px",
                  }}
                  onClick={toggleShowPass2}
                />
              )}
            </div>
            <a href="#">Quên mật khẩu?</a>
            <img
              src={SignInButton}
              className="login-btn"
              alt="button"
              onClick={handleSubmit}
            />
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <img src={PaiImg} className="login-img" alt="paimon" />
            </div>
            <div className="overlay-panel overlay-right">
              <img src={PaiImg} className="login-img" alt="paimon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
