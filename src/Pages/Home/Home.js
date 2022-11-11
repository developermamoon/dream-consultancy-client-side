import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import ServiceSummary from './ServiceSummary/ServiceSummary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServiceSummary></ServiceSummary>

            <div className='text-center my-5'>
                <Link to='/services'><button className='btn'>See All</button></Link>
            </div>
        </div>
    );
};

export default Home;