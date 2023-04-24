import { useEffect, useState, useRef } from 'react';

// material-ui
import { Grid, Typography, Box, Button, TextField, InputLabel } from '@mui/material';
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
import {AddCircleOutline, Cancel, Circle} from '@mui/icons-material';




const EditProfile = () => {
    const user = useSelector(selectCurrentUser)
    const token = useSelector(selectCurrentToken)
    const [isLoading, setLoading] = useState(true);
    const [images, setImages] = useState([])
    const [imageURLS, setImageURLS] = useState([])
    const imgInput = useRef(null)
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
                    marginBottom :"20px"
                }}>
                    Edit Profile
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography sx={{
                    fontSize: '1rem',
                    fontWeight: 400,
                    color: 'black.400',
                    marginBottom :"20px"
                }}>
                    Please enter your personal informations and save
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography sx={{
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: deepPurple[500],
                    marginBottom :"20px"
                }}>
                    Perosnal Informations
                </Typography>
            </Grid>
            <Grid item container xs={12}>
                <Grid container item xs ={12} md={6}>
                    <Box sx={{
                        display:"flex",
                        flexDirection:"column",
                        gap : "10px",
                        width:"100%",
                        paddingRight:{md : "10px"},
                        marginBottom:"24px"
                    }}>
                        <InputLabel htmlFor="country">Country</InputLabel>
                        <TextField id="country" variant="outlined" defaultValue="Myanmar(Burma)" disabled style={{width:"100%"}}/>
                    </Box>
                    
                </Grid>
                <Grid container item xs ={12} md={6}>
                    <Box sx={{
                        display:"flex",
                        flexDirection:"column",
                        gap : "10px",
                        width:"100%",
                        paddingLeft:{md : "10px"},
                        marginBottom:"24px"
                    }}>
                        <InputLabel htmlFor="fullname">Full Name</InputLabel>
                        <TextField id="fullname" variant="outlined" defaultValue="Steven Cheok Yan Wang" disabled style={{width:"100%"}}/>
                    </Box>
                    
                </Grid>
                <Grid container item xs ={12} md={6}>
                    <Box sx={{
                        display:"flex",
                        flexDirection:"column",
                        gap : "10px",
                        width:"100%",
                        paddingRight:{md : "10px"},
                        marginBottom:"24px"
                    }}>
                        <InputLabel htmlFor="username">Username</InputLabel>
                        <TextField id="username" variant="outlined" defaultValue="stevensheok8" disabled style={{width:"100%"}}/>
                    </Box>
                    
                </Grid>
                <Grid container item xs ={12} md={6}>
                    <Box sx={{
                        display:"flex",
                        flexDirection:"column",
                        gap : "10px",
                        width:"100%",
                        paddingLeft:{md : "10px"},
                        marginBottom:"24px"
                    }}>
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <TextField id="email" variant="outlined" defaultValue="stevencheok87@gmail.com" style={{width:"100%"}}/>
                    </Box>
                    
                </Grid>
                <Grid container item xs ={12} md={6}>
                    <Box sx={{
                        display:"flex",
                        flexDirection:"column",
                        gap : "10px",
                        width:"100%",
                        paddingRight:{md : "10px"},
                        marginBottom:"24px"
                    }}>
                        <InputLabel htmlFor="email">Phone Number</InputLabel>
                        <TextField id="email" variant="outlined" defaultValue="959780965421" disabled style={{width:"100%"}}/>
                    </Box>
                    
                </Grid>
            </Grid>
            <Button variant='contained' sx={{
                mx : "auto",
                width:"150px",
                backgroundColor:deepPurple[500],
            }}>Submit</Button>
        </Grid>
    );
};

export default EditProfile;
