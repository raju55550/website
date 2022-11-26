import React from 'react';
import './dashboard.content.css';
import { useState } from 'react';

import axios from 'axios';
import { useEffect } from 'react';
import { Grid } from '@mui/material';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import ReactSpeedometer from 'react-d3-speedometer';

import { Doughnut } from 'react-chartjs-2';
import { API_BASE_URL } from '../../../../utils/globals';
import { useNavigate } from 'react-router-dom';

ChartJS.register(ArcElement, Tooltip, Legend);

const DashboardContent = () => {
  const navigate = useNavigate();
  const [dataPlan, setDataPlan] = useState({});

  const [userInfo, setUserInfo] = useState(null);
  const user = JSON.parse(localStorage.getItem('user'));

  if (user.token) {
    axios.defaults.headers.common['authorization'] = `Bearer ${user.token}`;
  }

  const getUserInfo = async () => {
    console.log('Working');
    const { data } = await axios(`${API_BASE_URL}/auth/check`);
    setUserInfo(data.user);
    setDataPlan(data.plan);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div
      className='dashboardContainer w-100'
      style={{
        height: '91vh',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          height: '90%',
        }}
      >
        <Grid
          container
          spacing='1em'
          xs={10}
          sx={{
            height: '100%',
          }}
        >
          <Grid container xs={8} spacing='1em'>
            <Grid item xs={12}>
              <h1
                style={{
                  fontWeight: '600',
                }}
              >
                Dashboard
              </h1>
              <h6
                style={{
                  color: '#616161',
                  fontWeight: '600',
                }}
              >
                Fast access to all you need
              </h6>
            </Grid>
            <Grid item xs={6}>
              <div
                style={{
                  height: '35vh',
                  background: '#fff',
                  borderRadius: '8px',
                  padding: '30px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <strong
                  style={{
                    fontSize: '18px',
                  }}
                >
                  Video remaining
                </strong>

                <div className='graphContainer'>
                  <Doughnut
                    data={{
                      labels: ['Remaining', 'Total'],
                      datasets: [
                        {
                          label: '# of Votes',
                          data: [userInfo?.videosLeft, dataPlan.videosAllowed],
                          backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                          ],
                          borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                          ],
                          borderWidth: 1,
                        },
                      ],
                    }}
                  />
                </div>
                <strong
                  style={{
                    color: '#ededed',
                    textAlign: 'end',
                  }}
                >
                  {userInfo?.videosLeft}/{dataPlan.videosAllowed}
                </strong>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div
                style={{
                  height: '35vh',
                  background: '#fff',
                  borderRadius: '8px',
                  padding: '30px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <strong
                  style={{
                    fontSize: '18px',
                  }}
                >
                  Storage remaining
                </strong>
                <div className='graphContainer'>
                  <Doughnut
                    data={{
                      labels: ['Remaining', 'Total'],
                      datasets: [
                        {
                          label: '# of Votes',
                          data: [
                            parseInt(
                              userInfo?.storageLeft &&
                                userInfo?.storageLeft.split(' ')[0]
                            ),
                            parseInt(
                              dataPlan?.storageAllowed &&
                                dataPlan?.storageAllowed.split(' ')[0]
                            ),
                          ],
                          backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                          ],
                          borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                          ],
                          borderWidth: 1,
                        },
                      ],
                    }}
                  />
                </div>
                <strong
                  style={{
                    color: '#ededed',
                    textAlign: 'end',
                  }}
                >
                  {userInfo?.storageLeft}/{dataPlan?.storageAllowed}
                </strong>
              </div>
            </Grid>

            <Grid item xs={12}>
              <div
                style={{
                  height: '25vh',
                  background: '#fff',
                  borderRadius: '8px',
                  padding: '30px',
                  display: 'flex',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                  }}
                >
                  <strong
                    style={{
                      fontSize: '18px',
                    }}
                  >
                    Subscription plan
                  </strong>
                  <span>
                    <b style={{ color: 'deeppink' }}>Current Plan</b>:{' '}
                    {dataPlan.planName}
                  </span>
                  <span>
                    <b style={{ color: 'deeppink' }}>Remaining days</b>: ---
                  </span>
                </div>
                <div
                  style={{ flex: 1, display: 'flex', justifyContent: 'center' }}
                >
                  <ReactSpeedometer
                    customSegmentStops={[0, 500, 750, 900, 1000]}
                    segmentColors={['firebrick', 'tomato', 'gold', 'limegreen']}
                    value={userInfo?.storageLeft}
                  />
                </div>
                <div
                  onClick={() => navigate('/dashboard/Subscriptions')}
                  style={{
                    height: '100%',
                    display: 'flex',
                    alignItems: 'end',
                    cursor: 'pointer',
                  }}
                >
                  <b style={{ color: 'deeppink' }}>Manage Subscription {'>'}</b>
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <div
              style={{
                background: '#fff',
                borderRadius: '8px',
                padding: '20px 24px',
                height: '100%',
              }}
            >
              <strong
                style={{
                  fontSize: '18px',
                }}
              >
                Latest dubbed files
              </strong>
            </div>
          </Grid>

          {/* <div className='videocssrem'>
          <Chart
            chartType='PieChart'
            width='80%'
            height='200px'
            data={data}
            options={options}
          />
        </div>

        <div className='videocssrem1'>
          <Chart
            chartType='PieChart'
            width='80%'
            height='200px'
            data={dataStorage}
            options={optionsStorage}
          />
        </div> */}
        </Grid>
      </div>
    </div>
  );
};

export default DashboardContent;
