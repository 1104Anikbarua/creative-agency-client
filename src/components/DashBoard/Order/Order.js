import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form';
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
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const [imageData, setImageData] = useState({})
    const { data: services, isLoading } = useQuery(['services', orderId], () => fetch(`http://localhost:5000/v1/service/${orderId}`).then(response => response.json()));
    // console.log(services)
    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    };



    // const handleImage = event => {
    //     const imageFiles = event.target.files;
    //     console.log(imageFiles)
    //     setImageData(imageFiles[0])
    // }

    // const imageKey = '721322183797287'

    const handleOrder = (data) => {
        // event.preventDefault();
        // const image = imageData;

        const formData = new FormData();
        formData.append('file', imageData);
        formData.append('upload_preset', 'xizcypv1')
        formData.append('cloud_name', 'dmqgkr30q')

        fetch('https://api.cloudinary.com/v1_1/dmqgkr30q/image/upload', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                if (result.asset_id) {
                    const image = result.url;
                    // console.log(image)
                    const company = data.company;
                    const description = data.description;
                    const price = data.price;

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
                            else {
                                toast.error('Failed to post Order');
                            }
                        })

                }
            })
        reset();
    }

    return (
        <div className='w-full h-full bg-success'>
            <form action="" onSubmit={handleSubmit(handleOrder)} className='text-black w-[570px] h-[510px] grid justify-center mx-auto mt-5'>

                <div className='form-control w-full max-w-xs'>
                    <input type="text"
                        name='company'
                        {...register('company', {
                            required: {
                                value: true,
                                message: '!Company name is Required',
                            },
                        })} placeholder="Your Name/Company Name"
                        className="w-[570px] h-[60px] pl-2 rounded mb-4 focus:outline-none"
                    />
                    <label htmlFor="">
                        {errors.company?.type === 'required' && <span className='label-text-alt text-base text-red-600'>{errors.company?.message}</span>}
                    </label>
                </div>

                <div className='form-control w-full max-w-xs'>
                    <input type="email"
                        name='email'
                        {...register('email', {
                            required: {
                                value: true,
                                message: '!Email is Required',
                            },
                        })} placeholder="Email"
                        className="w-[570px] h-[60px] pl-2 rounded mb-4 focus:outline-none"
                        value={user?.email} readOnly
                    />
                    <label htmlFor="">
                        {errors.email?.type === 'required' && <span className='label-text-alt text-base text-red-600'>{errors.email?.message}</span>}
                    </label>
                </div>

                <div className='form-control w-full max-w-xs'>
                    <input type="text"
                        name='project'
                        {...register('project', {
                            required: {
                                value: true,
                                message: '!Project name is Required',
                            },
                        })} placeholder="Project Name"
                        className="w-[570px] h-[60px] pl-2 rounded mb-4 focus:outline-none"
                        value={services?.name} readOnly
                    />
                    <label htmlFor="">
                        {errors.project?.type === 'required' && <span className='label-text-alt text-base text-red-600'>{errors.project?.message}</span>}
                    </label>
                </div>

                {/* <input type="text" name='company' placeholder="Your Name/company Name" className="w-[570px] h-[60px] pl-2 rounded mb-4 focus:outline-none" required />
                <br />

                <input type="email" placeholder="Your Email address" className="w-[570px] h-[60px] pl-2  rounded mb-4 focus:outline-none cursor-no-drop" value={user.email} readOnly />
                <br />

                <input type="text" value={services?.name} className="text-black w-[570px] h-[60px] pl-2 rounded mb-4 focus:outline-none cursor-no-drop" readOnly />
                <br /> */}
                <div className='form-control w-full max-w-xs'>
                    <textarea name='description' {...register('description', {
                        required: {
                            value: true,
                            message: '!Description is Required',
                        },
                    })} placeholder="Project Details" className="w-[570px] h-[112px] pl-2 rounded mb-4 focus:outline-none" required></textarea>
                    <label htmlFor="">
                        {errors.description?.type === 'required' && <span className='label-text-alt text-base text-red-600'>{errors.description?.message}</span>}
                    </label>
                </div>

                <div className='flex items-center mb-2'>

                    <div className='form-control w-full max-w-xs'>
                        <input type="text"
                            name='price'
                            {...register('price', {
                                required: {
                                    value: true,
                                    message: '!Price is Required',
                                },
                            })} placeholder="Price"
                            className='w-[284px] pl-2 mr-4 h-[60px] rounded focus:outline-none'
                        />
                        <label htmlFor="">
                            {errors.price?.type === 'required' && <span className='label-text-alt text-base text-red-600'>{errors.price?.message}</span>}
                        </label>
                    </div>

                    {/* <input type="text" className='w-[284px] pl-2 mr-4 h-[60px] rounded focus:outline-none' name="price" placeholder='price' id="" required /> */}

                    <input onChange={(e) => setImageData(e.target.files[0])} className='border-black w-[170px] h-[60px]' type="file" name="file" id="actual-btn" hidden required />

                    <label htmlFor="actual-btn" className='grid content-center bg-success text-warning w-[270px] h-[60px] text-center rounded-[5px] border-2 border-warning'><span><FontAwesomeIcon icon={faCloudArrowUp}></FontAwesomeIcon> Upload Project File</span></label>
                </div>
                <button className='w-full mt-[30px] h-[60px] bg-secondary text-white rounded'>Send</button>
            </form>
        </div>
    );
};

export default Order;