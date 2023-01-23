import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Search = () => {

  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

 

  const getData = async () => {
    try {

      const response = await axios.get("https://multiverse-ott.onrender.com/api/allMusic");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <>
      <div className='conSearch'>
        <input type="text" placeholder='search' className='input' onChange={(e) => setQuery(e.target.value)} />
      </div>
      {data.filter((res) => res.title.toLowerCase().includes(query)).map((res) => {
        return (
           <div >
              <ul>
                <img src={res.poster} alt="poster" className='searchPoster'/>
                <p className='list'>{res.title}</p>
              </ul>
             
           </div>
        )
      })}
    </>
  )
}

export default Search