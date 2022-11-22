import { makeStyles } from '@mui/styles';
export const useStyle = makeStyles(theme => ({
    nav: {
        backgroundColor: '#efefef',
        width: '100%'
    },
    btn: {
        color: "#000 !important",
        textTransform: 'none !important',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 15,
        lineHeight: '20px',
        backgroundColor: '#000',
    },
    resBtn: {
        fontSize: '10px !important',
    },
    selectStyle: {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 14,
        lineHeight: '19px',
        textAlign: 'center',
        color: '#574D68',
    }
}))
