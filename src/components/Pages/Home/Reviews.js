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
            <h2 className='text-3xl text-orange-400 font-bold'>Reviews</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    reviews.map(review => <div
                        key={review._id}
                        className="card w-96 bg-orange-200 text-white shadow-xl">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{review.name}</h2>
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