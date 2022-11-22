import React from 'react';
import './register.page.css';
import FooterImage from '../../assets/images/Footer.png';

import { Paper, Container } from '@mui/material';
import { useState } from 'react';
import {
  IsMobileWidth,
  IsTabletWidth,
} from '../../components/common/utill/utils';
import clsx from 'clsx';
import EyeClose from '../../assets/images/eye-close.svg';
import EyeOpen from '../../assets/images/visibility.svg';
import Line1 from '../../assets/images/Line-1.png';
import Line2 from '../../assets/images/Line-2.png';
import Facebook from '../../assets/images/F.png';
import Google from '../../assets/images/G.png';
import AppNavbar from '../../components/common/app.navbar/app.navbar';

import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlinePriceChange } from 'react-icons/md';
import axios from 'axios';
import { PayPalButton } from 'react-paypal-button-v2';
import { FormattedMessage } from 'react-intl';
import InjectIntl from 'react-intl-inject';

import API_BASE_URL from '../../utils/globals';

const RegisterPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordType, setPasswordType] = useState('password');
  const navigate = useNavigate();
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState('Choose Plan');
  const [amount, setAmount] = useState(null);

  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      return;
    }
    setPasswordType('password');
  };

  const fetchAllPlansData = async () => {
    const { data } = await axios(`http://localhost:5000/plans/`);
    setPlans(data.plans);
  };
  useEffect(() => {
    fetchAllPlansData();
    if (
      selectedPlan == 0 ||
      selectedPlan === 'Free Plan' ||
      selectedPlan === 'Choose Plan'
    ) {
      return setSdkReady(false);
    }
  }, [selectedPlan]);

  const [sdkReady, setSdkReady] = useState(false);

  const payToPaypal = () => {
    const addPayPalScript = async () => {
      const clientId =
        'Acagibbz1X7hH5MBBpS0-yM1aiofGL3_-EELEV8f2vh7dglgzhEX-8drui4TW4FoDeLti_zpzJOGlkje';
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };

      document.body.appendChild(script);
    };
    if (!window.paypal) {
      addPayPalScript();
    } else {
      setSdkReady(true);
    }
  };

  const filteredPlans = plans?.filter((plan) => {
    if (
      plan.annualPrice === parseInt(selectedPlan) ||
      plan.monthlyPrice === parseInt(selectedPlan)
    ) {
      let result = Object.assign({}, plan);
      return result;
    }
  });
  const result = Object.assign({}, filteredPlans);

  const paymentDone = async (details, data) => {
    const planId = result[0]['_id'];
    const planName = result[0]['name'];

    const transactionsData = { amount, email, planId, planName };
    if (details.status === 'COMPLETED') {
      setSdkReady(false);
      alert('Done');
      await axios.post(`http://localhost:5000/transactions`, transactionsData);
      navigate('/login');
    }
  };

  const collectData = async (e) => {
    e.preventDefault();
    const planId = result[0]['_id'];
    const otherId = result[0]['_id'];
    const storageLeft = result[0]['storageAllowed'];
    const videosLeft = result[0]['videosAllowed'];
    const data = {
      planId,
      storageLeft,
      videosLeft,
      firstName,
      lastName,
      email,
      password,
      otherId,
    };

    await axios.post(`http://localhost:5000/createaccount`, data);

    if (selectedPlan == 0 || selectedPlan === 'Free Plan') {
      navigate('/login');
    }
  };

  const mobileWidth = IsMobileWidth();
  const tabletWidth = IsTabletWidth();
  const [state, setState] = useState({
    passwordVisibility: false,
    email: '',
  });

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
        <img
          className='position-absolute'
          width='100%'
          height='100%'
          alt='login'
        />
        <Container className='w-100 h-100 position-absolute d-flex align-items-center justify-content-end '>
          <form
            onSubmit={collectData}
            className='w-100 h-100 d-flex align-items-center justify-content-end'
          >
            <Paper
              className={clsx(
                !(mobileWidth || tabletWidth) && 'w-40',
                tabletWidth && 'w-60',
                mobileWidth && 'w-95 m-auto',
                'pl-4 pr-4 pt-4 pb-4 mr-5'
              )}
            >
              <div className='mb-3 pt-2'>
                <p className='login-head'>Sign up with your email</p>
              </div>

              <div className='form-group'>
                <label className='label' htmlFor='exampleInputEmail1'>
                  First Name
                </label>
                <input
                  type='text'
                  className='inputtwo'
                  aria-describedby='emailHelp'
                  placeholder='Please enter your first name'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className='form-group'>
                <label className='label' htmlFor='exampleInputEmail1'>
                  Last Name
                </label>
                <input
                  type='text'
                  className='inputtwo'
                  aria-describedby='emailHelp'
                  placeholder='Please enter your last name'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>

              <div className='form-group'>
                <label className='label' htmlFor='exampleInputEmail1'>
                  Email
                </label>
                <input
                  type='email'
                  className='inputtwo'
                  aria-describedby='emailHelp'
                  placeholder='Please enter your email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className='form-group'>
                <label className='label' htmlFor='exampleInputPassword1'>
                  Password
                </label>
                <div className='input-group mb-3'>
                  <input
                    type={state.passwordVisibility ? 'text' : 'password'}
                    className='form-control inputtwo'
                    placeholder='Enter password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
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
              <select
                id='plan_field'
                className='regselectcss relative self-center flex-1 flex-auto flex-grow flex-shrink w-px h-10 px-3 font-normal leading-normal border-0 rounded rounded-l-none outline-none cursor-pointer border-grey-light'
                value={selectedPlan}
                onChange={(e) => setSelectedPlan(e.target.value)}
                required
                onClick={(e) => {
                  const amt = parseInt(e.target.value);

                  setAmount(amt);
                }}
              >
                <option value='Choose Plan'>Choose Plan</option>
                {plans.map((plan) => (
                  <>
                    <option value={plan.monthlyPrice}>
                      {plan.name} (Monthly ${plan.monthlyPrice})
                    </option>
                    <option value={plan.annualPrice}>
                      {plan.name} (Yearly ${plan.annualPrice})
                    </option>
                  </>
                ))}
              </select>

              <div className='text-center'>
                <button
                  type='submit'
                  href='#id'
                  className='login-btn2 mt-4 mb-2 cursor-pointer'
                  onClick={payToPaypal}
                >
                  SignUp
                </button>
                {sdkReady && (
                  <h1 className='mb-4 text-lg font-bold text-center '>
                    One Step to complete the payment
                  </h1>
                )}
                <div className='w-64 mx-auto'>
                  {sdkReady && lastName && firstName && email && password && (
                    <PayPalButton amount={amount} onSuccess={paymentDone} />
                  )}
                </div>
              </div>

              <div className='d-flex align-items-center pt-4 cursor-pointer'>
                <p className='text pr-2'> Already have an account? </p>
                <p className='text-2 cursor-pointer'>
                  <Link to='/login'>Sign in</Link>
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

export default RegisterPage;
