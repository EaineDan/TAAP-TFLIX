import React from 'react';
import backgroundImage from '../../assets/images/foot.jpg';
import { Link } from 'react-router-dom';


const Display = () => {
  return (
    <div className="relative">
      <img src={backgroundImage} alt="Display" className='w-auto' />
      <div className="absolute inset-0 flex mx-5 justify-center items-center leading-loose" >
        <div className="text-end text-white">
          <h1 className="text-6xl font-bold">Enjoy Unlimited Downloads
           </h1>
           <h2 className="text-4xl font-bold p-5">Subscribe to our Premium + Package Today</h2>
          <Link to="/signup"><p className="text-2xl hover:text-red-500">Click here to subscribe&gt;&gt;&gt;</p></Link>
        </div>
      </div>
    </div>
  )
}

export default Display;