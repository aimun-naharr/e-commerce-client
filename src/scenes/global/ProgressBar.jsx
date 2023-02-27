import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
const ProgressBar = () => {
    return (
        <Box sx={{ display: 'flex' , my: 8, alignItems:'center', justifyContent: 'center'}}>
        <CircularProgress />
      </Box>
    );
};

export default ProgressBar;