import { useEffect, useState } from 'react';

// material-ui
import { Grid, 
    Typography, 
    Box, 
    Button,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
    InputLabel,
    Select,
    MenuItem,
    Switch
 } from '@mui/material';
import { deepPurple, grey, purple } from '@mui/material/colors';
import { styled, useTheme } from '@mui/material/styles';

import Visaimg from "../../../assets/images/visa.webp"
import Usdtimg from "../../../assets/images/usdt.png"
import Qfcimg from "../../../assets/images/qfc.png"

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



const PurchaseToken = () => {
    const user = useSelector(selectCurrentUser)
    const token = useSelector(selectCurrentToken)
    const [isLoading, setLoading] = useState(true);
    const [tokenPackage, setTokenPackage] = useState(300)
    const [tokenAmount, setTokenAmount] = useState(60000)

    useEffect(() => {
        setLoading(false);
    }, []);

    const handleChange = (event) => {
        // console.log(event.target.value)
        setTokenPackage(event.target.value);
        if(event.target.value === 300){
            setTokenAmount(60000)
        }
        if(event.target.value === 500){
            setTokenAmount(100000)
        }
        if(event.target.value === 1000){
            setTokenAmount(200000)
        }
        if(event.target.value === 3000){
            setTokenAmount(600000)
        }
        if(event.target.value === 10000){
            setTokenAmount(2000000)
        }
        if(event.target.value === 30000){
            setTokenAmount(6000000)
        }
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
                    Purchase QFC Token
                </Typography>

            </Box>
            <Grid item xs={12}>
                <Typography sx={{
                    fontSize: '1.125rem',
                    fontWeight: 500,
                    color: 'black',
                    
                    marginBottom :"20px"
                }}>
                    Purchase QFC Token
                </Typography>
            </Grid>

            <Grid xs={12} md={6} sx={{paddingRight:{md:"10px"}}}>
                <Typography sx={{
                    fontSize:"0.688rem",
                    color:grey[500],
                    fontWeight:600,
                    marginBottom:"8px"
                }}>
                    Token Detail
                </Typography>

                <FormControl fullWidth>
                    {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={tokenPackage}
                        onChange={handleChange}
                    >
                        <MenuItem value={300}>
                            <Box>
                                <Typography sx={{
                                    fontSize:"0.875rem",
                                    fontWeight:600,
                                    color:'black',
                                }}>
                                    Package 300
                                </Typography>
                                <Typography sx={{
                                    fontSize:"0.875rem",
                                    fontWeight:600,
                                    color:deepPurple[500],
                                }}>
                                    60,000 QFC Token
                                </Typography>
                            </Box>
                        </MenuItem>
                        <MenuItem value={500}>
                            <Box>
                                <Typography sx={{
                                    fontSize:"0.875rem",
                                    fontWeight:600,
                                    color:'black',
                                }}>
                                    Package 500
                                </Typography>
                                <Typography sx={{
                                    fontSize:"0.875rem",
                                    fontWeight:600,
                                    color:deepPurple[500],
                                }}>
                                    100,000 QFC Token
                                </Typography>
                            </Box>
                            </MenuItem>
                        <MenuItem value={1000}>
                            <Box>
                                <Typography sx={{
                                    fontSize:"0.875rem",
                                    fontWeight:600,
                                    color:'black',
                                }}>
                                    Package 1000
                                </Typography>
                                <Typography sx={{
                                    fontSize:"0.875rem",
                                    fontWeight:600,
                                    color:deepPurple[500],
                                }}>
                                    200,000 QFC Token
                                </Typography>
                            </Box>
                        </MenuItem>
                        <MenuItem value={3000}>
                            <Box>
                                <Typography sx={{
                                    fontSize:"0.875rem",
                                    fontWeight:600,
                                    color:'black',
                                }}>
                                    Package 3000
                                </Typography>
                                <Typography sx={{
                                    fontSize:"0.875rem",
                                    fontWeight:600,
                                    color:deepPurple[500],
                                }}>
                                    600,000 QFC Token
                                </Typography>
                            </Box>
                        </MenuItem>
                        <MenuItem value={10000}>
                            <Box>
                                <Typography sx={{
                                    fontSize:"0.875rem",
                                    fontWeight:600,
                                    color:'black',
                                }}>
                                    Package 10000
                                </Typography>
                                <Typography sx={{
                                    fontSize:"0.875rem",
                                    fontWeight:600,
                                    color:deepPurple[500],
                                }}>
                                    2,000,000 QFC Token
                                </Typography>
                            </Box>
                        </MenuItem>
                        <MenuItem value={30000}>
                            <Box>
                                <Typography sx={{
                                    fontSize:"0.875rem",
                                    fontWeight:600,
                                    color:'black',
                                }}>
                                    Package 30000
                                </Typography>
                                <Typography sx={{
                                    fontSize:"0.875rem",
                                    fontWeight:600,
                                    color:deepPurple[500],
                                }}>
                                    6,000,000 QFC Token
                                </Typography>
                            </Box>
                        </MenuItem>
                    </Select>
                </FormControl>

                <Typography sx={{
                    fontSize:"0.688rem",
                    color:grey[500],
                    fontWeight:600,
                    marginBottom:"8px",
                    marginTop : "20px"
                }}>
                    QFC Token Pre-Sale Session
                </Typography>

                <Box sx={{
                    display:"flex",
                    justifyContent:"space-between",
                    alignItems:"center",
                    marginBottom:"2px",
                }}>
                    <Typography sx={{
                        fontSize:"0.688rem",
                        color:"black",
                        fontWeight:600,
                    }}>
                        Token Price
                    </Typography>
                    <Typography sx={{
                        fontSize:"0.688rem",
                        color:deepPurple[500],
                        fontWeight:600,
                    }}>
                        $0.005
                    </Typography>
                </Box>
                <Box sx={{
                    display:"flex",
                    justifyContent:"space-between",
                    alignItems:"center",
                    marginBottom:"2px",
                }}>
                    <Typography sx={{
                        fontSize:"0.688rem",
                        color:"black",
                        fontWeight:600,
                    }}>
                        Period
                    </Typography>
                    <Typography sx={{
                        fontSize:"0.688rem",
                        color:deepPurple[500],
                        fontWeight:600,
                    }}>
                       12 Months
                    </Typography>
                </Box>
                <Box sx={{
                    display:"flex",
                    justifyContent:"space-between",
                    alignItems:"center",
                    marginBottom:"2px",
                }}>
                    <Typography sx={{
                        fontSize:"0.688rem",
                        color:"black",
                        fontWeight:600,
                    }}>
                        Bonus Cycle
                    </Typography>
                    <Typography sx={{
                        fontSize:"0.688rem",
                        color:deepPurple[500],
                        fontWeight:600,
                    }}>
                       Monthly release of bonus
                    </Typography>
                </Box>
                <Box sx={{
                    display:"flex",
                    justifyContent:"space-between",
                    alignItems:"center",
                    marginBottom:"2px",
                }}>
                    <Typography sx={{
                        fontSize:"0.688rem",
                        color:"black",
                        fontWeight:600,
                    }}>
                        Total QFC Token Supply
                    </Typography>
                    <Typography sx={{
                        fontSize:"0.688rem",
                        color:deepPurple[500],
                        fontWeight:600,
                    }}>
                       1,000,000,000
                    </Typography>
                </Box>

                <div style={{width:"100%",height:"1px",backgroundColor:grey[400],margin:"16px 0"}}></div>
                <Typography sx={{
                    fontSize:"0.688rem",
                    color:grey[500],
                    fontWeight:600,
                    marginBottom:"8px",
                    marginTop : "20px"
                }}>
                    Total Purchase Amount
                </Typography>

                <Box sx={{
                    border:1,
                    borderColor:grey[400],
                    padding:"12px 20px",
                    borderRadius:"10px"
                }}>
                    <Typography sx={{
                        fontSize:"0.875rem",
                        color:'black',
                        fontWeight:600,
                    }}>
                        $ {tokenPackage}.00
                    </Typography>
                </Box>

                <Box sx={{
                    display:"flex",
                    alignItems:"center",
                    marginTop:"10px",
                    gap:"20px"
                }}>
                    <Typography sx={{
                        fontSize:"0.688rem",
                        color:grey[500],
                        fontWeight:600,
                    }}>
                        Charity Subscription Balance
                    </Typography>
                    <Typography sx={{
                        fontSize:"0.688rem",
                        color:deepPurple[500],
                        fontWeight:600,
                    }}>
                       $0.00
                    </Typography>
                </Box>

                <div style={{width:"100%",height:"1px",backgroundColor:grey[400],margin:"16px 0"}}></div>
            </Grid>
            <Grid xs={12} md={6} sx={{paddingLeft:{md:"10px"}}}>
                    <Box sx={{
                        display:"flex",
                        justifyContent:"space-between",
                        alignItems:"center"
                    }}>
                        <Typography sx={{
                            fontSize:"0.688rem",
                            color:grey[500],
                            fontWeight:600,
                            marginBottom:"8px"
                        }}>
                            Total Discount Amount
                        </Typography>
                        <Switch defaultChecked />
                    </Box>

                    <Box sx={{
                    border:1,
                    borderColor:grey[400],
                    padding:"12px 20px",
                    borderRadius:"10px"
                    }}>
                        <Typography sx={{
                            fontSize:"0.875rem",
                            color:'black',
                            fontWeight:600,
                        }}>
                            $ {tokenPackage}.00
                        </Typography>
                    </Box>

                    <Box sx={{
                        display:"flex",
                        alignItems:"center",
                        marginTop:"10px",
                        gap:"20px"
                    }}>
                        <Typography sx={{
                            fontSize:"0.688rem",
                            color:grey[500],
                            fontWeight:600,
                        }}>
                            Charity Rebate
                        </Typography>
                        <Typography sx={{
                            fontSize:"0.688rem",
                            color:deepPurple[500],
                            fontWeight:600,
                        }}>
                            $0.00
                        </Typography>
                    </Box>

                    <div style={{width:"100%",height:"1px",backgroundColor:grey[400],margin:"16px 0"}}></div>

                    <Typography sx={{
                        fontSize:"0.688rem",
                        color:grey[500],
                        fontWeight:600,
                        marginBottom:"8px"
                    }}>
                        Summary
                    </Typography>

                    <Box sx={{
                        display:"flex",
                        justifyContent:"space-between",
                        alignItems:"center",
                        marginBottom:"8px",
                    }}>
                        <Typography sx={{
                            fontSize:"0.688rem",
                            color:"black",
                            fontWeight:600,
                        }}>
                            Total Purchase Amount
                        </Typography>
                        <Typography sx={{
                            fontSize:"0.875rem",
                            color:'black',
                            fontWeight:600,
                        }}>
                            $ {tokenPackage}.00
                        </Typography>
                    </Box>

                    <Box sx={{
                        display:"flex",
                        justifyContent:"space-between",
                        alignItems:"center",
                        marginBottom:"8px",
                    }}>
                        <Typography sx={{
                            fontSize:"0.688rem",
                            color:"black",
                            fontWeight:600,
                        }}>
                            Discount Amount
                        </Typography>
                        <Typography sx={{
                            fontSize:"0.875rem",
                            color:'black',
                            fontWeight:600,
                        }}>
                            - $ 0.00
                        </Typography>
                    </Box>

                    <Box sx={{
                        display:"flex",
                        justifyContent:"space-between",
                        alignItems:"center",
                        marginBottom:"8px",
                    }}>
                        <Typography sx={{
                            fontSize:"0.688rem",
                            color:"black",
                            fontWeight:600,
                        }}>
                            Total Deducted Amount
                        </Typography>
                        <Typography sx={{
                            fontSize:"1.125rem",
                            color:deepPurple[500],
                            fontWeight:600,
                        }}>
                            $ {tokenPackage}.00
                        </Typography>
                    </Box>

                    <Typography sx={{
                            fontSize:"0.688rem",
                            color:grey[500],
                            fontWeight:600,
                            margin:"16px 0 8px 0"
                        }}>
                            Total 
                    </Typography>

                    <Box sx={{
                        display:"flex",
                        justifyContent:"space-between",
                        alignItems:"center",
                        marginBottom:"8px",
                    }}>
                        <Typography sx={{
                            fontSize:"0.688rem",
                            color:"black",
                            fontWeight:600,
                        }}>
                            Total Received QFC Token
                        </Typography>
                        <Typography sx={{
                            fontSize:"0.875rem",
                            color:deepPurple[500],
                            fontWeight:600,
                        }}>
                            {tokenAmount}
                        </Typography>
                    </Box>

                    <Grid item container xs={12}>
                        <Button variant='contained' sx={{
                            mx : "auto",
                            width:"150px",
                            backgroundColor:deepPurple[500],
                            marginTop : "50px"
                        }}>Purchse Now</Button>
                    </Grid>
            </Grid>
            
        </Grid>
    );
};

export default PurchaseToken;
