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

import Visaimg from "../../../assets/images/visa.webp"
import Usdtimg from "../../../assets/images/usdt.png"
import Paypalimg from "../../../assets/images/paypal.png"

// project imports

import { gridSpacing } from 'app/constant';

import { useSelector } from 'react-redux';
import { selectCurrentUser, selectCurrentToken } from 'features/auth/authSlice';
import {Link} from "react-router-dom"
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import {ArrowBack,ArrowForwardIos, CurrencyBitcoin, AccountBalance} from '@mui/icons-material';

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



const Deposit = () => {
    const user = useSelector(selectCurrentUser)
    const token = useSelector(selectCurrentToken)
    const [isLoading, setLoading] = useState(true);
    const [value,setValue] = useState('crypto')

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
                <Link to="/wallet" style={{
                    marginRight:"10px"
                }}>
                    <ArrowBack />
                </Link>
                <Link to="/wallet" style={{
                    fontSize:"0.75rem",
                    textDecoration:"none",
                    color:grey[600]
                }}>
                    Wallet
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
                    Deposit
                </Typography>

            </Box>
            <Grid item xs={12}>
                <Typography sx={{
                    fontSize: '1.125rem',
                    fontWeight: 500,
                    color: 'black',
                    
                    marginBottom :"10px"
                }}>
                    Choose your deposit method
                </Typography>
            </Grid>

            <Grid item container xs={12} md={6} sx={{
                paddingRight:{md:"10px"}
            }}>
            <label htmlFor='crypto' style={{
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
                margin:"10px 0"
                }}>
                
                <Box sx={{
                    display:"flex",
                    alignItems:"center",
                    gap : "20px",
                }}>
                     <img src={Usdtimg} alt="visa" style={{
                            width:"24px",
                            height:"24px"
                        }}/>

                    <Typography sx={{
                        fontSize:"0.875rem",
                        fontWeight:600,
                        color:'black'
                    }}>
                        Cryptocurrency
                    </Typography>
                </Box>
                <Radio
                    id='crypto'
                    checked={value === "crypto"}
                    onChange={handleChange}
                    value="crypto"
                    name="radio-buttons"
                    inputProps={{ 'aria-label': "A" }}
                    sx={{ 
                        position:"absolute",
                        right:"0"
                    }}
                />
            </label>
            </Grid>
            <Grid item container xs={12} md={6} sx={{
                paddingLeft:{md:"10px"}
            }}>
            <label htmlFor='bank' style={{
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
                margin:"10px 0"
                }}>
                
                <Box sx={{
                    display:"flex",
                    alignItems:"center",
                    gap : "20px",
                }}>
                    <AccountBalance/>

                    <Typography sx={{
                        fontSize:"0.875rem",
                        fontWeight:600,
                        color:'black'
                    }}>
                        Bank Transfer 
                    </Typography>
                        
                </Box>
                <Radio
                    id='bank'
                    checked={value === "bank"}
                    onChange={handleChange}
                    value="bank"
                    name="radio-buttons"
                    inputProps={{ 'aria-label': "A" }}
                    sx={{ 
                        position:"absolute",
                        right:"0"
                    }}
                />
            </label>
            </Grid>
            <Grid item container xs={12} md={6} sx={{
                paddingRight:{md:"10px"}
            }}>
            <label htmlFor='visa' style={{
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
                margin:"10px 0"
                }}>
                
                <Box sx={{
                    display:"flex",
                    alignItems:"center",
                    gap : "20px",
                }}>
                        <img src={Visaimg} alt="visa" style={{
                            width:"24px",
                            height:"24px"
                        }}/>
                        <Typography sx={{
                            fontSize:"0.875rem",
                            fontWeight:600,
                            color:'black'
                        }}>
                            Visa / Master 
                        </Typography>
                       
                </Box>
                <Radio
                    id='visa'
                    checked={value === "visa"}
                    onChange={handleChange}
                    value="visa"
                    name="radio-buttons"
                    inputProps={{ 'aria-label': "A" }}
                    sx={{ 
                        position:"absolute",
                        right:"0"
                    }}
                    disabled
                />
            </label>
            </Grid>
            <Grid item container xs={12} md={6} sx={{
                paddingLeft:{md:"10px"}
            }}>
            <label htmlFor='paypal' style={{
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
                margin:"10px 0"
                }}>
                
                <Box sx={{
                    display:"flex",
                    alignItems:"center",
                    gap : "20px",
                }}>
                    <img src={Paypalimg} alt="visa" style={{
                            width:"24px",
                            height:"24px"
                        }}/>
                        <Typography sx={{
                            fontSize:"0.875rem",
                            fontWeight:600,
                            color:'black'
                        }}>
                            Paypal 
                        </Typography>
                        
                </Box>
                <Radio
                    id='paypal'
                    checked={value === "paypal"}
                    onChange={handleChange}
                    value="paypal"
                    name="radio-buttons"
                    inputProps={{ 'aria-label': "A" }}
                    sx={{ 
                        position:"absolute",
                        right:"0"
                    }}
                    disabled
                />
            </label>
            </Grid>

            <Grid item container xs={12} sx={{
                        mx : "auto",
                        marginTop : "50px",
                        justifyContent:"center"
                    }}>
                        {
                            value === "crypto" && 
                            <Link to="/deposit/cryptocurrency" sx={{
                           
                            }}>
                                <Button variant='contained' sx={{
                                    width:"150px",
                                    backgroundColor:deepPurple[500],
                                    
                                }}>Continue</Button>
                            </Link>
                        }
                        {
                            value === "bank" && 
                            <Link to="/deposit/bankTransfer" sx={{
                           
                            }}>
                                <Button variant='contained' sx={{
                                    width:"150px",
                                    backgroundColor:deepPurple[500],
                                    
                                }}>Continue</Button>
                            </Link>
                        }
                        
            </Grid>
            
        </Grid>
    );
};

export default Deposit;
