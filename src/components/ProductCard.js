import React, { useContext } from "react";
import { CategoriesContext } from "../context/CategoriesProvider";


function ProductCard(products) {

    const {categoryName} = useContext(CategoriesContext)

    const {thumbnail, title, price, permalink} = products.data

  return (
    <div className="card border-dark mb-3">
      <div className="row">
        <div className="col-md-3">
          <img src={thumbnail}
          className="m-1"
          style={{width: 140}}
          alt={title}/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h3 className="card-text">{`R$ ${price.toFixed(2).toString().replace(".",",")}`}</h3>
            <h3 className="card-text">{categoryName}</h3>
            <a className="btn btn-primary" href={permalink} target="__blanck"> Ir a web</a>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default ProductCard