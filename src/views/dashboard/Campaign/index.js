import { useEffect, useState } from 'react';

// material-ui
import { Grid, Typography, Box, Button } from '@mui/material';
import { deepPurple, grey, purple } from '@mui/material/colors';
import { styled, useTheme } from '@mui/material/styles';

// project imports

import { gridSpacing } from 'app/constant';

import { useSelector } from 'react-redux';
import { selectCurrentUser, selectCurrentToken } from 'features/auth/authSlice';
import {Link} from "react-router-dom"
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



const CampaignCard = ({img,title, about, donator, maxDonator,donoFrom,donoTo,rebateFrom, rebateTo,id}) => {
    return (
        
        <Box sx={{
            width : "100%",
            border: 1,
            borderRadius : "5px",
            borderColor: 'grey.400',
        }}>
            <Link to={`/campaignDetails/${id}`} style={{textDecoration:"none"}}>
            <img src={img} alt='living-fund' style={{
                width:"100%",
                height:"200px",
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
                    color: 'black',
                    textDecoration:"none",
                    
                }}>
                    {title}
                </Typography>
                <Typography sx={{
                    fontSize: '0.688rem',
                    fontWeight: 600,
                    color: '#858c94',
                    marginTop:"4px",
                    textDecoration:"none"
                }} noWrap>
                   {about}
                </Typography>
                <BorderLinearProgress variant="determinate" value={(donator/maxDonator) * 100} sx={{margin:"4px 0"}}/>
                <Box sx={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"space-between",
                    marginTop:"4px"
                }}>
                    <Typography sx={{
                        fontSize: '0.688rem',
                        fontWeight: 600,
                        color: '#858c94',  
                        textDecoration:"none"
                        }}>
                        Donations
                    </Typography>
                    <Typography sx={{
                        fontSize: '0.688rem',
                        fontWeight: 600,
                        color: deepPurple[500],  
                        textDecoration:"none"
                        }}>
                        {donator} / {maxDonator}
                    </Typography>
                </Box>
                <div style={{width:"100%",height:"1px",backgroundColor:grey[400],margin:"16px 0"}}></div>
                <Box sx={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"space-between",
                }}>
                    <Box>
                        <Typography sx={{
                            color: deepPurple[500],
                            fontSize: '1rem',
                            fontWeight: 600,
                            marginTop:"4px",   
                            textDecoration:"none"
                        }}>
                        $ {donoFrom} - $ {donoTo}
                        </Typography>
                        <Typography sx={{
                           fontSize: '0.688rem',
                           fontWeight: 600,
                           color: '#858c94', 
                           marginTop : "4px",
                           textDecoration:"none",
                        }}>
                        <span style={{color:deepPurple[500]}}>{rebateFrom}% - {rebateTo}% </span>
                            Estimated Rebate
                        </Typography>
                    </Box>
                    <Button variant='contained' sx={{
                        backgroundColor:deepPurple[500],
                    }}>
                        Donate
                    </Button>
                </Box>
                
            </Box>
            </Link>
        </Box>
    )
}

const Campaign = () => {
    const user = useSelector(selectCurrentUser)
    const token = useSelector(selectCurrentToken)
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid container  spacing={2} sx={{
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
                    Campaign
                </Typography>
            </Grid>

            <Grid item container xs={12} md={6}>
                <CampaignCard 
                img="https://doc-image.s3.ap-southeast-1.amazonaws.com/b1d2394e22316bf88ac24538b059a1cc.png"
                title="Living Fund"
                about=" A financial resource set aside for daily living expenses"
                donator={1024}
                maxDonator = {3000}
                donoFrom = {"50.00"}
                donoTo = {"100.00"}
                rebateFrom = {"1.00"}
                rebateTo = {"1.70"}
                id={1}
                />
            </Grid>
            <Grid item container xs={12} md={6}>
                <CampaignCard 
                img="https://doc-image.s3.ap-southeast-1.amazonaws.com/1bbb3b1aec607a8ced51f14d2d3b3164.png"
                title="Education Fund"
                about=" A savings fund for future educational expenses"
                donator={404}
                maxDonator = {3000}
                donoFrom = {"250.00"}
                donoTo = {"500.00"}
                rebateFrom = {"1.00"}
                rebateTo = {"2.00"}
                id={2}
                />
            </Grid>
            <Grid item container xs={12} md={6}>
                <CampaignCard 
                img="https://doc-image.s3.ap-southeast-1.amazonaws.com/0839f923a3608a30f5842d3d93762c68.png"
                title="Medical Fund"
                about=" A financial resource for covering medical expenses"
                donator={34}
                maxDonator = {3000}
                donoFrom = {"750.00"}
                donoTo = {"1250.00"}
                rebateFrom = {"1.00"}
                rebateTo = {"2.29"}
                id={3}
                />
            </Grid>
            <Grid item container xs={12} md={6}>
                <CampaignCard 
                img="https://doc-image.s3.ap-southeast-1.amazonaws.com/d038ab7c1b3a583518a266f9bf5850ea.png"
                title="Endowment Fund"
                about=" A financial resource for created for a specific cause, where the principal is invested and only the earnings are used to support the cause"
                donator={14}
                maxDonator = {3000}
                donoFrom = {"2500.00"}
                donoTo = {"5000.00"}
                rebateFrom = {"1.00"}
                rebateTo = {"2.60"}
                id={4}
                />
            </Grid>
            
        </Grid>
    );
};

export default Campaign;
