import React from 'react';
import blogpost from '../../../images/blogpost.jpg';

const BlogPost = () => {
    return (
        <div className='my-10'>
            <h2 className='text-4xl text-sky-400 text-center font-bold uppercase'>Blog Post</h2>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={blogpost} class="max-w-sm rounded-lg shadow-2xl" alt='blogpost' />
                    <div>
                        <h1 class="text-5xl font-bold uppercase">Latest News From <br /> Our Blog!</h1>
                        <p class="py-6">The CPU is often called the "brain" of a computer, thanks to its direct plug connection to the motherboard,<br /> and communication with all of the computer's other components.</p>
                        <button class="btn btn-primary">View All Blog</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;