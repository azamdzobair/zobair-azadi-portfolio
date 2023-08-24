import React from 'react';
import EducationCard from './EducationCard';

const Education = () => {
    return (
        <div className="w-1/2 flex flex-col ml-7 gap-20">
            <div className="">
                <h1>Education</h1>
            </div>
            <div className="grid grid-cols-1 gap-14">

                <EducationCard
                    title="Masters of Social Science (MSS)"
                    inst="Institution : Dhaka College"
                >

                </EducationCard>
                <EducationCard
                    title="Bachelor of Social Science (BSS)"
                    inst="Institution : Dhaka College"
                >

                </EducationCard>


            </div>

        </div>
    );
};

export default Education;