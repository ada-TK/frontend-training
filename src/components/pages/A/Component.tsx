import {Button} from '@material-ui/core';
import {useEffect, useState} from 'react';

// depsが未指定のコンポーネント
const Component: React.VFC = () => {
  const [count, setCount] = useState(0);

  console.log('a above useEffect');

  useEffect(() => {
    console.log('a');
    return () => console.log('a useEffect return');
  }, []);

  console.log('a below useEffect');

  return (
    <Button
      onClick={() => {
        setCount(count + 1);
        console.log('----------');
        console.log(`a-onclick内:${count}`);
      }}
    >
      a:カウントアップ
    </Button>
  );
};

export default Component;
