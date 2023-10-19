import {Button} from '@material-ui/core';
import {useEffect, useState} from 'react';

// depsがnum配列のコンポーネント
const Component: React.VFC = () => {
  const [count, setCount] = useState([0]);

  useEffect(() => {
    console.log('rendering');
    console.log({count});
  }, [count]);

  return (
    <div>
      <Button
        onClick={() => {
          setCount(() => {
            count.push(0);
            return count;
          });
          console.log(count);
        }}
      >
        add
      </Button>
      <Button
        onClick={() => {
          setCount(() => {
            count[0] = count[0] + 1;
            return count;
          });
          console.log(count);
        }}
      >
        change
      </Button>
    </div>
  );
};

export default Component;
