import React from "react";
import "./CocktailSummary.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Image } from "react-bootstrap";
const CocktailSummary = ({ imageUrl, cocktailName }) => {
  console.log(imageUrl);

  return (
    <div border="primary" class="summary_container">
      <row>
        <column>
          <Image class="thumbnail_size rounded" src={imageUrl} />
        </column>
        <column class="summary_cocktail-name"> {cocktailName}</column>
      </row>
    </div>
  );
};

export default CocktailSummary;
