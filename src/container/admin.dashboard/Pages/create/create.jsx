import { Paper } from '@mui/material'
import React, { useState } from 'react'
import './create.css'
import arrowRight from '../../../../assets/images/Arrow-1.svg';
import uploadImage from '../../../../assets/images/Vector-arrow.svg';
import arrowRight2 from '../../../../assets/images/Arrow-2.svg';
import clsx from 'clsx';
import { IsMobileWidth } from '../../../../components/common/utill/utils';


const Create = () => {
    const mobileWidth = IsMobileWidth()
    const [state, setState] = useState({
        translateTo: 'English',
        translateFrom: 'Arabic'
    })
    const onChange = (name, value) => {
        setState({ ...state, [name]: value })
    }
    return (
        <Paper className='paper w-100 pt-4 pb-4'>
            <div className='w-100 d-flex flex-column justify-content-center align-items-center'>
                <p className='heading mt-4'>Try </p>
                <p className='heading2'>Upload a video or audio</p>
                <div className='d-flex mt-4 mb-4'>
                    <div className='d-flex flex-column position-relative'>
                        <select className={clsx("select", mobileWidth && 'responsive-select')} onChange={(e) => onChange('translateTo', e.target.value)}>
                            <option className='option1' value='en'>English</option>
                            <option className='option1' value='ar'>Arabic</option>
                        </select>
                        <div className='position-absolute d-flex justify-content-center text-center mt-5 pt-2 w-100'>
                            <p className='audio text-center'>Original Audio</p>
                        </div>
                    </div>
                    <img className='ml-3 mr-3' src={arrowRight} alt='arrow' />
                    <div className='d-flex flex-column position-relative'>
                        <select className={clsx("select", mobileWidth && 'responsive-select')} onChange={(e) => onChange('translateFrom', e.target.value)}>
                            <option className='option1' value='ar'>Arabic</option>
                            <option className='option1' value='en'>English</option>
                            <option className='option1' value='fr'>French</option>
                            <option className='option1' value='English'>Spanish</option>
                            <option className='option1' value='English'>Chinese</option>
                            <option className='option1' value='English'>Turkish</option>


                        </select>
                        <div className='position-absolute d-flex justify-content-center text-center mt-5 pt-2 w-100'>
                            <p className='audio text-center'>converted Audio</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='upload-box d-flex justify-content-center p-3'>
                <div className='w-45'>
                    <p className={clsx('heading3', mobileWidth && 'responsive-text')}>Upload your video </p>
                    <p className={clsx('heading4', mobileWidth && 'responsive-text2')}>MP3, WAV, MP4 AVI file are allowed.</p>
                    <div className='drag-and-drop text-center'>
                        <div className="image-upload">
                            <label htmlFor="file-input" className={clsx(!mobileWidth && 'mt-5 mb-3', mobileWidth && 'mt-4 mb-2', 'text-center')}>
                                <img src={uploadImage} alt='arrow' width={mobileWidth ? '70px' : '115px'} />
                            </label>
                            <input id="file-input" type="file" />
                        </div>
                        <p className={clsx('heading5', mobileWidth && 'res-head5')}>Drag and drop or browse to choose a file  </p>
                        <p className={clsx('heading6', mobileWidth && 'res-head6')}>Maxiumum size: 50KB</p>
                    </div>
                </div>
                <div className={clsx('mt-5 pt-5', mobileWidth && 'mt-5', 'd-flex align-items-center')}>
                    <img className='ml-3 mr-3' src={arrowRight2} alt='arrow' />
                </div>
                <div className={clsx(!mobileWidth && 'w-45', mobileWidth && 'w-45 d-flex align-items-center flex-column justify-content-start')}>
                    <p className={clsx('heading3', mobileWidth && 'responsive-text')}> converted Video </p>
                    <p className={clsx('heading4', mobileWidth && 'responsive-text2')}>Audio will be dubbed to Arabic</p>
                    <div className={clsx(mobileWidth && 'drag-and-drop2-res', 'drag-and-drop2 d-flex align-items-center justify-content-center')}>
                        <p className={clsx('heading5 p-1', mobileWidth && 'res-head5')}>Results will show here</p>
                    </div>
                </div>
            </div>
            
        </Paper >
    )
}

export default Create