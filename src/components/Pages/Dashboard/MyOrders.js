import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => setOrders(data))
        }
    }, [user])
    return (
        <div>
            <h1 className='text-2xl text-center text-sky-300'>My Orders</h1>

            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Email</th>
                            <th>Quantity</th>
                            <th>Price (for each)</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order.product}</td>
                                <td>{order.email}</td>
                                <td>{order.orderQuantity}</td>
                                <td>$ {order.price}</td>
                                <td> {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-accent'>pay</button></Link>}
                                    {(order.price && order.paid) && <span className='text-success'>paid</span>}


                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;