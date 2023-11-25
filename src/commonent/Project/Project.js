import React from 'react';
import Title from '../Titlle/Title';
import ProjectCard from './ProjectCard';
import oneImage from '../../img/project 1.jpg';
import twoImage from '../../img/project 2.jpg';
import threeImage from '../../img/project 3.jpg';
import fourImage from '../../img/project 4.jpg';
import fiveImage from '../../img/project 5.jpg';
import sixImage from '../../img/project 6.jpg';

// Project

const Project = () => {
    return (
        <section
            id="projects"
            className="w-full py-20 border-b-[1px] border-b-black"
        >
            <div>
                <Title

                    des="My Projects"
                />
            </div>

            {/* Project Data */}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
                <ProjectCard
                    title="Donte Website"
                    des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                    src={oneImage}
                    CodeLink="https://github.com/azamdzobair/assignment-repo"
                    WebLink="https://azamdzobair.github.io/assignment-repo/"
                />
                <ProjectCard
                    title="Corporate Website"
                    des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                    src={twoImage}
                    CodeLink="https://github.com/azamdzobair/corporate-website"
                    WebLink="https://resplendent-rabanadas-c4e979.netlify.app/"
                />
                <ProjectCard
                    title="Digital Learnig"
                    des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                    src={threeImage}
                    CodeLink="https://github.com/azamdzobair/assignment-3-by-azadi"
                    WebLink="https://azamdzobair.github.io/assignment-3-by-azadi/"
                />
                <ProjectCard
                    title="E-Commerce Website"
                    des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                    src={fourImage}
                    CodeLink="https://github.com/azamdzobair/-My-e-commerce-websites"
                    WebLink="https://azamdzobair.github.io/-My-e-commerce-websites/"
                />
                <ProjectCard
                    title="E-commerce Website"
                    des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                    src={fiveImage}
                    CodeLink="https://github.com/azamdzobair/panda-practice-me"
                    WebLink="https://azamdzobair.github.io/panda-practice-me/"
                />
                <ProjectCard
                    title="CodePen Colon"
                    des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                    src={sixImage}
                    CodeLink="https://github.com/azamdzobair/my-code-pen"
                    WebLink="https://my-code-pen.netlify.app/"
                />
            </div>
        </section>
    );
};

export default Project;