import React from 'react';
import './login.page.css';

import { Container, Paper } from '@mui/material';
import clsx from 'clsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EyeClose from '../../assets/images/eye-close.svg';
import EyeOpen from '../../assets/images/visibility.svg';
import AppNavbar from '../../components/common/app.navbar/app.navbar';
import {
  IsMobileWidth,
  IsTabletWidth,
} from '../../components/common/utill/utils';

import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/user/userReducer';
import { API_BASE_URL } from '../../utils/globals';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async (evt) => {
    evt.preventDefault();
    if (evt.type === 'click') {
      await axios
        .post(`${API_BASE_URL}/login`, {
          email,
          password,
        })
        .then((response) => {
          console.log('invalid username or password');

          if (response && response.data.result === 'no users found')
            return alert('Invalid User Name or Password');
          else {
            localStorage.setItem('user', JSON.stringify(response.data.result));
            dispatch(setUser(response.data.result));
            if (response?.data.result.role === 'user') {
              navigate('/dashboard');
            } else {
              navigate('/admin-dashboard');
            }
          }
        });
    }
  };

  const mobileWidth = IsMobileWidth();
  const tabletWidth = IsTabletWidth();
  const [state, setState] = useState({
    passwordVisibility: false,
    email: '',
  });
  const redirect = (url) => {
    navigate(url);
  };

  const toggleVisiblity = () => {
    setState({ ...state, passwordVisibility: !state.passwordVisibility });
  };

  return (
    <div>
      <AppNavbar />
      <div className='w-100 login position-relative'>
        <img
          className='position-absolute'
          width='100%'
          height='100%'
          alt='login'
        />
        <Container className='w-100 h-100 position-absolute d-flex align-items-center justify-content-end '>
          <form className='w-100 h-100 d-flex align-items-center justify-content-end'>
            <Paper
              className={clsx(
                !(mobileWidth || tabletWidth) && 'w-40',
                tabletWidth && 'w-60',
                mobileWidth && 'w-95 m-auto',
                'pl-4 pr-4 pt-4 pb-4 mr-5'
              )}
            >
              <div className='mb-3 pt-2'>
                <p className='login-head'>Login to your account</p>
              </div>
              <div className='form-group'>
                <label className='label' htmlFor='exampleInputEmail1'>
                  Email
                </label>
                <input
                  type='email'
                  className='inputone'
                  aria-describedby='emailHelp'
                  placeholder='Please enter your email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='form-group'>
                <label className='label' htmlFor='exampleInputPassword1'>
                  Password
                </label>
                <div className='input-group mb-3'>
                  <input
                    type={state.passwordVisibility ? 'text' : 'password'}
                    className='form-control inputone'
                    placeholder='Enter password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div
                    className='input-group-prepend position-relative'
                    onClick={toggleVisiblity}
                  >
                    <span
                      className='position-absolute d-flex align-items-center icon pt-2'
                      id='basic-addon1'
                    >
                      <img
                        src={!state.passwordVisibility ? EyeClose : EyeOpen}
                        width='24px'
                        alt='eye'
                      />
                    </span>
                  </div>
                </div>
              </div>
              <button
                className='login-btn1 mt-4 mb-2 cursor-pointer'
                onClick={(evt) => handleLogin(evt)}
              >
                Login
              </button>
              <div className='w-100 cursor-pointer pt-2'>
                <p className='forgot-password'>
                  <a onClick={() => redirect('/forgetpassword')} variant='none'>
                    Forgot Password?
                  </a>
                </p>
              </div>
              {/*

                         
                        <div className='d-flex align-items-center justify-content-center' style={{ height: '20px' }}>
                                <img src={Line2} alt='line2' width='140px' height="1px" />
                                <p className='login-with pl-2 pr-2 mt-3'>Or continue with</p>
                                <img src={Line1} alt='line1' width='140px' height="1px" />
                            </div>
                          
                        <div className='d-flex'>
                                <a href='https://google.com/' target='_blank'>
                                    <div className='login-icons'>
                                        <img src={Google} alt='google' />
                                    </div>
                                </a>
                                <a href='https://facebook.com/' target='_blank'>
                                    <div className='login-icons ml-3'>
                                        <img src={Facebook} alt='fb' />
                                    </div>
                                </a>
                            </div>

                        */}
              <div className='d-flex align-items-center pt-4 cursor-pointer'>
                <p className='text pr-2'> Not registered?</p>
                <p className='text-2 cursor-pointer'>
                  <a onClick={() => redirect('/register')} variant='none'>
                    Create an account
                  </a>
                </p>
              </div>
            </Paper>
          </form>
        </Container>
        <div></div>
      </div>
    </div>
  );
};

export default LoginPage;
