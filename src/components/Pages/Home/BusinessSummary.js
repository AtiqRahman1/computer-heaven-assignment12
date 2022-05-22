import client from '../../../images/client.png'
import project from '../../../images/project.png'
import world from '../../../images/world.png'
import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 mt-5'>
            <div class="card w-80 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={client} alt="client" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title text-4xl text-blue-500">2490</h2>
                    <p className='text-2xl'>Happy clients</p>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={project} alt="client" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title text-4xl text-blue-500">367k</h2>
                    <p className='text-2xl'>Projects done</p>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={world} alt="client" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title text-4xl text-blue-500">Served</h2>
                    <p className='text-2xl'>All over the world</p>
                </div>
            </div>

        </div>
    );
};

export default BusinessSummary;