import { Check } from '@mui/icons-material';
import React from 'react';

const PackageBox = ({
  planName = '',
  planDescription = '',
  languages = 'Hindi',
  videosAllowed = '',
  monthlyPrice = '',
  annualPrice = '',
  status = 'Free',
  storageAllowed = '',
  desc = [],
  isMonth = true,
  id,
}) => {
  return (
    <div className='pricingPlanCard'>
      <p className='planName'>{planName}</p>
      <span className='planDescription'>{planDescription}</span>
      <h1 className='planMonthlyPrice'>
        <span>$</span>
        {isMonth ? monthlyPrice : annualPrice} /
        <sub>{isMonth ? 'Month' : 'Year'}</sub>
      </h1>

      <span className='planDescription'>Description</span>
      {desc.map((i, index) => (
        <div className='planDescriptionItem' key={index}>
          <Check fill='#048a8f' color='#048a8f' />
          <p>{i}</p>
        </div>
      ))}
      <div
        className='addDescBtn'
        onClick={() => {}}
        style={{
          marginTop: '3em',
        }}
      >
        Get Started
      </div>
    </div>
  );
};

export default PackageBox;
