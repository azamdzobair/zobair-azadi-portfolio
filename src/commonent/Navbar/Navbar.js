import React, { useEffect, useState } from 'react';
// import { logo } from '../../logo.png'




const Navbar = () => {
    const [navDatas, setNavDatas] = useState([]);
    useEffect(() => {
        fetch('navdata.json')
            .then(res => res.json())
            .then(data => setNavDatas(data));
    }, [])



    return (
        <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
            <div>
                {/* <img src={logo} alt="logo" /> */}
            </div>
            <div>
                <ul className="flex items-center gap-10">
                    {navDatas.map(navData => <li
                        className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                        key={navData._id}

                    >
                        {navData.title}

                    </li>)}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;