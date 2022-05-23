import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Parts = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        fetch('parts.json')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div className='mt-10'>
            <h2 className='text-center text-4xl text-sky-400 font-bold'>Our Products</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                {
                    parts.map(part => <div
                        key={part.id}
                        class="card lg:card-side bg-base-100 shadow-xl">
                        <figure><img className='w-80' src={part.img} alt="Album" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">{part.name}</h2>
                            <p>{part.description}</p>
                            <p>Minimum Order Quantity: {part.orderQuantity}</p>
                            <p>Available Quantity: {part.availableQuantity}</p>
                            <p>Price: ${part.price}</p>
                            <div class="card-actions justify-end">
                                <Link to='/purchase'><button class="btn btn-primary">Purchase</button> </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Parts;