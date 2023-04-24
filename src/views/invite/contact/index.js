import { useEffect, useState, useRef } from 'react';

// material-ui
import { Grid, 
    Typography, 
    Box, 
    Button, 
    TextField, 
    InputLabel ,
    ToggleButton, 
    ToggleButtonGroup,
    OutlinedInput,
    InputAdornment,
    IconButton,
 } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { deepPurple, grey, purple } from '@mui/material/colors';

import {Visibility, VisibilityOff} from '@mui/icons-material';

// project imports
// import EarningCard from './EarningCard';
// import PopularCard from './PopularCard';
// import TotalOrderLineChartCard from './TotalOrderLineChartCard';
// import TotalIncomeDarkCard from './TotalIncomeDarkCard';
// import TotalIncomeLightCard from './TotalIncomeLightCard';
// import TotalGrowthBarChart from './TotalGrowthBarChart';
import { gridSpacing } from 'app/constant';

import { useSelector } from 'react-redux';
import { selectCurrentUser, selectCurrentToken } from 'features/auth/authSlice';
import {Link} from "react-router-dom"
import {ContentCopy} from '@mui/icons-material';



const Contact = () => {
    const user = useSelector(selectCurrentUser)
    const token = useSelector(selectCurrentToken)
    const [isLoading, setLoading] = useState(true);
    const [view,setView] = useState('usdt')
    const [showUSDTSp, setShowUSDTSp] = useState(false);
    const [showQFCSp, setShowQFCSp] = useState(false);
    

    const handleClickShowUSDTSp = () => setShowUSDTSp((show) => !show);
    const handleClickshowQFCSp = () => setShowQFCSp((show) => !show);
   

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    useEffect(() => {
        setLoading(false);
    }, []);
    const handleChange = (event, nextView) => {
        setView(nextView);
      };

    return (
        <Grid container sx={{
            width: "100%",
            maxWidth:"1000px",
            mx : 'auto',
        }}>
            <Grid item xs={12}>
                <Typography sx={{
                    fontSize: '1.125rem',
                    fontWeight: 500,
                    color: 'black',
                    marginBottom :"20px"
                }}>
                    Contact Us
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography sx={{
                    fontSize: '1rem',
                    fontWeight: 400,
                    color: 'black.400',
                    marginBottom :"20px"
                }}>
                    Scan QR Code below to redirect to our Live Chat
                </Typography>
            </Grid>
            
            <Box sx={{
                width:"100%",
                display:"flex",
                flexDirection : "column",
                alignItems : "center",
                justifyContent:"center",
                marginTop:"20px"
            }}>
                <img style={{
                    width:"150px",
                    height : "150px",
                }} src='https://randomqr.com/assets/images/randomqr-256.png' alt='qrcode'/>
                <Box sx={{
                width:"150px",
                display:"flex",
                alignItems : "center",
                flexDirection:"column",
                justifyContent:"space-between",
                marginTop:"16px"
                }}>
                    <span style={{
                        fontSize:"0.688rem",
                        color:grey[600],
                        fontWeight:600
                    }}>Customer Service Hours</span>
                    <span style={{
                        fontSize:"0.688rem",
                        color:deepPurple[500],
                        fontWeight:600
                    }}>Monday to Sunday</span>
                     <span style={{
                        fontSize:"0.688rem",
                        color:deepPurple[500],
                        fontWeight:600
                    }}>9AM to 9PM</span>
                </Box>
                <Button variant='contained' sx={{
                mx : "auto",
                width:"250px",
                backgroundColor:deepPurple[500],
                marginTop:"50px"
                }}>Redirect To Live Chat</Button>
            </Box>
        </Grid>
    );
};

export default Contact;
