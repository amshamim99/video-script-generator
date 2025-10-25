import React from 'react'

const MobileMenu = () => {
    return (
        <>
            <div className='vdo-absolute vdo-top-0 vdo-left-0 vdo-bg-white vdo-shadow-lg vdo-h-auto vdo-w-full vdo-p-10 vdo-pt-32 vdo-pb-20 lg:vdo-hidden'>
                <ul className='vdo-flex vdo-flex-col vdo-gap-7 vdo-text-center'>
                    <li><a className='vdo-text-[22px] vdo-font-normal vdo-transition-all vdo-duration-300 hover:vdo-text-purple-500' href="#">Home</a></li>
                    <li><a className='vdo-text-[22px] vdo-font-normal vdo-transition-all vdo-duration-300 hover:vdo-text-purple-500' href="#">About</a></li>
                    <li><a className='vdo-text-[22px] vdo-font-normal vdo-transition-all vdo-duration-300 hover:vdo-text-purple-500' href="#">Product</a></li>
                    <li><a className='vdo-text-[22px] vdo-font-normal vdo-transition-all vdo-duration-300 hover:vdo-text-purple-500' href="#">Contact</a></li>
                </ul>
            </div>
        </>
    )
}

export default MobileMenu