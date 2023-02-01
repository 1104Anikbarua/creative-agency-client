import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';
const Order = () => {
    const [user] = useAuthState(auth);
    const param = useParams();
    const { orderId } = param;
    // console.log(orderId)
    const [imageData, setImageData] = useState({})
    const { data: services, isLoading } = useQuery(['services', orderId], () => fetch(`http://localhost:5000/v1/service/${orderId}`).then(response => response.json()));
    // console.log(services)
    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    };

    const handleImage = event => {
        const imageFiles = event.target.files;
        console.log(imageFiles)
        setImageData(imageFiles[0])
    }

    const imageKey = 'd531be8065497b95757adf0fefa4e0ab'

    const handleOrder = (event) => {
        event.preventDefault();
        const image = imageData;
        const formData = new FormData();
        formData.append('image', image);

        // fetch(`https://api.imgbb.com/1/upload?key=${imageKey}`, {
        //     method: 'POST',
        //     body: formData
        // })
        //     .then(response => response.json())
        //     .then(data => {
        // if (data.success) {
        // const image = data.data.url;
        const company = event.target.company.value;
        const description = event.target.description.value;
        const price = event.target.price.value;

        const orderDetails = {
            email: user.email,
            companyName: company,
            projectDescription: description,
            price: price,
            projectName: services.name,
            projectImage: image,
        };
        console.log(orderDetails)
        fetch('http://localhost:5000/v1/clientorder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(response => response.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Order Post Successfully')
                }
            })

        // }
        // })

    }

    return (
        <div className='w-full h-full bg-success'>
            <form action="" onSubmit={handleOrder} className='text-black w-[570px] h-[510px] grid justify-center mx-auto mt-5'>

                <input type="text" name='company' placeholder="Your Name/company Name" className="w-[570px] h-[60px] pl-2 rounded mb-4 focus:outline-none" required />
                <br />

                <input type="email" placeholder="Your Email address" className="w-[570px] h-[60px] pl-2  rounded mb-4 focus:outline-none cursor-no-drop" value={user.email} readOnly />
                <br />

                <input type="text" value={services?.name} className="text-black w-[570px] h-[60px] pl-2 rounded mb-4 focus:outline-none cursor-no-drop" readOnly />
                <br />

                <textarea name='description' placeholder="Project Details" className="w-[570px] h-[112px] pl-2 rounded mb-4 focus:outline-none" required></textarea>

                <br />

                <div className='flex items-center mb-2'>

                    <input type="text" className='w-[284px] pl-2 mr-4 h-[60px] rounded focus:outline-none' name="price" placeholder='price' id="" required />

                    <input onChange={handleImage} className='border-black w-[170px] h-[60px]' type="file" name="file" id="actual-btn" hidden required />

                    <label htmlFor="actual-btn" className='grid content-center bg-success text-warning w-[270px] h-[60px] text-center rounded-[5px] border-2 border-warning'><span><FontAwesomeIcon icon={faCloudArrowUp}></FontAwesomeIcon> Upload Project File</span></label>
                </div>
                <button className='w-full mt-[30px] h-[60px] bg-secondary text-white rounded'>Send</button>
            </form>
        </div>
    );
};

export default Order;