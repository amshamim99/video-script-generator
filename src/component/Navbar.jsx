import React, { useState } from 'react'
import { GoArrowRight } from "react-icons/go";
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import MobileMenu from './MobileMenu';
const Navbar = () => {

    const [isOpen,setIsOpen] = useState(false)

    const menuToogle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <header className='vdo-font-bold vdo-py-10 !vdo-z-[9999]'>
                <div className='vdo-container vdo-mx-auto vdo-flex vdo-items-center vdo-justify-between'>
                    {/* logo */}
                    <a className='vdo-text-xl lg:vdo-text-2xl xl:vdo-text-3xl' href="#">Video Script Generator</a>
                    {/* header-menu */}
                    <nav className='vdo-hidden lg:vdo-block'>
                        <ul className='vdo-flex vdo-gap-7'>
                            <li><a className='vdo-text-[22px] vdo-font-normal vdo-transition-all vdo-duration-300 hover:vdo-text-purple-500' href="#">Home</a></li>
                            <li><a className='vdo-text-[22px] vdo-font-normal vdo-transition-all vdo-duration-300 hover:vdo-text-purple-500' href="#">About</a></li>
                            <li><a className='vdo-text-[22px] vdo-font-normal vdo-transition-all vdo-duration-300 hover:vdo-text-purple-500' href="#">Product</a></li>
                            <li><a className='vdo-text-[22px] vdo-font-normal vdo-transition-all vdo-duration-300 hover:vdo-text-purple-500' href="#">Contact</a></li>
                        </ul>
                    </nav>
                    {/* header-button */}
                    <div className='vdo-hidden lg:vdo-block'>
                        <button className='vdo-bg-purple-500 vdo-py-3 vdo-px-5 vdo-text-white vdo-flex vdo-items-center vdo-gap-2 vdo-text-base vdo-rounded'>Login <GoArrowRight /></button>
                    </div>
                    {/* hamburger-icon */}
                    <button onClick={menuToogle} className='vdo-text-4xl lg:vdo-hidden vdo-z-50'>
                        {
                            isOpen ? <IoMdClose /> : <IoMenuOutline />
                        }
                    </button>
                    {/* MobileMenu */}
                    {
                        isOpen && (
                            <MobileMenu/>
                        )
                        
                    }
                </div>
            </header>
        </>
    )
}

export default Navbar