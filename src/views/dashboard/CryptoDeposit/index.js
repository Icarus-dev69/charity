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
import {ArrowBack,ArrowForwardIos, CurrencyBitcoin, AccountBalanceWalletRounded} from '@mui/icons-material';

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



const CryptoDeposit = () => {
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

                <Link to="/deposit" style={{
                    fontSize:"0.75rem",
                    textDecoration:"none",
                    color:grey[600]
                }}>
                    Deposit
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
                    Cryptocurrency
                </Typography>

            </Box>
            <Grid item xs={12}>
                <Typography sx={{
                    fontSize: '1.125rem',
                    fontWeight: 500,
                    color: 'black',
                    
                    marginBottom :"20px"
                }}>
                    Deposit
                </Typography>
            </Grid>

            <Grid item container xs={12} md={6} sx={{
                paddingRight:{md:"10px"}
            }}>
                <Grid item container xs={12}>
                    <Typography sx={{
                        fontSize:"0.688rem",
                        color:grey[500],
                        fontWeight : 600,
                        marginBottom:"8px"
                    }}>
                        Deposit Method
                    </Typography>
                </Grid>

                <Box sx={{
                    display:"flex",
                    alignItems:"center",
                    gap : "20px",
                    padding:"14px 20px",
                    border:1,
                    borderColor:grey[400],
                    borderRadius:"10px",
                    width:"100%",
                    marginBottom:"24px",
                }}>
                     <img src={Usdtimg} alt="visa" style={{
                            width:"40px",
                            height:"40px"
                        }}/>

                    <Typography sx={{
                        fontSize:"0.875rem",
                        fontWeight:600,
                        color:'black',
                        
                    }}>
                        Cryptocurrency USDT
                    </Typography>
                </Box>

                <Grid item container xs={12}>
                    <Typography sx={{
                        fontSize:"0.688rem",
                        color:grey[500],
                        fontWeight : 600,
                        marginBottom:"8px"
                    }}>
                        Wallet Balance
                    </Typography>
                </Grid>

                <Box sx={{
                    display:"flex",
                    alignItems:"center",
                    gap : "20px",
                    padding:"14px 20px",
                    border:1,
                    borderColor:grey[400],
                    borderRadius:"10px",
                    width:"100%",
                    marginBottom:"24px",
                }}>
                     <AccountBalanceWalletRounded sx={{
                            color: deepPurple[500],
                           width:"40px",
                           height:"40px",
                           backgroundColor:deepPurple[100],
                           padding:"5px",
                           borderRadius:"5px"
                        }}/>
                    
                    <Box sx={{

                    }}>
                        <Typography sx={{
                            fontSize:"1.25rem",
                            fontWeight:600,
                            color:'black',
                            
                        }}>
                            $ 0.00
                        </Typography>
                        <Typography sx={{
                            fontSize:"0.688rem",
                            color:grey[500],
                            fontWeight : 600, 
                        }}>
                           Charity Subscription Balance
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{
                    width:"100%",
                    border:1,
                    borderColor:grey[400],
                    borderRadius:"10px",
                    padding:"20px",
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"center",
                    justifyContent:"center"
                }}>
                    <img style={{
                    width:"120px",
                    height : "120px",
                    marginBottom:"20px"
                    }} src='https://randomqr.com/assets/images/randomqr-256.png' alt='qrcode'/>

                    <Typography sx={{
                        fontSize:"1rem",
                        color:'black',
                        fontWeight : 600,
                        marginBottom:"8px"
                    }}>
                        USDT address (TRC20)
                    </Typography>

                    <Typography sx={{
                        fontSize:"0.688rem",
                        color:grey[500],
                        fontWeight : 600,
                    }}>
                         THTVa2A5uPR2dbvHVUoCkqH38bkKNUxpN8 
                    </Typography>
                </Box>
            </Grid>
            <Grid item container xs={12} md={6} sx={{
                paddingLeft:{md:"10px"},
                marginTop:{xs:"20px", md:"0"}
            }}>
                <Box>
                    <Typography sx={{
                            fontSize:"1rem",
                            color:'black',
                            fontWeight : 600,
                            marginBottom:"8px"
                        }}>
                            Reminder
                    </Typography>
                    <Typography sx={{
                            fontSize:"0.688rem",
                            color:grey[500],
                            fontWeight : 600,
                            marginBottom:"8px"
                        }}>
                            • Do not deposit any non-USDT (TRC20) assets to the above address, otherwise the assets will not be retrieved.  
                    </Typography>
                    <Typography sx={{
                            fontSize:"0.688rem",
                            color:grey[500],
                            fontWeight : 600,
                            marginBottom:"8px"
                        }}>
                             • After you deposit to the above address, you need to confirm the entire network node, and it will be credited after 3 network confirmations.  
                    </Typography>
                    <Typography sx={{
                            fontSize:"0.688rem",
                            color:grey[500],
                            fontWeight : 600,
                            marginBottom:"8px"
                        }}>
                             • Minimum deposit amount: 0.1 USDT (TRC20), deposits less than the minimum amount will not be credited to the account and cannot be refunded.   
                    </Typography>
                </Box>
            </Grid>

            <Button variant='contained' sx={{
                mx : "auto",
                width:"150px",
                backgroundColor:deepPurple[500],
                marginTop : "50px"
            }}>Copy Address</Button>
            
        </Grid>
    );
};

export default CryptoDeposit;
