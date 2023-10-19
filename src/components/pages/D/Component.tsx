import {Button} from '@material-ui/core';
import {useEffect, useState} from 'react';

const Component: React.VFC = () => {
  const [count, setCount] = useState({a: 0, b: 1});

  console.log('d above useEffect');

  useEffect(() => {
    console.log('rendering');
    console.log(count);
  }, [count]);

  return (
    <Button
      onClick={() => {
        setCount({...count, b: count.b + 1});
        console.log('----------');
        console.log(count);
      }}
    >
      D:カウントアップ
    </Button>
  );
};

export default Component;
