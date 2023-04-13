import React, { useContext } from "react";
import { CategoriesContext } from "../context/CategoriesProvider";


function ProductCard(products) {

    const {categoryName} = useContext(CategoriesContext)

    const {thumbnail, title, price, permalink} = products.data

    console.log(products.data);

  return (
    <div>
      <img src={thumbnail} alt={title}/>
      <h4>{title}</h4>
      <p>{categoryName}</p>
      <h3>{`R$ ${price}`}</h3>
      <p>{permalink}</p>
    </div>
    
  )
}

export default ProductCard