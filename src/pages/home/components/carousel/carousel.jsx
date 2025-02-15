import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './carousel.css';

const MyCarousel = () => {
    return (
        <Carousel showThumbs={false} autoPlay infiniteLoop>
            <div>
                <img src="https://placehold.co/1200x400/png" alt="Slide 1" />
            </div>
            <div>
                <img src="https://placehold.co/1200x400/png" alt="Slide 2" />
            </div>
            <div>
                <img src="https://placehold.co/1200x400/png" alt="Slide 3" />
            </div>
        </Carousel>
    );
};

export default MyCarousel;
