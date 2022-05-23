import React from 'react';
import notfound from '../../../images/notfound.png';

const NotFound = () => {
    return (
        <div className='flex justify-center'>
            <img src={notfound} alt="" />
        </div>
    );
};

export default NotFound;