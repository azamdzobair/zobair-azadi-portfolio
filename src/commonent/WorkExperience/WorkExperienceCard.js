import React from 'react';

// WorkExperienceCard

const WorkExperienceCard = ({ title, time, }) => {
    return (
        <div className=" p-8 rounded-lg  flex flex-col bg-blue-950 border-8 border-orange-600">

            <div className=" flex flex-col  gap-6">
                <div>
                    <div className="flex items-center justify-between">
                        <h3 className="text-base uppercase text-orange-600 font-semibold">
                            {title}
                        </h3>

                    </div>
                    <p className="text-sm tracking-wide mt-3">
                        {time}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WorkExperienceCard;