import { useEffect, useState } from 'react';

// material-ui
import { Grid, 
    Typography, 
    Box, 
    Button,
    TextField
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
import {ArrowBack,ArrowForwardIos, AccountBalance, AccountBalanceWalletRounded} from '@mui/icons-material';

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



const BankDeposit = () => {
    const user = useSelector(selectCurrentUser)
    const token = useSelector(selectCurrentToken)
    const [isLoading, setLoading] = useState(true);
    const [amount,setAmount] = useState(0)

    useEffect(() => {
        setLoading(false);
    }, []);

    // const handleChange = (event) => {
    //     console.log(event.target.value)
    //     setValue(event.target.value);
    // };
    const addAmount = (amount) => {
        setAmount((prev) => parseInt(prev) + parseInt(amount))
    }

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
                    Bank Transfer
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
                     <AccountBalance sx={{
                            color: deepPurple[500],
                           width:"40px",
                           height:"40px",
                           backgroundColor:deepPurple[100],
                           padding:"5px",
                           borderRadius:"5px"
                        }}/>

                    <Typography sx={{
                        fontSize:"0.875rem",
                        fontWeight:600,
                        color:'black',
                        
                    }}>
                        Bank Transfer (MYR)
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
            </Grid>
            <Grid item container xs={12} md={6} sx={{
                paddingLeft:{md:"10px"},
                marginTop:{xs:"20px", md:"0"}
            }}>
                <Box sx={{
                    width:"100%"
                }}>
                    <Grid item container xs={12}>
                        <Typography sx={{
                            fontSize:"0.688rem",
                            color:grey[500],
                            fontWeight : 600,
                            marginBottom:"8px"
                        }}>
                            Amount is required
                        </Typography>
                    </Grid>

                    <Box sx={{
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"space-between",
                        margin:"8px 0"
                    }}>
                        <Typography sx={{
                            fontSize:"0.875rem",
                            color:grey[500],
                            fontWeight:600,
                        }}>
                            Deposit Amount
                        </Typography>
                        <Typography sx={{
                            fontSize:"0.688rem",
                            color:grey[500],
                            fontWeight:600,
                        }}>
                            $1 = MYR 4.662
                        </Typography>
                    </Box>

                    <TextField id="outlined-basic" type='number' helperText={amount < 50 ? "Minimum 50" : ""} error={amount < 50 ? true : false} variant="outlined" sx={{width:"100%"}}  value={amount}
                    onChange={(event) => {
                        setAmount(event.target.value);
                    }}/>

                    <Box sx={{
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"space-between",
                        gap:"5px",
                        marginTop:"20px"
                    }}>
                        <Box sx={{
                            width:"130px",
                            height:"40px",
                            border:2,
                            borderColor:deepPurple[500],
                            borderRadius:'10px',
                            display:"grid",
                            placeItems:"center"
                        }} onClick={() => addAmount(30)}>
                            <Typography sx={{
                                fontSize : "0.875rem",
                                color:deepPurple[500],
                                fontWeight:600
                            }}>
                                +30
                            </Typography>
                        </Box>
                        <Box sx={{
                            width:"130px",
                            height:"40px",
                            border:2,
                            borderColor:deepPurple[500],
                            borderRadius:'10px',
                            display:"grid",
                            placeItems:"center"
                        }} onClick={() => addAmount(100)}>
                            <Typography sx={{
                                fontSize : "0.875rem",
                                color:deepPurple[500],
                                fontWeight:600
                            }}>
                                +100
                            </Typography>
                        </Box>
                        <Box sx={{
                            width:"130px",
                            height:"40px",
                            border:2,
                            borderColor:deepPurple[500],
                            borderRadius:'10px',
                            display:"grid",
                            placeItems:"center"
                        }} onClick={() => addAmount(200)}>
                            <Typography sx={{
                                fontSize : "0.875rem",
                                color:deepPurple[500],
                                fontWeight:600
                            }}>
                                +200
                            </Typography>
                        </Box>
                    </Box>

                    <div style={{width:"100%",height:"1px",backgroundColor:grey[400],margin:"20px 0"}}></div>

                    <Grid item container xs={12}>
                        <Typography sx={{
                            fontSize:"0.688rem",
                            color:grey[500],
                            fontWeight : 600,
                            marginBottom:"8px"
                        }}>
                            Summary
                        </Typography>
                    </Grid>

                    <Box sx={{
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"space-between",
                    }}>
                        <Typography sx={{
                            fontSize:"0.688rem",
                            color:"black",
                            fontWeight:600,
                        }}>
                            Total Bank-in Amount
                        </Typography>
                        <Typography sx={{
                            fontSize:"1.125rem",
                            color:deepPurple[500],
                            fontWeight:600,
                        }}>
                            MYR {amount * 4.662}
                        </Typography>
                    </Box>
                </Box>
            </Grid>

            <Button variant='contained' sx={{
                mx : "auto",
                width:"150px",
                backgroundColor:deepPurple[500],
                marginTop : "50px"
            }}>Deposit Now</Button>
            
        </Grid>
    );
};

export default BankDeposit;
