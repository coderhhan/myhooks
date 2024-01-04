import type { MutableRefObject } from 'react';
import { FetchState, Options, Service } from './type';
declare class Fetch<Tdata, Tparams extends any[]> {
    serviceRef: MutableRefObject<Service<Tdata, Tparams>>;
    options: Options<Tdata, Tparams>;
    update: () => void;
    count: number;
    state: FetchState<Tdata, Tparams>;
    constructor(serviceRef: MutableRefObject<Service<Tdata, Tparams>>, options: Options<Tdata, Tparams>, // publick 相当于 声明了 options，可以 this.options获取存进来的参数
    update: () => void);
    setState(s?: Partial<FetchState<Tdata, Tparams>>): void;
    runAsync(...params: Tparams): Promise<Tdata>;
    run(...params: Tparams): void;
    cancel(): void;
    refresh(): void;
    refreshAsync(): Promise<Tdata>;
}
export default Fetch;
