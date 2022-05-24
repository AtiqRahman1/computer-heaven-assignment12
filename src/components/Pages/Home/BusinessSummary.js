import client from '../../../images/client.png'
import project from '../../../images/project.png'
import world from '../../../images/world.png'
import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 mt-5'>
            <div className="card w-80 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={client} alt="client" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-4xl text-blue-500">2490</h2>
                    <p className='text-2xl'>Happy clients</p>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={project} alt="client" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-4xl text-blue-500">367k</h2>
                    <p className='text-2xl'>Projects done</p>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={world} alt="client" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-4xl text-blue-500">Served</h2>
                    <p className='text-2xl'>All over the world</p>
                </div>
            </div>

        </div>
    );
};

export default BusinessSummary;