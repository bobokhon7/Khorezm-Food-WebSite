import styled from "styled-components";
import Button from "antd/lib/button";
import "antd/dist/antd.css";

export const BuyBtn = styled(Button)`
  width: 120px;
  height: 36px;
  background: #7ed321;
  border-radius: 8px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: #ffffff;
  margin-left: auto;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #7ed321 !important;
    border-color: #7ed321 !important;
  }
`;
export const BuyBtn1 = styled(Button)`
  width: 180px;
  height: 40px;
  background: #7ed321;
  border-radius: 8px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  margin-left: auto;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #7ed321 !important;
    border-color: #7ed321 !important;
  }
`;
