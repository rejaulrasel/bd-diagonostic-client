import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = () => {
    const {user} = useContext(AuthContext);

    const menuItems = [
        <React.Fragment>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/'>About</Link></li>
            <li><Link to='/appointments'>Appointments</Link></li>
            <li><Link to='/'>Review</Link></li>
            <li><Link to='/'>Contact</Link></li>
            {
                user?.uid ? <button className='btn btn-primary'>Sign out</button> :
                <li><Link to='/signup'>Sign Up</Link></li>
            }
        </React.Fragment>
    ]

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">BD Diagnosis</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            {/* <div className="navbar-end">
               {
                user ? <button className='btn btn-primary'>Logout</button> :  <Link to='/signup'>Sign Up</Link>
               }
            </div> */}
        </div>
    );
};

export default Navbar;