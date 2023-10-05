import axios from "axios";
import { useEffect, useState } from "react";

  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
const useGif = (tag) => {
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(false);
  
    const fetchData = async () => {
      try {
        setLoading(true);

    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
        const output = data.data.images.downsized_medium.url;
        setGif(output);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    return { fetchData, loading, gif };
  };
  
  export default useGif;
  