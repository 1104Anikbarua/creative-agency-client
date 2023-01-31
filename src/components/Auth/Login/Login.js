import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logos/logo.png';
import google from '../../../images/Social/google.png';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';

const Login = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const [
        signInWithEmailAndPassword,
        emailUser,
        emailLoading,
        emailError,
    ] = useSignInWithEmailAndPassword(auth);

    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        signInWithEmailAndPassword(email, password);
        reset();
    };
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (emailUser || googleUser) {
            navigate(from, { replace: true });
        }
    }, [emailUser, googleUser, from, navigate])


    if (emailLoading || googleLoading) {
        return <LoadingSpinner></LoadingSpinner>;
    }

    let errorMessage;
    if (emailError || googleError) {
        errorMessage = <p className='text-red-600'>{emailError?.message}{googleError?.message}</p>
    }



    return (
        <>
            <div className='w-[1170px] mx-auto mt-20'>
                <div className='mb-11'>
                    <Link to={'/home'}>
                        <img className='w-[170px] h-[48px] mx-auto' src={logo} alt="" />
                    </Link>
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


                        <div className='form-control w-full max-w-xs mb-2'>
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
                        {errorMessage}


                        <input className='cursor-pointer bg-secondary input input-bordered input-sm w-full max-w-xs mb-2' type="submit" value="Login" />


                        <p className='text-base text-center text-secondary my-4'>New to Creative agency?<Link className='text-blue-600' to={'/signup'}> Create New Account</Link></p>


                    </form>
                    <button onClick={() => signInWithGoogle()}
                        className='flex items-center bg-secondary w-full max-w-xs rounded-lg mx-auto'>
                        <img className='w-8 h-8' src={google} alt="" />
                        <span className='mx-auto text-base'>Continue With Google</span>
                    </button>
                </div>
            </div >
        </>
    );
};

export default Login;