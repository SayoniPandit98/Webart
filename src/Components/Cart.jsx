import React from "react";
import "../style.scss";
import Img from "../Images/Shirt.webp";

const Cart = () => {
  return (
    <div className="Cart">
      <div className="Image">
        <img src={Img} />
      </div>
      <div className="Details">
        <div className="Name">Name</div>
        <div className="Details">Cotton red shirt with half sleeves</div>
      </div>
      <div className="Add">
        <div className="counter">0</div>
        <button>Add</button>
        <button>Remove</button>
      </div>
    </div>
  );
};

export default Cart;
