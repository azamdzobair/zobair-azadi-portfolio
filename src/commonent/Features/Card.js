import React from 'react';



// Features Card

const Card = ({ item: { title, des, icon } }) => {
    return (
        <div className="w-full px-12 h-80 py-10 rounded-lg  flex 
        items-center bg-blue-950  border-8 border-orange-600">
            
                <div className="flex h-full flex-col gap-10 ">
                    <div className="w-10 h-8 p-2 flex flex-col justify-between">

                            <span className="text-5xl text-orange-600">{icon}</span>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300">
                            {title}
                        </h2>
                        <p className="base">{des}</p>
                    
                    </div>
                </div>
            
        </div>
    );
};

export default Card;