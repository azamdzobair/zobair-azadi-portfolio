import React from 'react';
import Title from '../Titlle/Title';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact }
    from "react-icons/fa";

// Contact

const Contact = () => {
    return (
        <section
            id="contact"
            className="w-full py-20 border-b-[1px] border-b-black"
        >
            <Title des="Contact" ></Title>
            <div>
                <h2 className="text-base uppercase font-titleFont mb-4">
                    Find me in
                </h2>
                <div className="flex gap-4">
                    <span className="w-10 h-10 rounded-full flex justify-center 
                    items-center bg-orange-600 hover:bg-orange-700 duration-300">
                        <FaFacebookF className='w-6 h-6' />

                    </span>
                    <span className="w-10 h-10 rounded-full flex justify-center 
                    items-center bg-orange-600 hover:bg-orange-700 duration-300">
                        <FaTwitter className='w-6 h-6' />

                    </span>
                    <span className="w-10 h-10 rounded-full flex justify-center 
                    items-center bg-orange-600 hover:bg-orange-700 duration-300">
                        <FaLinkedinIn className='w-6 h-6' />
                    </span>
                </div>
            </div>

        </section>
    );
};

export default Contact;