import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import ServiceSummaryHomePage from './ServiceSummaryHomePage/ServiceSummaryHomePage';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServiceSummaryHomePage></ServiceSummaryHomePage>

            <div className='text-center my-5'>
                <Link to='/services'><button className='btn btn-warning'>See All</button></Link>
            </div>
        </div>
    );
};

export default Home;