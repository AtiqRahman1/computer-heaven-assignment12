import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({ part }) => {
    const { img, name, description, orderQuantity, availableQuantity, price } = part;
    const navigate = useNavigate()
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='w-80' src={img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>Minimum Order Quantity: {orderQuantity}</p>
                    <p>Available Quantity: {availableQuantity}</p>
                    <p>Price: ${price}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => {
                            navigate("/purchase", { state: { part: part } });
                        }}
                            className="btn btn-primary">Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Part;