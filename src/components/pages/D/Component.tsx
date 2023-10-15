import {Button} from '@material-ui/core';
import {useEffect, useState} from 'react';

const Component: React.VFC = () => {
  const [count, setCount] = useState({a: 0, b: 1});

  useEffect(() => {
    console.log('rendering');
    console.log(count);
  }, [count]);

  return (
    <div>
      {/* obj new わからない */}
      {/* <Button
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
          console.log(count);
        }}
      >
        add
      </Button>
    </div>
  );
};

export default Component;
