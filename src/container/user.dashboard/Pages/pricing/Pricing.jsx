import { Grid, Switch } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_BASE_URL } from '../../../../utils/globals';
import PackageBox from './PackageBox';
import './Pricing.css';

const Pricing = () => {
  const [plans, setPlans] = useState([]);

  const fetchAllPlansData = async () => {
    const { data } = await axios(`${API_BASE_URL}/plans/`);
    console.log(data);
    setPlans(data.plans);
  };
  useEffect(() => {
    fetchAllPlansData();
  }, []);
  const [isMonth, setIsMonth] = useState(true);
  return (
    <section className='pricingContainer'>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around ',
        }}
      >
        <h1 className='mb-8 text-xl font-semibold sm:text-2xl lg:text-3xl xl:text-4xl'>
          Get the plan that suits your needs best <br></br>
        </h1>
        <div>
          <span onClick={() => setIsMonth(true)}>Monthly</span>
          <Switch
            checked={!isMonth}
            color='secondary'
            onChange={(e) => setIsMonth(!e.target.checked)}
          />
          <span onClick={() => setIsMonth(false)}>Yearly</span>
        </div>
      </div>
      <div
        className='tab-content d-flex'
        id='tabs-tabContent'
        style={{
          justifyContent: 'center',
        }}
      >
        <div
          className='tab-pane fade show active pricingCardPlanContainer'
          id='tabs-monthly'
          role='tabpanel'
          aria-labelledby='tabs-monthly-tab'
        >
          <Grid container spacing='1em'>
            {plans?.map((plan) => {
              return (
                <Grid item sm='12' md='4' key={plan._id}>
                  <PackageBox
                    planName={plan.planName}
                    planDescription={plan.planDescription}
                    languages={plan.languages}
                    videosAllowed={plan.videosAllowed}
                    monthlyPrice={plan.monthlyPrice}
                    annualPrice={plan.annualPrice}
                    status={plan.status}
                    storageAllowed={plan.storageAllowed}
                    desc={plan.desc}
                    isMonth={isMonth}
                  />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
