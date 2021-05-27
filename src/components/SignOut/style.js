import styled from "styled-components";
import Button from "antd/lib/button";
import "antd/dist/antd.css";
export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: white; /* fallback for old browsers */
`;
export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background-color: #f5f5f5;
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  height: 400px;
  color: black;
  border-radius: 8px;
`;

export const SignOutBtn = styled(Button)`
  width: 180px;
  height: 40px;
  background: #7ed321;
  border-radius: 8px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  margin-left: 20px;
  cursor: pointer;
  justify-content: center;
  align-items: center;

  &:hover,
  &:focus {
    color: #7ed321 !important;
    border-color: #7ed321 !important;
  }
`;

export const TextTitle = styled.div`
  font-size: ${(props) => (props.size ? "10px" : "15px")};
  justify-content: center;
  margin-top: ${(props) => (props.size ? "10px" : "40px")}; ;
`;
