import React from 'react';
import customer1 from '../../images/customer-1.png';
import customer2 from '../../images/customer-2.png';
import customer3 from '../../images/customer-3.png';

const HomeFeedback = () => {
    const feedbacks = [
        { img: customer1, name: 'Nash Patrik', position: 'CEO, Manpol', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat' },
        { img: customer2, name: 'Nash Patrik', position: 'CEO, Manpol', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat' },
        { img: customer3, name: 'Nash Patrik', position: 'CEO, Manpol', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat' }
    ]
    return (
        <div className='mt-[86px] mb-[100px] max-w-[1170px] mx-auto'>
            <h1 className='font-semibold text-[34px] text-center text-secondary mb-[100px]'>Clients <span className='text-accent'>Feedback</span></h1>

            <div className='grid lg:grid-cols-3 gap-7 rounded'>
                {feedbacks.map((feedback, index) =>
                    <div key={index} className="w-96 bg-base-100 shadow-xl border-2 border-slate-300">
                        <div className="card-body">
                            <div className='flex items-center gap-5'>
                                <img className='w-16 h-16' src={feedback.img} alt="" />

                                <div>
                                    <h1 className="font-semibold text-xl text-secondary">{feedback.name}</h1>
                                    <h5 className='text-base font-medium text-secondary'>{feedback.position}</h5>
                                </div>
                            </div>
                            <p className='text-info text-base pt-[14px]'>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </div>)}
            </div>
        </div>
    );
};

export default HomeFeedback;