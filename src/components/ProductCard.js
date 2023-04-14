import React, { useContext } from "react";
import { CategoriesContext } from "../context/CategoriesProvider";


function ProductCard(products) {

    const {categoryName} = useContext(CategoriesContext)

    const {thumbnail, title, price, permalink} = products.data

    // console.log(categoryName);


  return (
    <div className="card border-dark mb-3">
      <div className="row g-0">
        <div className="col-md-3">
          <img src={thumbnail} className="img-fluid rounded-start" alt={title}/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h3 className="card-text">{`R$ ${price}`}</h3>
            <h3 className="card-text">{categoryName}</h3>
            <a className="btn btn-primary" href={permalink} target="__blanck"> Ir a web</a>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default ProductCard