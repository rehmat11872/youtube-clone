import {useState, useEffect} from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { height } from '@mui/system';
import Sidebar from './Sidebar';

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: {sx: "column", md: "row"} }}>
      <Box sx={{ height: {sx: 'auto', md: '92vh'}, borderRight: '1px solid #d3d3d3', px: {sx: 0, md:2,}  }}>

      <Sidebar />

      <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: '#fff'}}>
       CopyRight 2022 JSM Media
      </Typography>
      </Box>
    </Stack>
  )
}

export default Feed