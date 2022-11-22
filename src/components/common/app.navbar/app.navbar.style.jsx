import { makeStyles } from '@mui/styles';
export const useStyle = makeStyles(theme => ({
    appNavbar: {
        background: 'transparent !important',
        // height: '72px',
        left: '0px',
        top: "0px",
        boxShadow: 'none !important',
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
    },

    tabbtn: {
        color: "#2E392F !important",
        textTransform: 'none',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 15,
        lineHeight: '20px',
        backgroundColor: '#000',
        textTransform:'none !important'
    },
    

    btn: {
        color: "#2E392F !important",
        textTransform: 'none',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 15,
        lineHeight: '20px',
        backgroundColor: '#000',
        textTransform:'none !important',
        fontFamily: 'Manrope !important',

    },
    btn2: {
        boxShadow: 'none !important',
        color: '#fff',
        backgroundColor: '#01BABF !important',
        borderRadius: '10px',
        height: '52px',
        fontWeight: 700,
        fontSize: 15,
        '&:hover': {
            background: '#01BABF',
            color: "#fff",
        }
    },
    btnText: {
        fontSize: '14px',
        fontFamily: 'Nunito',
        fontWeight: '500',
        textTransform: 'none',
        fontStyle: 'normal',
    },
    iconStyle: {
        border: `1px solid #5B3BD0`,
    },
    selectStyle: {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 14,
        lineHeight: '19px',
        textAlign: 'center',
        color: '#574D68',
    },
    drawer: {
        marginTop: '55px'
    },
    contentOnTablet: {
        maxWidth: '254px',
        // background: '#D8D8D8',
        boxShadow: '4px 0px 10px rgba(0, 0, 0, 0.15)',
        padding: '24px 42px',
    },
    contentOnMobile: {
        width: '100%',
        // background: '#D8D8D8',
        boxShadow: '4px 0px 10px rgba(0, 0, 0, 0.15)',
        padding: '24px 16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
}))
