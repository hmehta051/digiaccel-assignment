import React, { createContext } from "react";
import { useState } from "react";
export const MovieContext = createContext();
function MovieContextProvider({ children }) {
  const [searchParam, setSearchParam] = useState("b");
  const [searchData, setSearchData] = useState([]);
  const [showDropDown, setShowDropDown] = useState(false);
  const [searchOption, setSearchOption] = useState(false);
  const [detailPage, setDetailsPage] = useState({});
  return (
    <MovieContext.Provider
      value={{
        searchParam,
        setSearchParam,
        searchData,
        setSearchData,
        showDropDown,
        setShowDropDown,
        searchOption,
        setSearchOption,
        detailPage,
        setDetailsPage,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export default MovieContextProvider;
