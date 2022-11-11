import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const ServiceCard = ({service}) => {

    const { _id, price, service_name, rating, thumbnail_url, details } = service;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img style={{height: "240px", width: '100%'}} src={thumbnail_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{service_name}</h2>
                <p>{
                    details.length > 100 ? `${details.substring(0, 100)}...` : details}</p>

                <p className='text-xl'> <b>Price:</b> {price ? price : "N/A"} taka</p>

                <p className='flex items-center text-lg'> <b>Ratings: &nbsp;</b> {rating.number ? rating.number : "N/A"} <FaStar className='display: inline text-warning' /></p>

                <div className="card-actions justify-end">
                    <Link to= {`/services/${_id}`}><button className="btn btn-warning">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;