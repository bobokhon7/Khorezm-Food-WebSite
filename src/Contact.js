import React from "react";
// import { Form, Col, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="contact">
      <div style={{ textAlign: "center" }}>
        <h2>Contact Us!!</h2>
        <h3>Phone Number:+8210-7777-7777</h3>

        <h3>Opens:10.00am Closes:10.00pm</h3>
        <div style={{ marginTop: "20px" }}>
          <img
            alt="img"
            src="https://media-cdn.tripadvisor.com/media/photo-s/13/53/56/88/getlstd-property-photo.jpg"
          />
        </div>
        <h4 style={{ marginTop: "20px" }}>
          Location: 37 Usadan-ro, Itaewon-dong, Yongsan-gu, Seoul
        </h4>
      </div>
    </div>
  );
};

export default Contact;
