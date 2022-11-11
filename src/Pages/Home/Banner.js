import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='relative'>
            <div className='overlay'>
                <img style={{ height: '550px' }} className=' w-full' src="https://i.ibb.co/wyYG4yK/banner4.jpg" alt="" />
            </div>
       </div>
    );
};

export default Banner;