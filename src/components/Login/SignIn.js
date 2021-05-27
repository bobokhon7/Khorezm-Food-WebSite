import React, { useRef } from "react";
import { auth } from "../FireBase/FireBase";
import { MailOutlined, LockOutlined } from "@ant-design/icons";

import {
  Container,
  TextWrapper,
  EmailWarpper,
  PasswordWrapper,
  ButtonWrapper,
  SignUpWrapper,
  InputWrapper,
  MainContainer,
  IconWrapper,
} from "./style";

const SignIn = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <MainContainer>
      <Container>
        <TextWrapper>
          Welcome to Khorezm Food!! SignUp or Login to get started!!
        </TextWrapper>

        <InputWrapper>
          <IconWrapper>
            {" "}
            <MailOutlined />
          </IconWrapper>
          <EmailWarpper
            ref={emailRef}
            type="email"
            required
            placeholder="example@gmail.com"
          />
          <IconWrapper changeTop>
            <LockOutlined />
          </IconWrapper>
          <PasswordWrapper
            ref={passwordRef}
            type="password"
            placeholder="***********"
            required
          />
          <ButtonWrapper onClick={signIn}>Login</ButtonWrapper>
          <TextWrapper>
            Not yet Register?
            <SignUpWrapper onClick={signUp}> Sign up</SignUpWrapper>
          </TextWrapper>
        </InputWrapper>
      </Container>
    </MainContainer>
  );
};

export default SignIn;
