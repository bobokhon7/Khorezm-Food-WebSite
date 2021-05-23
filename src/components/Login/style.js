import styled from "styled-components";
export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: #50c9c3; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #96deda,
    #50c9c3
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #96deda,
    #50c9c3
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background-color: #b9f0ed;
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  height: 400px;
  color: white;
  border-radius: 8px;
`;

export const TextWrapper = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  color: black;
  margin-top: 20px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const EmailWarpper = styled.input`
  padding: 5px;
  outline: none;
  border-radius: 50px;
  background-color: rgb(243, 241, 238);
  border: 1px solid rgb(243, 241, 238);
  color: black;
`;

export const PasswordWrapper = styled.input`
  padding: 5px;
  margin-top: 20px;
  outline: none;
  border-radius: 50px;
  background-color: rgb(243, 241, 238);
  border: 1px solid rgb(243, 241, 238);
  color: black;
`;

export const ButtonWrapper = styled.button`
  width: 80px;
  height: 30px;
  outline: none;
  background: #4ab0ea;
  color: white;
  border-radius: 50px;
  border: 1px solid #4ab0ea;
  cursor: pointer;
  margin-top: 13px;
  position: relative;
  width: 220px;
  height: 30px;
`;

export const SignUpWrapper = styled.span`
  text-decoration: underline;
  color: red;
  cursor: pointer;
  font-size: 18px;
`;

export const SignOut = styled.span`
  color: red;
  cursor: pointer;
  font-size: 18px;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 18px 20px;
  display: block;
  :hover {
    transform: scale(0.95);
    background-color: #111;
  }
`;
