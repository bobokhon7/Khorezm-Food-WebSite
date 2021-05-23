import React, { useRef } from "react";
import { auth } from "../FireBase";
import "./style.css";
import {
  Container,
  TextWrapper,
  EmailWarpper,
  PasswordWrapper,
  ButtonWrapper,
  SignUpWrapper,
  InputWrapper,
} from "./index";

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
    <Container>
      <TextWrapper>
        Welcome to Khorezm Food!! SignUp or Login to get started!!
      </TextWrapper>

      <InputWrapper>
        <EmailWarpper ref={emailRef} type="email" required />
        <PasswordWrapper ref={passwordRef} type="password" required />
        <ButtonWrapper onClick={signIn}>Login</ButtonWrapper>
        <TextWrapper>
          Not yet Register?
          <SignUpWrapper onClick={signUp}> Sign up</SignUpWrapper>
        </TextWrapper>
      </InputWrapper>
    </Container>
  );
};

export default SignIn;
