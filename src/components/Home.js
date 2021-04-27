import React from "react";
import Typical from "react-typical";

const Home = () => {
  return (
    <div>
      <h4
        style={{
          padding: "150px",
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
    </div>
  );
};

export default Home;
