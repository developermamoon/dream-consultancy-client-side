import React from 'react';

const BookAppointment = () => {
    return (
        <div className="hero h-fit bg-base-200 px-15 py-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Book An Appointment Now!!</h1>
                    <p className="py-6">Book an appointment for free consultancy service for the first time.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="text" name='number' placeholder="number" className="input input-bordered" />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-warning">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookAppointment;