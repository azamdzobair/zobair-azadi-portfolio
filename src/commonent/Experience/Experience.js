import React from 'react';
import WorkExperience from '../WorkExperience/WorkExperience';
import Education from '../Education/Education';
import Title from '../Titlle/Title';

// Experience

const Experience = () => {
    return (
        <section id="experience"
            className="w-full pt-20 sm:pt-32 md:pt-32 font-titleFont"

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