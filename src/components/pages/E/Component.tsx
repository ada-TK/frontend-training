import {Button} from '@material-ui/core';
import {useEffect, useState} from 'react';
import {A, Root} from '..';

// depsがobjectのコンポーネント
const Component: React.VFC = () => {
  const [count, setCount] = useState({a: 0, b: 1});
  console.log('above useEffect');

  useEffect(() => {
    console.log(`useEffect最初のa:${count.a},b:${count.b}`);

    // 課題範囲外だが、早期リターンの際の挙動がよくわからないので質問
    // if (count.a % 2 === 0) {
    //   return () => console.log('useEffect early return');
    // }
    // console.log(`useEffectのifの後、a:${count.a},b:${count.b}`);
    return () => console.log('useEffect return');
  }, [count.a]);

  console.log('below useEffect');

  return (
    <>
      {/* obj new わからない
        <Button
          onClick={() => {
            setCount({...count, c: 'c'});
            console.log(count);
          }}
        >
          new
        </Button> */}
      <Button
        onClick={() => {
          setCount({...count, b: count.b + 1});
          console.log('----------');
          console.log(`onclick内のb:${count.b}`);
        }}
      >
        add not deps
      </Button>
      <Button
        onClick={() => {
          setCount({...count, a: count.a + 1});
          console.log('----------');
          console.log(`onclick内のa:${count.a}`);
        }}
      >
        add deps
      </Button>
      <Root />
      <A />
    </>
  );
};

export default Component;
