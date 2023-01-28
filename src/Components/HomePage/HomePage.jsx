import React, { useContext, useEffect } from "react";
import { MovieContext } from "../../Context/MovieContextProvider";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import "./HomePage.css";
import { useNavigate } from "react-router";

function HomePage() {
  const {
    searchParam,
    searchData,
    searchOption,
    setSearchOption,
    setDetailsPage,
  } = useContext(MovieContext);
  const [renderData, setRenderData] = useState([]);
  const [loading, setLoading] = useState(false);
  const arr = [1, 2, 3];
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMovieSearch() {
      setLoading(true);
      try {
        const res = await fetch(
          `http://api.tvmaze.com/search/shows?q=${searchParam}`
        );
        const response = await res.json();
        setRenderData(response);
        setLoading(false);
      } catch (err) {
        console.log(err.message);
        setLoading(false);
      }
    }
    fetchMovieSearch();
  }, [searchParam]);
  const handleDetailsPage = (data) => () => {
    setDetailsPage(data);
    navigate("/details-page/");
  };
  useEffect(() => {
    setSearchOption(false);
    // eslint-disable-next-line
  }, [window.location.href]);

  return (
    <>
      <Navbar type="home" />
      <div
        style={{ display: searchOption ? "" : "none" }}
        className="searchHomeMainDiv"
      >
        <div className="homeHeadingDivSearch">Search Movie</div>
        <div className="imageHomeDiv">
          {searchData.map((elem, index) => {
            return (
              <div
                onClick={handleDetailsPage(elem)}
                key={index}
                className="imageDiv"
              >
                <img
                  src={
                    elem.show.image !== null
                      ? elem.show.image.original
                      : "https://www.shutterstock.com/image-photo/beautiful-abstract-grunge-decorative-navy-260nw-539880832.jpg"
                  }
                  alt={elem.show.name}
                />
              </div>
            );
          })}
        </div>
      </div>
      {arr.map((elem, index) => {
        return (
          <div key={index} className="homeMainDiv">
            <div className="homeHeadingDiv">Genre {elem}</div>
            <div className="imageHomeDiv">
              {loading ? (
                <div>Loading...</div>
              ) : (
                renderData.map((elem, index) => {
                  return (
                    <div
                      onClick={handleDetailsPage(elem)}
                      key={index}
                      className="imageDiv"
                    >
                      <img
                        src={
                          elem.show.image !== null
                            ? elem.show.image.original
                            : "https://www.shutterstock.com/image-photo/beautiful-abstract-grunge-decorative-navy-260nw-539880832.jpg"
                        }
                        alt={elem.show.name}
                      />
                    </div>
                  );
                })
              )}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default HomePage;
