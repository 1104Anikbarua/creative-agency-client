import React from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';

const PaymentPage = () => {
    const param = useParams();
    const { productId } = param;
    console.log(productId)
    const { data: service, isLoading } = useQuery(['order', productId], () => fetch(`http://localhost:5000/v1/order/${productId}`));
    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    const paid = true;
    return (
        <div className='w-full h-screen bg-success'>
            <div className='max-w-[1170px] mx-auto h-screen'>
                <div className='grid lg:grid-cols-2 gap-9'>
                    {/* {
                        services?.map((service, index) => */}
                    <div className='w-[415px] h-[254px] text-center shadow-2xl p-6 border-2 border-gray-400 rounded-[20px] bg-white'>
                        <div className='flex items-center'>
                            <div>
                                <img className='w-[74px] h-[74px] mr-[184px]' src={service?.projectImage} alt="" />

                            </div>
                            <div>
                                {paid ?
                                    <Link to={`${service?._id}`}><button className='w-[108px] h-[40px] bg-error rounded text-green-400 text-base' style={{ backgroundColor: '#C6FFE0' }}>Download</button></Link> :
                                    <Link to={`${service?._id}`}>
                                        <button className='w-[108px] h-[40px] bg-error rounded text-red-400 text-base'>Pay</button></Link>}

                            </div>
                        </div>
                        <h1 className='font-semibold text-xl py-[18px] text-secondary'>{service?.projectName}</h1>
                        <p className='text-base text-slate-400' title={service?.projectDescription}>{service?.projectDescription?.slice(0, 50)}{service?.projectDescription?.length > 50 ? '...' : '.'}</p>
                    </div>
                    {/* )
                 } */}
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;