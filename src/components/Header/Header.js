import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../images/logos/logo.png'

const Header = () => {
    const menuItems = <>
        <Link className='text-neutral text-sm font-normal' to={'/'}>Home</Link>
        <Link className='text-neutral text-sm font-normal' to={'/portfolio'}>Our Portfolio</Link>
        <Link className='text-neutral text-sm font-normal' to={'/team'}>Our Team</Link>
        <Link className='text-neutral text-sm font-normal' to={'/contact'}>Contact Us</Link>
        <button className="btn w-[134px] h-11 bg-secondary text-center text" to={'/Login'}>Login</button>
    </>
    return (
        <div className="navbar max-w-[1170px] bg-primary mx-auto fixed">

            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral-900" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='text-fou'>
                            {menuItems}
                        </li>
                    </ul>
                </div>
                <Link to={'/home'} className="btn btn-ghost normal-case text-xl">
                    <img className='w-[148px] h-12' src={logo} alt="" /></Link>

            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        {menuItems}
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Header