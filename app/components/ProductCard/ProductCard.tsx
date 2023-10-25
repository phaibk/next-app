import React from "react";
import AddToCard from "../AddToCard";
import styles from "./ProductCard.module.css";
const ProductCard = () => {
  return (
    // <div className={styles.card}>
    //   <AddToCard />
    // </div>
    // <div className="p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-500">
    <div>
      <AddToCard />
    </div>
  );
};

export default ProductCard;
