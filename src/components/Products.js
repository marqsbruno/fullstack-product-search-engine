import React, { useContext } from "react";
import { CategoriesContext } from "../context/CategoriesProvider";
import { SearchContext } from "../context/SearchProvider";
import ProductCard from "./ProductCard";


function Products() {

  const {categoryData} = useContext(CategoriesContext)
  const {filteredData} = useContext(SearchContext)

  return (
    <div className="container">
      { 
        filteredData.length === 0 ? (
        categoryData.map((elem, i) => (
          <ProductCard
          key={i}
          data={elem}
        />))
        ) : (
          filteredData.map((elem, i) => (
            <ProductCard
            key={i}
            data={elem}
          />))
        )
      }
    </div>
    
  )
}

export default Products