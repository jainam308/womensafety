import React from 'react';
import { Container, Typography, Grid, Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Component/Navbar';
import Header from '../../Component/Header';
import { SurroundSound, LocationOn, Gesture, Warning } from '@mui/icons-material';

function InputOptionsPage() {
  const navigate = useNavigate();

  // Function to handle redirection
  const handleRedirect = (url) => {
    window.location.href = url; // Redirect to the external website
  };

  return (
    <>
      <Navbar />
      <Header />
      <Container component="main" maxWidth="md" style={{ marginTop: '20px' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Select an Option
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {/* Surrounding Men Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Card 
              onClick={() => handleRedirect('http://127.0.0.1:8000')}
              style={{ 
                cursor: 'pointer', 
                transition: 'transform 0.2s', 
                '&:hover': { transform: 'scale(1.05)' } 
              }}
            >
              <CardActionArea>
                <CardMedia>
                  <SurroundSound style={{ fontSize: 50, margin: '20px auto', display: 'block', color: '#1976d2' }} />
                </CardMedia>
                <CardContent>
                  <Typography variant="h6" align="center">
                    Surrounded Men
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          {/* Hotspot Identification Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Card 
              onClick={() => handleRedirect('https://yourhostedwebsite.com/hotspot-identification')}
              style={{ 
                cursor: 'pointer', 
                transition: 'transform 0.2s', 
                '&:hover': { transform: 'scale(1.05)' } 
              }}
            >
              <CardActionArea>
                <CardMedia>
                  <LocationOn style={{ fontSize: 50, margin: '20px auto', display: 'block', color: '#d32f2f' }} />
                </CardMedia>
                <CardContent>
                  <Typography variant="h6" align="center">
                    Hotspot Identification
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          {/* Gesture Alert Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Card 
              onClick={() => handleRedirect('https://yourhostedwebsite.com/gesture-alert')}
              style={{ 
                cursor: 'pointer', 
                transition: 'transform 0.2s', 
                '&:hover': { transform: 'scale(1.05)' } 
              }}
            >
              <CardActionArea>
                <CardMedia>
                  <Gesture style={{ fontSize: 50, margin: '20px auto', display: 'block', color: '#388e3c' }} />
                </CardMedia>
                <CardContent>
                  <Typography variant="h6" align="center">
                    Gesture Alert
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          {/* Alert Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Card 
              onClick={() => handleRedirect('https://yourhostedwebsite.com/alert')}
              style={{ 
                cursor: 'pointer', 
                transition: 'transform 0.2s', 
                '&:hover': { transform: 'scale(1.05)' } 
              }}
            >
              <CardActionArea>
                <CardMedia>
                  <Warning style={{ fontSize: 50, margin: '20px auto', display: 'block', color: '#f57c00' }} />
                </CardMedia>
                <CardContent>
                  <Typography variant="h6" align="center">
                    Alert
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default InputOptionsPage;
