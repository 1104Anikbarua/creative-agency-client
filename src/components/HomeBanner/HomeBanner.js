import React from 'react';
import frame from '../../images/logos/Frame.png'

const HomeBanner = () => {
    return (
        <div className='lg:flex flex-row items-center justify-evenly'>
            <div>
                <h1 className='text-5xl text-secondary font-bold mb-[23px]'>
                    Let's Grow Your <br />
                    Brand To The <br />
                    Next Level
                </h1>
                <p className='text-base mb-[23px] text-secondary'>
                    We blend skills across content, data and digital media in an always-evolving combination of digital expertise—now including technology services.
                </p>
                <button className="btn w-[134px] h-11 bg-secondary text-center text-base font-normal" to={'/Login'}>Hire Us</button>
            </div>
            <div>
                <img className='w-[624px] h-[422px]' src={frame} alt="" />
            </div>
        </div>
    );
};

export default HomeBanner;