import React from 'react';
import { useStyle } from './app.navbar.style';
import {
  AppBar,
  Toolbar,
  Container,
  Button,
  IconButton,
  Typography,
  Drawer,
} from '@mui/material';
import clsx from 'clsx';
import { IsMobileWidth, IsTabletWidth } from '../utill/utils';
import Logo from '../../../assets/images/PD.svg';
import MenuIcon from '../../../assets/images/navbar-menu-icon.svg';
import CloseIcon from '../../../assets/images/close-icon.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Box } from '@mui/system';
import { Link } from 'react-scroll';
import { Link as NavLink } from 'react-router-dom';
import './app.navbar.css';

const AppNavbar = () => {
  const classes = useStyle();
  const mobileWidth = IsMobileWidth();
  const tabletWidth = IsTabletWidth();
  let location = useLocation();
  let navigate = useNavigate();
  const redirect = (url) => {
    navigate(url);
  };
  const [state, setState] = useState({
    translateTo: 'English',
    translateFrom: 'Arabic',
    isDrawerOpen: false,
  });
  const onChange = (name, value) => {
    setState({ ...state, [name]: value });
  };
  const showDrawer = () => {
    setState({ ...state, isDrawerOpen: true });
  };

  const hideDrawer = () => {
    setState({ ...state, isDrawerOpen: false });
  };
  const isToShowNavbarButtons = (location) => {
    if (location.pathname === '/login') {
      return false;
    } else if (location.pathname === '/register') {
      return false;
    } else if (location.pathname === '/forgetpassword') {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className='position-relative'>
      {!(mobileWidth || tabletWidth) ? (
        <AppBar
          position='absolute'
          classes={{ root: classes.appNavbar }}
          className='m-auto'
        >
          <Container maxWidth='xl' className='p-0'>
            <Toolbar
              className={clsx(
                !mobileWidth &&
                  'd-flex flex-row justify-content-between align-items-center m-auto'
              )}
            >
              <div onClick={() => redirect('/')} className='cursor-pointer'>
                <img src={Logo} className='logocss' alt='logo' />
              </div>
              {isToShowNavbarButtons(location) ? (
                <div className='pr-5 mr-5'>
                  <Link
                    to='home'
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <Button classes={{ root: classes.tabbtn }} variant='none'>
                      Home
                    </Button>
                  </Link>
                  <Link
                    to='about-us'
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <Button classes={{ root: classes.btn }} variant='none'>
                      About us
                    </Button>
                  </Link>
                  <NavLink
                    to='/pricing'
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <Button classes={{ root: classes.btn }} variant='none'>
                      Pricing
                    </Button>
                  </NavLink>
                  <Link
                    to='faqs'
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <Button classes={{ root: classes.btn }} variant='none'>
                      FAQs
                    </Button>
                  </Link>
                  <Link
                    to='contact-us'
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <Button classes={{ root: classes.btn }} variant='none'>
                      Contact Us
                    </Button>
                  </Link>
                </div>
              ) : null}
              {isToShowNavbarButtons(location) ? (
                <div className='pr-3'>
                  <Button
                    onClick={() => redirect('/login')}
                    classes={{ root: classes.btn }}
                    variant='none'
                    className='mr-3'
                  >
                    Sign In
                  </Button>
                  <Button
                    onClick={() => redirect('/register')}
                    classes={{ root: classes.btn2 }}
                    variant='contained'
                  >
                    TRY IT FOR FREE!
                  </Button>
                </div>
              ) : (
                <select
                  className={clsx(classes.selectStyle, 'pl-3 pr-3 p-2 langcss')}
                  onChange={(e) => onChange('translateFrom', e.target.value)}
                >
                  <option className='option' value='English'>
                    English
                  </option>
                  <option className='option' value='Arabic'>
                    Arabic
                  </option>
                </select>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      ) : (
        <AppBar position='absolute' className={classes.responsiveAppNavbar}>
          <Container maxWidth='lg' classes={{ root: classes.container }}>
            <Toolbar className='d-flex flex-row justify-content-between align-items-center m-auto'>
              {state.isDrawerOpen ? (
                <IconButton
                  size='medium'
                  onClick={hideDrawer}
                  className='cursor-pointer'
                >
                  <img
                    src={CloseIcon}
                    width='32px'
                    height='32px'
                    alt='close-icon'
                  />
                </IconButton>
              ) : (
                <IconButton size='medium' onClick={showDrawer}>
                  <img src={MenuIcon} width='32px' height='32px' alt='menu' />
                </IconButton>
              )}
              <Typography
                variant='h6'
                component='div'
                sx={{ display: { md: 'flex' } }}
              >
                <div className='cursor-pointer'>
                  <img src={Logo} height='42px' width='255px' alt='logo' />
                </div>
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
      )}
      <Drawer
        id='sidebar'
        anchor='left'
        open={state.isDrawerOpen}
        onClose={hideDrawer}
        className={classes.drawer}
      >
        <Box
          role='presentation'
          className={clsx(
            tabletWidth
              ? classes.contentOnTablet
              : mobileWidth
              ? classes.contentOnMobile
              : classes.contentOnTablet
          )}
        >
          <div className='d-flex flex-column justify-content-center align-items-center'>
            <Link
              onClick={hideDrawer}
              to='home'
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <Button classes={{ root: classes.btn }} variant='none'>
                Home
              </Button>
            </Link>
            <Link
              onClick={hideDrawer}
              to='about-us'
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <Button classes={{ root: classes.btn }} variant='none'>
                About us
              </Button>
            </Link>
            <Link
              onClick={hideDrawer}
              to='/pricing'
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <Button classes={{ root: classes.btn }} variant='none'>
                Pricing
              </Button>
            </Link>
            <Link
              onClick={hideDrawer}
              to='faqs'
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <Button classes={{ root: classes.btn }} variant='none'>
                FAQs
              </Button>
            </Link>
            <Link
              onClick={hideDrawer}
              to='contact-us'
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <Button classes={{ root: classes.btn }} variant='none'>
                Contact Us
              </Button>
            </Link>
            <Button
              onClick={() => redirect('/login')}
              classes={{ root: classes.btn }}
              variant='none'
            >
              Sign In
            </Button>
            <Button classes={{ root: classes.btn2 }} variant='contained'>
              TRY IT FOR FREE!
            </Button>
          </div>
        </Box>
      </Drawer>
    </div>
  );
};
export default AppNavbar;
