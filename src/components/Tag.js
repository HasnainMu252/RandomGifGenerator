
import React, { useEffect, useState } from 'react';
import Spinner from './Spinner'
import useGif from '../hooks/useGif';



const Tag=()=> {

  const [tag,setTag] = useState('car')
  // const [gif, setGif] = useState('');
  // const [loading,setLoading] = useState(false)

  // async function fetchData() {

  //   try {
  //     setLoading(true)
  //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
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
  const {fetchData,loading,gif} = useGif(tag)

  const clickHandler = ()=> {
      console.log("data called")
      fetchData(tag);
  }

  const ChangeHandler = (e) => {
    console.log('1')
    setTag(e.target.value)
  }

  return (
    <div className='w-1/2  bg-yellow-500 rounded-lg border border-green flex flex-col items-center gap-y-5 mt-[15px] '>
      <h1 className='text-3xl underline uppercase font-bold'>Random {tag} Gif</h1>
      <div width="450px" height="300"> 

      {
        loading ? (<Spinner ></Spinner>):(<img src={gif}  alt="random gif" />)
      }
      
      </div>
      <input  value={tag} type='text' onChange={ChangeHandler} className='w-10/12 text-lg  py-2 rounded-lg mb-[3px] text-center' ></input>
      <div>
        <button onClick={clickHandler} className='w-10/12 bg-pink-500 mb-[3px] text-center text-lg py-2 rounded-lg'>Generate</button>
      </div>
    </div>
  );
}

export default Tag;
