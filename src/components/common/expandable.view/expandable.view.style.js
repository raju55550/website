import { makeStyles } from "@mui/styles";
export const useStyle = makeStyles((theme) => ({
    paper: {
        padding: '16px 24px',
        // height: '56px',
        // background: '#FFFFFF',
        // borderBottom: '2px solid #01BABF',
        // boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)'
    },
    collapse: {
        // boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
        // border: '0.5px solid #EEEEEE',
        // background: '#FFFFFF',
    },
    expandableView: {
        borderBottom: '2px solid #01BABF !important',
    }
}));
