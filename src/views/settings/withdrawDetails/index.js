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
import {AddCircleOutline, Cancel, Circle} from '@mui/icons-material';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    '& .MuiToggleButtonGroup-grouped': {
      margin: theme.spacing(2),
    //   '&.Mui-disabled': {
    //     border: 0,
    //   },
      '&:not(:first-of-type)': {
        borderRadius: theme.shape.borderRadius,
      },
      '&:first-of-type': {
        borderRadius: theme.shape.borderRadius,
      },
    },
  }));

const StyledToggleButton = styled(ToggleButton)({
    border: 2,
    borderColor:deepPurple[500],
    "&.Mui-selected, &.Mui-selected:hover": {
      color: "white",
      backgroundColor: deepPurple[500]
    }
    
});


const WithdrawDetails = () => {
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
                    Withdraw Details
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography sx={{
                    fontSize: '1rem',
                    fontWeight: 400,
                    color: 'black.400',
                    marginBottom :"20px"
                }}>
                    Enter USDT address for withdrawal
                </Typography>
            </Grid>
            <Box sx={{
                display :"flex",
                justifyContent:"center",
                width:"100%",
            }}>
                <StyledToggleButtonGroup 
                value={view}
                exclusive
                onChange={handleChange}
                >
                    <StyledToggleButton  value="usdt" aria-label="Password">
                        USDT Address
                    </StyledToggleButton>
                    <StyledToggleButton  value="qfc" aria-label="Security Pin">
                    QFC Address
                    </StyledToggleButton>
                </StyledToggleButtonGroup>
            </Box>
            {
                view ==='usdt' && <> <Grid item container  sx={{
                    maxWidth:"400px",
                    justifyContent:"center",
                    mx:"auto",
                    marginTop:"20px"
                }}>
                <Grid container item xs ={12}>
                    <Box sx={{
                        display:"flex",
                        flexDirection:"column",
                        gap : "10px",
                        width:"100%",
                        
                        marginBottom:"24px"
                    }}>
                        <InputLabel htmlFor="usdt">USDT Address(TRC20)</InputLabel>
                        <TextField id="usdt" variant="outlined"  style={{width:"100%"}}/>
                    </Box>
                    
                </Grid>
                <Grid container item xs ={12}>
                    <Box sx={{
                        display:"flex",
                        flexDirection:"column",
                        gap : "10px",
                        width:"100%",
                        
                        marginBottom:"24px"
                    }}>
                        <InputLabel htmlFor="usdtsp">Security Pin</InputLabel>
                        <OutlinedInput
                            id="usdtsp"
                            type={showUSDTSp ? 'text' : 'password'}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowUSDTSp}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {showUSDTSp ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            
                        />
                    </Box>
                    
                </Grid>
                   
            </Grid>
            <Grid item container xs ={12} sx={{
                justifyContent:"center"
            }}>
                <Button variant='contained' sx={{
                    mx : "auto",
                    width:"150px",
                    marginTop:"50px",
                    backgroundColor:deepPurple[500],
                }}>Save</Button>
            </Grid>
            </>
            }
             {
                view ==='qfc' && <> <Grid item container sx={{
                    maxWidth:"400px",
                    justifyContent:"center",
                    mx:"auto",
                    marginTop:"20px"
                }}>
                <Grid container item xs ={12}>
                    <Box sx={{
                        display:"flex",
                        flexDirection:"column",
                        gap : "10px",
                        width:"100%",
                        
                        marginBottom:"24px"
                    }}>
                        <InputLabel htmlFor="qfc">QFC Address</InputLabel>
                        <TextField id="qfc" variant="outlined"  style={{width:"100%"}}/>
                    </Box>
                    
                </Grid>
                <Grid container item xs ={12}>
                    <Box sx={{
                        display:"flex",
                        flexDirection:"column",
                        gap : "10px",
                        width:"100%",
                        marginBottom:"24px"
                    }}>
                        <InputLabel htmlFor="qfcsp">Security Pin</InputLabel>
                        <OutlinedInput
                            id="qfcsp"
                            type={showQFCSp ? 'text' : 'password'}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickshowQFCSp}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {showQFCSp ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            
                        />
                    </Box>
                    
                </Grid>
                     
            </Grid>

                <Grid item container xs ={12} sx={{
                justifyContent:"center"
                }}>
                    <Button variant='contained' sx={{
                        mx : "auto",
                        width:"150px",
                        marginTop:"50px",
                        backgroundColor:deepPurple[500],
                    }}>Save</Button>
                </Grid>
                </>
            }
            
        </Grid>
    );
};

export default WithdrawDetails;
