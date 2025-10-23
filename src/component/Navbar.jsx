import React from 'react'
import { GoArrowRight } from "react-icons/go";
const Navbar = () => {
    return (
        <>
            <header className='vdo-font-bold vdo-p-10'>
                <div className='vdo-container vdo-mx-auto vdo-flex vdo-items-center vdo-justify-between'>
                    {/* logo */}
                    <a className='vdo-text-3xl' href="#">Video Script Generator</a>
                    {/* header-menu */}
                    <nav>
                        <ul className='vdo-flex vdo-gap-7'>
                            <li><a className='vdo-text-[22px] vdo-font-normal vdo-transition-all vdo-duration-300 hover:vdo-text-purple-500' href="#">Home</a></li>
                            <li><a className='vdo-text-[22px] vdo-font-normal vdo-transition-all vdo-duration-300 hover:vdo-text-purple-500' href="#">About</a></li>
                            <li><a className='vdo-text-[22px] vdo-font-normal vdo-transition-all vdo-duration-300 hover:vdo-text-purple-500' href="#">Product</a></li>
                            <li><a className='vdo-text-[22px] vdo-font-normal vdo-transition-all vdo-duration-300 hover:vdo-text-purple-500' href="#">Contact</a></li>
                        </ul>
                    </nav>
                    {/* header-button */}
                    <button className='vdo-bg-purple-500 vdo-py-3 vdo-px-5 vdo-text-white vdo-flex vdo-items-center vdo-gap-2 vdo-text-base vdo-rounded'>Login <GoArrowRight /></button>
                </div>
            </header>
        </>
    )
}

export default Navbar