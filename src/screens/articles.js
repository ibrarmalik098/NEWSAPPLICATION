import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
  }));

const Articles = () => {
    return (
        <>
            <h1 className='h11'>ARTICLES</h1>
            <Grid  className='shadowgrid'container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid  sx={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'}} className='shadowgrid' item xs={4}>
                    <Item className='Boxhover'> 
                        <img src='https://thumbs.dreamstime.com/z/background-screen-saver-breaking-news-live-world-map-blue-vector-illustration-169730598.jpg' width={300} />
                        <Typography  variant='h6'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Typography>
                    </Item>
                </Grid>
                <Grid sx={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'}} className='shadowgrid' item xs={4}>
                    <Item  className='Boxhover'> 
                        <img src='https://newsroom.unl.edu/announce/files/file37798.gif' width={300} />
                        <Typography  variant='h6'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Typography>
                    </Item>
                </Grid>
                <Grid sx={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'}} className='shadowgrid' item xs={4}>
                    <Item  className='Boxhover'> 
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmlbiwB4CuVc1vzUX9ITob1WEizDjVkHEEn_j_FkVIZS2rgBuVT5nBRZaYyWFGwU7p3JE&usqp=CAU' width={300} />
                        <Typography  variant='h6'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Typography>
                    </Item>
                </Grid>
                <Grid sx={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'}} className='shadowgrid' item xs={4}>
                    <Item  className='Boxhover'> 
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmH7xVmbaPDHha5yMLT0-39z77yF01J0NwWmSTTA8JWr85xp8xIsJij3LeOqyjDqbewBE&usqp=CAU' width={300} />
                        <Typography  variant='h6'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Typography>
                    </Item>
                </Grid>
                <Grid sx={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'}} className='shadowgrid' item xs={4}>
                    <Item  className='Boxhover'> 
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTioWrfkJd6SQ8sXLJOtZZu-2AAs2K1lSI2w&usqp=CAU' width={300} />
                        <Typography  variant='h6'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Typography>
                    </Item>
                </Grid>
                <Grid sx={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'}} className='shadowgrid' item xs={4}>
                    <Item  className='Boxhover'> 
                        <img src='https://image.shutterstock.com/image-photo/newspapers-computer-keyboard-stack-magazine-260nw-1309710706.jpg' width={300} />
                        <Typography  variant='h6'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Typography>
                    </Item>
                </Grid>
                
            </Grid>
            <Grid  className='shadowgrid'container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid sx={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'}} className='shadowgrid' item xs={4}>
                    <Item  className='Boxhover'> 
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYlwAbJfFrOuHgUsLpZgp7BV1b0-0RVyE_sA&usqp=CAU' width={300} />
                        <Typography  variant='h6'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Typography>
                    </Item>
                </Grid>
                <Grid sx={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'}} className='shadowgrid' item xs={4}>
                    <Item  className='Boxhover'> 
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF-1iFkzE8PcjT9YjBQbpIORaeQ3_DKhJFGw&usqp=CAU' width={300} />
                        <Typography  variant='h6'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Typography>
                    </Item>
                </Grid>
                <Grid sx={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'}} className='shadowgrid' item xs={4}>
                    <Item  className='Boxhover'> 
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsM9hMEtGGxtn4bLzsgosfSQ5hql1E5fwu_A&usqp=CAU' width={300} />
                        <Typography  variant='h6'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Typography>
                    </Item>
                </Grid>
                <Grid sx={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'}} className='shadowgrid' item xs={4}>
                    <Item  className='Boxhover'> 
                        <img src='https://e.jang.com.pk/static_pages/landing_images/khi.jpg' width={300} />
                        <Typography  variant='h6'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Typography>
                    </Item>
                </Grid>
                <Grid sx={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'}} className='shadowgrid' item xs={4}>
                    <Item  className='Boxhover'> 
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkGbkArQKN6Z1rGLBXe6LSR_Qjn_U1_xy6qw&usqp=CAU' width={300} />
                        <Typography  variant='h6'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Typography>
                    </Item>
                </Grid>
                <Grid sx={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'}} className='shadowgrid' item xs={4}>
                    <Item  className='Boxhover'> 
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-iPOemreE-aqlu36tCf8jEhblnY9QOBcsow&usqp=CAU' width={300} />
                        <Typography  variant='h6'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Typography>
                    </Item>
                </Grid>
                
            </Grid>

        </>
    )
}

export default Articles