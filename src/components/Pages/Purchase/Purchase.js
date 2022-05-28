import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';


const Purchase = () => {
    const { state } = useLocation();
    const { part } = state || {};


    const [user] = useAuthState(auth);

    const handleOrders = event => {
        event.preventDefault();
        console.log(part._id, part.name, user.email)

        const order = {
            orderId: part._id,
            product: part.name,
            orderQuantity: event.target.quantity.value,
            price: part.price,
            email: user.email,
            customerName: user.displayName,
            phone: event.target.phone.value

        }

        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data) {
                    toast.success('Order confirm')
                }
                else {
                    toast.error('try again later')
                }

            })
    }

    return (
        <div>
            <div className="overflow-x-auto mt-10">
                <table className="table w-full">
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

            <div className='flex h-screen justify-center mt-20'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <form onSubmit={handleOrders} >
                        <input type="text" name='name' disabled value={user?.displayName || ''} class="input input-bordered input-info w-full max-w-xs " />

                        <input type="email" name='email' disabled value={user?.email || ''} class="input input-bordered input-info w-full max-w-xs mt-4" />
                        <br />
                        <input type="text" name='product' disabled value={part?.name || ''} class="input input-bordered input-info w-full max-w-xs mt-4" />
                        <input type="text" name='quantity' placeholder="Order Quantity" class="input input-bordered input-info w-full max-w-xs mt-4" />
                        <input type="text" name='address' placeholder="Your Address" class="input input-bordered input-info w-full max-w-xs mt-4" />

                        <input type="text" name='phone' placeholder="Phone Number" class="input input-bordered input-info w-full max-w-xs mt-4" />
                        <br />
                        <input type="submit" value="Place Order" className="btn btn-outline btn-accent mt-2 w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;