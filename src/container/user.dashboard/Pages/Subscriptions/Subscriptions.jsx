import React from 'react';
import clsx from 'clsx';
import './Subscription.css';
import { IsMobileWidth } from '../../../../components/common/utill/utils';

import { Link } from 'react-router-dom';
import axios from 'axios';

import { API_BASE_URL } from '../../../../utils/globals';
import { useLocation, useNavigate } from 'react-router-dom';

const Subscriptions = () => {
  const mobileWidth = IsMobileWidth();
  let navigate = useNavigate();

  const redirect = (url) => {
    navigate(url);
  };

  const user = JSON.parse(localStorage.getItem('user'));

  const [payments, setPayments] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [startDate, setStartDate] = React.useState('');
  const [endDate, setEndDate] = React.useState('');

  const inputRef = React.useRef();

  const getAllPayments = async () => {
    const { data } = await axios(`${API_BASE_URL}/transactions/users`);
    setPayments(data?.transactions);
  };

  if (user.token) {
    axios.defaults.headers.common['authorization'] = `Bearer ${user.token}`;
  }

  const fetchLatest = async () => {
    const { data } = await axios.post(
      `${API_BASE_URL}/transactions/users-filtered`,
      {
        startDate,
        endDate,
      }
    );

    setPayments(data.filteredTransactions);
  };

  React.useEffect(() => {
    getAllPayments();
  }, []);

  return (
    <div className='dashboard-container w-100'>
      {}
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
            'd-headingtop pt-2'
          )}
        >
          Manage your subscription
        </p>
        <br></br>
        <p className={clsx(mobileWidth && 'd-title-res', 'd-subtitle')}>
          Upgrade your plan, change your payment method and much more.
        </p>
        <br></br>
      </div>
      <div
        className='card py-10'
        style={{ width: '60rem', margin: '3px 3px 3px 21px' }}
      >
        <div className='row no-gutters'>
          <div className='col-md-7'>
            <div className='card-body'>
              <h5 className='card-title currentplan'>Current Plan</h5>
              <p className='card-text pro'>Pro</p>
              <p className='card-text text-muted'>
                Unlimited access to lorem ipsum dolor sit amet, consectetur
                adipiscing elit
              </p>
              <p className='card-text nextpayment mt-4'>
                Next Payment $23.99 on 30 Jul, 2022
              </p>
            </div>
          </div>
          <div className='col-md-5'>
            <div className='card-body'>
              <div className='mb-4'>
                <button
                  className=' upgrade'
                  onClick={() => redirect('/pricing')}
                >
                  Upgrade Plan
                </button>
              </div>
              <div>
                <button className='subscription'>Cancel Subscription</button>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className='row no-gutters'>
          <div className='col-md-5'>
            <div className='card-body'>
              <h5 className='card-title payment'>Payment method</h5>

              <p className='card-text'>Next Payment $23.99 on 30 Jul, 2022</p>
            </div>
          </div>
          <div className='col-md-7'>
            <div className='card-body'>
              <div className='row no-gutters'>
                <div className='col-md-4'>
                  <button className='rmvbtn'>Remove</button>
                </div>
                <div className='col-md-4'>
                  <button className='upgrade'>Change Payment Method</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className='card '
        style={{ width: '60rem', margin: '20px 3px 3px 21px' }}
      >
        <div className='row no-gutters'>
          <div className='col-md-10'>
            <div className='card-body'>
              <p className='card-text pro'>Billing History</p>
              <div className='table-con'>
                <table class='table'>
                  <thead>
                    <tr>
                      <th
                        scope='col'
                        className={clsx('th', mobileWidth && 'th-res')}
                      >
                        Plan Id{' '}
                      </th>
                      <th
                        scope='col'
                        className={clsx('th', mobileWidth && 'th-res')}
                      >
                        Current Plan
                      </th>
                      <th
                        scope='col'
                        className={clsx('th', mobileWidth && 'th-res')}
                      >
                        Email
                      </th>
                      <th
                        scope='col'
                        className={clsx('th', mobileWidth && 'th-res')}
                      >
                        Amount
                      </th>
                      <th
                        scope='col'
                        className={clsx('th', mobileWidth && 'th-res')}
                      >
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className='tablehead flex-1 sm:flex-none'>
                    {payments
                      ?.filter((val) => {
                        if (searchTerm === '') {
                          return val;
                        } else if (
                          val.email
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase())
                        ) {
                          return val;
                        }
                      })
                      .map((transaction) => {
                        const date = new Date(transaction.createdAt).getTime();
                        return (
                          <tr
                            className=' flex flex-col mb-2 flex-no wrap sm:table-row sm:mb-0'
                            key={transaction._id}
                          >
                            <td className='p-3 hover:bg-gray-100'>
                              {`Plan-${transaction.planName}-${date}`}
                            </td>
                            <td className='p-3 truncate hover:bg-gray-100'>
                              {transaction.planName}
                            </td>
                            <td className='p-3 hover:bg-gray-100'>
                              {transaction.email}
                            </td>
                            <td className='p-3 hover:bg-gray-100'>
                              {transaction.amount}$
                            </td>
                            <td className='p-3 hover:bg-gray-100'>
                              {transaction.createdAt}$
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
