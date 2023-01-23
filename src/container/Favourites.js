import React from 'react'
import { useAppContext } from '../context/favContext';

const Favourites = () => {

  const { addFav, removeToFav } = useAppContext();

  return (
    <>
      <div className='confav'>
      <h4>Your Favourites</h4>
        <div className='api-data'>
          { addFav.map((res) => {
            return (
              <>
                <div>
                  <img src={res.poster} alt='artwork' className='art' key={res.id} />
                  <p>{res.title}</p>

                  <button className='btn bg-danger' onClick={() => removeToFav(res.id)}>remove</button>

                </div>
              </>
            )
          }) }
        </div>
      </div>
    </>
  )
}

export default Favourites