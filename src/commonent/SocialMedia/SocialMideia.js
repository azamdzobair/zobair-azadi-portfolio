import React from 'react';

import { FaReact }
    from "react-icons/fa";
import { SiTailwindcss, SiFigma, }
    from "react-icons/si";
    import { IoLogoJavascript } from "react-icons/io";

// BEST SKILL

const SocialMedia = () => {
    return (
        <div className="flex">
            <div className='mr-5'>
                <h2 className="text-base uppercase font-titleFont mb-4">
                    BEST SKILL ON
                </h2>
                <div className="flex gap-4">
                    <span className="w-10 h-10 rounded-full flex justify-center 
                    items-center bg-orange-600 hover:bg-orange-700 duration-300 ">
                        <FaReact className='w-6 h-6' />
                    </span>
                    <span className="w-10 h-10 rounded-full flex justify-center 
                    items-center bg-orange-600 hover:bg-orange-700 duration-300">
                        <IoLogoJavascript className='w-6 h-6' />
                    </span>
                    <span className="w-10 h-10 rounded-full flex justify-center 
                    items-center bg-orange-600 hover:bg-orange-700 duration-300">
                        <SiTailwindcss className='w-6 h-6' />
                    </span>
                    <span className="w-10 h-10 rounded-full flex justify-center 
                    items-center bg-orange-600 hover:bg-orange-700 duration-300">
                        <SiFigma  className='w-6 h-6' />
                    </span>
                </div>
            </div>

        </div>
    );
};

export default SocialMedia;