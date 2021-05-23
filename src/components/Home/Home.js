import React from "react";
import Typical from "react-typical";
import FeedbackCarousel from "../FeedbackCarousel/index";

const Home = () => {
  return (
    <div>
      <h4
        style={{
          padding: "100px",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        you are looking for a great Khorezm Food in Seoul?
      </h4>

      <h2
        style={{
          justifyContent: "center",
          textAlign: "center",
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
