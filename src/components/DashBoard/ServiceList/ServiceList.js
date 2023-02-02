import React from 'react';
// import { Link } from 'react-router-dom';
import service1 from '../../../images/icons/service1.png'
import service2 from '../../../images/icons/service2.png'
import service3 from '../../../images/icons/service3.png'

const ServiceList = () => {
    const services = [
        { img: service1, name: 'Web & Mobile design', description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.' },
        { img: service2, name: 'Graphic design', description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.' },
        { img: service3, name: 'Web development', description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.' },
    ];
    const paid = true;
    return (
        <div className='w-full h-screen bg-success relative'>
            <div className='max-w-[1170px] mx-auto h-screen'>
                <div className='grid lg:grid-cols-2 gap-9'>
                    {
                        services?.map((service, index) =>
                            <div key={index} className='w-[415px] h-[254px] text-center shadow-2xl p-6 border-2 border-gray-400 rounded-[20px] bg-white'>
                                <div className='flex items-center'>
                                    <div>
                                        <img className='w-[74px] h-[74px] mr-[184px]' src={service.img} alt="" />

                                    </div>
                                    <div>
                                        {paid ? <button className='w-[108px] h-[40px] bg-error rounded text-green-400 text-base' style={{ backgroundColor: '#C6FFE0' }}>Download</button> : <button className='w-[108px] h-[40px] bg-error rounded text-red-400 text-base'>pending</button>}

                                    </div>
                                </div>
                                <h1 className='font-semibold text-xl py-[18px] text-secondary'>{service.name}</h1>
                                <p className='text-base text-slate-400' title={service.description}>{service.description.slice(0, 70)}...</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceList;