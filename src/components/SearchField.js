import { useContext, useEffect, useState } from "react";
import { ImagesContext } from "../context/ImagesContext";
import { env } from "../env";

const SearchField = () => {
  const {
    setImagesList,
    imagesList
  } = useContext(ImagesContext);

  const [searchValue, setSearchValue] = useState('');
 
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleButtonSearch = () => {
    fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${searchValue}&client_id=${env.AccessKey}`
    ).then((res) => {
      res.json().then((response) => {
        response.results.length > 0
          ? setImagesList(response.results)
          : searchValue !== ""
          ? setImagesList([])
          : setImagesList(imagesList);
      });
    });
  };

  useEffect(() => {
    handleButtonSearch();
  }, [searchValue]);

  return (
    <div className="flex">
      <input
        className="bg-gray-50 border text-black border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded"
        type="search"
        placeholder="Search Images..."
        value={searchValue}
        onChange={handleInputChange}
      />
      <button
        onClick={handleButtonSearch}
        disabled={!searchValue}
        className=" px-6 py-2.5 text-white rounded focus:ring-2 bg-gray-700 focus:ring-blue-300 disabled:bg-gray-400 ml-5"
      >
        Search
      </button>
    </div>
  );
};

export default SearchField;
