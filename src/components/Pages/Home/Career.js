import React from 'react';
import career from '../../../images/career.jpg'


const Career = () => {
    return (
        <div className="hero min-h-screen mt-10" style={{ background: `url(${career})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Let's Grow Together</h1>
                    <p className="mb-5 text-xl">Providing a wide range of services related to the basic line of Menufactures.We are proud to protect your organization with our award-winning products.</p>
                    <button className="btn btn-primary">Get the opportunity</button>
                </div>
            </div>
        </div>
    );
};

export default Career;