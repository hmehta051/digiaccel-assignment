import React, { useContext, useEffect } from "react";
import { MovieContext } from "../../Context/MovieContextProvider";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
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
    setLoading(true);
    axios
      .get(` http://api.tvmaze.com/search/shows?q=${searchParam}`)
      .then(({ data }) => {
        setRenderData(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
      });
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
        <div className="homeHeadingDiv">Search Option</div>
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
