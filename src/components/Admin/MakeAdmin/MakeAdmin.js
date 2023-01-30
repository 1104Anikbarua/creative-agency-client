import React from 'react';

const MakeAdmin = () => {
    return (
        <div className='w-full bg-success h-screen relative'>
            <div className='max-w-[1044px] h-[305px] bg-white rounded-[20px] mx-auto'>
                <form action="" className='p-8 m-8'>
                    <label htmlFor="" className='text-black font-medium text-base mb-[5px]'>Email</label>
                    <br />
                    <input type="text" placeholder="Enter Email Address" className="w-[450px] h-10 pl-2 rounded mb-4 focus:outline-none border-2 border-gray-200 mr-2" />


                    <button className='bg-success text-warning w-44 h-10 text-center rounded-[5px] border-2 border-warning'>Make Admin</button>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;