import React, { useContext, useState } from "react";
import { CategoriesContext } from "../context/CategoriesProvider";
import { SearchContext } from "../context/SearchProvider";


function SearchBar() {

  let [inputSearch, setInputSearch ] = useState()

  const {categoryData} = useContext(CategoriesContext)
  const {setFilteredData} = useContext(SearchContext)


  function handleChange(e) {
    setInputSearch(e.target.value)
  }

  function handleClick() {
    if (inputSearch) {
    // filtra os dados da busca por categoria com o input
    const resultData = categoryData.filter((item) => item.title.toLowerCase().includes(inputSearch.toLowerCase()))
    setFilteredData(resultData)
    }
  }

  return (
    <div className="m-3">
      <input
        id="search"
        onChange={handleChange}
        value={inputSearch}
        placeholder="Filtrar"
      >
      </input>
      <button
        type="button"
        onClick={ handleClick }
      >
        Search
      </button>
    </div>
    
  )
}

export default SearchBar