import React, { useEffect, useState } from 'react';
import Part from './Part';


const Parts = () => {
    const [parts, setParts] = useState([]);



    useEffect(() => {
        fetch('http://localhost:5000/part')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div className='mt-10'>
            <h2 className='text-center text-4xl text-sky-400 font-bold'>Our Products</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                {
                    parts.map(part => <Part
                        key={part._id}
                        part={part}
                    ></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;