import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 370px;
  height: 200px;
  border-radius: 12px;
  box-sizing: border-box;
  background: #ffffff;
  border: 2px solid #f1f1f1;
  margin-right: 20px;
  margin-top: 40px;
`;

export const TextWrapper = styled.div`
  /* border: 2px solid red; */
  width: 305px;
  height: 95px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  margin: 5px auto;
`;

export const NameWrapper = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: #a9a9a9;
  margin: 25px 0;
`;

export const ImgWrapper = styled.img`
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: auto;
  position: absolute;
  top: 10px;
  left: 40%;
`;

export const StarIcon = styled.img`
  width: 20px;
  height: 15px;
  /* background-color: yellow; */
  fill: orange;
  cursor: pointer;
  display: flex;
  flex-direction: row;

  :hover {
    fill: #151515;
  }
`;
