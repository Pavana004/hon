import React from 'react'
import { useAppContext } from '../context/favContext';


const Playlist = () => {

  const { addFav} = useAppContext();



  return (
    <>
      <div className='confav'>
        <div className='playlistbox'>
        <h4>Playlist</h4>
             {addFav.map((res)=>{
              return(
                 <img src={res.poster} className='playlist' alt='poster'/>
                 )
             })}
        </div>
      </div>
    </>

  )
}

export default Playlist