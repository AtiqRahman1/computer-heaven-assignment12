import React from 'react';

const AddReview = () => {
    return (
        <div>
            <h2 className='text-2xl text-center mt-5'>Add Your Review</h2>
            <div className=' flex h-screen justify-center '>
                <form >
                    <textarea class="textarea w-80 textarea-bordered" placeholder="Your opinion"></textarea>

                    <input type="text" placeholder="Ratings" class="input input-bordered w-full max-w-xs" />
                    <br />
                    <input className='btn btn-accent' type="submit" value="Add" />
                </form>
            </div>
        </div>
    );
};

export default AddReview;