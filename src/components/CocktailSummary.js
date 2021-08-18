import React from "react";
import "./CocktailSummary.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const Summary = (props) => {
  const { id, imageUrl, cocktailName } = props;

  const displayRecipe = id => {
    console.log('display recipe of id: ', id)
    props.history.push("/recipes/" + id)
  }

  return (
    <div border="primary" className="summary_container" onClick={() => displayRecipe(id)}>
      <row>
        <column>
          <Image class="thumbnail_size  " src={imageUrl} />
        </column>
        <column class="summary_cocktail-name"> {cocktailName}</column>
      </row>
    </div>
  );
};

const CocktailSummary = withRouter(Summary);

export default CocktailSummary;
