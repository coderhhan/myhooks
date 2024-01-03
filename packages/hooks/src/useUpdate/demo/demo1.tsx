import React, { useRef } from 'react';
import useUpdate from '..';

class Foo {
  constructor() {
    this.data = Math.random();
  }

  data: number;
}
export default () => {
  const foo = useRef(
    (() => {
      console.log('每次都是梨花');
      return new Foo();
    })(),
  );
  const fresh = useUpdate();
  return (
    <>
      当前时间：{new Date().getTime()}
      <p>
        {foo.current.data}
        <button onClick={fresh}>刷新</button>
      </p>
    </>
  );
};
