import { Paper } from '@mui/material'
import React, { useState } from 'react'
import './file.upload.box.css'
import arrowRight from '../../../assets/images/Arrow-1.svg';
import uploadImage from '../../../assets/images/Vector-arrow.svg';
import arrowRight2 from '../../../assets/images/Arrow-2.svg';
import clsx from 'clsx';
import { IsMobileWidth } from '../utill/utils';

const FileUploadBox = () => {
    const mobileWidth = IsMobileWidth()
    const [state, setState] = useState({
        translateTo: 'English',
        translateFrom: 'Arabic'
    })
    const onChange = (name, value) => {
        setState({ ...state, [name]: value })
    }
    return (
    <>
    </>
    )
}

export default FileUploadBox