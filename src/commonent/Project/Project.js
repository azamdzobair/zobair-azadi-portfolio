import React from 'react';
import Title from '../Titlle/Title';
import ProjectCard from './ProjectCard';
import oneImage from '../../img/project 1.jpg';
import twoImage from '../../img/project 2.jpg';
import threeImage from '../../img/project 3.jpg';
import fourImage from '../../img/project 4.jpg';
import fiveImage from '../../img/project 5.jpg';
import sixImage from '../../img/project 6.jpg';

const Project = () => {
    return (
        <section
            id="projects"
            className="w-full py-20 border-b-[1px] border-b-black"
        >
            <div className="flex justify-center items-center text-center">
                <Title
                    title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
                    des="My Projects"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
                <ProjectCard
                    title="SOCIAL MEDIA CLONE"
                    des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                    src={oneImage}
                />
                <ProjectCard
                    title="E-commerce Website"
                    des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                    src={twoImage}
                />
                <ProjectCard
                    title="Chatting App"
                    des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                    src={threeImage}
                />
                <ProjectCard
                    title="SOCIAL MEDIA CLONE"
                    des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                    src={fourImage}
                />
                <ProjectCard
                    title="E-commerce Website"
                    des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                    src={fiveImage}
                />
                <ProjectCard
                    title="Chatting App"
                    des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                    src={sixImage}
                />
            </div>
        </section>
    );
};

export default Project;