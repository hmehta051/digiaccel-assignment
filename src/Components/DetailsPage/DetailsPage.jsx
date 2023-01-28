import React from "react";
import { useContext } from "react";
import { MovieContext } from "../../Context/MovieContextProvider";
import Navbar from "../Navbar/Navbar";
import "./DetailsPage.css";
function DetailsPage() {
  const { detailPage, searchData, setDetailsPage, setSearchData } =
    useContext(MovieContext);
  const handleDetailsPage = (data) => () => {
    setDetailsPage(data);
    setSearchData([]);
  };
  return (
    <>
      <Navbar type="Detail" />
      <div
        style={{ display: searchData.length !== 0 ? "" : "none" }}
        className="searchHomeMainDiv"
      >
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
      <div className="detailPageMainDiv">
        <div className="detailPageLeftDiv">
          <img
            src={
              detailPage.show.image === null
                ? "https://www.shutterstock.com/image-photo/beautiful-abstract-grunge-decorative-navy-260nw-539880832.jpg"
                : detailPage.show.image.original
            }
            alt={detailPage.show.name}
          />
        </div>
        <div className="detailPageRightDiv">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div>Title&nbsp;(rating)</div>
            <div
              style={{
                color: "teal",
              }}
            >
              ★★★★★
            </div>
          </div>
          <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
            <div>Year | length | director</div>
            <div>Cast : John Jacob, hans meir, mohammad ali</div>
          </div>
          <div>
            Movie Desscription : Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Illum nesciunt ad doloribus quis quidem corrupti
            odio recusandae, esse fugit quaerat laudantium inventore impedit
            tempore quas perferendis natus iure qui. Cupiditate.
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailsPage;
