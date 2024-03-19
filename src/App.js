import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import { ImagesContext } from "./context/ImagesContext";
import router from "./Router";
import { env } from "./env";

function App() {

  const API_URL = `https://api.unsplash.com/photos/?client_id=${env.AccessKey}`;

  const [imagesList, setImagesList] = useState([]);
  const [starImages, setStarImages] = useState([]);
  const [loading, setLoding] = useState(true);

  const fetchImages = async () => {
    await fetch(`${API_URL}`).then((res) => {
      res.json().then((response) => {
        setImagesList(response);
        setLoding(false);
        // let ex = [...response].sort(() => Math.random() - 0.5);
        // console.log("ex", ex[0]);
        // setRandomImage(ex[0].urls.regular);
      });
    });
  };

  useEffect(() => {
    fetchImages()
  }, []);

  const value = {
    imagesList,
    setImagesList,
    starImages,
    setStarImages,
  };

  return (
    <ImagesContext.Provider value={value}>
      <RouterProvider router={router}>
        <NavBar />
      </RouterProvider>
    </ImagesContext.Provider>
  );
}

export default App;
