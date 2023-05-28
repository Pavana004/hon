import React from 'react';
import logo from "../logo.png"

const Navbar = () => {
  return (
    <div className='container d-flex p-2 '>
      <div className='navcon'>
      <div className='inputimg'>
        <div className='toggelIcon'>
          <i className="bi bi-list m-2" ></i>
        </div>
        <img src={logo} alt='...' className='logoimg' />
        <input type='search' className='form-control' placeholder='Search funds...' />
      </div>
      <div>
        <button type='button' className='login'>Login/Register</button>
      </div>

      </div>

    </div>
  )
}

export default Navbar