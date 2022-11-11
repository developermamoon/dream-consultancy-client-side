import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import ReactTooltip from 'react-tooltip';

const Header = () => {
    
    const { user, logOut } = useContext(AuthContext);
    
    
    return (
        <div className="bg-secondary text-white navbar bg-base-100">
            
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li tabIndex={0}>
                            <a className="justify-between">
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl"> <img className='w-10 mr-2' src="https://i.ibb.co/wC32m9W/logo.png" alt="" /> Dream Consultancy</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/services'>Services</Link></li>
                    <li><Link to='/blogs'>Blogs</Link></li>
                    <li><Link to='/myreviews'>My Reviews</Link></li>
                    {user && <li><Link to='/myreviews'>Add Service</Link></li>}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? 

                <>
                        <ReactTooltip />
                        <label className="btn btn-ghost btn-circle avatar">
                            <div data-tip={user?.email}  >
                                <img className="w-10 rounded-full" src={
                                    user?.photoURL ?  user?.photoURL : 'https://www.w3schools.com/howto/img_avatar.png' 
                                } />
                            </div>
                        </label>

                        <Link onClick={logOut} to='/login' className="btn btn-accent text-white ml-3">Logout</Link>
                </>
                :
                <>
                    <Link to='/login' className="btn btn-accent text-white mr-3">Login</Link>
                    <Link to='/signup' className="btn btn-accent text-white">SignUp</Link>
                </>
            }
                
            </div>
        </div>
    );
};

export default Header;