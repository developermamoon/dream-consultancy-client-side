import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {

    const { _id,service_name, thumbnail_url, details } = service;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img style={{height: "240px", width: '100%'}} src={thumbnail_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{service_name}</h2>
                <p>{
                    details.length > 100 ? `${details.substring(0, 100)}...` : details}</p>
                <div className="card-actions justify-end">
                    <Link to= {`/services/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;