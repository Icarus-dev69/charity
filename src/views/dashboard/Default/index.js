import { useEffect, useState } from 'react';

// material-ui
import { Box, Button, Grid, Stack, Typography } from '@mui/material';

import { useTheme } from '@mui/material/styles';
import { deepPurple } from '@mui/material/colors';

// project imports
import EarningCard from './EarningCard';
import PopularCard from './PopularCard';
import TotalOrderLineChartCard from './TotalOrderLineChartCard';
import TotalIncomeDarkCard from './TotalIncomeDarkCard';
import TotalIncomeLightCard from './TotalIncomeLightCard';
import TotalGrowthBarChart from './TotalGrowthBarChart';
import { gridSpacing } from 'app/constant';

import { useSelector } from 'react-redux';
import { selectCurrentUser, selectCurrentToken } from 'features/auth/authSlice';
import {Link} from "react-router-dom"
import ImageCarousel from './imageCarousel/ImageCarousel';


// ==============================|| DEFAULT DASHBOARD ||============================== //
const CampaignCard = ({img, about, priceFrom, priceTo, donators}) => {
    return(
            <Box sx={{
                minWidth: 240,
                minHeight: 240,
                border: 1,
                borderRadius : "5px",
                borderColor: 'grey.400',
            }}>
                <Link to="#" style={{textDecoration:"none"}}>
                    <img src={img} alt="living-fund" style={{
                        width:"100%",
                        height:"125px",
                        objectFit:"cover",
                        borderTopLeftRadius : "5px",
                        borderTopRightRadius : "5px",
                        }}></img>
                    <Box sx={{
                        padding:"10px",
                    }}
                    >
                        <Typography sx={{
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            color: 'black'
                        }}>
                            Living Fund
                        </Typography>
                        <Typography sx={{
                            fontSize: '0.688rem',
                            fontWeight: 600,
                            color: '#858c94',
                            marginTop:"4px",
                            
                        }} noWrap>
                        {about}
                        </Typography>
                        <Typography sx={{
                            color: deepPurple[500],
                            fontSize: '1rem',
                            fontWeight: 600,
                            marginTop:"4px",   
                        }}>
                        $ {priceFrom}.00 - $ {priceTo}.00
                        </Typography>
                        <Typography sx={{
                            fontSize: '0.688rem',
                            fontWeight: 600,
                            marginTop:"8px",   
                            textAlign:"right"
                        }}>
                            <span style={{color:deepPurple[500]}}>{donators} </span>
                            Donators
                        
                        </Typography>
                    </Box>
            </Link>
            </Box>
        
    )
    
}

const Dashboard = () => {
    const user = useSelector(selectCurrentUser)
    const token = useSelector(selectCurrentToken)
    const theme = useTheme()
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs ={12} md={6}>
                        <ImageCarousel />
                    </Grid>
                    <Grid item container xs ={12} md={6}>
                        <Grid item container xs>
                            <Grid item xs>
                                <Typography
                                        sx={{
                                            fontSize: '1.25rem',
                                            fontWeight: 500,
                                            color: 'black'
                                        }}>
                                            Reward Center
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Button variant='contained' sx={{backgroundColor:deepPurple[500]}}>Join Now</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12}>
                        <Grid item xs>
                            <Typography
                                    sx={{
                                        fontSize: '1.25rem',
                                        fontWeight: 500,
                                        color: 'black'
                                    }}>
                                        Campaigns
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button sx={{color:deepPurple[500]}}>View All</Button>
                        </Grid>
                    </Grid>
                    <Grid container item rowSpacing={2}>
                        <Stack direction="row" overflow="scroll" spacing={2} sx={{  overflowY: "auto"}}>
                            <CampaignCard img="https://doc-image.s3.ap-southeast-1.amazonaws.com/b1d2394e22316bf88ac24538b059a1cc.png" about="A financial resource set aside for daily living expenses." priceFrom={50} priceTo={100} donators={1024}/>
                            <CampaignCard img="https://doc-image.s3.ap-southeast-1.amazonaws.com/1bbb3b1aec607a8ced51f14d2d3b3164.png" about="A financial resource set aside for daily living expenses." priceFrom={50} priceTo={100} donators={1024}/>
                            <CampaignCard img="https://doc-image.s3.ap-southeast-1.amazonaws.com/d038ab7c1b3a583518a266f9bf5850ea.png" about="A financial resource set aside for daily living expenses." priceFrom={50} priceTo={100} donators={1024}/>
                            <CampaignCard img="https://qfc-asia.com/assets/images/element/ss2.png" about="A financial resource set aside for daily living expenses." priceFrom={50} priceTo={100} donators={1024}/>
                            <CampaignCard img="https://qfc-asia.com/assets/images/element/ss2.png" about="A financial resource set aside for daily living expenses." priceFrom={50} priceTo={100} donators={1024}/>
                        </Stack>
                    </Grid>
                    <Grid item container xs={12} md={6} sx={{marginTop:"30px"}}>
                        <Grid item xs>
                            <Typography
                            sx={{
                                fontSize: '1.25rem',
                                fontWeight: 500,
                                color: 'black'
                            }}>
                                My Donations
                            </Typography>
                            <Typography
                            sx={{
                                fontSize: '0.8rem',
                                fontWeight: 500,
                                color: 'black'
                            }}>
                                0 records
                            </Typography>
                        </Grid>

                        <Grid item>
                                <Button variant='contained' sx={{backgroundColor:deepPurple[500]}}>View All</Button>
                        </Grid>
                    </Grid>
                    
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
