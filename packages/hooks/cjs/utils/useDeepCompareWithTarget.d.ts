import type { BasicTarget } from './domTarget';
declare const useDeepCompareEffectWithTarget: (effect: EffectCallback, deps: DependencyList, target: BasicTarget<any> | BasicTarget<any>[]) => void;
export default useDeepCompareEffectWithTarget;
