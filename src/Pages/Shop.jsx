import React, { useEffect, useState } from "react";
import axios from "axios";
import Cart from "../Components/Cart";
import "../style.scss"
import Category from "../Components/Category";

const Shop = () => {
  const Data = [
    {
      id: 59,
      title: "Spring and summershoes",
      price: 20,
      quantity: 3,
      total: 60,
      discountPercentage: 8.71,
      discountedPrice: 55,
    },
    {
      id: 88,
      title: "TC Reusable Silicone Magic Washing Gloves",
      price: 29,
      quantity: 2,
      total: 58,
      discountPercentage: 3.19,
      discountedPrice: 56,
    },
    {
      id: 18,
      title: "Oil Free Moisturizer 100ml",
      price: 40,
      quantity: 2,
      total: 80,
      discountPercentage: 13.1,
      discountedPrice: 70,
    },
    {
      id: 95,
      title: "Wholesale cargo lashing Belt",
      price: 930,
      quantity: 1,
      total: 930,
      discountPercentage: 17.67,
      discountedPrice: 766,
    },
    {
      id: 39,
      title: "Women Sweaters Wool",
      price: 600,
      quantity: 2,
      total: 1200,
      discountPercentage: 17.2,
      discountedPrice: 994,
    },
    {
        id: 59,
        title: "Spring and summershoes",
        price: 20,
        quantity: 3,
        total: 60,
        discountPercentage: 8.71,
        discountedPrice: 55,
      },
      {
        id: 88,
        title: "TC Reusable Silicone Magic Washing Gloves",
        price: 29,
        quantity: 2,
        total: 58,
        discountPercentage: 3.19,
        discountedPrice: 56,
      },
      {
        id: 18,
        title: "Oil Free Moisturizer 100ml",
        price: 40,
        quantity: 2,
        total: 80,
        discountPercentage: 13.1,
        discountedPrice: 70,
      },
      {
        id: 95,
        title: "Wholesale cargo lashing Belt",
        price: 930,
        quantity: 1,
        total: 930,
        discountPercentage: 17.67,
        discountedPrice: 766,
      },
      {
        id: 39,
        title: "Women Sweaters Wool",
        price: 600,
        quantity: 2,
        total: 1200,
        discountPercentage: 17.2,
        discountedPrice: 994,
      },
  ];

  return (
    <div className="Shop">
        <div className="Category">
            <div className="Title"> Category</div>
            <div className="CategoryList">
                <Category/>
                <Category/>
                <Category/>
            </div>
        </div>
      <div className="List">
        {Data.map((data) => {
          return <Cart />;
        })}
      </div>

    </div>
  );
};
export default Shop;
