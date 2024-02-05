import React from 'react';

import { FaReact }
    from "react-icons/fa";
import { SiTailwindcss, SiFigma, }
    from "react-icons/si";
    import { IoLogoJavascript } from "react-icons/io";

// BEST SKILL

const bestSkill = () => {
    return (
        <div className="flex">
            <div className='mr-5'>
                <h2 className="font-bold uppercase font-titleFont mb-4">
                    BEST SKILL ON
                </h2>
                <div className="flex gap-4">
                    <span className="iconDesign">
                        <FaReact className='w-6 h-6' />
                    </span>
                    <span className="iconDesign">
                        <IoLogoJavascript className='w-6 h-6' />
                    </span>
                    <span className="iconDesign">
                        <SiTailwindcss className='w-6 h-6' />
                    </span>
                    <span className="iconDesign">
                        <SiFigma  className='w-6 h-6' />
                    </span>
                </div>
            </div>

        </div>
    );
};

export default bestSkill;