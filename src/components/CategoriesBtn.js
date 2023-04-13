import React, { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../context/CategoriesProvider";
import { getCategories } from "../services/api";


function CategoriesBtn() {

  let [allCategories, setAllCategories] = useState([])
  const {setCategoryId, setCategoryName} = useContext(CategoriesContext)

  useEffect(()=> {
    async function getAPI(){
      const catData = await getCategories()
      setAllCategories(catData)
    }
    getAPI();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleClick(target) {
    setCategoryId(target.value)
    setCategoryName(target.name)
  }

  return (
    <div>
        <select
          id="selectBtn"
          onClick={(e) => handleClick(e.target)}
        >
          
        {
          allCategories && allCategories.map((elem)=> (
            <option
              value={elem.id}
              key={elem.id}
              name={elem.name}
            >
              {elem.name}
            </option>
          ))
        }
      </select>
    </div>
    
  )
}

export default CategoriesBtn