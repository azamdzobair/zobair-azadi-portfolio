import React from 'react';
import Title from '../Titlle/Title';
import { FaFacebookF, FaTwitter, FaLinkedinIn,}
    from "react-icons/fa";

// Contact

const Contact = () => {
    return (
       
            <div id="contact"
                className="w-full pt-20 sm:pt-20 md:pt-20">

                <Title des="Contact" ></Title>
                <div className='sm:flex md:flex items-center mb-14 space-y-6'>
                    <div className='w-full sm:w-1/2 md:w-1/2 sm:flex md:flex  '>
                        <div className='mr-20 mb-6'>
                            <h2 className='font-semibold text-lg text-orange-600'>Call Me:</h2>
                            <h3 className='font-bold text-2xl' >+8801966164364</h3>
                        </div>
                        <div>
                            <h2 className='font-semibold text-lg text-orange-600'>Email:</h2>
                            <h3 className='font-bold text-2xl' >zobairazadi@gmail.com</h3>
                        </div>
                    </div>

                    {/* follow me in social media */}

                    <div className=' w-full sm:w-1/2 md:w-1/2 sm:flex md:flex items-center justify-end'>
                        <h2 className='font-semibold text-lg text-white mr-6 mb-4'>Follow me:</h2>
                        <div className="flex gap-4">
                        <a href="https://www.facebook.com/zobair.azadi" target="#" className="w-10 h-10 rounded-full flex justify-center 
                        items-center bg-orange-600 hover:bg-orange-700 duration-300">
                            <FaFacebookF className='w-6 h-6' />

                            </a>
                            <a href="https://www.linkedin.com/in/zobairazadi/" target="#" className="w-10 h-10 rounded-full flex justify-center 
                        items-center bg-orange-600 hover:bg-orange-700 duration-300">
                            <FaTwitter className='w-6 h-6' />

                            </a>
                            <a href="https://www.linkedin.com/in/zobairazadi/" target="#" className="w-10 h-10 rounded-full flex justify-center 
                        items-center bg-orange-600 hover:bg-orange-700 duration-300">
                            <FaLinkedinIn className='w-6 h-6' />
                            </a>

                            
                        </div>
                    </div>
                </div>
               

            </div>
           
      
        
    );
};

export default Contact;