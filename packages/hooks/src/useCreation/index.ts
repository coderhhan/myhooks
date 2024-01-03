import type { DependencyList } from 'react';
import { useRef } from 'react';
import depsAreSame from '../utils/depsAreSame';

function useCreation<T>(factory: () => T, deps: DependencyList) {
  const ref = useRef({
    deps,
    init: false,
    data: {},
  });

  if (!ref.current.init || !depsAreSame(ref.current.deps, deps)) {
    ref.current.data = factory();
    ref.current.init = true;
  }

  return ref.current.data as T;
}

export default useCreation;
