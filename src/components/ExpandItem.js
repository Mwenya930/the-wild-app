import React from "react";
import { Link } from "react-router-dom";

function ExpandItem(props) {
  return (
    <>
      <li className="cards__item">
        <Link to={props.path} className="cards__item__link">
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              src={props.src}
              alt="Travel Image"
              className="cards__item__img"
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>

      <div className="expand-text">
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before the final copy is available
        </p>
      </div>
    </>
  );
}

export default ExpandItem;
