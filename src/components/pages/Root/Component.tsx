import {Box} from '@material-ui/core';
import {useEffect} from 'react';
import {A, D} from '..';

const Component: React.VFC = () => {
  // console.log('root');
  // return <>root</>;
  console.log('root above useEffect');
  useEffect(() => {
    console.log('root');
    return () => console.log('root useEffect return');
  }, []);
  console.log('root below useEffect');
  return (
    <>
      <Box>
        <A />
        <D />
      </Box>
    </>
  );
};

export default Component;
