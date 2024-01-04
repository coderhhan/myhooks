import { Service, Options } from './type';
declare function useRequest<Tdata, Tparams extends []>(service: Service<Tdata, Tparams>, options?: Options<Tdata, Tparams>): {
    loading: boolean;
    data: Tdata | undefined;
    error: Error | undefined;
    params: [];
    cancel: any;
    refresh: any;
    refreshAsync: any;
    run: any;
    runAsync: any;
};
export default useRequest;
