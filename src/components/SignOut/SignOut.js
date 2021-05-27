import React from "react";
import { MainContainer, Container, SignOutBtn, TextTitle } from "./style";
import { LogoutOutlined } from "@ant-design/icons";
import { auth } from "../FireBase/FireBase";
const SignOut = () => {
  //
  return (
    <MainContainer>
      <Container>
        <SignOutBtn onClick={() => auth.signOut()}>
          SignOut {<LogoutOutlined />}
        </SignOutBtn>
        <TextTitle size>/If you want to SignOut just Click the SignOut Button above</TextTitle>
        <TextTitle>/SignOut Form is coming soon</TextTitle>
      </Container>
    </MainContainer>
  );
};

export default SignOut;
