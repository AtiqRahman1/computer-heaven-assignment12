import React from 'react';
import Footer from '../../Shared/Footer';
import Banner from './Banner';
import BlogPost from './BlogPost';
import BusinessSummary from './BusinessSummary';
import Career from './Career';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div className='h-screen px-12'>
            <Banner></Banner>
            <BusinessSummary></BusinessSummary>
            <Parts></Parts>
            <BlogPost></BlogPost>
            <Reviews></Reviews>
            <Career></Career>
            <Footer></Footer>
        </div>
    );
};

export default Home;