import { FC } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  Typography,
} from '@mui/material';

import { ITableProps } from './types';
import { STATIC_URL } from '../../shared';

import './style.css';

const CustomTable: FC<ITableProps> = ({ dataList }) => {
  return (
    <TableContainer component={Paper} id='table'>
      <Table aria-label='table'>
        <TableHead>
          <TableRow>
            <TableCell align='center'>#</TableCell>
            <TableCell align='left'>Name</TableCell>
            <TableCell align='right'>Price</TableCell>
            <TableCell align='right'>Market Cap</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataList.map((coin, index) => (
            <TableRow key={coin.id}>
              <TableCell align='center'>{index + 1}</TableCell>
              <TableCell align='left'>
                <Grid
                  container
                  columnSpacing={2}
                  alignItems='center'
                >
                  <Grid
                    item
                    container
                    width='min-content'
                  >
                    <img alt={coin.slug} src={`${STATIC_URL}${coin.id}.png`}></img>
                  </Grid>
                  <Grid item>
                    <Typography>{coin.name}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography color='text.secondary'>{coin.symbol}</Typography>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell align='right'>
                {coin.quote?.USD?.price ? `$${coin.quote.USD.price.toLocaleString()}` : ''}
              </TableCell>
              <TableCell align='right'>
                {coin.quote?.USD?.market_cap ? `$${coin.quote.USD.market_cap.toLocaleString()}` : ''}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
