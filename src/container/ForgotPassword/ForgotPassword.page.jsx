import React from 'react'
import './ForgotPassword.page.css';
import FooterImage from '../../assets/images/Footer.png';

import { Paper, Container } from '@mui/material';
import { useState } from 'react';
import { IsMobileWidth, IsTabletWidth } from '../../components/common/utill/utils';
import clsx from 'clsx';
import EyeClose from '../../assets/images/eye-close.svg';
import EyeOpen from '../../assets/images/visibility.svg';
import Line1 from '../../assets/images/Line-1.png';
import Line2 from '../../assets/images/Line-2.png';
import Facebook from '../../assets/images/F.png';
import Google from '../../assets/images/G.png';
import AppNavbar from '../../components/common/app.navbar/app.navbar';
import { useLocation, useNavigate } from "react-router-dom";
import { AppBar, Toolbar,  Button, IconButton, Typography, Drawer } from "@mui/material";


const LoginPage = () => {
    const mobileWidth = IsMobileWidth()
    const tabletWidth = IsTabletWidth()
    const [state, setState] = useState({
        passwordVisibility: false,
        email: '',
    });
    const redirect = (url) => {
        navigate(url);
    }
    let navigate = useNavigate();

    // const handleChange = (name, value) => {
    //     setState({ ...state, [name]: value });
    // };
    const toggleVisiblity = () => {
        setState({ ...state, passwordVisibility: !state.passwordVisibility });
    };
    return (
        <div>
            <AppNavbar />
            <div className='w-100 login position-relative'>
                <img className='position-absolute'  width='100%' height='100%' alt='login' />
                <Container className='w-100 h-100 position-absolute d-flex align-items-center justify-content-end '>
                    <form className='w-100 h-100 d-flex align-items-center justify-content-end'>
                        <Paper className={clsx(!(mobileWidth || tabletWidth) && 'w-40', tabletWidth && 'w-60', mobileWidth && 'w-95 m-auto', 'pl-4 pr-4 pt-4 pb-4 mr-5')}>
                            <div className='mb-3 pt-2'>
                                <p className='login-head'>
                                Forgot Password?
                                </p>
                                <p>Don’t worry, we’ll send you reset instructions.</p>
                            </div>
                            <div className="form-group">
                                <label className='label' htmlFor="exampleInputEmail1">Email</label>
                                <input type="email" className="inputhree" aria-describedby="emailHelp" placeholder="Please enter your email" />
                            </div>
                           
                            <button className="login-btn3 mt-4 mb-2 cursor-pointer">
                                Email me Instructions
                            </button>
                           
                         
                           
                            <div className='d-flex align-items-center pt-4 cursor-pointer'>
                                <p className='text pr-2' > Already have an account? </p>
                                <p className='text-2 cursor-pointer'>
                                <a
                            onClick={() => redirect('/login')}
                            variant="none"
                            >
                                    Sign In
                            </a>
                                        
                                </p>
                            </div>
                        </Paper>
                    </form>
                </Container>
                <div></div>
            </div>
        </div>
    )
}

export default LoginPage