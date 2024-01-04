import type { MutableRefObject } from 'react';
import { FetchState, Options, Service } from './type';

class Fetch<Tdata, Tparams extends any[]> {
  count = 0;

  state: FetchState<Tdata, Tparams> = {
    loading: false,
    params: undefined,
    data: undefined,
    error: undefined,
  };
  constructor(
    public serviceRef: MutableRefObject<Service<Tdata, Tparams>>,
    public options: Options<Tdata, Tparams>, // publick 相当于 声明了 options，可以 this.options获取存进来的参数
    public update: () => void, // public initState: Partial<FetchState<TData, TParams>> = {},
  ) {
    this.state = {
      ...this.state,
      loading: !options.manual,
    };
  }

  setState(s: Partial<FetchState<Tdata, Tparams>> = {}) {
    this.state = {
      ...this.state,
      ...s,
    };
    this.update();
  }

  async runAsync(...params: Tparams): Promise<Tdata> {
    this.count += 1;
    const currentCount = this.count;

    this.setState({
      loading: true,
      params,
    });

    try {
      const res = await this.serviceRef.current(...params);
      if (currentCount !== this.count) {
        // prevent run.then when request is canceled
        return new Promise(() => {});
      }
      this.setState({
        data: res,
        error: undefined,
        loading: false,
      });
      console.log(this);
      this.options.onSuccess?.(res, params);
      return res;
    } catch (error) {
      if (currentCount !== this.count) {
        // prevent run.then when request is canceled
        return new Promise(() => {});
      }

      this.setState({
        error,
        loading: false,
      });

      throw error;
    }
  }

  run(...params: Tparams) {
    this.runAsync(...params).catch((error) => {
      if (!this.options.onError) {
        console.error(error);
      }
    });
  }

  cancel() {
    this.count += 1;
    this.setState({
      loading: false,
    });

    // this.runPluginHandler('onCancel');
  }

  refresh() {
    // @ts-ignore
    this.run(...(this.state.params || []));
  }

  refreshAsync() {
    // @ts-ignore
    return this.runAsync(...(this.state.params || []));
  }
}
export default Fetch;
