import React, { createContext, useMemo, useState } from 'react';

export const SearchContext = createContext();

export default function SearchProvider({ children }) {

const [search, setSearch] = useState('')
const [filteredData, setFilteredData] = useState([])

  const contextValues = useMemo(() => ({
    search,
    setSearch,
    filteredData,
    setFilteredData
  }), [search, filteredData])


  return (
    <SearchContext.Provider value={ contextValues }>
      { children }
    </SearchContext.Provider>
  );
}

