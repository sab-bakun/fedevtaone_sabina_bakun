import {
  FC,
  useEffect,
  useState,
} from 'react';
import { CircularProgress, Grid } from '@mui/material';

import { CustomHeader, CustomTable } from '../../components';
import { ICryptoCurrency } from '../../shared';
import { getCryptoCurrencyList } from '../../api';

export const Home: FC = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [dataList, setDataList] = useState<ICryptoCurrency[]>([]);

  useEffect(() => {
    getCryptoCurrencyList({ limit: 10 })
    .then(result => setDataList(result.data as ICryptoCurrency[]))
    .finally(() => setIsLoaded(true));
  }, []);

  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
      rowSpacing={4}
      padding={4}
    >
      <Grid item>
        <CustomHeader title='The Top 10 Cryptocurrencies by Market Cap'></CustomHeader>
      </Grid>
      <Grid item>
        {!isLoaded ? (
          <Grid
            container
            justifyContent='center'
            alignItems='center'
          >
            <CircularProgress />
          </Grid>
        ) :
          <CustomTable dataList={dataList}></CustomTable>
        }
      </Grid>
    </Grid>
  ) 
};

export default Home;
