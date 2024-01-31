import React from 'react';

import { FaReact }
    from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs }
    from "react-icons/si";

// BEST SKILL

const SocialMedia = () => {
    return (
        <div className="flex">
            <div className='mr-5'>
                <h2 className="text-base uppercase font-titleFont mb-4">
                    BEST SKILL ON
                </h2>
                <div className="flex gap-4">
                    <span className="w-16 h-16 rounded-full  bg-orange-600 flex 
                    justify-center items-center">
                        <FaReact className='w-8 h-8' />
                    </span>
                    <span className="w-16 h-16 rounded-full  bg-orange-600 flex 
                    justify-center items-center drop-shadow-md">
                        <SiNextdotjs className='w-8 h-8' />
                    </span>
                    <span className="w-16 h-16 rounded-full  bg-orange-600 flex 
                    justify-center items-center drop-shadow-md">
                        <SiTailwindcss className='w-8 h-8' />
                    </span>
                    <span className="bannerIcon">
                        <SiFigma />
                    </span>
                </div>
            </div>

        </div>
    );
};

export default SocialMedia;