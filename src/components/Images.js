import { useContext } from "react";
import Image from "./Image";
import { ImagesContext } from "../context/ImagesContext";

const Images = () => {
  const {imagesList} = useContext(ImagesContext);

  return (
    imagesList.length > 0?<div className="grid  md:grid-cols-2 w-full lg:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto px-4 bg-white p-5 rounded-lg">
        {imagesList.map((data, key) => (
         <Image key={key} data={data} />
        ))}
      </div>:<p className="p-10 m-auto font-bold justify-center align-middle  "> No Images Found ....</p>
  );
};

export default Images;
