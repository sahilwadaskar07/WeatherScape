import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function InfoBox({info}) {
  let ImageUrl = "https://images.unsplash.com/photo-1599059021750-82716ae2b661?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let COLD_URL = "https://images.unsplash.com/photo-1674407866481-a39b2239f771?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  let HOT_URL = "https://images.unsplash.com/photo-1565677913671-ce5a5c0ae655?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  let RAINY_URL = "https://images.unsplash.com/photo-1697518725445-037f24d787b4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww"
  return (
    <div className='InfoBox'>
        <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 170 }}
        image={info.humidity >80 ? RAINY_URL: info.temp >15 ? HOT_URL : COLD_URL }
        title="green iguana"
        className='card-Image'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
            info.humidity >80
            ? <ThunderstormIcon/>
            : info.temp >15
            ? <WbSunnyIcon/> 
            : <AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temparature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp ={info.tempMin}&deg;C</p>
          <p>Max temp = {info.tempMax}</p>
          <p> The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
  )
}
