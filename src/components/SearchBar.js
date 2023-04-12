import React, { useState } from "react";



function SearchBar() {

  let [search, setSeach ] = useState([])

  function handleChange(e) {
    setSeach(e.target.value)
  }

  return (
    <div>
      <input
        id="search"
        onChange={handleChange}
        value={search}
      >
      </input>
    </div>
    
  )
}

export default SearchBar