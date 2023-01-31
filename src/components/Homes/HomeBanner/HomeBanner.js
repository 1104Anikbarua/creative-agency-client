import React from 'react';
import frame from '../../../images/logos/Frame.png'

const HomeBanner = () => {
    return (
        <div className='bg-primary pt-5'>
            <div className='grid lg:grid-cols-2 max-w-[1170px] mx-auto'>
                <div className='pt-[138px] pb-[106px]'>
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
                <div className='col-span-1  pb-[106px] pt-[70px]'>
                    <img className='w-[624px] h-[422px]' src={frame} alt="" />
                </div>
            </div>
        </div>

    );
};

export default HomeBanner;