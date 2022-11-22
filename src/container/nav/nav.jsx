import React from 'react'
import { useStyle } from "./nav.style";
import { Button } from "@mui/material";
import { IsMobileWidth } from '../../components/common/utill/utils';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';

const Nav = () => {
    const mobileWidth = IsMobileWidth()
    const classes = useStyle()
    let navigate = useNavigate();
    const redirect = (url) => {
        navigate(url);
    }
    return (
        <div className={classes.nav}>
            <nav className={clsx(!mobileWidth && 'pl-2 ', 'pt-4 pb-4 z-index')}>
                <div className="">
                    <Link onClick={() => redirect('/')} to="home" spy={true} smooth={true} offset={50} duration={500}>
                        <Button
                            className={clsx(classes.btn, mobileWidth && classes.resBtn)}
                            variant="none"
                        >
                            Home
                        </Button>
                    </Link>
                    <Link onClick={() => redirect('/')} to="about-us" spy={true} smooth={true} offset={50} duration={500}>
                        <Button
                            className={clsx(classes.btn, mobileWidth && classes.resBtn)}
                            variant="none"
                        >
                            About us
                        </Button>
                    </Link>
                    <Link onClick={() => redirect('/')} to="pricing" spy={true} smooth={true} offset={50} duration={500}>
                        <Button
                            className={clsx(classes.btn, mobileWidth && classes.resBtn)}
                            variant="none"
                        >
                            Pricing
                        </Button>
                    </Link>
                    <Link onClick={() => redirect('/')} to="faqs" spy={true} smooth={true} offset={50} duration={500}>
                        <Button
                            className={clsx(classes.btn, mobileWidth && classes.resBtn)}
                            variant="none"
                        >
                            FAQs
                        </Button>
                    </Link >
                    <Link onClick={() => redirect('/')} to="contact-us" spy={true} smooth={true} offset={50} duration={500}>
                        <Button
                            className={clsx(classes.btn, mobileWidth && classes.resBtn)}
                            variant="none"
                        >
                            Contact Us
                        </Button>
                    </Link >
                </div >
            </nav >
        </div >
    )
}

export default Nav