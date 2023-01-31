import React from 'react';
import HomeBrand from '../HomeBrand/HomeBrand';
import Header from '../../Shared/Header/Header';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeServices from '../HomeServices/HomeServices';
import HomeWorks from '../HomeWorks/HomeWorks';
import HomeFeedback from '../HomeFeedback/HomeFeedback';
import HomeProject from '../HomeProject/HomeProject';
import './Home.css'

const Home = () => {
    return (
        <>
            {/* <div className='bg-primary'>
                <div className='max-w-[1170px] mx-auto'>
                </div>
            </div> */}
            <header>
                <Header></Header>
                <HomeBanner></HomeBanner>
            </header>
            <HomeBrand></HomeBrand>
            <HomeServices></HomeServices>
            <HomeWorks></HomeWorks>
            <HomeFeedback></HomeFeedback>
            <HomeProject></HomeProject>
        </>

    );
};

export default Home;