import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Parts from './Parts';

const Home = () => {
    return (
        <div className='h-screen px-12'>
            <Banner></Banner>
            <BusinessSummary></BusinessSummary>
            <Parts></Parts>
        </div>
    );
};

export default Home;