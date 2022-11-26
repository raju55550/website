import React from 'react';
import './project.css';
// import { useStyle } from "./dashboard.content.style";
import { Button } from '@mui/material';
import clsx from 'clsx';
import { IsMobileWidth } from '../../../../components/common/utill/utils';
import { useState } from 'react';
import ArrowDownward from '../../../../assets/images/arrow_downward.svg';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import moment from 'moment';
import axios from 'axios';
import { useEffect, useRef } from 'react';

import FileDownload from 'js-file-download';
import { API_BASE_URL } from '../../../../utils/globals';

const Project = () => {
  const mobileWidth = IsMobileWidth();

  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const inputRef = useRef();

  const user = JSON.parse(localStorage.getItem('user'));
  if (user.token) {
    axios.defaults.headers.common['authorization'] = `Bearer ${user.token}`;
  }
  const listVideos = async () => {
    const { data } = await axios(`${API_BASE_URL}/media/user-all`);
    setVideos(data.media);
  };

  const fetchLatest = async () => {
    const { data } = await axios.post(`${API_BASE_URL}/media/filter`, {
      startDate,
      endDate,
    });

    setVideos(data.filteredVideos);
  };

  useEffect(() => {
    listVideos();
  }, []);

  const downloadVideo = (e, name) => {
    e.preventDefault();
    axios({
      url: `${API_BASE_URL}/media/download`,
      method: 'POST',
      responseType: 'blob',
      data: {
        name,
      },
    }).then((res) => {
      FileDownload(res.data, name);
    });
  };

  useEffect(() => {
    if (startDate && startDate > endDate && endDate) {
      alert('End Date must be greater than start Date');
      setEndDate('');
      return;
    }
  }, [endDate, startDate]);

  return (
    <div className='dashboard-container w-100'>
      {/* <nav className='pl-2 pt-4 pb-4 z-index'>
                <div className="">
                    <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
                        <Button
                            classes={{ root: classes.btn }}
                            variant="none"
                        >
                            Home
                        </Button>
                    </Link>
                    <Link to="about-us" spy={true} smooth={true} offset={50} duration={500}>
                        <Button
                            classes={{ root: classes.btn }}
                            variant="none"
                        >
                            About us
                        </Button>
                    </Link>
                    <Link to="pricing" spy={true} smooth={true} offset={50} duration={500}>
                        <Button
                            classes={{ root: classes.btn }}
                            variant="none"
                        >
                            Pricing
                        </Button>
                    </Link>
                    <Link to="faqs" spy={true} smooth={true} offset={50} duration={500}>
                        <Button
                            classes={{ root: classes.btn }}
                            variant="none"
                        >
                            FAQs
                        </Button>
                    </Link>
                    <Link to="contact-us" spy={true} smooth={true} offset={50} duration={500}>
                        <Button
                            classes={{ root: classes.btn }}
                            variant="none"
                        >
                            Contact Us
                        </Button>
                    </Link>
                </div>

            </nav> */}
      <div
        className={clsx(
          !mobileWidth && 'pl-4 pt-2 pb-2 pr-4',
          mobileWidth && 'pt-2 pb-2 pl-2'
        )}
      >
        <p
          className={clsx(
            mobileWidth && 'd-heading1-res',
            !mobileWidth && 'pl-2',
            'd-heading1 pt-2'
          )}
        >
          Dubbed Files
        </p>
        <br></br>
        <p className={clsx(mobileWidth && 'd-title-res', 'd-title')}>
          View all your previous projects here
        </p>
        <br></br>
        <div className='table-con'>
          <table class='table'>
            <thead>
              <tr>
                <th scope='col' className={clsx('th', mobileWidth && 'th-res')}>
                  File Name
                </th>
                <th scope='col' className={clsx('th', mobileWidth && 'th-res')}>
                  Size
                </th>
                <th scope='col' className={clsx('th', mobileWidth && 'th-res')}>
                  Last modified
                </th>
                <th scope='col' className={clsx('th', mobileWidth && 'th-res')}>
                  Original Language
                </th>
                <th scope='col' className={clsx('th', mobileWidth && 'th-res')}>
                  other Language
                </th>
                <th scope='col' className={clsx('th', mobileWidth && 'th-res')}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className='tablehead flex-1 sm:flex-none'>
              {videos
                ?.filter((val) => {
                  if (searchTerm === '') {
                    return val;
                  } else if (
                    val.name.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((video) => {
                  return (
                    <tr
                      className='tablehead flex flex-col mb-2 flex-no wrap sm:table-row sm:mb-0'
                      key={video._id}
                    >
                      <td className='p-3 hover:bg-gray-100'>{video.name}</td>
                      <td className='p-3 truncate hover:bg-gray-100'>
                        {video.size} MB
                      </td>
                      <td className='p-3 hover:bg-gray-100'>
                        {' '}
                        {moment(video.createdAt).format('MMM Do YY')}
                      </td>
                      <td className='p-3 hover:bg-gray-100'>English</td>

                      <td className='p-3 hover:bg-gray-100  '>Arabic</td>

                      <td>
                        <td>
                          <Button
                            className={clsx(
                              'table-btn2 pt-2',
                              mobileWidth && 't-btn2-res'
                            )}
                          >
                            View
                          </Button>
                        </td>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Project;
