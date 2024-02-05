import React from 'react';
import Title from '../Titlle/Title';
import Card from './Card';
import { CardData } from '../Data/CardData';

// Features

const Features = () => {
    return (
        <section
            id="features"
            className="w-full pt-20 sm:pt-12 md:pt-12 "
        >
            <Title des="What I Do" ></Title>

            {/* Features Loop */}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-16">
                {CardData.map((item) => (
                    <Card item={item} key={item.id}></Card>
                ))}

            </div>
        </section>
    );
};

export default Features;