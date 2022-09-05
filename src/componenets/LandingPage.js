import React from 'react'
import { 
  AppBar, 
  Toolbar,
  Typography,
  Grid } from '@mui/material';
import './landing_page.css'
import FontAwesome from 'react-fontawesome';
import LoremIpsum from 'react-lorem-ipsum';
import Image_1 from '../resources/logo.jpg';
import Customer_App from '../resources/customer_app.jpg';
import Mobile_App from '../resources/app_development.jpg';
import Web_App from '../resources/Website_Design_and_Development.png';
import Training from '../resources/training.jpg';
import Graphic_Design from '../resources/graphic_design.jpg';
import Computer_Maintenence from  '../resources/computer_maintenance.jpg';
import Software_Reengineering from '../resources/software_reengineering.png';
import Desktop_App from '../resources/desktop_application.png';
import Webiste_Maintenance from '../resources/website_maintenance.png';
import styled from '@emotion/styled';
import {Paper, Box, TextField} from '@mui/material';
import {Card, CardMedia, CardActions, CardContent, Button} from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import Testimonial from './Testimonial';
function LandingPage() {
 
  return (
    <Grid container spacing={2}>
      <Grid div xs={12} lg={12} md={12} className='top-nav' >
      <AppBar>
      <nav>
              <input type='checkbox' id="check"/>
              <label for ="check">
                  <FontAwesome
                    className='checkbtn'
                    name='bars'
                    size='2x'
                    color='black'
                    style={{ textShadow: '0 4px 0 rgba(0, 0, 0, 0.1)' , margin:'2%'}}
                  />
              </label>
              
              <label class="logo">EthioBit</label>
              
                <ul>

                  <li><a href="#" >Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#contact">Contact</a></li>
                  <li><a href="#testimonials">Testimonials</a></li>
                </ul>
              
        </nav>
        </AppBar> 
        </Grid>
        <center>
          
          <Box sx={{ width: '100%' }} >

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 3, md: 3 }}>
            <div id='#home'> 
              <Grid div xs={12} md={4} lg={4} sx={{m:7, textAlign:'justify', float:'left', marginLeft:'10%'}}>
                  
                    <Typography  sx={{ color:'#037ffc', fontWeight:'bold', fontSize:'600%', fontFamily:'Poppins'}} >Ethio-Bit Technologies</Typography>
                
                  <Typography variant='body2' sx={{ color:'grey'}} >
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Leo sapien pharetra id mattis natoque suscipit 
                  cubilia habitant. Vitae nisi hendrerit finibus nullam pretium. Ahabitasse eros aenean amet aenean dis
                  molestie.Euismod penatibus hac fringilla sapien platea. Gravida magnis luctus magnis auctor elementum 
                  nisi condimentum et. Lobortis at maecenas non urna mus, etiam cras at. Donec felis consequat vel aliquam 
                  integer. Lobortis primis varius egestas congue cubilia maecenas nullam commodo. Odio et augue fames, 
                  id lobortis magnis parturient.Lobortis at maecenas non urna mus, etiam cras at. Donec felis consequat vel aliquam 
                  integer. Lobortis primis varius egestas congue cubilia maecenas nullam commodo. Odio et augue fames, 
                  id lobortis magnis parturient.
                  </Typography>
              </Grid>
              <Grid div xs={12} md={4} lg={4} sx={{m:7, textAlign:'justify', float:'right', marginTop:'5%'}}>
                  <img src={Image_1} alt='Image not found' style={{width:'100%'}}/>
              </Grid>
            </div>
            <Grid div xs={12} md={12} lg={12} sx={{m: 7, textAlign:'justify' , marginLeft:'10%'}} id='about'>
               <div >
                
                    <Typography variant='h6' sx={{ color:'#037ffc', fontWeight:'bold', fontSize:'200%', fontFamily:'Poppins'}}>Who we are</Typography>
                
                <Typography variant='body2' sx={{ color:'grey'}}>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Leo sapien pharetra id mattis natoque suscipit 
                cubilia habitant. Vitae nisi hendrerit finibus nullam pretium. Ahabitasse eros aenean amet aenean dis
                molestie.Euismod penatibus hac fringilla sapien platea. Gravida magnis luctus magnis auctor elementum 
                nisi condimentum et. Lobortis at maecenas non urna mus, etiam cras at. Donec felis consequat vel aliquam 
                integer. Lobortis primis varius egestas congue cubilia maecenas nullam commodo. Odio et augue fames, 
                id lobortis magnis parturient.
                </Typography>
              </div>
            </Grid>
            <Grid div xs={12} md={12} lg={12} sx={{ textAlign:'justify', float:'left'}} id='services' >
              <div >
                <center>
                  <Typography variant='h6' sx={{ color:'#037ffc', fontWeight:'bold', fontSize:'200%', fontFamily:'Poppins'}}>What we do</Typography>
                </center>
            </div>
              </Grid>
              </Grid>
              <center>
              <Grid container >
              <Grid  xs={12} md={3} sm={5} lg={3} sx={{ textAlign:'justify'}}>
                <Card sx={{width:'75%', m: 8}} className='services' >
                  <Typography gutterBottom variant="subtitle1" sx={{fontWeight: 'bold', textAlign:'center', fontFamily:'Poppins',padding:'5%'}} component="div">
                    Custom Application Development
                  </Typography>
                  <CardMedia
                    component="img"
                    width='40%'
                    image={Customer_App}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid div xs={12} sm={5} md={3} lg={3} sx={{ textAlign:'justify' }}>
                <Card sx={{width:'75%', m: 8}} className='services'>
                  <Typography gutterBottom variant="subtitle1" sx={{fontWeight: 'bold', textAlign:'center', fontFamily:'Poppins',padding:'5%'}} component="div">
                     Mobile App Development
                  </Typography>
                  <CardMedia
                    component="img"
                    width='40%'
                    image={Mobile_App}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid div xs={12} sm={5} md={3} lg={3} sx={{ textAlign:'justify' }}>
                <Card sx={{width:'75%', m: 8}} className='services'>
                  <Typography gutterBottom variant="subtitle1" sx={{fontWeight: 'bold', textAlign:'center', fontFamily:'Poppins',padding:'5%'}} component="div">
                     Web Design & Development
                  </Typography>
                  <CardMedia
                    component="img"
                    width='40%'
                    image={Web_App}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid div xs={12} sm={5} md={3} lg={3} sx={{ textAlign:'justify'}}>
                <Card sx={{width:'75%', m: 8}} className='services'>
                  <Typography gutterBottom variant="subtitle1" sx={{fontWeight: 'bold', textAlign:'center', fontFamily:'Poppins',padding:'5%'}} component="div">
                    Training & Consultancy
                  </Typography>
                  <CardMedia
                    component="img"
                    width='40%'
                    image={Training}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid div xs={12} sm={5} md={3} lg={3} sx={{ textAlign:'justify' }}>
                <Card sx={{width:'75%', m: 8}} className='services'>
                  <Typography gutterBottom variant="subtitle1" sx={{fontWeight: 'bold', textAlign:'center', fontFamily:'Poppins',padding:'5%'}} component="div">
                      Graphic Design
                  </Typography>
                  <CardMedia
                    component="img"
                    width='40%'
                    image={Graphic_Design}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid div xs={12} md={3} sm={5} lg={3} sx={{ textAlign:'justify'}}>
                <Card sx={{width:'75%', m: 8}} className='services'>
                  <Typography gutterBottom variant="subtitle1" sx={{fontWeight: 'bold', textAlign:'center', fontFamily:'Poppins',padding:'5%'}} component="div">
                      Software Re-engineering
                  </Typography>
                  <CardMedia
                    component="img"
                    width='40%'
                    image={Software_Reengineering}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid div xs={12} sm={5} md={3} lg={3} sx={{ textAlign:'justify' }}>
                <Card sx={{width:'75%', m: 8}} className='services'>
                  <Typography gutterBottom variant="subtitle1" sx={{fontWeight: 'bold', textAlign:'center', fontFamily:'Poppins',padding:'5%'}} component="div">
                      Desktop App Development
                  </Typography>
                  <CardMedia
                    component="img"
                    width='40%'
                    image={Desktop_App}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid div xs={12} sm={5} md={3} lg={3} sx={{ textAlign:'justify' }}>
                <Card sx={{width:'75%', m: 8}} className='services'>
                  <Typography gutterBottom variant="subtitle1" sx={{fontWeight: 'bold', textAlign:'center', fontFamily:'Poppins',padding:'5%'}} component="div">
                      Website Maintenance and Management
                  </Typography>
                  <CardMedia
                    component="img"
                    width='40%'
                    image={Webiste_Maintenance}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
              </center>
            
          </Box>
        </center>
        <Grid div xs={12} md={12} lg={12} sx={{ textAlign:'justify', float:'left'}} id='testimonials'>
                <center>
                  <Typography  sx={{ color:'#037ffc', fontWeight:'bold', fontSize:'200%', fontFamily:'Poppins'}}>Testimonial</Typography>
                </center>
        </Grid>
        <div  style={{margin:'40px', marginBottom:'60px', width:'93.5vw'}}>
           <Testimonial/>
        </div>
        
            <Grid div xs={12} sm={12} md={6} lg={4} sx={{ textAlign:'justify', float:'left'}} >
            <div id='contact_us' style={{width:'100%'}}>
                      <center>
                      <Card sx={{ m: 8}}>
                        <CardContent>
                            <Box
                                  component="form"
                                  noValidate
                                  autoComplete="off"
                              >
                                      
                                        <Typography variant='h6' sx={{ color:'#037ffc'}}>Apply for Development Service</Typography>
                                        <center>
                                      <TextField id="outlined-basic" label="Name" variant="outlined" size='small'   sx={{m: 1, width:'100%'}}/>
                                      <TextField id="outlined-basic" label="Email" variant="outlined" size='small'   sx={{m: 1, width:'100%'}}/>
                                      <TextField id="outlined-basic" label="Type of Service" variant="outlined" size='small'  sx={{m: 1,  width:'100%'}}/>
                                      <TextField id="outlined-basic" label="Message" variant="outlined" size='small' multiline  sx={{m: 1, width:'100%'}}/>
                                      <Button variant='contained'  small color='primary' sx={{m: 1}}> Send</Button>
                                      <Button variant='contained'  small color='secondary' sx={{m: 1}}>Reset</Button>
                                      </center>
                              </Box>
                        </CardContent>
                      </Card>
                      </center>
                      </div>
              </Grid>
            <Grid div xs={12} sm={12} md={6} lg={4} sx={{ textAlign:'justify', float:'left'}} >
                      <Card sx={{ m: 8}}>
                        <CardContent>
                          <center>
                            <Box
                                  component="form"
                                  noValidate
                                  autoComplete="off"
                              >
                                      <center>
                                          <Typography variant='h6' sx={{ color:'#037ffc'}}>Apply for training</Typography>
                                      
                                      <TextField id="outlined-basic" label="Name" variant="outlined" size='small'   sx={{m: 1, width:'100%'}}/>
                                      <TextField id="outlined-basic" label="Email" variant="outlined" size='small'   sx={{m: 1, width:'100%'}}/>
                                      <TextField id="outlined-basic" label="Topic" variant="outlined" size='small'   sx={{m: 1, width:'100%'}}/>
                                      <TextField id="outlined-basic" label="Message" variant="outlined" size='small' multiline   sx={{m: 1, width:'100%'}}/>
                                      <Button variant='contained'  small color='primary' sx={{m: 1}}> Send</Button>
                                      <Button variant='contained'  small color='secondary' sx={{m: 1}}>Reset</Button>
                                      </center>
                            </Box>
                            </center>
                        </CardContent>
                      </Card>

              </Grid>
            <Grid div xs={12} sm={12} md={6} lg={4} sx={{ textAlign:'justify', float:'left'}} id='contact'>
                      <Card sx={{ m: 8}}>
                        <CardContent>
                          <center>
                              <Box
                                component="form"

                                noValidate
                                autoComplete="off"
                              >
                                        <center>
                                    <Typography variant='h6' sx={{ color:'#037ffc'}}>Contact Us</Typography>
                                    <TextField id="outlined-basic" label="Name" variant="outlined" size='small'    sx={{m: 1, width:'100%'}}/>
                                    <TextField id="outlined-basic" label="Email" variant="outlined" size='small'   sx={{m: 1, width:'100%'}}/>
                                    <TextField id="outlined-basic" label="Type of Training" variant="outlined" size='small'   sx={{m: 1, width:'100%'}}/>
                                    <TextField id="outlined-basic" label="Message" variant="outlined" size='small' multiline   sx={{m: 1, width:'100%'}}/>
                                    <Button variant='contained'  small color='primary' sx={{m: 1}}> Send</Button>
                                    <Button variant='contained'  small color='secondary' sx={{m: 1}}>Reset</Button>
                                    </center>
                              </Box>
                              </center>
                        </CardContent>
                      </Card>
            </Grid>
            <Grid container>
                  <Grid item xs={12} lg={12} sm={12} md={12}>
                  <footer className='footer'>
                    <div className='container'>
                          <div className='row'>
                                <div className='footer-col'>
                                  {/* <h4>Ethio-Bit</h4> */}
                                  <ul  style={{color:'#bbbbbb', textAlign:'justify'}}>
                                        <li>
                                           <img src={Image_1} alt='Image not found' style={{width:'80%'}}/>
                                        </li>
                                  </ul>
                                </div>
                                <div className='footer-col' style={{textAlign:'center',}}>
                                  <h4>Quick Links</h4>
                                  <ul>
                                        <li><a href="#about">about us</a></li>
                                        <li><a href="#services">our services</a></li>
                                        <li><a href="#">privacy policy</a></li> 
                                        <li><a href="#">affiliate program</a></li>
                                  </ul>
                                </div>
                                <div className='footer-col'>
                                  <h4>contact us</h4>
                                  <ul>
                                      <li>+251911724462</li>
                                      <li>+251942049910</li>
                                      <li>+251903649609</li>
                                  </ul>
                                </div>
                               
                                <div className='footer-col'>
                                  <h4>follow us</h4>
                                  <div className='social-links'>
                                      <a href="#">
                                          <FontAwesome
                                            className='super-crazy-colors'
                                            name='facebook-square'
                                            size='2x'
                                            style={{ textShadow: '0 4px 0 rgba(0, 0, 0, 0.1)' , margin:'2%'}}
                                          />
                                      </a>
                                      <a href="#">
                                          <FontAwesome
                                            className='super-crazy-colors'
                                            name='instagram'
                                            size='2x'
                                            style={{ textShadow: '0 4px 0 rgba(0, 0, 0, 0.1)' , margin:'2%'}}
                                          />
                                      </a>
                                      <a href="#">
                                          <FontAwesome
                                            className='super-crazy-colors'
                                            name='twitter'
                                            size='2x'
                                            style={{ textShadow: '0 4px 0 rgba(0, 0, 0, 0.1)' , margin:'2%'}}
                                          />
                                      </a>
                                      <a href="#">
                                          <TelegramIcon style={{fontSize:'30px'}}/>
                                      </a>
                                      <a href="#">
                                          <FontAwesome
                                            className='super-crazy-colors'
                                            name='linkedin-square'
                                            size='2x'
                                            style={{ textShadow: '0 4px 0 rgba(0, 0, 0, 0.1)' , margin:'2%'}}
                                          />
                                      </a>
                                  </div>
                                </div>
                          </div>
                    </div>
              </footer> 
                  </Grid>
            </Grid>
              
       
    </Grid>
  )
}

export default LandingPage