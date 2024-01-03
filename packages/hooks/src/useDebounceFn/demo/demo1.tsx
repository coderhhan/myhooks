/**
 * title: 基础用法
 * desc: 返回debouced函数，频繁调用，但只会在所有点击完成 500ms 后执行一次相关函数
 */

import React, { useState } from 'react';
import { useDebounceFn } from 'uni-hooks';

export default () => {
  const [count, setCount] = useState(0);

  const [debounceHandler] = useDebounceFn(() => {
    setCount(count + 1);
    // setCount(state=>state+1)
  }, 500);

  return (
    <>
      <button onClick={debounceHandler}>防抖</button>
      <p>count: {count}</p>
    </>
  );
};
