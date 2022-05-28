import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1lzxDmFV6IkOC7sgCVVl2vJQRVhSxZ99XPFOr7K5CVxzxQgao8pjLAC6PaYG7EFjGY1YnXaOOPdyjCPtEl84YH00xC0fF6wi');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/order/${id}`;

    const { data: order, isLoading } = useQuery('order', () => fetch(url).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <h2 class="card-title">Pay for: {order.product}</h2>
                    <p>Order Quantity: {order.orderQuantity}</p>
                    <p>Please pay: $ {order.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>


                </div>
            </div>
        </div>

    );
};

export default Payment;