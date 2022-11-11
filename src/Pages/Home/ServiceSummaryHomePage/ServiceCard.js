import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({service}) => {

    const { _id, price, service_name, rating, thumbnail_url, details } = service;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">

            <figure>
                <PhotoProvider>
                    <PhotoView  src={thumbnail_url}>
                        <img className='cursor-pointer' style={{ height: "240px", width: '100%' }} src={thumbnail_url} alt="Shoes" />
                    </PhotoView>
                </PhotoProvider>
            </figure>


            <div className="card-body">
                <h2 className="card-title text-2xl">{service_name}</h2>
                <p>{
                    details.length > 100 ? `${details.substring(0, 100)}...` : details}</p>

                <p className='text-xl'> <b>Price:</b> {price ? price : "N/A"} taka</p>

                <p className='flex items-center text-lg'> <b>Ratings: &nbsp;</b> {rating ? rating : "N/A"} <FaStar className='display: inline text-warning' /></p>

                <div className="card-actions justify-end">
                    <Link to= {`/service/${_id}`}><button className="btn btn-warning">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;