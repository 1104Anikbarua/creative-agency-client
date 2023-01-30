import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Order = () => {
    return (
        <div className='w-full h-full bg-success'>
            <form action="" className='text-black w-[570px] h-[510px] grid justify-center mx-auto mt-5'>

                <input type="text" placeholder="Your Name/company Name" className="w-[570px] h-[60px] pl-2 rounded mb-4 focus:outline-none" />
                <br />

                <input type="email" placeholder="Your Email address" className="w-[570px] h-[60px] pl-2  rounded mb-4 focus:outline-none" />
                <br />

                <input type="text" placeholder="Graphic Design" className="w-[570px] h-[60px] pl-2 rounded mb-4 focus:outline-none" />
                <br />

                <textarea placeholder="Project Details" className="w-[570px] h-[112px] pl-2 rounded mb-4 focus:outline-none" ></textarea>

                <br />

                <div className='flex items-center mb-2'>

                    <input type="text" className='w-[284px] pl-2 mr-4 h-[60px] rounded focus:outline-none' name="price" placeholder='price' id="" />

                    <input className='border-black w-[170px] h-[60px]' type="file" name="" id="actual-btn" hidden />

                    <label htmlFor="actual-btn" className='grid content-center bg-success text-warning w-[270px] h-[60px] text-center rounded-[5px] border-2 border-warning'><span><FontAwesomeIcon icon={faCloudArrowUp}></FontAwesomeIcon> Upload Project File</span></label>
                </div>
                <button className='w-full mt-[30px] h-[60px] bg-secondary text-white rounded'>Send</button>
            </form>
        </div>
    );
};

export default Order;