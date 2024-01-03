/**
 * title: 如果依赖项发生变化，会重新创建实例
 * desc: 点击 "update" 按钮，触发组件的更新，依赖项变化，实例会发生变化
 */
import React, { useState } from 'react';
import useCreation from '..';

class Foo {
  data: number;
  constructor() {
    this.data = new Date().getTime();
  }
}
export default () => {
  const [count, update] = useState(0);
  const dataCreate = useCreation(() => {
    console.log('执行了');
    return new Foo();
  }, [count]);

  const add = () => {
    console.log('增加了');
    update((state) => state + 1);
  };
  return (
    <div>
      时间戳： {dataCreate.data}
      <p>{count}</p>
      <p>
        <button onClick={add}>update</button>
      </p>
    </div>
  );
};
