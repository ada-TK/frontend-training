import {useEffect} from 'react';

const Component: React.VFC = () => {
  console.log('a above useEffect');
  useEffect(() => {
    console.log('a');
    return () => console.log('a useEffect return');
  }, []);
  console.log('a below useEffect');
  return (
    <>
      <div>a</div>
      {/* <Box>
        <E />
      </Box> */}
    </>
  );
};

export default Component;
