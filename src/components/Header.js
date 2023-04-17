import React from "react";
import CategoriesBtn from "./CategoriesBtn";
import SearchBar from "./SearchBar";

function Header() {

  return (
    <div className="d-flex align-items-center justify-content-center container">
      <CategoriesBtn />
      <SearchBar />
    </div>
  )
}

export default Header