import { Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { API_BASE_URL } from '../../../../utils/globals';
import './createplan.css';

const initState = {
  planName: '',
  planDescription: '',
  languages: 'Hindi',
  videosAllowed: '',
  monthlyPrice: '',
  annualPrice: '',
  status: 'Free',
  storageAllowed: '',
  desc: [],
};
const CreatePlan = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [planData, setPlanData] = useState(initState);

  const allLanguages = ['Hindi', 'English'];

  const allStatuses = ['Guest', 'Free', 'Active', 'Inactive'];
  useEffect(() => {
    if (id) {
      axios.get(`${API_BASE_URL}/plans/single/${id}`).then((res) => {
        const tempData = {};
        Object.keys(initState).forEach((i) => {
          tempData[i] = res.data.plan[i];
        });
        console.log(tempData);
        setPlanData(tempData);
      });
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(
      !Object.values(planData).every((i) => i),
      !planData.desc.length,
      !planData.desc.every((i) => i)
    );
    console.log(planData);
    if (
      !Object.values(planData).every((i) => i) ||
      !planData.desc.length ||
      !planData.desc.every((i) => i)
    ) {
      alert('Please provide all the information ');
      return;
    }
    try {
      if (id) {
        await axios.patch(`${API_BASE_URL}/plans/update/${id}`, planData);
        alert('Plan Updated');
        navigate('/admin-dashboard/user-plan');
      } else {
        await axios.post(`${API_BASE_URL}/plans/create`, planData);
        alert('Plan Created');
        setPlanData(initState);
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className='createPlanContainer'>
      <h2>{id ? 'Edit Existing' : 'Create New'} Plan</h2>
      <h6>Customize the data your plan displays</h6>
      <div className='createPlanFormContainer'>
        <Grid container xs='6' spacing={'2em'}>
          <Grid
            className='planForm'
            display={'flex'}
            flexDirection='column'
            item
            sm={12}
            md={6}
          >
            <label className='label'>Plan Title</label>
            <input
              type='text'
              value={planData.planName}
              onChange={(e) =>
                setPlanData({ ...planData, planName: e.target.value })
              }
            />
          </Grid>
          <Grid
            className='planForm'
            display={'flex'}
            flexDirection='column'
            item
            sm={12}
            md={6}
          >
            <label className='label'>Plan Description</label>
            <input
              type='text'
              value={planData.planDescription}
              onChange={(e) =>
                setPlanData({ ...planData, planDescription: e.target.value })
              }
            />
          </Grid>
          <Grid
            className='planForm'
            display={'flex'}
            flexDirection='column'
            item
            sm={12}
            md={6}
          >
            <label className='label'>Monthly Price</label>
            <input
              type='number'
              value={planData.monthlyPrice}
              onChange={(e) =>
                setPlanData({ ...planData, monthlyPrice: e.target.value })
              }
            />
          </Grid>
          <Grid
            className='planForm'
            display={'flex'}
            flexDirection='column'
            item
            sm={12}
            md={6}
          >
            <label className='label'>Annual price</label>
            <input
              type='number'
              value={planData.annualPrice}
              onChange={(e) =>
                setPlanData({ ...planData, annualPrice: e.target.value })
              }
            />
          </Grid>
          <Grid display={'flex'} flexDirection='column' item xs={12}>
            <h5>This Plan includes</h5>
          </Grid>
          <Grid
            className='planForm'
            display={'flex'}
            flexDirection='column'
            item
            sm={12}
            md={6}
          >
            <label className='label'>Number of videos</label>
            <input
              type='number'
              value={planData.videosAllowed}
              onChange={(e) =>
                setPlanData({ ...planData, videosAllowed: e.target.value })
              }
            />
          </Grid>
          <Grid
            className='planForm'
            display={'flex'}
            flexDirection='column'
            item
            sm={12}
            md={6}
          >
            <label className='label'>Storage Allowed</label>
            <input
              type='text'
              value={planData.storageAllowed}
              onChange={(e) =>
                setPlanData({ ...planData, storageAllowed: e.target.value })
              }
            />
          </Grid>
          {planData.desc.map((item, index) => (
            <Grid
              key={index}
              display={'flex'}
              flexDirection='column'
              item
              xs={12}
            >
              <label className='label'>Description {index + 1}</label>
              <input
                type='text'
                value={item}
                onChange={(e) => {
                  const tempData = planData.desc;
                  tempData[index] = e.target.value;
                  setPlanData({
                    ...planData,
                    desc: tempData,
                  });
                }}
              />
            </Grid>
          ))}
          <Grid item xs='12'>
            <div
              className='addDescBtn'
              onClick={() => {
                setPlanData({ ...planData, desc: [...planData.desc, ''] });
              }}
            >
              + Add new description
            </div>
          </Grid>
        </Grid>
        <div className='planFormBtn'>
          <button onClick={() => setPlanData(initState)}>Cancel</button>
          <button onClick={handleSubmit}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default CreatePlan;
