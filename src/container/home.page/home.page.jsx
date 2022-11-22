import React from 'react'
import HomePageBanner from '../../components/common/home.page.banner/home.page.banner'
import { Button, Container } from '@mui/material';
import clsx from 'clsx';
import { useStyle } from './home.page.style';
import FileUploadBox from '../../components/common/file.upload.box/file.upload.box';
import AboutUsText from '../../components/common/about.us.text/about.us.text';
import VideoBanner from '../../components/common/video.banner/video.banner';
import Faqs from '../../components/common/faqs/faqs';
import ContactUs from '../../components/common/contact.us/contact.us';
import wavesImage from '../../assets/images/waves.svg';
import Footer from '../../components/common/footer/footer';
import Carousel from '../../components/common/carousel/carousel';
import { IsMobileWidth } from '../../components/common/utill/utils';
import AppNavbar from '../../components/common/app.navbar/app.navbar';

import {  useNavigate } from "react-router-dom";
import './home.css';

const HomePage = (props) => {
    const classes = useStyle()
    const mobileWidth = IsMobileWidth()
    let navigate = useNavigate();

    const redirect = (url) => {
        navigate(url);
    }

    return (
        <div>
            <AppNavbar />
        </div>

    )
}

export default HomePage