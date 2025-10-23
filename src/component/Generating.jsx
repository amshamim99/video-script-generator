import React from 'react'

const Generating = () => {
    return (
        <>
            <div className="vdo-flex vdo-items-center vdo-justify-center vdo-min-h-[30vh]">
                {/* title */}
                <h2 className='vdo-text-center vdo-text-5xl vdo-font-bold vdo-leading-none'>A Free <span className='vdo-text-purple-600'>AI</span> For Generating The <br /> Video Script</h2>
            </div>
            <div className="vdo-text-area vdo-flex vdo-flex-col vdo-items-center vdo-justify-center">
                {/* textarea */}
                <textarea className='vdo-bg-gray-200 vdo-min-h-[130px] vdo-w-[50vw] vdo-border-0 vdo-outline-bone focus:vdo-outline-none vdo-p-5 vdo-rounded-lg vdo-text-[20px]' name="promt" id="promt" placeholder='Discribe your video topic.'></textarea>
                {/* button */}
                <button className='vdo-p-3 vdo-bg-purple-600 vdo-text-white vdo-text-[20px] vdo-mt-5 vdo-w-44 vdo-rounded-lg'>Generate</button>
            </div>
        </>
    )
}

export default Generating