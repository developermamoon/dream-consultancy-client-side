import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='relative'>
            <div className='overlay'>
                <img style={{ height: '550px' }} className=' w-full' src="https://i.ibb.co/wyYG4yK/banner4.jpg" alt="" />
            </div>

            <div className="absolute transform -translate-y-1/2 left-20 top-1/2">
                <p className='text-white text-3xl'>Dream Consultancy & Immigration Service</p>
                <p className='text-white mt-5'>Make your Study, Travel, Business comfortable <br /> with our help and consultancy.</p>
            </div>
       </div>
    );
};

export default Banner;