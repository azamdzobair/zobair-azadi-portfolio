
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';




// Navbar

const Navbar = () => {
    const [navDatas, setNavDatas] = useState([]);
    useEffect(() => {
        fetch('navdata.json')
            .then(res => res.json())
            .then(data => setNavDatas(data));
    }, [])



    return (
        <div className="w-full h-24 sticky top-0 z-50 bg-blue-950  flex 
         items-center justify-center font-titleFont border-b-[1px] border-b-gray-600">

            {/* NavData loop */}

            <div>
                <ul className="flex items-center  gap-10">
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