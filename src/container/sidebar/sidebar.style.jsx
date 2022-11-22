import { makeStyles } from '@mui/styles';
export const useStyle = makeStyles(theme => ({
    appNavbar: {
        background: 'transparent !important',
        // height: '72px',
        left: '0px',
        top: "0px",
        boxShadow: 'none !important',
        zIndex:'0 !important'
    },
    responsiveAppNavbar: {
        background: 'transparent !important',
        height: 'auto',
        left: '0px',
        top: "0px",
        boxShadow: 'none !important',
    },
    toolbar: {
        padding: "0px"
    }
}))
