import React from 'react';
import { useQuery } from 'react-query';
import service1 from '../../../images/icons/service1.png'
import service2 from '../../../images/icons/service2.png'
import service3 from '../../../images/icons/service3.png'
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';

const HomeServices = () => {
    // const services = [
    //     { img: service1, title: 'Web & Mobile design', paragraph: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.' },
    //     { img: service2, title: 'Graphic design', paragraph: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.' },
    //     { img: service3, title: 'Web development', paragraph: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.' },
    // ];

    const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/v1/services').then(response => response.json()));
    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    console.log(services)
    return (
        <div className='mt-52 max-w-[1170px] mx-auto mb-28'>
            <h1 className='font-semibold text-[34px] text-center text-secondary'>Provide awesome <span className='text-accent'>services</span></h1>
            <div className='grid lg:grid-cols-3 gap-28'>
                {
                    services.map((service, index) =>
                        <div key={index} className='text-center shadow-2xl rounded-[10px] p-9 mt-[78px]'>
                            <img className='w-[74px] h-[74px] mx-auto' src={service.img} alt="" />
                            <h1 className='font-semibold text-xl py-[18px] text-secondary'>{service.name}</h1>
                            <p className='text-base text-slate-400' title={service.description}>{service.description.slice(0, 70)}...</p>
                            <p className='text-base text-secondary'>${service.price}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default HomeServices;