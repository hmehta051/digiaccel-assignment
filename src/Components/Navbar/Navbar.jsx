import React, { useEffect, useState, useContext } from "react";
import { MovieContext } from "../../Context/MovieContextProvider";
import "./Navbar.css";
import axios from "axios";

function Navbar() {
  const {
    searchParam,
    searchData,
    setSearchData,
    showDropDown,
    setShowDropDown,
    setSearchOption,
  } = useContext(MovieContext);
  const [value, setValue] = useState("");

  useEffect(() => {
    axios
      .get(`http://api.tvmaze.com/search/shows?q=${value}`)
      .then(({ data }) => {
        setSearchData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
    // eslint-disable-next-line
  }, [value]);

  const handleSearchMovie = (e) => {
    if (searchParam === "b" || value !== "") {
      setShowDropDown(true);
      setSearchOption(true);
    } else {
      setShowDropDown(false);
      setSearchOption(false);
    }
    setValue(e.target.value);
  };

  const handelValue = (data) => () => {
    setValue(data);
    setShowDropDown(false);
    setSearchOption(true);
  };

  return (
    <>
      <div className="navbarTvAppMainDiv">
        <div className="navbarTvAppTitleDiv">TV App</div>
        <div className="navbarTvAppSearchDiv">
          <div className="searchDropDownDiv">
            <input
              onChange={handleSearchMovie}
              className="navbarTvAppSearchInput"
              value={value}
              type="search"
              placeholder="Search"
            />
            {/* dropdown div  */}
            <div
              style={{
                display: showDropDown && searchData.length !== 0 ? "" : "none",
              }}
              className="navbarTvAppDropDown"
            >
              {searchData.length !== 0
                ? searchData.map((elem, index) => {
                    return (
                      <div
                        onClick={handelValue(elem.show.name)}
                        className="navbarTvAppDropDownData"
                        key={index}
                      >
                        {elem.show.name}
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
