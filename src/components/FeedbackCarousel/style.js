import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 350px;
  border: 1px solid #f9f9f9;
  margin-top: 50px;
  box-sizing: border-box;
  background: #ffffff;
  margin-top: 130px;
`;

export const TextWrapper = styled.div`
  margin-bottom: 40px;
`;

export const Text = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #151515;
  width: 183px;
  height: 27px;
  margin: 65px 0 0 30px;
`;

export const ShadowImg = styled.img`
  background: linear-gradient(90deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  opacity: 0.7;
  width: 90px;
  height: 235px;
  position: absolute;
  top: 415px;
  ${(props) => {
    if (props.position) {
      return `
      right:0px;
      transform: rotate(180deg);`;
    } else {
      return `
      left:0px`;
    }
  }};
`;
