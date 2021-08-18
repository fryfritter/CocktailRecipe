import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Image } from "react-bootstrap";
const CocktailSummary = (imageUrl, cocktailName) => {
  console.log(imageUrl + cocktailName);

  return (
    <Container border="primary">
      <Image src={imageUrl} roundedCircle />
      {cocktailName}
    </Container>
  );
};

export default CocktailSummary;
