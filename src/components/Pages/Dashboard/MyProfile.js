import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h2 className='text-center text-2xl text-slate-600'>My profile</h2>
            <div className='flex h-screen justify-center mt-20'>
                <form className="card w-96 bg-base-100 shadow-xl">
                    <input type="text" name='name' disabled value={user?.displayName || ''} class="input input-bordered input-info w-full max-w-xs " />

                    <input type="email" name='email' disabled value={user?.email || ''} class="input input-bordered input-info w-full max-w-xs mt-4" />
                    <br />
                    <input type="text" name='product' placeholder='Education' class="input input-bordered input-info w-full max-w-xs mt-4" />
                    <input type="text" name='quantity' placeholder="LinkedIn Profile" class="input input-bordered input-info w-full max-w-xs mt-4" />
                    <input type="text" name='address' placeholder="Your Address" class="input input-bordered input-info w-full max-w-xs mt-4" />

                    <input type="text" name='phone' placeholder="Phone Number" class="input input-bordered input-info w-full max-w-xs mt-4" />
                    <br />
                    <input type="submit" value="Add" className="btn btn-outline btn-accent mt-2 w-full max-w-xs" />
                </form>
            </div>
        </div>
    );
};

export default MyProfile;