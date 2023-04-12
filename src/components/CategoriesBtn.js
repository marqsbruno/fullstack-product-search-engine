import React, { useEffect, useState } from "react";
import { getCategories } from "../services/api";


function CategoriesBtn() {

  let [categories, setCategories] = useState([])
  useEffect(()=> {
    async function getAPI(){
      const catData = await getCategories()
      setCategories(catData)
      console.log(categories);
    }
    getAPI();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
        <select
          id="selectBtn">
        {
          categories && categories.map((elem)=> (
            <option
              value={elem.name}
              key={elem.id}
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