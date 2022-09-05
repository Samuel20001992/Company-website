import React from "react";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay} from 'swiper';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "../App.css";
import {Grid } from '@mui/material';

SwiperCore.use([EffectCoverflow, Pagination]);

const Testimonial = () => {
    SwiperCore.use([Autoplay]);
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
         loop= {true}
        loopAdditionalSlides={30}
        roundLengths = {true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
              className="mySwiper"
              autoplay
      >
        
        <SwiperSlide style={{width: '100%',height:'45%'}}>
           <Card style={{  width : '80%', float: 'left'}}>
                    
                    <CardContent>
                        <Typography gutterBottom component="div">
                      <center>Nina Doberic</center> 
                </Typography>
                <Typography gutterBottom component="div"  variant='body2' style={{ textAlign:'justify' }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quibusdam officiis atque veniam vero ad soluta  Tempore aperiam eum voluptate nulla eveniet ipsam saepe veritatis alias.
                  </Typography>
          </CardContent>
           </Card>
        </SwiperSlide>
        
        
        <SwiperSlide>
           <Card style={{  width : '80%', float: 'left'}}>
                    
                   <CardContent>
                        <Typography gutterBottom component="div">
                      <center>Melia Haile</center> 
                </Typography>
                <Typography gutterBottom component="div"  variant='body2'style={{ textAlign:'justify' }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quibusdam officiis atque veniam vero ad soluta  Tempore aperiam eum voluptate nulla eveniet ipsam saepe veritatis alias.
                  </Typography>
          </CardContent>
            </Card>
        </SwiperSlide>
        
        
        <SwiperSlide>
        
           <Card style={{  width : '80%', float: 'left'}}>
                    
                     <CardContent>
                        <Typography gutterBottom component="div">
                      <center> Styles oberic</center> 
                </Typography>
                <Typography gutterBottom component="div"  variant='body2'style={{ textAlign:'justify' }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quibusdam officiis atque veniam vero ad soluta  Tempore aperiam eum voluptate nulla eveniet ipsam saepe veritatis alias.
                  </Typography>
          </CardContent>
            </Card>
        </SwiperSlide>
        
        
        <SwiperSlide>
           <Card style={{  width: '80%', float: 'left'}}>
                    
                     <CardContent>
                        <Typography gutterBottom component="div">
                      <center>Darak Haile</center> 
                </Typography>
                <Typography gutterBottom component="div"  variant='body2'style={{ textAlign:'justify' }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quibusdam officiis atque veniam vero ad soluta  Tempore aperiam eum voluptate nulla eveniet ipsam saepe veritatis alias.
                  </Typography>
        
          </CardContent>
            </Card>
        </SwiperSlide>
        
        
       <SwiperSlide>
        
           <Card style={{  width : '80%', float: 'left'}}>
                   
                     <CardContent>
                        <Typography gutterBottom component="div">
                      <center> Styles oberic</center> 
                </Typography>
                <Typography gutterBottom component="div"  variant='body2'style={{ textAlign:'justify' }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quibusdam officiis atque veniam vero ad soluta  Tempore aperiam eum voluptate nulla eveniet ipsam saepe veritatis alias.
                  </Typography>
          </CardContent>
            </Card>
        </SwiperSlide>
        
        
        <SwiperSlide>
           <Card style={{  width : '80%', float: 'left'}}>
                    
                     <CardContent>
                        <Typography gutterBottom component="div">
                      <center>Darak Haile</center> 
                </Typography>
                <Typography gutterBottom component="div"  variant='body2'style={{ textAlign:'justify' }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quibusdam officiis atque veniam vero ad soluta  Tempore aperiam eum voluptate nulla eveniet ipsam saepe veritatis alias.
                  </Typography>
        
          </CardContent>
            </Card>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Testimonial;