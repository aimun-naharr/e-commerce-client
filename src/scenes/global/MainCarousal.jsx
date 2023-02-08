import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import broke from "../../assets/carousel/brooke-cagle-aVT8VkmzML4-unsplash.jpeg";

import single from "../../assets/carousel/larm-rmah-R1Ku62Z7zqE-unsplash.jpeg";
import jacket from "../../assets/carousel/jc-gellidon-JM8TkWJ9UIY-unsplash.jpeg";
import couple from "../../assets/carousel/toa-heftiba-dti56waifB4-unsplash.jpeg";
import { shades } from "../../theme";
import model from '../../assets/videos/model.mp4'
import maleModel from '../../assets/videos/video.mp4'

const MainCarousal = () => {
        const isNonMobile = useMediaQuery("(min-width:600px)");
        const images = [model, maleModel];

        return (
                <Carousel autoPlay={true} showThumbs={false} infiniteLoop={true} showArrows={false} showStatus={false}>
                        {images.map((img, i) => (
                                <div style={{ position: "relative" }} key={`carousel-img-${i}`}>
                                        <video loop autoplay="" muted preload="true"style={{ height: "500px", width: "100%", objectFit: "cover", backgroundAttachment: "fixed" }}>
                                        <source src={img} type="video/mp4"/>
                                        </video>
                                        <Box position="absolute" color="white" padding="20px" backgroundColor="rgba(0, 0, 0, 0.4)" top="56%" left="10%" textAlign="left">
                                                <Typography color={shades.secondary[400]}>New Item---</Typography>
                                                <Typography variant="h2">Summer sale </Typography>
                                        </Box>
                                </div>
                        ))}
                </Carousel>
        );
};

export default MainCarousal;
