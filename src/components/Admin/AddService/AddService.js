import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const AddService = () => {
    return (
        <div className='w-full bg-success h-screen relative'>
            <div className='max-w-[1044px] h-[405px] bg-white rounded-[20px] mx-auto'>
                <form action="" className='grid lg:grid-cols-2 p-8 m-8 gap-12'>
                    <div>
                        <label htmlFor="" className='text-black font-medium text-base mb-[10px]'>Service Title</label>
                        <input type="text" placeholder="Enter Title" className="w-[450px] h-10 pl-2 rounded mb-4 focus:outline-none border-2 border-gray-200" />

                        <label htmlFor="" className='text-black font-medium text-base mb-[10px]'>Price</label>
                        <input type="text" placeholder="Enter Price" className="w-[450px] h-10 pl-2 rounded mb-4 focus:outline-none border-2 border-gray-200" />

                        <label htmlFor="" className='text-black font-medium text-basen mb-[10px]'>Description</label>
                        <textarea placeholder="Enter Description" className="w-[450px] h-[122px] textarea textarea-bordered textarea-sm border-2 border-gray-200" ></textarea>
                    </div>

                    <div>
                        <input className='border-black w-[170px] h-[60px]' type="file" name="" id="actual-btn" hidden />

                        <label htmlFor="" className='text-black font-medium text-base'>Icon</label>

                        <label htmlFor="actual-btn" className='grid content-center bg-success text-warning w-44 h-10 text-center rounded-[5px] border-2 border-warning'> <span><FontAwesomeIcon icon={faCloudArrowUp}></FontAwesomeIcon> Upload Image</span> </label>
                    </div>

                </form>
            </div>
            <button className='text-white text-base bg-warning w-[108px] h-9 rounded-[5px] mt-[14px] right-20 absolute'>Submit</button>
        </div>
    );
};

export default AddService;