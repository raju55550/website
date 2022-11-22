import React, { useState } from 'react';
import { Collapse, Typography } from '@mui/material';
import { useStyle } from './expandable.view.style';
import clsx from 'clsx';
import { IsMobileWidth, IsTabletWidth } from '../utill/utils';
import plusIcon from '../../../assets/images/plus-icon.png';
import closeIcon from '../../../assets/images/close.png';

export default function ExpandableView(props) {
    const [collapsed, setCollapsed] = useState(false)
    const { label } = props
    const classes = useStyle()
    const mobileWidth = IsMobileWidth()
    const tabletWidth = IsTabletWidth()
    return (
        <div>
            <Typography  component="div" elevation={0} className="d-block cursor-pointer mt-3 mb-3" classes={{ root: classes.expandableView }}>
                <div elevation={0} className={clsx(classes.paper, 'w-100 d-flex align-items-center justify-content-between')} onClick={() => { setCollapsed(!collapsed) }}>
                    <div className='d-flex'>
                        <Typography  component="div" color='dark.main' variant={clsx(!(mobileWidth || tabletWidth) && 'subtitle', (mobileWidth || tabletWidth) && 'subtitle16SB')} className='p-0 d-flex'>
                            {label ? label : ""}
                        </Typography>
                    </div>
                    <div>
                        {
                            collapsed ?
                                <img src={closeIcon} alt='close' />
                                :
                                <img src={plusIcon} alt='plus' />
                        }
                    </div>
                </div>
                <Collapse className={clsx(classes.collapse, 'pl-4 pr-4')} in={collapsed}>
                    {props.children}
                </Collapse>
            </Typography>
        </div >
    )
}