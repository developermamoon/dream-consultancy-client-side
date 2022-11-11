import React from 'react';
import { Link } from 'react-router-dom';

const SectionTwo = () => {
    return (
        <div className="hero h-fit bg-base-200  pb-20">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://i.ibb.co/WGDNGKj/blog.jpg" className="mr-20 max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Read Our Blogs!</h1>
                    <p className="py-6">Want to know more about immigration and visa news ? Read Our blogs</p>
                    <Link to='/blogs'><button className="btn btn-warning">Read Blogs</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SectionTwo;