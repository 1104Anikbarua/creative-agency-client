import React from 'react';
import HomeBrand from '../HomeBrand/HomeBrand';
import Header from '../Header/Header';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeServices from '../HomeServices/HomeServices';
import HomeWorks from '../HomeWorks/HomeWorks';
import HomeFeedback from '../HomeFeedback/HomeFeedback';

const Home = () => {
    return (
        <>
            <div className='bg-primary'>
                <div className='max-w-[1170px] mx-auto'>
                    <Header></Header>
                    <HomeBanner></HomeBanner>
                </div>
            </div>
            <HomeBrand></HomeBrand>
            <HomeServices></HomeServices>
            <HomeWorks></HomeWorks>
            <HomeFeedback></HomeFeedback>
        </>

    );
};

export default Home;