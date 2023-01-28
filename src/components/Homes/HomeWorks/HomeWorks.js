import React from 'react';
import carousel1 from '../../../images/carousel-1.png'
import carousel2 from '../../../images/carousel-2.png'
import carousel3 from '../../../images/carousel-3.png'
import carousel4 from '../../../images/carousel-4.png'
import carousel5 from '../../../images/carousel-5.png'
const HomeWorks = () => {

    return (
        <div className='bg-secondary'>
            <h1 className='text-center font-semibold text-[34px] text-white pt-[108px] pb-20'>Here are some of <span className='text-accent'>our works</span></h1>
            <div className="carousel w-full pb-24">
                <div id="item1" className="carousel-item w-full">
                    <img src={carousel1} className="max-w-[465px] h-[334px] mx-auto" alt='' />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={carousel2} className="max-w-[465px] h-[334px] mx-auto" alt='' />
                </div>
                <div id="item3" className="carousel-item w-full mx-auto">
                    <img src={carousel3} className="max-w-[465px] h-[334px] mx-auto" alt='' />
                </div>
                <div id="item4" className="carousel-item w-full mx-auto">
                    <img src={carousel4} className="max-w-[465px] h-[334px] mx-auto" alt='' />
                </div>
                <div id="item5" className="carousel-item w-full mx-auto">
                    <img src={carousel5} className="max-w-[465px] h-[334px] mx-auto" alt='' />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-1 pb-11">
                <a href="#item1" className="btn btn-xs rounded-full text-white bg-primary">1</a>
                <a href="#item2" className="btn btn-xs rounded-full text-white bg-primary">2</a>
                <a href="#item3" className="btn btn-xs rounded-full text-white bg-primary">3</a>
                <a href="#item4" className="btn btn-xs rounded-full text-white bg-primary">4</a>
                <a href="#item5" className="btn btn-xs rounded-full text-white bg-primary">5</a>
            </div>
        </div>
    );
};

export default HomeWorks;