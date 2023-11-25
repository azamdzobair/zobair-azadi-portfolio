import React from 'react';
import Title from '../Titlle/Title';
import Card from './Card';
import { CardData } from '../Data/CardData';

// Features

const Features = () => {
    return (
        <section
            id="features"
            className="w-full py-20 border-b-[1px] border-b-black"
        >
            <Title des="What I Do" ></Title>

            {/* Features Loop */}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
                {CardData.map((item) => (
                    <Card item={item} key={item.id}></Card>
                ))}

            </div>
        </section>
    );
};

export default Features;