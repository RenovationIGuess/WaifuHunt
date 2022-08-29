import styled from 'styled-components'

export const LoginAll = styled.div`
  /* background-image: url("../../images/loginpage/Bg.png"); */
  /* background-image: url("../../images/loginpage/ColdChurl.png"); */
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  /* width: 100%; */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`

export const SwitchBtn = styled.button`

  background-color: #657ef8;
  color: #fff;
  cursor: pointer;

  color: ;
  font-size: 14px;
  background-color: ;

  font-size: 16px;
  color: ${props => props.colorState === 0 ? '#000' : '#657ef8'};
  font-weight: 500;
  padding: 8px 12px;
  background-color: ${props => props.colorState === 0 ? '#f5e5cb' : '#e1e7ff'};
  border: none;
  border-radius: 5px;
  margin-left: 16px;

  &:hover {
    background-color: ${props => props.colorState === 0 ? '#51332b' : '#657ef8'};
    color: #fff;
    cursor: pointer;
    transition: 0.3s;
  }
`

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(
    108deg,
    rgba(1, 147, 86, 1) 0%,
    rgba(10, 201, 122, 1) 100%
  );
`

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
      height: 80%;
  }
`

export const Icon = styled.div`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
      padding: 10px;
  }
`

export const Form = styled.form`
  background: #010101;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`

export const FormButton = styled.button`
  background: #01bf71;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: #010606;
    background: #fff;
    transition: 0.3s ease-out;
  }
`

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`

export const ImageButtonLogin = styled.img`
  margin-top: ${props => props.bgType === 0 ? '16px' : ''};
  width: ${props => props.bgType === 0 ? '90px' : '150px'};

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`