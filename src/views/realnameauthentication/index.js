import { useEffect, useState, useRef } from 'react';

// material-ui
import { Grid, Typography, Box, Button } from '@mui/material';
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




const Authentication = () => {
    const user = useSelector(selectCurrentUser)
    const token = useSelector(selectCurrentToken)
    const [isLoading, setLoading] = useState(true);
    const [images, setImages] = useState([])
    const [imageURLS, setImageURLS] = useState([])
    const imgInput = useRef(null)
    useEffect(() => {
        setLoading(false);
    }, []);

    useEffect(()=>{
        if(images.length < 1) return
        const newImagesUrls = []
        images.forEach(image => newImagesUrls.push(URL.createObjectURL(image)))
        setImageURLS(newImagesUrls)
        console.log(imageURLS)
    },[images])

    const onImageChange = (e) => {
        console.log([...e.target.files])
        setImages([...e.target.files])
        console.log(images)
    }

    const clearImg = () => {
        setImages([])
        setImageURLS([])
        console.log(imgInput)
        if(imgInput.current){
            imgInput.current.value = ''
        }
        
    }

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
                    Authentication
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography sx={{
                    fontSize: '1rem',
                    fontWeight: 400,
                    color: 'black.400',
                    marginBottom :"20px"
                }}>
                    Please upload your donation to participate in the prize
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography sx={{
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: deepPurple[500],
                    marginBottom :"20px"
                }}>
                    Status:
                </Typography>
            </Grid>
            {
                imageURLS.length === 0 &&  <label style={{
                    width : '100%',
                    height:"200px",
                    backgroundColor : grey[300],
                    borderRadius : '10px',
                }}>
                    <Box sx={{
                        height:"100%",
                        display:"flex",
                        flexDirection : "column",
                        justifyContent :"center",
                        alignItems :"center",
                    }}>
                        <AddCircleOutline sx={{
                            color : deepPurple[500],
                            fontSize:"40px",
                        }}/>
                        <Typography sx={{
                            fontSize : "0.875rem",
                            fontWeight : 600,
                            margin : "8px 0"
                        }}>
                            Upload Charity Photo 
                        </Typography>
                        <Typography sx={{
                            fontSize : "0.688rem",
                            fontWeight : 500,
                            color : grey[600],
                        }}>
                            Attachment Format
                        </Typography>
                        <Typography sx={{
                            fontSize : "0.688rem",
                            fontWeight : 500,
                            color : grey[600],
                            margin : "4px 0"
                        }}>
                            required in JPEG/PNG/PDF,
                        </Typography>
                        <Typography sx={{
                            fontSize : "0.688rem",
                            fontWeight : 500,
                            color : grey[600],
                        }}>
                            max 5MB
                        </Typography>
                    </Box>
                    <input
                    accept="image/*"
                    type="file"
                    onChange={(e) => onImageChange(e)}
                    ref = {imgInput}
                    style={{
                        opacity : "0",
                        width : "0.1px",
                        height : "0.1px",
                    }}
                    />
                </label>
            }
            {imageURLS.map(imageSrc => 
            <div style={{
                position:'relative',
                width : "100%",

            }}>
                <Cancel sx={{
                    position : "absolute",
                    top : "0",
                    right :"0",
                    fontSize:"40px",
                    color : deepPurple[500],
                }} onClick={clearImg}/>
                <img key={imageSrc} alt = {imageSrc} src={imageSrc} style={{
                    width:"100%",
                    height : "auto",
                }}/>
            </div>
            )}
            <Button variant='contained' sx={{
                mx : "auto",
                width:"150px",
                backgroundColor:deepPurple[500],
                marginTop : "50px"
            }}>Purchase Now</Button>
        </Grid>
    );
};

export default Authentication;
