import { Paper } from '@mui/material'
import React, { useState } from 'react'
import './Files.css'
import arrowRight from '../../../../assets/images/Arrow-1.svg';
import uploadImage from '../../../../assets/images/Vector-arrow.svg';
import arrowRight2 from '../../../../assets/images/Arrow-2.svg';
import clsx from 'clsx';

import { IsMobileWidth } from '../../../../components/common/utill/utils';

import MenuItem from '@mui/material/MenuItem';
import { Button } from "@mui/material";
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import axios from 'axios';
import { useEffect } from 'react';
import successfullImg from '../../../../assets/images/successful.svg';
import API_BASE_URL from '../../../../utils/globals';

const Uploadfile = () => {

    const mobileWidth = IsMobileWidth()

    const [name] = useState('');

    const [videos, setVideos] = useState([]);
    const [uploaded, setUploaded] = useState(null);
    const [length, setLength] = useState(null);
    const [user, setUser] = useState(null);

 // drag state
 const [dragActive, setDragActive] = React.useState(false);
 const userInfo = JSON.parse(localStorage.getItem('user'));

 if (userInfo.token) {
   axios.defaults.headers.common['authorization'] = `Bearer ${userInfo.token}`;
 }

 // ref
 const inputRef = React.useRef(null);

 // handle drag events
 const handleDrag = (e) => {
   e.preventDefault();
   e.stopPropagation();
   if (e.type === 'dragenter' || e.type === 'dragover') {
     setDragActive(true);
   } else if (e.type === 'dragleave') {
     setDragActive(false);
   }
 };

 // triggers when file is dropped

 const handleDrop = (e) => {
   e.preventDefault();
   e.stopPropagation();
   setDragActive(false);
   if (e.dataTransfer.files && e.dataTransfer.files[0]) {
     setVideos(e.dataTransfer.files);
     setLength(e.dataTransfer.files.length);
   }
 };

 // convert to Bytes
 function toBytes(size, type) {
   const types = ['B', 'KB', 'MB', 'GB', 'TB'];

   const key = types.indexOf(type.toUpperCase());

   if (typeof key !== 'boolean') {
     return size * 1024 ** key;
   }
   return 'invalid type: type must be GB/KB/MB etc.';
 }


      // triggers when file is selected with click
  const handleChange = (e) => {
    if (e.target.files.length > user?.videosLeft) {
      return alert(`Sorry, you have just ${user.videosLeft} video left`);
    }
    if (user.videosLeft <= 0) {
      return alert('Your video limit is completed. Please Upgrade');
    }
    if (user.storageLeft <= 0) {
      return alert('Your storage is empty. Please Upgrade');
    }
    // if (today > new Date(user.planValidity)) {
    //   return alert('Your Period ends');
    // }

    let result;
    if (userInfo?.storageLeft.toLowerCase().includes('mb')) {
      result = toBytes(userInfo?.storageLeft.replace(/[a-z ]/gi, ''), 'MB');
    } else {
      result = toBytes(userInfo?.storageLeft.replace(/[a-z ]/gi, ''), 'GB');
    }

    if (e.target.files[0].size > result) {
      return alert(
        `Sorry, You're only allowed to upload video of size ${userInfo?.storageLeft} `
      );
    } else {
      setVideos(e.target.files);
      var files = e.target.files;
      setLength(files.length);
    }
  };

  
  
    const [state, setState] = useState({
        translateTo: 'English',
        translateFrom: 'Arabic'
    })
    const onChange = (name, value) => {
        setState({ ...state, [name]: value })
    }

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formdata = new FormData();
    for (let key in videos) {
      formdata.append('videos', videos[key]);
    }

    formdata.append('name', name);

    axios
    .post(`http://localhost:5000/media/create`, formdata, {
      onUploadProgress: (data) => {
          setUploaded(Math.round((data.loaded / data.total) * 100));
        },
      })
      .then((success) => {
        setLength(null);
        setVideos([]);
      })
      .catch((error) => {
        // console.log();
        alert(error.response.data.msg);
        setVideos([]);
        setLength(null);
      });
  };

  const fetchUserData = async () => {
    const { data } = await axios( `http://localhost:5000/auth/check`);
    setUser(data?.user);
  };

  useEffect(() => {
    fetchUserData();
  }, []);


  

  return (

<>
<div className='dashboard-container w-100'>
            {}
            <div className={clsx(!mobileWidth && 'pl-4 pt-2 pb-2 pr-4', mobileWidth && 'pt-2 pb-2 pl-2')}>
                <p className={clsx(mobileWidth && 'd-heading1-res', !mobileWidth && 'pl-2', 'd-headingtop pt-2')}>Upload</p>
                <p className={clsx(mobileWidth && 'd-title-res', 'd-subtitle')}>Upload a video or audio</p>
                <br></br>
                <div className='d-flex mt-4 alignselect'>
                    <div className='d-flex flex-column position-relative'>
                        <select className={clsx("selectone", mobileWidth && 'responsive-select')} onChange={(e) => onChange('translateTo', e.target.value)}>
                            <option className='optioncss' value='en'>English</option>
                            <option className='optioncss' value='ar'>Arabic</option>
                        </select>
                        <div className='position-absolute d-flex justify-content-center text-center mt-5 pt-2 w-100'>
                            <p className='audiocss text-center'>Original Audio</p>
                        </div>
                    </div>
                    <img className='ml-3 mr-3' src={arrowRight} alt='arrow' />
                    <div className='d-flex flex-column position-relative'>
                        <select className={clsx("select", mobileWidth && 'responsive-select')} onChange={(e) => onChange('translateFrom', e.target.value)}>
                            <option className='optioncss' value='ar'>Arabic</option>
                            <option className='optioncss' value='en'>English</option>
                            <option className='optioncss' value='fr'>French</option>
                            <option className='optioncss' value='English'>Spanish</option>
                            <option className='optioncss' value='English'>Chinese</option>
                            <option className='optioncss' value='English'>Turkish</option>


                        </select>
                        <div className='position-absolute d-flex justify-content-center text-center mt-5 pt-2 w-100'>
                            <p className='audiocss text-center'> Audio</p>
                        </div>
                    </div>
                </div>
                
                <div className='upload-box1 d-flex justify-content-center p-3'>
          
                
                <div className='w-45'>
                <form
            onSubmit={handleSubmit}
            id='form-file-upload'
            onDragEnter={handleDrag}
            className='flex-1 mb-8 xl:mb-0'
          >
          
                <div>
                    <p className={clsx('headingupload', mobileWidth && 'responsive-text')}>Upload your video </p>
                    <p className={clsx('subheadingupload', mobileWidth && 'responsive-text2')}>MP3, WAV, MP4 AVI file are allowed.</p>
                    <div className='drag-and-drop text-center'>
                        <div className="image-upload">
                            <label htmlFor="file-input" className={clsx(!mobileWidth && 'mt-5 mb-3', mobileWidth && 'mt-4 mb-2', 'text-center')}>
                                <img src={uploadImage} alt='arrow' width={mobileWidth ? '70px' : '115px'} />
                            </label>
                            <input id="file-input" type="file"
                            title=' '
                            name='videos'
                            multiple
                            accept='.mp4, .mkv'
                            onChange={handleChange}
                            ref={inputRef}
                            />
                        </div>
                        <p className={clsx('heading5', mobileWidth && 'res-head5')}>Drag and drop or browse to choose a file  </p>
                        <p className={clsx('heading6', mobileWidth && 'res-head6')}>Maxiumum size: 50KB</p>
                    </div>
                
                </div>
                {length && (
              <button
                type='submit'
                className='px-8 py-2 mt-4 mb-2 text-xs font-bold leading-tight text-center text-white uppercase transition duration-150 ease-in-out border-2 border-blue-600 rounded-full sm:ml-12 md:ml-24 hover:bg-blue-900 hover:text-white focus:outline-none focus:ring-0'
              >
                Upload
              </button>
            )}
                </form>
                </div>


                <div className={clsx('mt-5 pt-5', mobileWidth && 'mt-5', 'd-flex align-items-center')}>
                    <img className='ml-3 mr-3' src={arrowRight2} alt='arrow' />
                </div>
                <div className={clsx(!mobileWidth && 'w-45', mobileWidth && 'w-45 d-flex align-items-center flex-column justify-content-start')}>
                    <p className={clsx('headingupload', mobileWidth && 'responsive-text')}> Dubbed Video </p>
                    <p className={clsx('subheadingupload', mobileWidth && 'responsive-text2')}>Audio will be dubbed to Arabic</p>
                    <div className={clsx(mobileWidth && 'drag-and-drop2-res', 'drag-and-drop3 d-flex align-items-center justify-content-center')}>
                        <p className={clsx('headingmsg p-1', mobileWidth && 'res-head5')}>Results will show here</p>
                    
                        <div
              className={`flex flex-col items-center  ${
                uploaded === 100 ? 'space-y-12' : 'space-y-40'
              } `}
            >
              <div className='text-xl font-bold text-white'>
                {length && <div>{length} Files Selected</div>}
              </div>
              {uploaded === 100 || uploaded === null ? (
                <div></div>
              ) : (
                <div className='w-full bg-white rounded-full dark:bg-gray-700'>
                  <div
                    className='bg-blue-600 text-xs  text-center font-medium text-white  p-0.5 leading-none rounded-full'
                    style={{ width: `${uploaded} %` }}
                  >
                    {`${uploaded}`}%
                  </div>
                </div>
              )}
              {uploaded !== 100 ? (
                <div></div>
              ) : (
                <div>
                  <label className='mt-2 text-lg font-semibold text-white'>
                    File uploaded successfully
                  </label>

                </div>
              )}
            </div>
                    </div>


                    
                </div>

            </div>

            </div>
        </div>
</>
    )
}

export default Uploadfile