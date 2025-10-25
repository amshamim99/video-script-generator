import React, { useState } from 'react'
import { GoogleGenAI } from "@google/genai";
import Markdown from 'react-markdown';
const Generating = () => {

    const [promt, setPromt] = useState("")
    const [res, setRes] = useState("")
    const [loader, setLoader] = useState(false)

    const generateRes = async () => {
        let promtInput = document.getElementById("promt")
        if (promt == "") {
            alert("You must discribe your video topic...!")
            promtInput.focus();
        } else {
            setLoader(true)
            const ai = new GoogleGenAI({ apiKey: "AIzaSyCMVmR6Vtx_PSsihAzBwh9YNIbTh5SDQ7Y" })
            const response = await ai.models.generateContent({
                model: "gemini-2.5-flash",
                contents: `Give a complet video script for the video which is ${promt}`,
            });
            setRes(response.text);
            setLoader(false)
        }
    }
    if (loader) {
        return <div className='vdo-absolute vdo-top-[50%] vdo-left-[50%] vdo-translate-y-[-50%] vdo-translate-x-[-50%]'>
            <h1 className='vdo-text-3xl'>Loading..</h1>
        </div>
    }
    return (
        <>
            <div className="vdo-container vdo-flex vdo-items-center vdo-justify-center vdo-min-h-[30vh]">
                {/* title */}
                <h2 className='vdo-text-center vdo-text-3xl md:vdo-text-4xl lg:vdo-text-5xl vdo-font-bold lg:vdo-leading-none'>A Free <span className='vdo-text-purple-600'>AI</span> For Generating The <br /> Video Script</h2>
            </div>
            <div className="vdo-container">
                <div className="vdo-text-area vdo-flex vdo-flex-col vdo-items-center vdo-justify-center">
                    {/* textarea */}
                    <textarea onChange={(e) => { setPromt(e.target.value) }} value={promt} className='vdo-bg-gray-200 vdo-min-h-[110px] md:vdo-min-h-[130px] vdo-w-full md:vdo-w-[50vw] vdo-border-0 vdo-outline-bone focus:vdo-outline-none vdo-p-5 vdo-rounded-lg vdo-text-[20px]' name="promt" id="promt" placeholder='Discribe your video topic.'></textarea>
                    {/* button */}
                    <button onClick={generateRes} className='vdo-p-3 vdo-bg-purple-600 vdo-text-white vdo-text-[20px] vdo-mt-5 vdo-w-44 vdo-rounded-lg'>Generate</button>
                </div>
                {
                    res !== "" ?
                        <div className='vdo-markdown vdo-mt-20'>
                            <Markdown >{res}</Markdown>
                        </div> : ""
                }
            </div>
        </>
    )
}

export default Generating