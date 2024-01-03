import { useState, useEffect } from 'react';
import useDebounceFn from '../useDebounceFn';

function useDebounce<T>(value: T, wait = 1000): T {
  const [state, setState] = useState(value);
  const [debounceSetState] = useDebounceFn(() => {
    setState(value);
  }, wait);

  useEffect(() => {
    debounceSetState();
  }, [value]);

  return state;
}

export default useDebounce;
