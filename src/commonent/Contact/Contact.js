import React from 'react';
import Title from '../Titlle/Title';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact }
    from "react-icons/fa";

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
                    <span className="bannerIcon">
                        <FaFacebookF />

                    </span>
                    <span className="bannerIcon">
                        <FaTwitter />

                    </span>
                    <span className="bannerIcon">
                        <FaLinkedinIn />
                    </span>
                </div>
            </div>

        </section>
    );
};

export default Contact;