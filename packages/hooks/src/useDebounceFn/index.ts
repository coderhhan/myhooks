import useLatest from '../useLatest';
import { useMemo, useRef } from 'react';
import useUnmount from '../useUnmount';

function useDebounceFn(fn, wait = 1000) {
  const fnRef = useLatest(fn);
  const timer = useRef();
  const debounced = useMemo(() => {
    return function (...args) {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        fnRef.current.apply(null, args);
        timer.current = null;
      }, wait);
    };
  }, []);

  useUnmount(() => {
    clearTimeout(timer.current);
  });

  return [debounced];
}

export default useDebounceFn;
