import {Button} from '@material-ui/core';
import {useEffect, useState} from 'react';
import {A, Root} from '..';

// depsがobjのコンポーネント
const Component: React.VFC = () => {
  const [count, setCount] = useState({a: 0, b: 1});

  console.log('d above useEffect');

  useEffect(() => {
    console.log('d');
    return () => console.log('d useEffect return');
  }, [count]);

  console.log('d below useEffect');

  return (
    <>
      <Button
        onClick={() => {
          setCount({...count, b: count.b + 1});
          console.log('----------');
          console.log(`d-onclick内:a:${count.a},b:${count.b}`);
        }}
      >
        d:カウントアップ
      </Button>
      <A />
      <Root />
    </>
  );
};

export default Component;
