import React from "react";
import "../style.scss";

const Category = () => {
  return (
    <div className="CategoryCompMain">
      <div className="CategoryComp">
        <div className="title">Shirt</div>
        <div className="Arrow">
          <svg
            width="41"
            height="40"
            viewBox="0 0 41 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.3003 25L13.2286 17.9283L15.587 15.5717L20.3003 20.2867L25.0136 15.5717L27.372 17.9283L20.3003 25Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <div className="Filters">
        <li>tshirt</li>
        <li>tshirt</li>
        <li>tshirt</li>
        <li>tshirt</li>
      </div>
    </div>
  );
};

export default Category;
