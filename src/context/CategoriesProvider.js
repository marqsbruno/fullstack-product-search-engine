import React, { createContext, useEffect, useMemo, useState } from 'react';
import { getOneCategoy } from '../services/api';

export const CategoriesContext = createContext();

export default function CategoriesProvider({ children }) {

  const [categoryId, setCategoryId] = useState()
  const [categoryName, setCategoryName] = useState()
  const [categoryData, setCategoryData] = useState([])

  const contextValues = useMemo(() => ({
    categoryId,
    setCategoryId,
    categoryData,
    setCategoryData,
    categoryName,
    setCategoryName
  }), [categoryId, categoryData, categoryName])


  useEffect(() => {
    async function getApiData() {
      if (categoryId) {
        const data = await getOneCategoy(categoryId)
        setCategoryData(data.results)
      }
    }
    getApiData()
  }, [categoryId])

  return (
    <CategoriesContext.Provider value={ contextValues }>
      { children }
    </CategoriesContext.Provider>
  );
}

