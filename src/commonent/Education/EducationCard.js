import React from 'react';

// EducationCard

const EducationCard = ({ title, inst }) => {
    return (
        <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg flex flex-col bg-blue-950 border-8 border-orange-600">

            <div className="w-full mt-5 flex flex-col gap-6">
                <div>
                    <div className="flex items-center justify-between">
                        <h3 className="text-base uppercase text-orange-600 font-normal">
                            {title}
                        </h3>

                    </div>
                    <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
                        {inst}
                    </p>

                </div>
            </div>
        </div>
    );
};

export default EducationCard;