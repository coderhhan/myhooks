import type Fetch from './Fetch';
export type Service<Tdata, Tparams extends any[]> = (...args: Tparams) => Promise<Tdata>;
export interface Options<TData, TParams extends any[]> {
    manual?: boolean;
    defaultParams?: TParams;
    onBefore?: (params: TParams) => void;
    onSuccess?: (data: TData, params: TParams) => void;
    onError?: (e: Error, params: TParams) => void;
}
export interface FetchState<TData, TParams extends any[]> {
    loading: boolean;
    params?: TParams;
    data?: TData;
    error?: Error;
}
export interface Result<TData, TParams extends any[]> {
    loading: boolean;
    data?: TData;
    error?: Error;
    params: TParams | [];
    cancel: Fetch<TData, TParams>['cancel'];
    refresh: Fetch<TData, TParams>['refresh'];
    refreshAsync: Fetch<TData, TParams>['refreshAsync'];
    run: Fetch<TData, TParams>['run'];
    runAsync: Fetch<TData, TParams>['runAsync'];
}
