import React from 'react';
import './Transactions.css';
// import { useStyle } from "./dashboard.content.style";
import { Button } from "@mui/material";
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
import API_BASE_URL from '../../../../utils/globals';



const Transactions = () => {
    const mobileWidth = IsMobileWidth()
   
    const [payments, setPayments] = React.useState([]);
    const [searchTerm, setSearchTerm] = React.useState('');
    const [startDate, setStartDate] = React.useState('');
    const [endDate, setEndDate] = React.useState('');
  
    const inputRef = React.useRef();
  
    const getAllPayments = async () => {
      const { data } = await axios(
            `http://localhost:5000/transactions/users`);
      setPayments(data?.transactions);
    };


    const user = JSON.parse(localStorage.getItem('user'));
    if (user.token) {
      axios.defaults.headers.common['authorization'] = `Bearer ${user.token}`;
    }
  
    const fetchLatest = async () => {
      const { data } = await axios.post(
            `http://localhost:5000/transactions/users-filtered`,
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
            <div className={clsx(!mobileWidth && 'pl-4 pt-2 pb-2 pr-4', mobileWidth && 'pt-2 pb-2 pl-2')}>
                <p className={clsx(mobileWidth && 'd-headingtop-res', !mobileWidth && 'pl-2', 'd-headingtop pt-2')}>Transactions</p>
               <br></br>
                <p className={clsx(mobileWidth && 'dub-title-res', 'dub-title')}>View all your previous transactions here</p>
               <br></br>
                <div className='table-con'>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col" className={clsx('th', mobileWidth && 'th-res')}>Plan Id	</th>
                                <th scope="col" className={clsx('th', mobileWidth && 'th-res')}>Current Plan</th>
                                <th scope="col" className={clsx('th', mobileWidth && 'th-res')}>Email</th>
                                <th scope="col" className={clsx('th', mobileWidth && 'th-res')}>Amount</th>
                                <th scope="col" className={clsx('th', mobileWidth && 'th-res')}>Date</th>
                            </tr>
                        </thead>
                        <tbody className='tablehead flex-1 sm:flex-none'>
              {payments
                ?.filter((val) => {
                  if (searchTerm === '') {
                    return val;
                  } else if (
                    val.email.toLowerCase().includes(searchTerm.toLowerCase())
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
    )
}

export default Transactions