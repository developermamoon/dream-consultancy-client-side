import React, { useEffect, useState } from 'react';
import ServiceCard from '../Home/ServiceSummaryHomePage/ServiceCard';

const ServiceSummaryServicePage = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(' https://dream-consultancy-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='px-10'>
            <p className='text-center my-5 text-5xl font-semibold'>Our Services</p>


            <div className='grid grid-cols-3 my-10 justify-items-center gap-y-10'>
                {services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)}
            </div>


        </div>
    );
};

export default ServiceSummaryServicePage;