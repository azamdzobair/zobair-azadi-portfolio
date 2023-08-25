import React from 'react';

import { FaReact }
    from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs }
    from "react-icons/si";

const SocialMedia = () => {
    return (
        <div className="flex">
            <div className='mr-5'>
                <h2 className="text-base uppercase font-titleFont mb-4">
                    BEST SKILL ON
                </h2>
                <div className="flex gap-4">
                    <span className="bannerIcon">
                        <FaReact />
                    </span>
                    <span className="bannerIcon">
                        <SiNextdotjs />
                    </span>
                    <span className="bannerIcon">
                        <SiTailwindcss />
                    </span>
                    <span className="bannerIcon">
                        <SiFigma />
                    </span>
                </div>
            </div>
            <div className='ml-5'>
                <h2 className="text-base uppercase font-titleFont mb-4">
                    BEST SKILL ON
                </h2>
                <div className="flex gap-4">
                    <span className="bannerIcon">
                        <FaReact />
                    </span>

                </div>
            </div>
        </div>
    );
};

export default SocialMedia;