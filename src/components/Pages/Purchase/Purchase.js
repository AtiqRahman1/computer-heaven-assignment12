import React from 'react';
import { useLocation } from 'react-router-dom';


const Purchase = (props) => {
    const { state } = useLocation();
    const { part } = state || {};



    return (
        <div>
            <div class="overflow-x-auto mt-10">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Available Quantity</th>
                            <th>Minimum Order Quantity</th>
                            <th>Price(for each)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='active'>
                            <th>1</th>
                            <td>{part.name}</td>
                            <td>{part.availableQuantity}</td>
                            <td>{part.orderQuantity}</td>
                            <td>${part.price}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Purchase;