import React from 'react'
import { Typography } from '@mui/material'
import clsx from 'clsx';
import { IsMobileWidth, IsTabletWidth } from '../utill/utils';
import ExpandableView from '../expandable.view/expandable.view';

const FrequentlyAskedQuestionsPanel = (props) => {
    const { data } = props
    const mobileWidth = IsMobileWidth()
    const tabletWidth = IsTabletWidth()
    return (
        <div className='mt-5'>
            {data && data.map((data, index) => {
                return (<div key={index}>
                    <ExpandableView label={data?.label}>
                        <Typography  component="div" className='pb-2' variant={clsx((!mobileWidth || tabletWidth) && 'body1', mobileWidth && 'body2')}>
                            {data?.description}
                        </Typography>
                    </ExpandableView>
                </div>)
            })
            }
        </div>
    )
}

export default FrequentlyAskedQuestionsPanel