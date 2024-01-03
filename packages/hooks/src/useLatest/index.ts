import { useRef } from 'react';

function useLatest<T>(value: T) {
  const ref = useRef(value);  //首次渲染创建，rerender时仍然取旧值
  ref.current = value;  //因此要在此重新赋值，更新rerender传过来的参数

  return ref;
}

export default useLatest;
