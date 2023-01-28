import React from 'react';

const HomeProject = () => {
    return (
        <div className='bg-primary pt-16 pl-6'>
            <div className='grid lg:grid-cols-2 justify-items-center lg:gap-[134px] max-w-[1170px] mx-auto'>
                <div>
                    <h1 className='text-[34px] font-semibold text-neutral'>
                        Let us handle your project, professionally.
                    </h1>
                    <p className='font-normal text-sm text-neutral'>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                </div>
                <form>
                    <input type="text" placeholder="Your Email Address" className="input input-bordered input-sm w-full max-w-xs mb-4" />
                    <br />

                    <input type="text" placeholder="Your Name / Company Name" className="input input-bordered input-sm w-full max-w-xs mb-4" />
                    <br />

                    <textarea placeholder="Your Message" className="textarea textarea-bordered textarea-lg w-full max-w-xs mb-4" ></textarea>

                    <button className="btn w-[134px] h-11 bg-secondary text-center text-base font-normal" to={'/Login'}>Send</button>
                </form>
            </div>
        </div >
    );
};

export default HomeProject;