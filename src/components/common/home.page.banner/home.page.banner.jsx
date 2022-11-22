import React from 'react';
import { Paper, Typography } from '@mui/material';
import clsx from 'clsx';
import { IsMobileWidth } from '../utill/utils';
import './home.page.banner.css';

const HomePageBanner = (props) => {
    const { image, title, footer, label } = props
    const mobileWidth = IsMobileWidth()
    return (
        <Paper elevation={0} className='position-relative w-100 header'>
            <div className={clsx('d-flex w-100 h-100')}>
                <div className='w-100'>
                    <img
                        src={image}
                        height='100%'
                        width='100%'
                        alt='banner'
                    />
                </div>
                <div className={clsx(mobileWidth && 'pt-5', 'position-absolute d-flex h-100 w-100 justify-content-start align-items-center')}>
                    <div className={clsx(!mobileWidth && 'w-50 pl-4 ml-3 mt-10 mb-4 ', mobileWidth && 'w-70 ml-3 pl-4 mt-10 ')}>
                        <p className={clsx(!mobileWidth && 'text-style mt-4 mb-4', mobileWidth && 'text-style responsive-text-style')}>
                            {title ? title : ''}
                        </p>
                        <p className='mt-10  text-style-2 px-10 '>
                            {label ? label : ''}
                        </p>
                        {footer ?
                            <Typography component="div" className={clsx('mt-5')}>
                                {footer}
                            </Typography> : null
                        }
                    </div>
                </div>
            </div>
        </Paper >
    )
}

export default HomePageBanner