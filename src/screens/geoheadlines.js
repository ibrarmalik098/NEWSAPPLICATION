import { Typography,Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const GeoHeadlines = () => {

  const [geoheadlines,setGeoHeadlines] = useState({});
  const location = useLocation();

    useEffect(()=>{

      console.log(location.state)
      setGeoHeadlines(location.state);

    },[])

  return (
    <>
    <h1 className='h11' >GeoHeadlines</h1>
    <Box
          className='Boxhover' sx={{ marginBottom: 5, padding: 4, boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;' }} >
            <Box sx={{ display: 'flex', justifycontent: 'start', }} >
              <img src={geoheadlines.urlToImage} width='250px' alt='' />
              <Typography variant='h4'>{geoheadlines.title}</Typography>
            </Box>
            <Typography >{geoheadlines.description}</Typography>
            <Typography fontWeight={600} > PUBLISHED AT :- {geoheadlines.publishedAt}</Typography>
          </Box>
    
    </>
  )
}

export default GeoHeadlines