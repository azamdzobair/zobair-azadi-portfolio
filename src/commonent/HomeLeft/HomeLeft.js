import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BestSkill from '../BestSkill/BestSkill';

// HomeLeft

const HomeLeft = () => {

    // Create animation designation

    const [text] = useTypewriter({
        words: ["Front-End Web Developer.", "Rect Developer.", "Professional Coder."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });
    return (
        <div className=" sm:w-1/2 md:w-1/2 mb-20  flex flex-col gap-8 sm:gap-20 md:gap-20">
            <div className="flex flex-col gap-5">
                <h4 className="text-sm sm:text-lg font-normal">Welcome To My Portfolio</h4>
                <h1 className="text-6xl font-bold text-white">
                    Hi, I'm <span className="text-orange-600 capitalize">Azadi</span>
                </h1>
                <h2 className="text-4xl font-bold text-white">
                    <span>{text}</span>
                    <Cursor
                        cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor="#ec6126"
                    />
                </h2>
                <p className="text-base font-bodyFont leading-6 tracking-wide">
                    I am a Professional Front-End Web Developer. I know some
                    technologies of web development such as HTML, CSS, JavaScript, and React. I completed some awesome Front-End projects.
                </p>
            </div>
            <BestSkill></BestSkill>
            
        </div>

    );
};

export default HomeLeft;