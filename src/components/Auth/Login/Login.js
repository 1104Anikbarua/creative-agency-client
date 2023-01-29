import React from 'react';
import { useForm } from 'react-hook-form';
import logo from '../../../images/logos/logo.png';
import google from '../../../images/Social/google.png';

const Login = () => {

    const { register, handleSubmit, setError, formState: { errors } } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <>
            <div className='w-[1170px] mx-auto mt-11'>
                <div>
                    <img className='w-[170px] h-[48px] mx-auto' src={logo} alt="" />
                </div>
                <div className='w-[570px] border-2 border-slate-200 h-[460px] mx-auto'>
                    <form onSubmit={handleSubmit(onSubmit)}
                        className='grid justify-items-center'>
                        <h1 className='font-bold text-2xl text-secondary text-center mb-8'>Login With</h1>


                        <div className='form-control w-full max-w-xs'>
                            <label className="label">
                                <span className="label-text text-secondary">Email</span>
                            </label>

                            <input
                                type="email"
                                name='email'
                                {...register('email', {
                                    required: {
                                        value: true,
                                        message: '!Email is Required',
                                    },
                                    pattern: {
                                        value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                                        message: '!Please provide a valid email'
                                    }
                                })} placeholder="Email" className="input input-bordered input-sm w-full max-w-xs mb-2 text-base text-black" />

                            <label htmlFor="label">
                                {errors.email?.type === 'required' && < span className='label-text-alt text-base text-red-700' > {errors.email.message}</span>}

                                {errors.email?.type === 'pattern' && <span className='label-text-alt text-base text-red-700'>{errors.email.message}</span>}
                            </label>
                        </div>


                        <div className='form-control w-full max-w-xs'>
                            <label className="label">
                                <span className="label-text text-secondary">Password</span>
                            </label>

                            <input type="password" placeholder="Password"
                                {...register('password', {
                                    required: {
                                        value: true,
                                        message: '!Password cannot be Empty',
                                    },
                                    minLength: {
                                        value: 6,
                                        message: '!Please Provide at least 6 character'
                                    }
                                })}

                                className="input input-bordered input-sm w-full max-w-xs mb-2 text-base text-black" />

                            <label htmlFor="label">
                                {errors.password?.type === 'required' && <span className='label-text-alt text-red-600 text-base'>{errors.password.message}</span>}

                                {errors.password?.type === 'minLength' && <span className='label-text-alt text-base text-red-600'>{errors.password.message}</span>}
                            </label>
                        </div>

                        <input className='cursor-pointer bg-secondary input input-bordered input-sm w-full max-w-xs mb-2' type="submit" value="Login" />


                        <button className='flex items-center bg-secondary w-full max-w-xs rounded-lg'>
                            <img className='w-8 h-8' src={google} alt="" />
                            <span className='mx-auto'>Continue With Google</span>
                        </button>
                    </form>
                </div>
            </div >
        </>
    );
};

export default Login;