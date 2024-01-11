import React, { useState } from 'react';
import useMemorizedFn from '..';

const arr = [];
const arr1 = [];
export default () => {
  const [count, setCount] = useState(1);
  const a = useMemorizedFn(() => {
    console.log('a');
  });
  const b = useMemorizedFn(() => {
    console.log('b');
  });
  arr.push(a);
  arr1.push(b);
  if (arr.length > 1) {
    console.log(arr[arr.length - 1] === arr[arr.length - 2]);
  }
  if (arr1.length > 1) {
    console.log(arr1[arr1.length - 1] === arr1[arr1.length - 2]);

    console.log(arr[arr.length - 1] === arr1[arr1.length - 1]);
  }
  console.log(a, b, a == b);
  const add = () => {
    setCount((state) => state + 1);
  };

  return (
    <div>
      {count}
      <p>
        <button onClick={add}>anniu</button>
      </p>
    </div>
  );
};
