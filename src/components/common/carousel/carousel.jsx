import { Container } from '@mui/system';
import React from 'react'
import './carousel.css';
import Slider from "react-slick";
import Card from '../card/card';
import { IsMobileWidth } from '../utill/utils';
import Headphone from '../../../assets/images/headphone.svg';
import clsx from 'clsx';

const Carousel = () => {
    const mobileWidth = IsMobileWidth()
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        // autoplay: true,
        // speed: 5000,
        // autoplaySpeed: 5000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
<></>        


    )
}

export default Carousel