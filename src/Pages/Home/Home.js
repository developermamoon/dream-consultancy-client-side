import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import BookAppointment from './BookAppointment/BookAppointment';
import SectionTwo from './SectionTwo/SectionTwo';
import ServiceSummaryHomePage from './ServiceSummaryHomePage/ServiceSummaryHomePage';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServiceSummaryHomePage></ServiceSummaryHomePage>

            <div className='text-center my-5'>
                <Link to='/services'><button className='btn btn-warning'>See All</button></Link>
            </div>

            <BookAppointment></BookAppointment>
            <SectionTwo></SectionTwo>
        </div>
    );
};

export default Home;