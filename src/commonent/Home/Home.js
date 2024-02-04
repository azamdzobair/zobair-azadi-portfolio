import React from 'react';
import HomeLeft from '../HomeLeft/HomeLeft';
import HomeRight from '../HomeRight/HomeRight';

// Home

const Home = () => {
    return (
        <section id="home"
            className="w-full pt-10 sm:flex md:flex items-center font-titleFont"

        >
            <HomeLeft></HomeLeft>
            <HomeRight></HomeRight>


        </section>
    );
};

export default Home;