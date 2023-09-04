import { FC } from 'react';
import { Typography, Grid } from '@mui/material';

export const NotFound: FC = () => {
  return (
    <Grid
      container
      alignContent='center'
      justifyContent='center'
      padding={4}
    >
      <Typography variant='h5'>Oops, page not found...</Typography>
    </Grid>
  );
};

export default NotFound;
