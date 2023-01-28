import React, { useEffect, useState, useContext } from "react";
import { MovieContext } from "../../Context/MovieContextProvider";
import "./Navbar.css";
import { Link } from "react-router-dom";

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
    async function fetchMovieApi() {
      try {
        const res = await fetch(
          `http://api.tvmaze.com/search/shows?q=${value}`
        );
        const response = await res.json();
        setSearchData(response);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchMovieApi();
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
        <Link to="/" className="navbarTvAppTitleDiv">
          TV App
        </Link>
        <div className="navbarTvAppSearchDiv">
          <div className="searchDropDownDiv">
            <input
              onChange={handleSearchMovie}
              className="navbarTvAppSearchInput"
              value={value}
              type="search"
              placeholder="Search"
            />
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
