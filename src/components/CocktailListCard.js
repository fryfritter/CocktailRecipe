import React from "react";
import "./CocktailListCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const Summary = (props) => {
  const { id, imageUrl, cocktailName } = props;

  const displayRecipe = (id) => {
    console.log("display recipe of id: ", id);
    props.history.push("/recipes/" + id);
  };

  return (
    <div
      border="primary"
      className="summary_container"
      onClick={() => displayRecipe(id)}
      data-testid="cocktail-list-items"
    >
      <row>
        <column>
          <Image className="thumbnail_size" src={imageUrl} />
        </column>
        <column className="summary_cocktail-name"> {cocktailName}</column>
      </row>
    </div>
  );
};

const CocktailListCard = withRouter(Summary);

export default CocktailListCard;
