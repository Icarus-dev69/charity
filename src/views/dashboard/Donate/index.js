import { useEffect, useState } from 'react';

// material-ui
import { Grid, 
    Typography, 
    Box, 
    Button,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio
 } from '@mui/material';
import { deepPurple, grey, purple } from '@mui/material/colors';
import { styled, useTheme } from '@mui/material/styles';

// project imports

import { gridSpacing } from 'app/constant';

import { useSelector } from 'react-redux';
import { selectCurrentUser, selectCurrentToken } from 'features/auth/authSlice';
import {Link} from "react-router-dom"
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import {ArrowBack,ArrowForwardIos} from '@mui/icons-material';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 7,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: grey[300]
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: purple[500]
  },
}));



const Donate = () => {
    const user = useSelector(selectCurrentUser)
    const token = useSelector(selectCurrentToken)
    const [isLoading, setLoading] = useState(true);
    const [value,setValue] = useState('qfc02')

   
    useEffect(() => {
        setLoading(false);
    }, []);

    const handleChange = (event) => {
        console.log(event.target.value)
        setValue(event.target.value);
        // console.log(value)
    };

    return (
        <Grid container  sx={{
            width: "100%",
            maxWidth:"1000px",
            mx : 'auto',
        }}>
            <Box sx={{
                display:"flex",
                gap:"10px",
                alignItems:"center",
                marginBottom:"20px",
            }}>
                <Link to="/campaign" style={{
                    marginRight:"10px"
                }}>
                    <ArrowBack />
                </Link>
                <Link to="/campaign" style={{
                    fontSize:"0.75rem",
                    textDecoration:"none",
                    color:grey[600]
                }}>
                    Campaign
                </Link>

                <ArrowForwardIos sx={{
                    fontSize:"0.75rem",
                    color:grey[600]
                }}/>

                <Typography sx={{
                    fontSize:"0.75rem",
                    color:deepPurple[500],
                    fontWeight : 500
                }}>
                    Donate
                    
                </Typography>

            </Box>
            <Grid item xs={12}>
                <Typography sx={{
                    fontSize: '1.125rem',
                    fontWeight: 500,
                    color: 'black',
                    
                    marginBottom :"10px"
                }}>
                    Donate
                </Typography>
            </Grid>

            <Grid item container xs={12} md={6} sx={{
                marginTop:"10px",
                paddingRight:{md:"10px"}
            }}>
                <Grid item container xs = {12}>
                    <Typography sx={{
                        fontSize:"0.688rem",
                        marginBottom:"8px",
                        fontWeight:600,
                        color:grey[500]
                    }}>
                        Campaign Details
                    </Typography>
                </Grid>

                <Box sx={{
                    width:"100%",
                    border:1,
                    borderColor:grey[400],
                    borderRadius:"10px",
                    padding:"16px 20px"
                }}>
                    <Typography sx={{
                        fontSize:"0.875rem",
                        fontWeight:600,
                        color:"black"
                    }}>
                        Living Fund
                    </Typography>
                    <Typography sx={{
                        fontSize:"0.875rem",
                        fontWeight:600,
                        color:"black"
                    }}>
                        QFC02 | <span style={{color:deepPurple[500]}}>$75</span>
                    </Typography>
                </Box>

                <div style={{width:"100%",height:"1px",backgroundColor:grey[400],margin:"14px 0"}}></div>

                <Grid item container xs = {12}>
                    <Typography sx={{
                        fontSize:"0.688rem",
                        marginBottom:"8px",
                        fontWeight:600,
                        color:grey[500]
                    }}>
                        Campaign Details
                    </Typography>
                </Grid>

                <Box sx={{
                    width:"100%",
                    border:1,
                    borderColor:grey[400],
                    borderRadius:"10px",
                    padding:"16px 20px"
                }}>
                    <Typography sx={{
                        fontSize:"0.875rem",
                        fontWeight:600,
                        color:"black"
                    }}>
                        $ 75.00
                    </Typography>
                </Box>

                <Box sx={{
                    display:"flex",
                    alignItems:"center",
                    gap:"20px",
                    marginTop:"8px"
                }}>
                    <Typography sx={{
                        fontSize:"0.688rem",
                        fontWeight:600,
                        color:grey[500]
                    }}>
                        QFC Token
                    </Typography>
                    <Typography sx={{
                        fontSize:"0.688rem",
                        fontWeight:600,
                        color:'black'
                    }}>
                        $0.00
                    </Typography>
                </Box>

                <div style={{width:"100%",height:"1px",backgroundColor:grey[400],margin:"14px 0"}}></div>

            </Grid>
            <Grid item container xs={12} md={6} sx={{
                paddingLeft:{md:"10px"},
                marginTop:{xs:"20px"}
            }}>
                <Box sx={{
                    width:"100%"
                }}>
                    <Typography sx={{
                            fontSize:"0.688rem",
                            fontWeight:600,
                            color:grey[500]
                        }}>
                            Summary
                    </Typography>

                    <Box sx={{
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"space-between",
                        marginTop:"8px"
                    }}>
                        <Typography sx={{
                            fontSize:"0.688rem",
                            fontWeight:600,
                            color:grey[500]
                        }}>
                            Total Donation Amount
                        </Typography>
                        <Typography sx={{
                            fontSize:"0.688rem",
                            fontWeight:600,
                            color:'black'
                        }}>
                            $75.00
                        </Typography>
                    </Box>

                    <Grid item container xs={12}>
                        <Button variant='contained' sx={{
                            width:"150px",
                            backgroundColor:deepPurple[500],
                            mx : "auto",
                            marginTop : "50px",           
                        }}>Donate Now</Button>
                    </Grid>

                    
                </Box>
            </Grid>
            
        </Grid>
    );
};

export default Donate;
