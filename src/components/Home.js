import React from "react";
import { Image } from "react-bootstrap";

const Home = () => {
  return (
    <div className="image-container">
      <Image src={process.env.PUBLIC_URL + "/cocktailhome.jpg"} width="800px" />{" "}
      <div class="centered-left">Ready for your next glass?</div>
    </div>
  );
};

export default Home;
