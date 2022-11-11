import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const ServiceDetailPage = () => {
    const serviceDetails = useLoaderData();
    const { _id, price, service_name, rating, thumbnail_url, details } = serviceDetails[0];

    return (
        <div className='mx-20 my-10'>
            <h2 className='text-4xl font-semibold my-8'>{service_name}</h2>

            <div className='grid grid-cols-2'>
                <div className='w-50 px-10'>

                    <p className='flex items-center text-lg'> <b>Ratings: &nbsp;</b> {rating ? rating : "N/A"} <FaStar className='display: inline text-warning' /></p>

                    <p className='text-xl'> <b>Price:</b> {price ? price : "N/A"} taka</p>

                    <p className='text-justify'> <b className='text-xl'>Details: </b>{details}</p>
                    <p className=''></p>


                </div>


                <div className='w-50'>
                    <img className='rounded-md my-5' src={thumbnail_url} alt="" />
                </div>
            </div>

            <p className='text-xl mt-10 '> <b>Customer Reviews:</b></p>
            <hr className='border-black' />

        </div>
    );
};

export default ServiceDetailPage;