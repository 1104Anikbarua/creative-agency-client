import React from 'react';

const Review = () => {
    return (
        <div className='w-full bg-success h-screen relative'>
            <div className='max-w-[1044px] h-[405px] bg-white rounded-[20px] mx-auto'>
                <form action="" className='grid lg:grid-cols-2 p-8 m-8 gap-12'>
                    <div>
                        <label htmlFor="" className='text-black font-medium text-base mb-[10px]'>Your Name</label>
                        <input type="text" placeholder="Your Name" className="w-[450px] h-10 pl-2 rounded mb-4 focus:outline-none border-2 border-gray-200" />

                        <label htmlFor="" className='text-black font-medium text-base mb-[10px]'>Company Name</label>
                        <input type="text" placeholder="Enter Company Name" className="w-[450px] h-10 pl-2 rounded mb-4 focus:outline-none border-2 border-gray-200" />

                        <label htmlFor="" className='text-black font-medium text-basen mb-[10px]'>Description</label>
                        <textarea placeholder="Description" className="w-[450px] h-[122px] textarea textarea-bordered textarea-sm border-2 border-gray-200" ></textarea>

                        <button className='text-white text-base bg-secondary w-[108px] h-9 rounded-[5px]'>Submit</button>
                    </div>
                </form>
            </div>

        </div>

    );
};

export default Review;