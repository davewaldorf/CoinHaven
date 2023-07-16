import {useState, useEffect} from 'react';

const APIKEY = "OrHBQh9tMpIjgnMB6lHKmu4jNKOEu3e0"

export const useFetch = ({keyword}) => {
  const [gif, setGif] = useState("");

  const fetchGif = async () => {
   try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${keyword.split(" ").join("")}&limit=1`);
    const {data} = await response.json();
    console.log(data);
    setGif(data[0]?.images?.downsized_medium.url);
   }
    catch (error) {
      setGif("https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284");
  } 
  }

  useEffect(() => {
   if (keyword) {
    fetchGif();}
  }
  , [keyword]);

  return gif;
}

export default useFetch;