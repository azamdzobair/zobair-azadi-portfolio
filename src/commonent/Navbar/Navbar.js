
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { IoMdCloseCircle } from "react-icons/io";
import { FaBars } from "react-icons/fa";




// Navbar

const Navbar = () => {
    const [navDatas, setNavDatas] = useState([]);
    useEffect(() => {
        fetch('navdata.json')
            .then(res => res.json())
            .then(data => setNavDatas(data));
    }, [])

    const [open, setOpen] = useState(false);

    return (
        <div className="w-full h-24 sticky top-0 z-50 bg-blue-950  flex 
         items-center justify-center font-titleFont border-b-[1px] border-b-gray-600">

            

            

            <div>
                <div onClick={() => setOpen(!open)} className='sm:hidden' >
                            {
                                open ? <IoMdCloseCircle  className='w-7 h-7' />

                                    : <FaBars className='w-7 h-7' />
                            }
                        </div>

                        {/* NavData loop */}

                <ul className={`absolute bg-blue-950 w-full  top-10 right-0 p-4 text-center 
                    duration-500 ease-in list-none  ${open ? 'top-14' : 'hidden'} sm:h-14  
                    sm:relative sm:top-0 sm:flex sm:items-center sm:gap-10`}>
                    {navDatas.map(navData => <li
                        className="text-base font-normal text-gray-400  
                        cursor-pointer hover:text-orange-600 duration-300"
                        key={navData._id}

                    >
                        <Link
                            activeClass="active"
                            to={navData.link}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}

                        >
                            {navData.title}

                        </Link>



                    </li>)}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;