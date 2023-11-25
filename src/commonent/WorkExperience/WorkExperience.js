import React from 'react';
import WorkExperienceCard from './WorkExperienceCard';

// WorkExperience

const WorkExperience = () => {
    return (
        <div className="w-1/2 flex flex-col mr-7 gap-20">
            <div className="">
                <h1>WorkExperience</h1>
            </div>
            <div className="grid grid-cols-1 gap-14">

                <WorkExperienceCard
                    title="Front-End Web Developer (Github)"
                    time=" 1st june 2022 - Present">

                </WorkExperienceCard>
                <WorkExperienceCard
                    title="Graphic Designer(UpWork)"
                    time=" 5th January, 2021 - 30th December, 2021">

                </WorkExperienceCard>

            </div>

        </div>
    );
};

export default WorkExperience;