import { Service, Options } from './type';
import useLatest from '../../useLatest';
import useUpdate from '../../useUpdate';
import useCreation from '../../useCreation';
import useUnmount from '../../useUnmount';
import useMemoizedFn from '../../useMemorizedFn';
import Fetch from './Fetch';
import { useEffect } from 'react';

const useMount = (fn: () => void) => {
  useEffect(() => {
    fn?.();
  }, []);
};
function useRequestImplement<Tdata, Tparams extends []>(
  service: Service<Tdata, Tparams>,
  options: Options<Tdata, Tparams> = {},
  plugin: [],
) {
  const { manual = false } = options; // 非手动触发
  // 基于原有的service 创建ref 避免闭包
  const serviceRef = useLatest(service);
  const update = useUpdate();
  const fetchInstance = useCreation(() => {
    return new Fetch<Tdata, Tparams>(
      serviceRef,
      {
        ...options,
        manual,
      },
      update,
    );
  }, []);

  useMount(() => {
    if (!manual) {
      // useCachePlugin can set fetchInstance.state.params from cache when init
      const params = fetchInstance.state.params || options.defaultParams || [];
      // @ts-ignore
      fetchInstance.run(...params);
    }
  });

  useUnmount(() => {
    fetchInstance.cancel();
  });

  return {
    loading: fetchInstance.state.loading,
    data: fetchInstance.state.data,
    error: fetchInstance.state.error,
    params: fetchInstance.state.params || [],
    cancel: useMemoizedFn(fetchInstance.cancel.bind(fetchInstance)),
    refresh: useMemoizedFn(fetchInstance.refresh.bind(fetchInstance)),
    refreshAsync: useMemoizedFn(fetchInstance.refreshAsync.bind(fetchInstance)),
    run: useMemoizedFn(fetchInstance.run.bind(fetchInstance)),
    runAsync: useMemoizedFn(fetchInstance.runAsync.bind(fetchInstance)),
  }
}

export default useRequestImplement;
