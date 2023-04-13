import React, { useContext } from "react";
import { CategoriesContext } from "../context/CategoriesProvider";
import ProductCard from "./ProductCard";


function Products() {

  const {categoryData} = useContext(CategoriesContext)

  console.log('produtos', categoryData);

  return (
    <div>
      {
        categoryData &&
        categoryData.map((elem, i) => (
          <ProductCard
          key={i}
          data={elem}
        />))
      }
    </div>
    
  )
}

export default Products