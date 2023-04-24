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
    Input,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper
 } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { deepPurple, grey, purple } from '@mui/material/colors';



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
import {Search, Face} from '@mui/icons-material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

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

const  createData = (name, level1, level2) => {
    return { name, level1,level2 };
}

const rows = [
    createData('Today', '0 | 0', '0 | 0'),
    createData('This Week', '0 | 0', '0 | 0'),
    createData('Last Week', '0 | 0', '0 | 0'),
    createData('This Month', '0 | 0', '0 | 0'),
   
];

const BasicTable = () => {
    return (
      <TableContainer  sx={{
        marginTop:"20px",
        border:1,
        borderColor:grey[400],
        borderRadius:"10px",
        }}>
        <Table  aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell ></TableCell>
              <TableCell align="center" sx={{fontSize:"0.75rem"}}>1st Level</TableCell>
              <TableCell align="center" sx={{fontSize:"0.75rem"}}>2nd level</TableCell>
             
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                
              >
                <TableCell component="th" scope="row"  sx={{fontSize:"0.75rem",fontWeight:600}}>
                  {row.name}
                </TableCell>
                <TableCell align="center" style={{color:deepPurple[500],fontSize:"0.75rem",fontWeight:600}}>{row.level1}</TableCell>
                <TableCell align="center" style={{color:deepPurple[500],fontSize:"0.75rem",fontWeight:600}}>{row.level2}</TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}


const Community = () => {
    const user = useSelector(selectCurrentUser)
    const token = useSelector(selectCurrentToken)
    const [isLoading, setLoading] = useState(true);
    const [view,setView] = useState('friendfamily')
    

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
                    Community
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
                    <StyledToggleButton  value="friendfamily" aria-label="Password">
                        Friend and Family
                    </StyledToggleButton>
                    <StyledToggleButton  value="ranking" aria-label="Security Pin">
                        My current ranking
                    </StyledToggleButton>
                </StyledToggleButtonGroup>
            </Box>
            {
                view === 'friendfamily' && 
                <>
                    <Grid container spacing={{xs:2,md:0}} sx={{
                border :1,
                borderRadius : "10px",
                borderColor : grey[400],
                width:"100%",
                padding:"16px 40px",
                marginTop:{xs:"10px"}
            }}>
                <Grid item container xs={6} md={3}>
                    <Box>
                    <Typography sx={{
                        fontSize:"1.25rem",
                        fontWeight:600,
                        color:"black"
                    }}>
                        $ 0.00
                    </Typography>
                    <Typography sx={{
                        fontSize:"0.688rem",
                        fontWeight:500,
                        color:grey[600]
                    }}>
                       Direct Sponsor Sales
                    </Typography>
                    </Box>
                </Grid>
                <Grid item container xs={6} md={3}>
                    <Box>
                    <Typography sx={{
                        fontSize:"1.25rem",
                        fontWeight:600,
                        color:"black"
                    }}>
                        0
                    </Typography>
                    <Typography sx={{
                        fontSize:"0.688rem",
                        fontWeight:500,
                        color:grey[600]
                    }}>
                       Direct Sponsors
                    </Typography>
                    </Box>
                </Grid>
                <Grid item container xs={6} md={3}>
                    <Box>
                    <Typography sx={{
                        fontSize:"1.25rem",
                        fontWeight:600,
                        color:"black"
                    }}>
                        $ 0.00
                    </Typography>
                    <Typography sx={{
                        fontSize:"0.688rem",
                        fontWeight:500,
                        color:grey[600]
                    }}>
                       Team Sales
                    </Typography>
                    </Box>
                </Grid>
                <Grid item container xs={6} md={3}>
                    <Box>
                        <Typography sx={{
                            fontSize:"1.25rem",
                            fontWeight:600,
                            color:"black"
                        }}>
                            0
                        </Typography>
                        <Typography sx={{
                            fontSize:"0.688rem",
                            fontWeight:500,
                            color:grey[600]
                        }}>
                        Team Members
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            
            <TextField
                id="input-with-icon-textfield"
                label="Search"
                InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                    <Search />
                    </InputAdornment>
                ),
                }}
                variant="outlined"
                sx={{
                    margin:"20px 0",
                    width:"100%"
                }}
            />

            <div style={{width:"100%",height:"1px",backgroundColor:grey[400],margin:"10px 0"}}></div>
            <Box>
                <Box sx={{
                    display:"flex",
                    alignItems:"center",
                    gap:"20px"
                }}>
                        <Face sx={{
                            color: deepPurple[500],
                           width:"30px",
                           height:"30px",
                           backgroundColor:deepPurple[100],
                           padding:"5px",
                           borderRadius:"5px"
                        }}/>
                        <Typography sx={{
                            fontSize : "0.75rem",
                            color:'black',
                            fontWeight:500,
                        }}>
                            Stevencheok8
                        </Typography>
                        <Typography sx={{
                            fontSize : "0.75rem",
                            color:deepPurple[500],
                            fontWeight:500,
                        }}>
                            (You)
                        </Typography>
                        <Typography sx={{
                            fontSize : "0.75rem",
                            color:grey[500],
                            fontWeight:500,
                            padding:"5px",
                            backgroundColor:grey[300],
                            borderRadius:"5px"
                        }}>
                            Member
                        </Typography>
                </Box>

                <Box sx={{
                    display:"flex",
                    alignItems:"center",
                    gap:"40px",
                    marginTop:"30px"
                }}>
                    <Box>
                        <Typography sx={{
                            fontSize : "0.75rem",
                            color:deepPurple[500],
                            fontWeight:500,
                        }}>
                            $ 0.00
                        </Typography>
                        <Typography sx={{
                            fontSize : "0.75rem",
                            color:grey[500],
                            fontWeight:500,
                        }}>
                            Personal Sales
                        </Typography>
                    </Box>
                    <Box>
                        <Typography sx={{
                            fontSize : "0.75rem",
                            color:deepPurple[500],
                            fontWeight:500,
                        }}>
                            $ 0.00
                        </Typography>
                        <Typography sx={{
                            fontSize : "0.75rem",
                            color:grey[500],
                            fontWeight:500,
                        }}>
                            Team Sales
                        </Typography>
                    </Box>
                    <Box>
                        <Typography sx={{
                            fontSize : "0.75rem",
                            color:'black',
                            fontWeight:500,
                        }}>
                            0
                        </Typography>
                        <Typography sx={{
                            fontSize : "0.75rem",
                            color:grey[500],
                            fontWeight:500,
                        }}>
                            Personal Sales
                        </Typography>
                    </Box>
                </Box>
            </Box>
                </>
            }

            {
                view === 'ranking' && 
                <>
                <Box sx={{
                    border :1,
                    borderRadius : "10px",
                    borderColor : grey[400],
                    width:"100%",
                    padding:"16px",
                    marginTop:{xs:"10px"}
                }}>
                        <Typography sx={{
                            fontSize : "0.75rem",
                            color:'black',
                            fontWeight:500,
                        }}>
                            My Current Ranking
                        </Typography>

                        <Box sx={{
                            display:"flex",
                            alignItems:"center",
                            gap:"20px",
                            marginTop:"20px"
                        }}>
                            <Face sx={{
                                color: deepPurple[500],
                            width:"30px",
                            height:"30px",
                            backgroundColor:deepPurple[100],
                            padding:"5px",
                            borderRadius:"5px"
                            }}/>
                            <Typography sx={{
                                fontSize : "0.75rem",
                                color:'black',
                                fontWeight:500,
                            }}>
                                Stevencheok8
                            </Typography>
                            <Typography sx={{
                                fontSize : "0.75rem",
                                color:grey[500],
                                fontWeight:500,
                                padding:"5px",
                                backgroundColor:grey[300],
                                borderRadius:"5px"
                            }}>
                                Member
                            </Typography>
                        </Box>

                        <Box sx={{
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"space-between",
                            marginTop:"20px"
                        }}>
                            <Face sx={{
                                color: deepPurple[500],
                                width:"25px",
                                height:"25px",
                                backgroundColor:deepPurple[100],
                                padding:"5px",
                                borderRadius:"5px",
                                
                            }}/>
                            <Face sx={{
                                color: deepPurple[500],
                                width:"25px",
                                height:"25px",
                                backgroundColor:deepPurple[100],
                                padding:"5px",
                                borderRadius:"5px",
                                opacity:"0.4"
                            }}/>
                            <Face sx={{
                                color: deepPurple[500],
                                width:"25px",
                                height:"25px",
                                backgroundColor:deepPurple[100],
                                padding:"5px",
                                borderRadius:"5px",
                                opacity:"0.4"
                            }}/>
                            <Face sx={{
                                color: deepPurple[500],
                                width:"25px",
                                height:"25px",
                                backgroundColor:deepPurple[100],
                                padding:"5px",
                                borderRadius:"5px",
                                opacity:"0.4"
                            }}/>
                            <Face sx={{
                                color: deepPurple[500],
                                width:"25px",
                                height:"25px",
                                backgroundColor:deepPurple[100],
                                padding:"5px",
                                borderRadius:"5px",
                                opacity:"0.4"
                            }}/>
                            <Face sx={{
                                color: deepPurple[500],
                                width:"25px",
                                height:"25px",
                                backgroundColor:deepPurple[100],
                                padding:"5px",
                                borderRadius:"5px",
                                opacity:"0.4"
                            }}/>
                            <Face sx={{
                                color: deepPurple[500],
                                width:"25px",
                                height:"25px",
                                backgroundColor:deepPurple[100],
                                padding:"5px",
                                borderRadius:"5px",
                                opacity:"0.4"
                            }}/>
                            <Face sx={{
                                color: deepPurple[500],
                                width:"25px",
                                height:"25px",
                                backgroundColor:deepPurple[100],
                                padding:"5px",
                                borderRadius:"5px",
                                opacity:"0.4"
                            }}/>
                        </Box>
                        
                        
                        <Box sx={{
                            display:"flex",
                            justifyContent:"space-between",
                            alignItems:"center",
                            marginTop:"20px"
                        }}>
                            <Typography sx={{
                            fontSize : "0.75rem",
                            color:grey[500],
                            fontWeight:500,
                            }}>
                                Total 1st level
                            </Typography>
                            <Typography sx={{
                            fontSize : "0.75rem",
                            color:grey[500],
                            fontWeight:500,
                            }}>
                                <span style={{color:deepPurple[500]}}>0 </span> to next rank
                            </Typography>
                        </Box>

                        <BorderLinearProgress variant="determinate" value={100} sx={{margin:"8px 0"}}/>

                        <Typography sx={{
                            fontSize : "0.75rem",
                            color:deepPurple[500],
                            fontWeight:500,
                            textAlign:"right"
                        }}>
                            0 / 0
                        </Typography>

                        <Box sx={{
                            display:"flex",
                            justifyContent:"space-between",
                            alignItems:"center",
                            marginTop:"20px"
                        }}>
                            <Typography sx={{
                            fontSize : "0.75rem",
                            color:grey[500],
                            fontWeight:500,
                            }}>
                                Total 2nd level
                            </Typography>
                            <Typography sx={{
                            fontSize : "0.75rem",
                            color:grey[500],
                            fontWeight:500,
                            }}>
                                <span style={{color:deepPurple[500]}}>0 </span> to next rank
                            </Typography>
                        </Box>

                        <BorderLinearProgress variant="determinate" value={100} sx={{margin:"8px 0"}}/>

                        <Typography sx={{
                            fontSize : "0.75rem",
                            color:deepPurple[500],
                            fontWeight:500,
                            textAlign:"right"
                        }}>
                            0 / 0
                        </Typography>


                </Box>

                {/* <Box sx={{
                    border :1,
                    borderRadius : "10px",
                    borderColor : grey[400],
                    width:"100%",
                    padding:"16px",
                    marginTop:"20px",
                }}> */}
                    <BasicTable sx={{
                        marginTop:"20px"
                    }}/>
                {/* </Box> */}
                </>
            }
            
            
        </Grid>
    );
};

export default Community;
