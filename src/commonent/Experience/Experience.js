import React from 'react';
import WorkExperience from '../WorkExperience/WorkExperience';
import Education from '../Education/Education';
import Title from '../Titlle/Title';

// Experience

const Experience = () => {
    return (
        <section id="experience"
            className="w-full pt-10 pb-20  border-b-[1px] font-titleFont border-b-black"

        >
            <Title des="Experience" ></Title>
            <div className='sm:flex md:flex '>

                <WorkExperience></WorkExperience>
                <Education></Education>
                
            </div>



        </section>
    );
};

export default Experience;