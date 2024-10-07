

import React from 'react';
import { PiShoppingCartLight } from 'react-icons/pi';
import { MdMenu } from 'react-icons/md';
import { MdFavorite } from 'react-icons/md';

const Navbar = () => {
    return (
        <header className='bg-black'>
            <nav className='container mx-auto flex justify-between items-center py-6'>
                {/* Logo section */}
                <img src='/logo.jpg' alt='Company logo' width={80} />

                <div className='text-xl flex items-center  relative gap-20 font-bold uppercase'>
                    {/* Menu section */}
                    <div > 
                        <ul className='flex gap-8 text-yellow-600' role="navigation">

                            
                            <li><a href='/home' className='hover:text-white'>Home</a></li>
                            <li><a href='/buy' className='hover:text-white'>Buy</a></li>
                            <li><a href='/rent' className='hover:text-white'>Rent</a></li>
                            <li><a href='/sell' className='hover:text-white'>Sell</a></li>
                            <li><a href='/contact' className='hover:text-white'>Contact</a></li>
                            <li>
                            <a href=''className='text-yellow-600 hover:text-white transition duration-200'> 
                            <MdFavorite/>
                            </a>
                            </li>  
                            <li>
                            <a href='' className='text-yellow-600 hover:text-white transition duration-200'>
                                <PiShoppingCartLight/> 
                            </a>   
                            </li>
                            <li>
                            <a href='' className='bg-yellow-600 text-white px-4 py-2 rounded-full hover:bg-yellow-500 transition duration-200'>Sign up</a>
                            </li>
                            <li>
                                <a href='' className='bg-yellow-600 text-white px-4 py-2 rounded-full hover:bg-yellow-500 transition duration-200'>Log in</a>
                            </li>
                            <li>
                    
                            <a href=''className='text-yellow-600 hover:text-white transition duration-200'> 
                            <MdMenu/> 
                            </a>
                            </li>
        

                        </ul>   
                    </div> 
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
