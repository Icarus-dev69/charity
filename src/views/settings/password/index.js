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


const PassWord = () => {
    const user = useSelector(selectCurrentUser)
    const token = useSelector(selectCurrentToken)
    const [isLoading, setLoading] = useState(true);
    const [view,setView] = useState('password')
    const [showCurrentPw, setShowCurrentPw] = useState(false);
    const [showNewPw, setShowNewPw] = useState(false);
    const [showConfirmPw, setShowConfirmPw] = useState(false);

    const [showCurrentSp, setShowCurrentSp] = useState(false);
    const [showNewSp, setShowNewSp] = useState(false);
    const [showConfirmSp, setShowConfirmSp] = useState(false);

    const handleClickShowCurrentPw = () => setShowCurrentPw((show) => !show);
    const handleClickShowNewPw = () => setShowNewPw((show) => !show);
    const handleClickShowConfirmPw = () => setShowConfirmPw((show) => !show);

    const handleClickShowCurrentSp = () => setShowCurrentSp((show) => !show);
    const handleClickShowNewSp = () => setShowNewSp((show) => !show);
    const handleClickShowConfirmSp = () => setShowConfirmSp((show) => !show);

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
                    Password & Security Pin
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography sx={{
                    fontSize: '1rem',
                    fontWeight: 400,
                    color: 'black.400',
                    marginBottom :"20px"
                }}>
                    Please enter your personal informations and save
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
                    <StyledToggleButton  value="password" aria-label="Password">
                        PassWord
                    </StyledToggleButton>
                    <StyledToggleButton  value="securitypin" aria-label="Security Pin">
                    Security Pin
                    </StyledToggleButton>
                </StyledToggleButtonGroup>
            </Box>
            {
                view ==='password' && <> <Grid item container xs={12}>
                <Grid container item xs ={12} md={6}>
                    <Box sx={{
                        display:"flex",
                        flexDirection:"column",
                        gap : "10px",
                        width:"100%",
                        paddingRight:{md : "10px"},
                        marginBottom:"24px"
                    }}>
                        <InputLabel htmlFor="currentpassword">Current Password</InputLabel>
                        <OutlinedInput
                            id="currentpassword"
                            type={showCurrentPw ? 'text' : 'password'}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowCurrentPw}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {showCurrentPw ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            
                        />
                    </Box>
                    
                </Grid>
                <Grid container item xs ={12} md={6}>
                    <Box sx={{
                        display:"flex",
                        flexDirection:"column",
                        gap : "10px",
                        width:"100%",
                        paddingLeft:{md : "10px"},
                        marginBottom:"24px"
                    }}>
                        <InputLabel htmlFor="newpassword">New Password</InputLabel>
                        <OutlinedInput
                            id="newpassword"
                            type={showNewPw ? 'text' : 'password'}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowNewPw}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {showNewPw ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            
                        />
                    </Box>
                    
                </Grid>
                <Grid container item xs ={12} md={6}>
                    <Box sx={{
                        display:"flex",
                        flexDirection:"column",
                        gap : "10px",
                        width:"100%",
                        paddingLeft:{md : "10px"},
                        marginBottom:"24px"
                    }}>
                        {/* <InputLabel htmlFor="fullname">Full Name</InputLabel>
                        <TextField id="fullname" variant="outlined" defaultValue="Steven Cheok Yan Wang" disabled style={{width:"100%"}}/> */}
                    </Box>
                    
                </Grid>
                <Grid container item xs ={12} md={6}>
                    <Box sx={{
                        display:"flex",
                        flexDirection:"column",
                        gap : "10px",
                        width:"100%",
                        paddingLeft:{md : "10px"},
                        marginBottom:"24px"
                    }}>
                        <InputLabel htmlFor="confirmpassword">Confirm New Password</InputLabel>
                        <OutlinedInput
                            id="confirmpassword"
                            type={showConfirmPw ? 'text' : 'password'}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowConfirmPw}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {showConfirmPw ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            
                        />
                    </Box>
                    
                </Grid>      
            </Grid>
                <Button variant='contained' sx={{
                    mx : "auto",
                    width:"150px",
                    marginTop:"50px",
                    backgroundColor:deepPurple[500],
                }}>Save</Button>
                </>
            }
             {
                view ==='securitypin' && <> <Grid item container xs={12}>
                <Grid container item xs ={12} md={6}>
                    <Box sx={{
                        display:"flex",
                        flexDirection:"column",
                        gap : "10px",
                        width:"100%",
                        paddingRight:{md : "10px"},
                        marginBottom:"24px"
                    }}>
                        <InputLabel htmlFor="currentsp">Current Security Pin</InputLabel>
                        <OutlinedInput
                            id="currentsp"
                            type={showCurrentSp ? 'text' : 'password'}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowCurrentSp}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {showCurrentSp ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            
                        />
                    </Box>
                    
                </Grid>
                <Grid container item xs ={12} md={6}>
                    <Box sx={{
                        display:"flex",
                        flexDirection:"column",
                        gap : "10px",
                        width:"100%",
                        paddingLeft:{md : "10px"},
                        marginBottom:"24px"
                    }}>
                        <InputLabel htmlFor="newsp">New Security Pin</InputLabel>
                        <OutlinedInput
                            id="newsp"
                            type={showNewSp ? 'text' : 'password'}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowNewSp}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {showNewSp ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            
                        />
                    </Box>
                    
                </Grid>
                <Grid container item xs ={12} md={6}>
                    <Box sx={{
                        display:"flex",
                        flexDirection:"column",
                        gap : "10px",
                        width:"100%",
                        paddingLeft:{md : "10px"},
                        marginBottom:"24px"
                    }}>
                        {/* <InputLabel htmlFor="fullname">Full Name</InputLabel>
                        <TextField id="fullname" variant="outlined" defaultValue="Steven Cheok Yan Wang" disabled style={{width:"100%"}}/> */}
                    </Box>
                    
                </Grid>
                <Grid container item xs ={12} md={6}>
                    <Box sx={{
                        display:"flex",
                        flexDirection:"column",
                        gap : "10px",
                        width:"100%",
                        paddingLeft:{md : "10px"},
                        marginBottom:"24px"
                    }}>
                        <InputLabel htmlFor="confirmsp">Confirm New Security Pin</InputLabel>
                        <OutlinedInput
                            id="confirmsp"
                            type={showConfirmSp ? 'text' : 'password'}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowConfirmSp}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {showConfirmSp ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            
                        />
                    </Box>
                    
                </Grid>      
            </Grid>
                <Button variant='contained' sx={{
                    mx : "auto",
                    width:"150px",
                    marginTop:"50px",
                    backgroundColor:deepPurple[500],
                }}>Save</Button>
                </>
            }
            
        </Grid>
    );
};

export default PassWord;
