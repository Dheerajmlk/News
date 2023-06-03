import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const FetchData = ({cat}) => {
  const [Data, setData] = useState("");
  const fetchData = async () => {
    await axios
      .get(
        cat
          ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=7803a23c452748feafc651731be2acdb`
          : "https://newsapi.org/v2/top-headlines?country=in&apiKey=7803a23c452748feafc651731be2acdb"
      )
      .then((res) => setData(res.data.articles));
  };
  useEffect(() => {
    fetchData();
  }, [cat]);

  return (
    <div className="container my-4">
      <h3>
        <u> TOP HEADLINES</u>
      </h3>
      <div
        className="container d-flex flex-column justify-content-center align-items-center my-3"
        style={{ minWidth: "100vh" }}
      >
        {Data
          ? Data.map((items) => (
              <>
                <div
                  className="container my-3 p-3"
                  style={{
                    width: "600px",
                    boxShadow: "2px 2px 18px silver",
                    borderRadius: "10px",
                  }}
                >
                  <h5 className="my-2">{items.title}</h5>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <img
                      src={items.urlToImage}
                      alt="Image Not Found"
                      className="img-fluid "
                      style={{
                        widht: "100%",
                        height: "300px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <p className="my-1">{items.content}</p>
                  <a href={items.url} target="_blank">
                    View More
                  </a>
                </div>
              </>
            ))
          : "loading..."}
      </div>
    </div>
  );
};

export default FetchData;
