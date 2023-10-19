import {Button} from '@material-ui/core';
import {useEffect, useState} from 'react';

// depsがnum型のコンポーネント
const Component: React.VFC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('rendering');
    console.log({count});
  }, [count]);

  return (
    <div>
      <Button onClick={() => setCount(count + 1)}>カウントアップ</Button>
    </div>
  );
};

export default Component;
