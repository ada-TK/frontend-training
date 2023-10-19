import {Button} from '@material-ui/core';
import {useEffect, useState} from 'react';
import {A, D} from '..';

// depsが未指定のコンポーネント
const Component: React.VFC = () => {
  const [count, setCount] = useState(0);

  console.log('root above useEffect');

  useEffect(() => {
    console.log('root');
    return () => console.log('root useEffect return');
  }, []);

  console.log(`root:${count}`);
  console.log('root below useEffect');

  return (
    <>
      <Button
        onClick={() => {
          setCount(count + 1);
          console.log('----------');
          console.log(`root-onclick内:${count}`);
        }}
      >
        Root:カウントアップ
      </Button>
      <A />
      <D />
    </>
  );
};

export default Component;
