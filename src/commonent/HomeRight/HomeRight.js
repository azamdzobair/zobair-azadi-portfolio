import React from 'react';
import Picture from '../../img/protoflio img.png';

// HomeRight

const HomeRight = () => {
    return (

        // profile Picture

        <div className=" sm:w-1/2 md:w-1/2  flex justify-center items-center ">

            <img className='' src={Picture} alt="pic" />
        </div>
    );
};

export default HomeRight;