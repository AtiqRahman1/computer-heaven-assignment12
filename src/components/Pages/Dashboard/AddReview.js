import React from 'react';

const AddReview = () => {
    return (
        <div>
            <h2 className='text-2xl text-center mt-5'>Add Your Review</h2>
            <div className=' flex h-screen justify-center mt-3'>
                <form >
                    <textarea className="textarea w-80 textarea-bordered" placeholder="Your opinion"></textarea>

                    <input type="text" placeholder="Ratings" className="input input-bordered w-full max-w-xs" />
                    <br />
                    <input className='btn btn-outline mt-2' type="submit" value="Add" />
                </form>
            </div>
        </div>
    );
};

export default AddReview;