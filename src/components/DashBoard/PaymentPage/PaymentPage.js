// import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useForm } from 'react-hook-form';
// import { useQuery } from 'react-query';
// import { Link, useParams } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import auth from '../../../firebase.init';
// import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';

// const PaymentPage = () => {
//     const [user] = useAuthState(auth);
//     const param = useParams();
//     const { productId } = param;
//     // console.log(productId)
//     const { register, handleSubmit, formState: { errors }, reset } = useForm();

//     const { data: service, isLoading } = useQuery(['order', productId], () => fetch(`http://localhost:5000/v1/order/${productId}`, {
//         method: 'GET',
//         headers: {
//             'content-type': 'application/json',
//             authorization: `Bearer ${localStorage.getItem('accessToken')}`
//         }
//     }).then(response => response.json()));
//     if (isLoading) {
//         return <LoadingSpinner></LoadingSpinner>
//     }
//     // console.log(service)

//     const handleOrder = (data) => {
//         const company = service.companyName;
//         const currency = data.currency;
//         const phone = data.phone

//         const orderDetails = {
//             serviceId: service._id,
//             serviceName: service.projectName,
//             servicePrice: service.price,
//             email: user.email,
//             companyName: company,
//             currency: currency,
//             phone: phone,
//         };
//         // console.log(orderDetails);
//         fetch('http://localhost:5000/v1/payment', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json',
//                 authorization: `Bearer ${localStorage.getItem('accessToken')}`
//             },
//             body: JSON.stringify(orderDetails)
//         })
//             .then(response => response.json())
//             .then(data => {
//                 window.location.replace(data.url)
//             })

//         reset();
//     }

//     const paid = true;
//     return (
//         <div className='w-full h-screen bg-success'>
//             <div className='max-w-[1170px] h-screen flex items-center justify-evenly'>

//                 <div className='grid grid-cols-1'>
//                     <div className='h-[254px] w-[415px] text-center shadow-2xl p-6 border-2 border-gray-400 rounded-[20px] bg-white'>
//                         <div className='flex items-center'>
//                             <div>
//                                 <img className='w-[74px] h-[74px] mr-[184px]' src={service?.projectImage} alt="" />
//                             </div>
//                             <div>
//                                 {paid ?
//                                     <Link to={`${service?._id}`}><button className='w-[108px] h-[40px] bg-error rounded text-green-400 text-base' style={{ backgroundColor: '#C6FFE0' }}>Download</button></Link> :
//                                     <Link to={`${service?._id}`}>
//                                         <button className='w-[108px] h-[40px] bg-error rounded text-red-400 text-base'>Pay</button></Link>}

//                             </div>
//                         </div>
//                         <h1 className='font-semibold text-xl py-[18px] text-secondary'>Project Name: {service?.projectName}</h1>

//                         <p className='font-semibold text-xl text-secondary'>You have to Pay {service?.price}</p>


//                     </div>
//                 </div>

//                 <form action="" onSubmit={handleSubmit(handleOrder)} className='text-black w-[570px] h-[255px] mx-auto mt-5'>

//                     <div>
//                         <input type="text"
//                             name='company'
//                             className="w-[415px] h-[60px] pl-2 rounded focus:outline-none mb-4"
//                             {...register('company')} placeholder="Your Name/Company Name"
//                             value={service?.companyName}
//                             readOnly
//                         />
//                     </div>

//                     <div>
//                         <select name='currency' defaultValue={'BDT'} className="w-[415px] h-[60px] pl-2 rounded focus:outline-none mb-4"
//                             {...register('currency', {
//                                 required: {
//                                     value: true,
//                                     message: '!Currency is required'
//                                 }
//                             })}>

//                             <option value={'BDT'}>BDT</option>
//                             <option value={'USD'}>USD</option>
//                         </select>
//                         <label htmlFor="">
//                             {errors.currency?.type === 'required' && <span className='label-text-alt text-base text-red-600'>{errors.currency?.message}</span>}
//                         </label>
//                     </div>

//                     <div>
//                         <input type="email"
//                             name='email'
//                             {...register('email')} placeholder="Email"
//                             className="w-[415px] h-[60px] pl-2 rounded focus:outline-none mb-4"
//                             value={user?.email} readOnly
//                         />
//                     </div>

//                     <div>
//                         <input type="text"
//                             name='phone'
//                             {...register('phone', {
//                                 required: {
//                                     value: true,
//                                     message: '!Phone is Required',
//                                 },
//                             })} placeholder="Phone"
//                             className="w-[415px] h-[60px] pl-2 rounded focus:outline-none mb-4"
//                         />
//                         <br />
//                         <label htmlFor="">
//                             {errors.phone?.type === 'required' && <span className='label-text-alt text-base text-red-600'>{errors.phone?.message}</span>}
//                         </label>
//                     </div>

//                     <button className='w-[415px] mt-2 h-[60px] bg-secondary text-white rounded'>Send</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default PaymentPage;