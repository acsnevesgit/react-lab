import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';

export const CircularLoading = () => {
  return (
    <div className='circular-loader'>
      <CircularProgress />
    </div>
  )
};

export const LinearLoading = () => {
  return (
    <div className='linear-loader'>
      <LinearProgress />
    </div>
  )
};

export const LinearDeterminateLoading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className='linear-loader'>
      <LinearProgress variant='determinate' value={progress} />
    </div>
  );
};