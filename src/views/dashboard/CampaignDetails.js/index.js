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



const CampaignDetails = () => {
    const user = useSelector(selectCurrentUser)
    const token = useSelector(selectCurrentToken)
    const [isLoading, setLoading] = useState(true);
    const [value,setValue] = useState('qfc02')

    const AmountCard = ({amountValue}) => {
        console.log(amountValue)
        return (
            <label htmlFor={amountValue} style={{
                width:"100%",
                height:"70px",
                padding:"16px 20px",
                position:"relative",
                border:`1px solid ${grey[300]}`,
                borderRadius:"10px",
                display:"flex",
                alignItems:"center",
                justifyContent:"space-between",
                cursor:"pointer",
                margin:"4px 0"
            }}>
                
                <Box>
                        <Typography sx={{
                            fontSize:"0.875rem",
                            fontWeight:600,
                            color:'black'
                        }}>
                            {amountValue} | <span style={{color:deepPurple[500]}}> $ 50.00 </span>
                        </Typography>
                        <Typography sx={{
                            fontSize:"0.688rem",
                            fontWeight:600,
                            color:grey[500]
                        }}>
                            <span style={{color:deepPurple[500]}}> 1% - 1.5% &nbsp;&nbsp;</span> 
                            Estimated Rebate weekday only
                        </Typography>
                </Box>
                <Radio
                    id={amountValue}
                    checked={value === {amountValue}}
                    onChange={handleChange}
                    value={amountValue}
                    name="radio-buttons"
                    inputProps={{ 'aria-label': {amountValue} }}
                    sx={{ 
                        position:"absolute",
                        right:"0"
                    }}
                />
            </label>
        )
    }
    useEffect(() => {
        setLoading(false);
    }, []);

    const handleChange = (event) => {
        console.log(event.target.value)
        setValue(event.target.value);
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
                    Campaign Details
                </Typography>

            </Box>
            <Grid item xs={12}>
                <Typography sx={{
                    fontSize: '1.125rem',
                    fontWeight: 500,
                    color: 'black',
                    
                    marginBottom :"10px"
                }}>
                    Campaign Details
                </Typography>
            </Grid>

            <Grid item container xs={12} md={6} sx={{
                marginTop:"10px",
                paddingRight:{md:"10px"}
            }}>
                <img src="https://doc-image.s3.ap-southeast-1.amazonaws.com/b1d2394e22316bf88ac24538b059a1cc.png" alt="campaignImg" style={{
                    width:"100%",
                    height:"200px",
                    objectFit:"cover",
                    borderRadius:"10px",
                }}/>
                <Grid item xs={12}>
                    <Typography sx={{
                        fontSize:"1.313rem",
                        color : "black",
                        fontWeight: 600,
                        marginTop:"10px",
                    }}>
                        Living Fund
                    </Typography>
                </Grid>
                <Grid item xs ={12}>
                    <Typography sx={{
                        fontSize:"1.125rem",
                        color : deepPurple[500],
                        fontWeight: 600,
                        marginTop:"5px"
                    }}>
                        $ 50.00 - & 100.00
                    </Typography>
                </Grid>
                <Grid item xs ={12}>
                    <BorderLinearProgress variant="determinate" value={(1024/3000) * 100} sx={{margin:"8px 0"}}/>
                </Grid>
                
                <Box item sx ={{
                    width:"100%",
                    display : "flex",
                    alignItems:"center",
                    justifyContent:"space-between",
                }}>
                    <Typography sx={{
                        fontSize:"0.688rem",
                        color : grey[500],
                        fontWeight: 600,
                    }}>
                        Donations
                    </Typography>
                    <Typography sx={{
                        fontSize:"0.688rem",
                        color : deepPurple[500],
                        fontWeight: 500,
                        
                    }}>
                        1024 / 3000
                    </Typography>
                </Box>

                <div style={{width:"100%",height:"1px",backgroundColor:grey[400],margin:"14px 0"}}></div>
                <Grid item xs ={12}>
                    <Typography sx={{
                            fontSize:"1rem",
                            color : 'black',
                            fontWeight: 600,
                            
                        }}>
                           About
                    </Typography>
                </Grid>
                <Grid item xs ={12}>
                    <Typography sx={{
                            fontSize:"0.688rem",
                            color : grey[500],
                            fontWeight: 500,    
                        }}>
                            A financial resource set aside for daily living expenses
                    </Typography>
                </Grid>

                <div style={{width:"100%",height:"1px",backgroundColor:grey[400],margin:"14px 0"}}></div>

                <Grid item xs ={12}>
                    <Typography sx={{
                            fontSize:"1rem",
                            color : 'black',
                            fontWeight: 600,
                            
                        }}>
                           Where does it come from?
                    </Typography>
                </Grid>
                <Grid item xs ={12}>
                    <Typography sx={{
                            fontSize:"0.688rem",
                            color : grey[500],
                            fontWeight: 500,    
                        }}>
                            A financial resource set aside for daily living expenses
                    </Typography>
                </Grid>

                <div style={{width:"100%",height:"1px",backgroundColor:grey[400],margin:"14px 0"}}></div>
                
            </Grid>
            <Grid item container xs={12} md={6} sx={{
                paddingLeft:{md:"10px"},
                marginTop:{xs:"20px"}
            }}>
                <Box sx={{
                    width:"100%"
                }}>
                    <Grid item xs ={12}>
                        <Typography sx={{
                                fontSize:"1rem",
                                color : 'black',
                                fontWeight: 600,
                                marginBottom:"10px"
                            }}>
                            Select Donation Amount
                        </Typography>
                    </Grid>

                    <Grid item container xs={12}>
                        <FormControl sx={{width:"100%"}}>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={value}
                                onChange={handleChange}
                            >
                               
                               <label htmlFor='qfc01' style={{
                                width:"100%",
                                height:"70px",
                                padding:"16px 20px",
                                position:"relative",
                                border:`1px solid ${grey[400]}`,
                                borderRadius:"10px",
                                display:"flex",
                                alignItems:"center",
                                justifyContent:"space-between",
                                cursor:"pointer",
                                margin:"4px 0"
                                }}>
                                
                                <Box>
                                        <Typography sx={{
                                            fontSize:"0.875rem",
                                            fontWeight:600,
                                            color:'black'
                                        }}>
                                            QFC01 | <span style={{color:deepPurple[500]}}> $ 50.00 </span>
                                        </Typography>
                                        <Typography sx={{
                                            fontSize:"0.688rem",
                                            fontWeight:600,
                                            color:grey[500]
                                        }}>
                                            <span style={{color:deepPurple[500]}}> 1% - 1.5% &nbsp;&nbsp;</span> 
                                            Estimated Rebate weekday only
                                        </Typography>
                                </Box>
                                <Radio
                                    id='qfc01'
                                    checked={value === "qfc01"}
                                    onChange={handleChange}
                                    value="qfc01"
                                    name="radio-buttons"
                                    inputProps={{ 'aria-label': "A" }}
                                    sx={{ 
                                        position:"absolute",
                                        right:"0"
                                    }}
                                />
                                </label> 
                               <label htmlFor='qfc02' style={{
                                width:"100%",
                                height:"70px",
                                padding:"16px 20px",
                                position:"relative",
                                border:`1px solid ${grey[400]}`,
                                borderRadius:"10px",
                                display:"flex",
                                alignItems:"center",
                                justifyContent:"space-between",
                                cursor:"pointer",
                                margin:"4px 0"
                            }}>
                                
                                <Box>
                                        <Typography sx={{
                                            fontSize:"0.875rem",
                                            fontWeight:600,
                                            color:'black'
                                        }}>
                                            QFC02 | <span style={{color:deepPurple[500]}}> $ 75.00 </span>
                                        </Typography>
                                        <Typography sx={{
                                            fontSize:"0.688rem",
                                            fontWeight:600,
                                            color:grey[500]
                                        }}>
                                            <span style={{color:deepPurple[500]}}> 1% - 1.6% &nbsp;&nbsp;</span> 
                                            Estimated Rebate weekday only
                                        </Typography>
                                </Box>
                                <Radio
                                    id='qfc02'
                                    checked={value === "qfc02"}
                                    onChange={handleChange}
                                    value="qfc02"
                                    name="radio-buttons"
                                    inputProps={{ 'aria-label': "A" }}
                                    sx={{ 
                                        position:"absolute",
                                        right:"0"
                                    }}
                                />
                                </label> 
                               <label htmlFor='qfc03' style={{
                                width:"100%",
                                height:"70px",
                                padding:"16px 20px",
                                position:"relative",
                                border:`1px solid ${grey[400]}`,
                                borderRadius:"10px",
                                display:"flex",
                                alignItems:"center",
                                justifyContent:"space-between",
                                cursor:"pointer",
                                margin:"4px 0"
                            }}>
                                
                                <Box>
                                        <Typography sx={{
                                            fontSize:"0.875rem",
                                            fontWeight:600,
                                            color:'black'
                                        }}>
                                            QFC03 | <span style={{color:deepPurple[500]}}> $ 100.00 </span>
                                        </Typography>
                                        <Typography sx={{
                                            fontSize:"0.688rem",
                                            fontWeight:600,
                                            color:grey[500]
                                        }}>
                                            <span style={{color:deepPurple[500]}}> 1% - 1.7% &nbsp;&nbsp;</span> 
                                            Estimated Rebate weekday only
                                        </Typography>
                                </Box>
                                <Radio
                                    id='qfc03'
                                    checked={value === "qfc03"}
                                    onChange={handleChange}
                                    value="qfc03"
                                    name="radio-buttons"
                                    inputProps={{ 'aria-label': "A" }}
                                    sx={{ 
                                        position:"absolute",
                                        right:"0"
                                    }}
                                />
                                </label> 
                                
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item container xs={12} sx={{
                        mx : "auto",
                        marginTop : "50px",
                        justifyContent:"center"
                    }}>
                        <Link to="/donate/1" sx={{
                           
                        }}>
                            <Button variant='contained' sx={{
                                width:"150px",
                                backgroundColor:deepPurple[500],
                                
                            }}>Donate Now</Button>
                        </Link>
                    </Grid>
                </Box>
            </Grid>
            
        </Grid>
    );
};

export default CampaignDetails;
