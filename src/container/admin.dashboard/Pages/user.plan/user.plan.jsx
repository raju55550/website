import React from 'react';
// import { useStyle } from "./home.style";
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';
import clsx from 'clsx';
import { useState } from 'react';
import { IsMobileWidth } from '../../../../components/common/utill/utils';

import axios from 'axios';
import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import './UserPlan.css';
import { API_BASE_URL } from '../../../../utils/globals';

const UserPlan = () => {
  const navigate = useNavigate();
  const [plans, setPlans] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [deleteOpen, setDeleteOpen] = useState({
    status: false,
    id: null,
  });

  const fetchAllPlansData = async () => {
    const { data } = await axios(`${API_BASE_URL}/plans/`);
    setPlans(data?.plans);
  };

  const deletePlan = async (id) => {
    await axios.delete(`${API_BASE_URL}/plans/update/${id}`);
    setDeleteOpen({
      status: false,
      id: null,
    });
    fetchAllPlansData();
  };

  const fetchLatest = async () => {
    const { data } = await axios.post(`${API_BASE_URL}/plans/all`, {
      startDate,
      endDate,
    });

    setPlans(data?.filteredPlans);
  };

  useEffect(() => {
    if (!startDate && !endDate) {
      fetchAllPlansData();
    }
  }, [startDate, endDate]);

  const editPlan = async (id) => {
    navigate(`/admin-dashboard/edit-plan/${id}`);
  };

  useEffect(() => {
    if (startDate && startDate > endDate && endDate) {
      alert('End Date must be greater than start Date');
      setEndDate('');
      return;
    }
  }, [endDate, startDate]);

  const mobileWidth = IsMobileWidth();
  // const classes = useStyle()
  const [state, setState] = useState({
    translateTo: 'English',
    translateFrom: 'Arabic',
  });
  const onChange = (name, value) => {
    setState({ ...state, [name]: value });
  };
  return (
    <div className='dashboard-container w-100'>
      <Dialog
        open={deleteOpen.status}
        onClose={() => setDeleteOpen({ id: null, status: false })}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          {'Do you really want to delete this plan?'}
        </DialogTitle>
        {/* <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent> */}
        <DialogActions>
          <Button onClick={() => setDeleteOpen({ id: null, status: false })}>
            Disagree
          </Button>
          <Button onClick={() => deletePlan(deleteOpen.id)} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
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
          User's Plan
        </p>
        <p className={clsx(mobileWidth && 'd-title-res', 'd-title')}>
          View all your plan details here
        </p>
        <br></br>
        <div className='table-con'>
          <table class='table'>
            <thead>
              <tr>
                <th scope='col' className={clsx('th', mobileWidth && 'th-res')}>
                  Plan Name
                </th>
                <th scope='col' className={clsx('th', mobileWidth && 'th-res')}>
                  Videos Allowed
                </th>
                <th scope='col' className={clsx('th', mobileWidth && 'th-res')}>
                  Storage Allowed
                </th>
                <th scope='col' className={clsx('th', mobileWidth && 'th-res')}>
                  Monthly Price
                </th>
                <th scope='col' className={clsx('th', mobileWidth && 'th-res')}>
                  Annual Price
                </th>
                <th scope='col' className={clsx('th', mobileWidth && 'th-res')}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {plans
                ?.filter((val) => {
                  if (searchTerm === '') {
                    return val;
                  } else if (
                    val.planName
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((plan) => {
                  return (
                    <tr>
                      <td className={clsx('td', mobileWidth && 'td-res')}>
                        {plan.planName}
                      </td>
                      <td className={clsx('td', mobileWidth && 'td-res')}>
                        {plan.videosAllowed}
                      </td>
                      <td className={clsx('td', mobileWidth && 'td-res')}>
                        {plan.storageAllowed}
                      </td>
                      <td className={clsx('td', mobileWidth && 'td-res')}>
                        {plan.monthlyPrice} $
                      </td>
                      <td className={clsx('td', mobileWidth && 'td-res')}>
                        {plan.annualPrice} $
                      </td>
                      <td>
                        <Button
                          onClick={() =>
                            setDeleteOpen({ status: true, id: plan._id })
                          }
                          className={clsx(
                            'table-btn pt-2',
                            mobileWidth && 't-btn-res'
                          )}
                        >
                          Delete
                        </Button>
                      </td>

                      <td>
                        <Button
                          onClick={() => editPlan(plan._id)}
                          className={clsx(
                            'table-btn pt-2',
                            mobileWidth && 't-btn-res'
                          )}
                        >
                          Edit
                        </Button>
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

export default UserPlan;
