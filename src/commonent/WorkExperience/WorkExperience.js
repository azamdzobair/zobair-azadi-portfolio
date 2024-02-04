import React from 'react';
import WorkExperienceCard from './WorkExperienceCard';

// WorkExperience

const WorkExperience = () => {
    return (
        <div className=" w-full mb-12 sm:w-1/2 md:w-1/2 flex flex-col sm:mr-7 md:mr-7 gap-8">
            <div className="">
                <h1>WorkExperience</h1>
            </div>
            <div className="grid grid-cols-1 gap-14">

                <WorkExperienceCard
                    title="Front-End Web Developer (Github)"
                    time=" 1st june 2022 - Present">

                </WorkExperienceCard>
                <WorkExperienceCard
                    title="Graphic Designer(NCTV)"
                    time=" 5th January, 2020 - 30th December, 2021">

                </WorkExperienceCard>

            </div>

        </div>
    );
};

export default WorkExperience;