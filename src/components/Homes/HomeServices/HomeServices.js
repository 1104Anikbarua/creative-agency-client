import React from 'react';
import service1 from '../../../images/icons/service1.png'
import service2 from '../../../images/icons/service2.png'
import service3 from '../../../images/icons/service3.png'

const HomeServices = () => {
    const services = [
        { img: service1, title: 'Web & Mobile design', paragraph: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.' },
        { img: service2, title: 'Graphic design', paragraph: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.' },
        { img: service3, title: 'Web development', paragraph: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.' },
    ];
    return (
        <div className='mt-52 max-w-[1170px] mx-auto mb-28'>
            <h1 className='font-semibold text-[34px] text-center text-secondary'>Provide awesome <span className='text-accent'>services</span></h1>
            <div className='grid lg:grid-cols-3 gap-28'>
                {
                    services.map((service, index) =>
                        <div key={index} className='text-center shadow-2xl rounded-[10px] p-9 mt-[78px]'>
                            <img className='w-[74px] h-[74px] mx-auto' src={service.img} alt="" />
                            <h1 className='font-semibold text-xl py-[18px] text-secondary'>{service.title}</h1>
                            <p className='text-base text-slate-400'>{service.paragraph}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default HomeServices;