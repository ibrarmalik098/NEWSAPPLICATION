import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const News = () => {
  const [articles, setArticles] = useState([])
  const getNEws = () => {
    let api = 'https://newsapi.org/v2/everything?q=apple&from=2022-06-01&to=2022-06-01&sortBy=popularity&apiKey=19a8f3088f024403ac2ad4de40c5bd8c'
    axios.get(api)
      .then((success) => {

        console.log(success)
        setArticles(success.data.articles)
      }

      ).catch((err) => {
        console.log(err)
      })

  }
  useEffect(() => {
    getNEws();
  }, [])

  const navigate = useNavigate();
  const newsButton = (items) => {
    navigate('/geoheadlines', {
      state: items,
    })
    console.log(items)

  }
  return (
    <Box>
      <h1 className='h11' >NEWS</h1>
      {
        articles.map((e, i) => (

          <Box
            onClick={() => newsButton(e)}
            className='Boxhover' sx={{ marginBottom: 5, padding: 4, boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;' }} >
            <Box sx={{ display: 'flex', justifycontent: 'start', }} >
              <img src={e.urlToImage} width='250px' alt='' />
              <Typography variant='h4'>{e.title}</Typography>
            </Box>
            <Typography >{e.description}</Typography>
            <Typography fontWeight={600} > PUBLISHED AT :- {e.publishedAt}</Typography>
          </Box>
        )

        )
      }
    </Box>
  )
}

export default News