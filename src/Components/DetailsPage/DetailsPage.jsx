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
              ????????????
            </div>
          </div>
          <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
            <div>Year | length | Director</div>
            <div>Cast : Tony Stark, Chris Evans, Chris Hemsworth</div>
          </div>
          <div>
            Movie Description : Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sit consequatur minus adipisci cupiditate
            laboriosam dolores doloremque deleniti possimus accusantium officia
            repudiandae, laudantium dolorem dicta. Eum provident quam dolore
            nemo repellat doloribus eius quos suscipit assumenda animi, officiis
            magnam asperiores aut quod perferendis ipsa at placeat ut earum, in
            sunt ad.
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailsPage;
