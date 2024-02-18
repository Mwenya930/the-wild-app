import React from "react";
import ExpandItem from "./ExpandItem";
import "./Expand.css";

function Expand() {
  return (
    <div className="cards">
      <h1>Species</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <ExpandItem
              src="images/mammals/mammals.jpg"
              text="Explore wonderful creation in the mammalic kingdom!"
              label="Mammals"
              path="mammals"
            />
          </ul>

          <ul>
            <ExpandItem
              src="images/reptiles/reptiles.jpg"
              text="Explore nature's cold-blooded side"
              label="Reptiles"
              path="reptiles"
            />
          </ul>

          <ul className="cards__items">
            <ExpandItem
              src="images/fish/fish.jpg"
              text="Explore the peaceful yet daring aqua life"
              label="Fish"
              path="fish"
            />
          </ul>

          <ul className="cards_items">
            <ExpandItem
              src="images/birds/birds.jpg"
              text="Explore birdlife and appreciate aero enginuity "
              label="Birds"
              path="birds"
            />
          </ul>

          <ul className="cards__items">
            <ExpandItem
              src="images/amphibians/amphibians.jpg"
              text="The animals that are adept to both land and water"
              label="Amphibians"
              path="amphibians"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Expand;
