import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const HomeProject = () => {
    const [user] = useAuthState(auth);

    const handleProject = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const name = event.target.name.value;
        const message = event.target.message.value;
        const user = {
            email: email,
            name: name,
            message: message,
        }
        fetch('http://localhost:5000/v1/projectdetails', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Project Details Recived')
                }
                else {
                    toast.error('Details Recived Failed')
                }
            })
        event.target.reset();
    }

    return (
        <div className='bg-primary pt-16 pl-6'>
            <div className='grid lg:grid-cols-2 justify-items-center lg:gap-[134px] max-w-[1170px] mx-auto'>
                <div>
                    <h1 className='text-[34px] font-semibold text-neutral'>
                        Let us handle your project, professionally.
                    </h1>
                    <p className='font-normal text-sm text-neutral'>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                </div>
                <form onSubmit={handleProject}>
                    <input type="email" name='email' placeholder="Your Email Address" className="input input-bordered input-sm w-full max-w-xs mb-4 text-black" required />
                    <br />

                    <input type="text" placeholder="Your Name / Company Name" name='name' className="input input-bordered input-sm w-full max-w-xs mb-4" required />
                    <br />

                    <textarea placeholder="Your Message" name='message' className="textarea textarea-bordered textarea-lg w-full max-w-xs mb-4 text-black" required></textarea>

                    <button className="btn w-[134px] h-11 bg-secondary text-center text-base font-normal" to={'/Login'}>Send</button>
                </form>
            </div>
        </div >
    );
};

export default HomeProject;