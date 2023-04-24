import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ImageCarousel = () => {
  return (
    <div style={{height:"240px"}}>
    <Carousel style={{height:"240px"}} autoPlay infiniteLoop showArrows={false} showThumbs={false} showStatus={false} dynamicHeight={false}>
        <div  style={{height:"240px"}}>
            <img style={{height:"100%",objectFit:"cover",borderRadius:"10px"}} alt='image1' src="https://doc-image.s3.ap-southeast-1.amazonaws.com/b1d2394e22316bf88ac24538b059a1cc.png" />
            {/* <p className="legend">Legend 1</p> */}
        </div>
        <div  style={{height:"240px"}}>
            <img style={{height:"100%",objectFit:"cover",borderRadius:"10px"}} alt='image2' src="https://doc-image.s3.ap-southeast-1.amazonaws.com/1bbb3b1aec607a8ced51f14d2d3b3164.png" />
            {/* <p className="legend">Legend 2</p> */}
        </div>
        <div  style={{height:"240px"}}>
            <img style={{height:"100%",objectFit:"cover",borderRadius:"10px"}} alt='image3' src="https://doc-image.s3.ap-southeast-1.amazonaws.com/d038ab7c1b3a583518a266f9bf5850ea.png" />
            {/* <p className="legend">Legend 3</p> */}
        </div>
    </Carousel>
    </div>
  )
}

export default ImageCarousel

