import React from 'react';
import HomeLeft from '../HomeLeft/HomeLeft';
import HomeRight from '../HomeRight/HomeRight';

const Home = () => {
    return (
        <section id="home"
            className="w-full pt-10 pb-20 flex items-center border-b-[1px] font-titleFont border-b-black"

        >
            <HomeLeft></HomeLeft>
            <HomeRight></HomeRight>


        </section>
    );
};

export default Home;