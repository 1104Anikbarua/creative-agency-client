import { faBookBookmark, faCartShopping, faPlus, faReply, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../../images/logos/logo.png';
import CustomLink from '../Shared/CustomLink/CustomLink';

const DashBoard = () => {

    return (
        // <div className='relative'>
        <div className="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* <!-- Page content here --> */}

                <Outlet>

                </Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side border-2 border-gray-400">

                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 mt-5 w-60 bg-base-100 text-base-content">

                    {/* <!-- Sidebar content here --> */}
                    <Link to={'/home'} className="text-xl mb-2">
                        <img className='w-[148px] h-12' src={logo} alt="" /></Link>


                    <li className='mb-2'>
                        <CustomLink to={'/dashboard'}>
                            <span>
                                <FontAwesomeIcon className='mr-2' icon={faBookBookmark}></FontAwesomeIcon>
                                Service List
                            </span>
                        </CustomLink>
                    </li>
                    <li className='mb-2'>
                        <CustomLink to={'/dashboard/addservice'}>
                            <span>
                                <FontAwesomeIcon className='mr-2' icon={faPlus}></FontAwesomeIcon>
                                Add Service
                            </span>
                        </CustomLink>
                    </li>
                    <li className='mb-2'>
                        <CustomLink to={'/dashboard/makeadmin'}>
                            <span>
                                <FontAwesomeIcon className='mr-2' icon={faUserPlus}></FontAwesomeIcon>
                                Make Admin
                            </span>
                        </CustomLink>
                    </li>
                    <li className='mb-2'>
                        <CustomLink to={'/dashboard/order'}>
                            <span>
                                <FontAwesomeIcon className='mr-2' icon={faCartShopping}></FontAwesomeIcon>
                                Order
                            </span>
                        </CustomLink>
                    </li>
                    <li className='mb-2'>
                        <CustomLink to={'/dashboard/review'}>
                            <span>
                                <FontAwesomeIcon className='mr-2' icon={faReply}></FontAwesomeIcon>
                                Review
                            </span>
                        </CustomLink>
                    </li>
                </ul>

            </div>
        </div>
        // </div>
    );
};

export default DashBoard;