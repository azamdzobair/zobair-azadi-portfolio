import React from 'react';
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

// ProjectCard

const ProjectCard = ({ title, des, src, CodeLink, WebLink }) => {
    return (
        <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg drop-shadow-lg 
        border-8 border-orange-600 flex flex-col bg-white ">
            <div className="w-full h-[80%] overflow-hidden rounded-lg">
                <img
                    className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
                    src={src}
                    alt="src"
                />
            </div>
            <div className="w-full mt-5 flex flex-col  gap-6">
                <div>
                    <div className="flex items-center justify-between">
                        <h3 className="text-base uppercase text-orange-600 font-bold">
                            {title}
                        </h3>
                        <div className="flex gap-2">
                            <a href={CodeLink} target="#" className="text-lg w-10 h-10 rounded-full bg-orange-600 inline-flex justify-center items-center text-white cursor-pointer">
                                <BsGithub />
                            </a>
                            <a href={WebLink} target="_#" className="text-lg w-10 h-10 rounded-full bg-orange-600 inline-flex justify-center items-center text-white cursor-pointer">
                                <FaGlobe />
                            </a>
                        </div>
                    </div>
                    <p className="text-sm text-gray-900 mt-3 ">
                        {des}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;