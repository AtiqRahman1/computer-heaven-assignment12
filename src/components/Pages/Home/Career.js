import React from 'react';
import career from '../../../images/career.jpg'


const Career = () => {
    return (
        <div class="hero min-h-screen mt-10" style={{ background: `url(${career})` }}>
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">Let's Grow Together</h1>
                    <p class="mb-5 text-xl">Providing a wide range of services related to the basic line of Menufactures.We are proud to protect your organization with our award-winning products.</p>
                    <button class="btn btn-primary">Get the opportunity</button>
                </div>
            </div>
        </div>
    );
};

export default Career;