import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import { ImagesContext } from "./context/ImagesContext";
import router from "./Router";
import { env } from "./env";
import { useCallback } from "react";

function App() {
  const API_URL = `https://api.unsplash.com/photos/?client_id=${env.AccessKey}`;

  const [imagesList, setImagesList] = useState([]);
  const [starImages, setStarImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchImages = useCallback(async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Failed to fetch images");
      }
      const data = await response.json();
      console.log(data);
      setImagesList(data);
      setLoading(false);

      // let ex = [...response].sort(() => Math.random() - 0.5);
      //     console.log("ex", ex[0]);
      //    setRandomImage(ex[0].urls.regular);
    } catch (error) {
      console.error("Error fetching images:", error);
      setLoading(false);
    }
  }, [API_URL]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);


  const value = {
    loading,
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
