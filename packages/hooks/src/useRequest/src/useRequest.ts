import useRequestImplement from './useRequestImplement';
import { Service, Options } from './type';

function useRequest<Tdata, Tparams extends []>(
  service: Service<Tdata, Tparams>,
  options?: Options<Tdata, Tparams>,
) {
  return useRequestImplement<Tdata, Tparams>(service, options, []);
}

export default useRequest;
