/**
 * title: 确保实例不会被重复创建
 * desc: 点击 "update" 按钮，触发组件的更新，但 Foo 的实例会保持不变
 */

import React from 'react';
import useCreation from '..';
import useUpdate from '../../useUpdate';

class Foo {
  data: number;
  constructor() {
    this.data = new Date().getTime();
  }
}
export default () => {
  const dataCreate = useCreation(() => {
    console.log('执行了');
    return new Foo();
  }, []);

  const update = useUpdate();
  return (
    <div>
      时间戳： {dataCreate.data}
      <p>
        <button onClick={update}>update</button>
      </p>
    </div>
  );
};
