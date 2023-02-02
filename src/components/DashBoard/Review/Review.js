import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const Review = () => {
    const [user] = useAuthState(auth);
    const { displayName } = user;
    // console.log(displayName)

    const handleSubmit = event => {
        event.preventDefault();
        const companyName = event.target.companyName.value;
        const description = event.target.description.value;
        const clientReview = {
            name: displayName,
            companyName: companyName,
            description: description
        };
        fetch('http://localhost:5000/v1/clientreview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(clientReview)
        })
            .then(response => response.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Review posted successfully')
                }
                else {
                    toast.error('Review post failed')
                }
            })

        event.target.reset();
    }

    return (
        <div className='w-full bg-success h-screen relative'>
            <div className='max-w-[1044px] h-[405px] bg-white rounded-[20px] mx-auto'>
                <form action="" onSubmit={handleSubmit} className='grid lg:grid-cols-2 p-8 m-8 gap-12'>
                    <div>
                        <label htmlFor="" className='text-black font-medium text-base mb-[10px]'>Your Name</label>
                        <input type="text" placeholder="Your Name" className="text-black cursor-no-drop w-[450px] h-10 pl-2 rounded mb-4 focus:outline-none border-2 border-gray-200" value={user.displayName} readOnly />

                        <label htmlFor="" className='text-black font-medium text-base mb-[10px]'>Company Name</label>
                        <input type="text" placeholder="Enter Company Name" className="w-[450px] h-10 pl-2 rounded mb-4 focus:outline-none border-2 border-gray-200 text-black" name='companyName' required />

                        <label htmlFor="" className='text-black font-medium text-basen mb-[10px]'>Description</label>
                        <textarea placeholder="Description" className="w-[450px] h-[122px] textarea textarea-bordered textarea-sm border-2 border-gray-200 text-black" name='description' required></textarea>

                        <button className='text-white text-base bg-secondary w-[108px] h-9 rounded-[5px]'>Submit</button>
                    </div>
                </form>
            </div>

        </div>

    );
};

export default Review;