import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    return (
        <div className='mt-10'>
            <h2 className='text-3xl text-purple-500 font-bold'>Reviews</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    reviews.map(review => <div
                        key={review._id}
                        class="card w-96 bg-purple-400 text-white shadow-xl">
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">{review.name}</h2>
                            <p>Feedback: {review.message}</p>
                            <p>Ratings: {review.ratings}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Reviews;