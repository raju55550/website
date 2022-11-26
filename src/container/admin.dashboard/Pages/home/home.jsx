import React, { useEffect } from 'react';
import './home.css';
// import { useStyle } from "./home.style";
import { Button, Grid } from '@mui/material';
import clsx from 'clsx';
import { IsMobileWidth } from '../../../../components/common/utill/utils';
import { useState } from 'react';
import arrowRight2 from '../../../../assets/images/Arrow-2.svg';
import downloadIcon from '../../../../assets/images/download-icon.svg';
import ArrowDownward from '../../../../assets/images/arrow_downward.svg';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import axios from 'axios';
import { Chart, Doughnut } from 'react-chartjs-2';
import { API_BASE_URL } from '../../../../utils/globals';

const DashboardContent = () => {
  const mobileWidth = IsMobileWidth();
  // const classes = useStyle()
  const [state, setState] = useState({
    translateTo: 'English',
    translateFrom: 'Arabic',
  });
  const onChange = (name, value) => {
    setState({ ...state, [name]: value });
  };
  const [numberOfUsers, setNumberOfUsers] = useState(null);
  const [numberOfVideos, setNumberOfVideos] = useState(null);
  const getAllUsers = async () => {
    const { data } = await axios(`${API_BASE_URL}/auth/count`);
    setNumberOfUsers(data.totalUsers);
    setNumberOfVideos(data.totalVideos);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const options = {
    labels: ['Users', 'Videos'],
    datasets: [
      {
        label: '# of Votes',
        data: [numberOfUsers, numberOfVideos],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div className='flex flex-col items-center justify-center w-64 h-32 bg-white shadow-lg ml-28'>
        <Grid container xs={3}>
          <Doughnut data={options} />
        </Grid>
        {/* <h1>
          Total Videos are:{' '}
          {numberOfVideos && (
            <span className='font-bold '>{numberOfVideos}</span>
          )}
        </h1> */}
      </div>
      <div className='flex flex-col items-center justify-center w-64 h-32 bg-white shadow-lg ml-28'>
        {/* <h1>
          Total Users are:{' '}
          {numberOfUsers && <span className='font-bold '>{numberOfUsers}</span>}
        </h1> */}
      </div>
    </>
  );
};

export default DashboardContent;
