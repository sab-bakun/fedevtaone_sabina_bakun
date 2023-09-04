import { FC } from 'react';
import { Typography } from '@mui/material';

import { IHeaderProps } from './types';

const CustomHeader: FC<IHeaderProps> = ({ title }) => {
  return(
    <Typography variant='h5'>
      {title}
    </Typography>
  );
};

export default CustomHeader;
