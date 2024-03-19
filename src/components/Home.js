import React, { useCallback, useEffect, useState } from "react";
import NavBar from "./NavBar";
import SearchField from "./SearchField";
import Images from "./Images";
import { env } from "../env";

const Home = () => {
  const API_URL_RANDOM = `https://api.unsplash.com/photos/random?client_id=${env.AccessKey}`;
  const [loading, setLoding] = useState(true);

  const [randomimage, setRandomImage] = useState({});

  const fetchImage = useCallback(async () => {
    await fetch(`${API_URL_RANDOM}`)
      .then((res) => {
        res
          .json()
          .then((response) => {
            setRandomImage(response?.urls?.regular);
            setLoding(false);
            // let ex = [...response].sort(() => Math.random() - 0.5);
            // console.log("ex", ex[0]);
            // setRandomImage(ex[0].urls.regular);
          })
          .catch((err) => {
            console.log(err, "err");
            setLoding(false);
          });
      })
      .catch((err) => {
        setLoding(false);
      });
  }, [API_URL_RANDOM]);

  useEffect(() => {
    fetchImage();
  }, [fetchImage]);

  return (
    <>
      <NavBar />
      <div
        className="relative  rounded-lg  bg-no-repeat p-12 text-center w-full h-full bg-cover bg-opacity-50 "
        style={{ backgroundImage: `url(${randomimage})` }}
      >
        <div className="max-w-md mx-auto text-white">
          <h1 className="text-4xl text-gray-900 font-bold mb-4">Find Images</h1>
          <SearchField />
        </div>
        {loading ? <p>Loading Images Please Wait</p> : <Images />}
      </div>
    </>
  );
};

export default Home;
