import { useEffect, useState } from 'react';

// material-ui
import { Grid, Typography, Box, Button } from '@mui/material';
import { deepPurple, grey } from '@mui/material/colors';

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

import {AccountBalanceWalletRounded, ArrowForwardIos,TokenRounded} from '@mui/icons-material';


// ==============================|| DEFAULT DASHBOARD ||============================== //

const Wallet = () => {
    const user = useSelector(selectCurrentUser)
    const token = useSelector(selectCurrentToken)
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

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
                    marginBottom :"10px"
                }}>
                    Wallet
                </Typography>
            </Grid>
            
            <Box sx={{
                width: "100%",
                maxWidth:"1000px",
                border: 1,
                borderRadius : "5px",
                borderColor: 'grey.400',
                mx : 'auto',  
            }}>
                
                <Box sx={{
                    width: 1,
                    display:'flex',
                    justifyContent:'space-between',
                    alignItems : "center",
                    p : '14px'
                }}>
                    <Box sx={{
                        display:'flex',
                        alignItems:'center',
                        gap :'10px'
                    }}>
                        <AccountBalanceWalletRounded sx={{
                            color: deepPurple[500],
                           width:"40px",
                           height:"40px",
                           backgroundColor:deepPurple[100],
                           padding:"5px",
                           borderRadius:"5px"
                        }}/>
                        <Box>
                            <Typography sx={{
                                fontSize:'1.25rem',
                                fontWeight : "600"
                            }}>
                                $ 0.00
                            </Typography>
                            <Typography sx={{
                                fontSize:'0.688rem',
                                fontWeight : "500",
                                color : "#858c94"
                            }}>
                                Charity Subscription Balance
                            </Typography>
                        </Box>
                    </Box>


                    <ArrowForwardIos sx={{
                        color:deepPurple[500],
                    }}/>
                </Box>

                <Box sx={{
                    marginTop:"6px",
                    display:"flex",
                    gap:"20px",
                    paddingLeft:"14px",
                }}>
                    <Link to="/deposit">
                        <Button variant='outlined' sx={{
                            fontSize :"0.875rem",
                            color : deepPurple[500],
                            border : 2,
                            borderColor: deepPurple[500],
                        }}>
                            Deposit
                        </Button>
                    </Link>
                    <Link to="/purchaseToken">
                        <Button variant='outlined' sx={{
                            fontSize :"0.875rem",
                            color : deepPurple[500],
                            border : 2,
                            borderColor: deepPurple[500],
                        }}>
                            Purchase Token
                        </Button>
                    </Link>
                </Box>
                <div style={{width:"100%",height:"1px",backgroundColor:grey[400],margin:"10px 0"}}></div>

                <Box sx={{
                    width: 1,
                    display:'flex',
                    justifyContent:'space-between',
                    alignItems : "center",
                    p : '14px'
                }}>
                    <Box sx={{
                        display:'flex',
                        alignItems:'center',
                        gap :'10px'
                    }}>
                        <AccountBalanceWalletRounded sx={{
                            color: deepPurple[500],
                           width:"40px",
                           height:"40px",
                           backgroundColor:deepPurple[100],
                           padding:"5px",
                           borderRadius:"5px"
                        }}/>
                        <Box>
                            <Typography sx={{
                                fontSize:'1.25rem',
                                fontWeight : "600"
                            }}>
                                $ 0.00
                            </Typography>
                            <Typography sx={{
                                fontSize:'0.688rem',
                                fontWeight : "500",
                                color : "#858c94"
                            }}>
                                Charity Bonus Balance
                            </Typography>
                        </Box>
                    </Box>


                    <ArrowForwardIos sx={{
                        color:deepPurple[500],
                    }}/>
                </Box>
                <div style={{width:"100%",height:"1px",backgroundColor:grey[400],margin:"10px 0"}}></div>
                <Box sx={{
                    width: 1,
                    display:'flex',
                    justifyContent:'space-between',
                    alignItems : "center",
                    p : '14px'
                }}>
                    <Box sx={{
                        display:'flex',
                        alignItems:'center',
                        gap :'10px'
                    }}>
                        <AccountBalanceWalletRounded sx={{
                            color: deepPurple[500],
                           width:"40px",
                           height:"40px",
                           backgroundColor:deepPurple[100],
                           padding:"5px",
                           borderRadius:"5px"
                        }}/>
                        <Box>
                            <Typography sx={{
                                fontSize:'1.25rem',
                                fontWeight : "600"
                            }}>
                                $ 0.00
                            </Typography>
                            <Typography sx={{
                                fontSize:'0.688rem',
                                fontWeight : "500",
                                color : "#858c94"
                            }}>
                                Charity Rebate
                            </Typography>
                        </Box>
                    </Box>


                    <ArrowForwardIos sx={{
                        color:deepPurple[500],
                    }}/>
                </Box>
                <div style={{width:"100%",height:"1px",backgroundColor:grey[400],margin:"10px 0"}}></div>
                <Box sx={{
                    width: 1,
                    display:'flex',
                    justifyContent:'space-between',
                    alignItems : "center",
                    p : '14px'
                }}>
                    <Box sx={{
                        display:'flex',
                        alignItems:'center',
                        gap :'10px'
                    }}>
                        <TokenRounded sx={{
                            color: deepPurple[500],
                           width:"40px",
                           height:"40px",
                           backgroundColor:grey[300],
                           padding:"5px",
                           borderRadius:"5px"
                        }}/>
                        <Box>
                            <Typography sx={{
                                fontSize:'1.25rem',
                                fontWeight : "600"
                            }}>
                                0.00 <span style={{fontSize:"0.688rem",color:grey[500]}}>= $0.00</span>
                            </Typography>
                            <Typography sx={{
                                fontSize:'0.688rem',
                                fontWeight : "500",
                                color : "#858c94"
                            }}>
                                QFC Token (Lock)
                            </Typography>
                        </Box>
                    </Box>


                    <ArrowForwardIos sx={{
                        color:deepPurple[500],
                    }}/>
                </Box>
                <div style={{width:"100%",height:"1px",backgroundColor:grey[400],margin:"10px 0"}}></div>
                <Box sx={{
                    width: 1,
                    display:'flex',
                    justifyContent:'space-between',
                    alignItems : "center",
                    p : '14px'
                }}>
                    <Box sx={{
                        display:'flex',
                        alignItems:'center',
                        gap :'10px'
                    }}>
                        <TokenRounded sx={{
                            color: deepPurple[500],
                           width:"40px",
                           height:"40px",
                           backgroundColor:grey[300],
                           padding:"5px",
                           borderRadius:"5px"
                        }}/>
                        <Box>
                            <Typography sx={{
                                fontSize:'1.25rem',
                                fontWeight : "600"
                            }}>
                                0.00 <span style={{fontSize:"0.688rem",color:grey[500]}}>= $0.00</span>
                            </Typography>
                            <Typography sx={{
                                fontSize:'0.688rem',
                                fontWeight : "500",
                                color : "#858c94"
                            }}>
                                QFC Token
                            </Typography>
                        </Box>
                    </Box>


                    <ArrowForwardIos sx={{
                        color:deepPurple[500],
                    }}/>
                </Box>
                <Box sx={{
                    marginTop:"6px",
                    marginBottom:"14px",
                    display:"flex",
                    gap:"20px",
                    paddingLeft:"14px",
                }}>
                    <Button variant='outlined' sx={{
                        fontSize :"0.875rem",
                        color : deepPurple[500],
                        border : 2,
                        borderColor: deepPurple[500],
                    }}>
                        Donate
                    </Button>
                    <Link to ="/withdraw">
                    <Button variant='outlined' sx={{
                        fontSize :"0.875rem",
                        color : deepPurple[500],
                        border : 2,
                        borderColor: deepPurple[500],
                    }}>
                        Withdraw Token
                    </Button>
                    </Link>
                </Box>
            </Box>
            
        </Grid>
    );
};

export default Wallet;
