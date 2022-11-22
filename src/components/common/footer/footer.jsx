import React from 'react'
import { Container, Grid } from '@mui/material'
import './footer.css';
// import { IsMobileWidth, IsTabletWidth } from '../utill/utils';
import Logo from '../../../assets/images/PD.svg';
import Insta from '../../../assets/images/Insta.svg';
import Facebook from '../../../assets/images/facebook.svg';
import Twitter from '../../../assets/images/twitter.svg';
import Linkdin from '../../../assets/images/linkedin.svg';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-scroll';
import Line3 from '../../../assets/images/line3.png';

const Footer = () => {
    // const mobileWidth = IsMobileWidth()
    // const tabletWidth = IsTabletWidth()
    let navigate = useNavigate();
    const redirect = (url) => {
        navigate(url);
    }

    return (
    <></>
        )
}

export default Footer