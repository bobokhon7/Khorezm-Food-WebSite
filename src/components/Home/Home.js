import React from "react";
import Typical from "react-typical";
import FeedbackCarousel from "../FeedbackCarousel/index";
import { MainContainer } from "../SignOut/style";

const Home = () => {
  return (
    <MainContainer>
      <h2
        style={{
          justifyContent: "center",
          textAlign: "center",
          padding: "15px",
        }}
      >
        <Typical
          steps={[" Welcome To", 1000, "Khorezm Food Restaurant!", 1000]}
          loop={Infinity}
          wrapper="b"
        />
      </h2>
      <FeedbackCarousel />
    </MainContainer>
  );
};

export default Home;
