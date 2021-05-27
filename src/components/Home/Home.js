import React from "react";
import Typical from "react-typical";
import FeedbackCarousel from "../FeedbackCarousel/index";

const Home = () => {
  return (
    <div>
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
    </div>
  );
};

export default Home;
