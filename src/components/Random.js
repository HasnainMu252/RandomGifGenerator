import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Spinner from './Spinner'
import useGif from '../hooks/useGif';


function Random() {

  // const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
  // const [gif, setGif] = useState('');
  // const [loading,setLoading] = useState(false)

  // async function fetchData() {

  //   try {
  //     setLoading(true)
  //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //     const { data } = await axios.get(url);
  //     const output = data.data.images.downsized_medium.url;
  //     setGif(output);
  //     setLoading(false)
  //   } catch (error) {

  //     console.error("Error fetching data:", error);
  //   }
  // }
  
  
  // useEffect(() => {
  //   fetchData();

  // }, []);

  const {gif,loading,fetchData} = useGif()
  const clickHandler = ()=> {
      console.log("data called")
      fetchData();
  }

  return (
    <div className='w-1/2  bg-green-500 rounded-lg border border-blue flex flex-col items-center gap-y-5 mt-[15px] '>
      <h1 className='text-3xl underline uppercase font-bold'>Random Gif</h1>
      <div width="450px" height="300"> 

      {
        loading ? (<Spinner ></Spinner>):(<img src={gif}  alt="random gif" />)
      }
      
      </div>
      <div>
        <button onClick={clickHandler} className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg'>Generate</button>
      </div>
    </div>
  );
}

export default Random;
