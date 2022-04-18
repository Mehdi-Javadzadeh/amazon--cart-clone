/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "../components/Product.css";
import { useStateValue } from "./StateProvider";

function Product({ title, price, rating, image, id }) {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <img
        src={image}
        alt="
        product-image"
        width={100}
      />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
