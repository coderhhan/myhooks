import type { DependencyList } from 'react';
declare function useCreation<T>(factory: () => T, deps: DependencyList): T;
export default useCreation;
