import { useRef, useMemo } from 'react';

function useMemorizedFn(fn) {
  const fnRef = useRef(fn);
  fnRef.current = useMemo(() => {
    return fn;
  }, [fn]);

  const memorizedFn = useRef();

  if (!memorizedFn.current) {
    memorizedFn.current = function (...args) {
      return fnRef.current.apply(this, args);
    };
  }

  return memorizedFn.current;
}

export default useMemorizedFn;
