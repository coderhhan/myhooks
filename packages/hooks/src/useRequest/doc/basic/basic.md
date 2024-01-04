---
nav:
  path: /hooks
group:
  path: /use-request
---

# 基础用法

介绍 `useRequest` 最核心，最基础的能力，也就是 `useRequest` 内核的能力。

## 默认请求

默认情况下，`useRequest` 第一个参数是一个异步函数，在组件初始化时，会自动执行该异步函数。同时自动管理该异步函数的 `loading` , `data` , `error` 等状态。

```js
const { data, error, loading } = useRequest(service);
```

<br />

<!-- <code src="./demo/default.tsx" /> -->

## 手动触发

如果设置了 `options.manual = true`，则 `useRequest` 不会默认执行，需要通过 `run` 或者 `runAsync` 来触发执行。

```tsx | pure
const { loading, run, runAsync } = useRequest(service, {
  manual: true,
});

<button onClick={run} disabled={loading}>
  {loading ? 'Loading' : 'Edit'}
</button>;
```

`run` 与 `runAsync` 的区别在于：

- `run` 是一个普通的同步函数，我们会自动捕获异常，你可以通过 `options.onError` 来处理异常时的行为。
- `runAsync` 是一个返回 `Promise` 的异步函数，如果使用 `runAsync` 来调用，则意味着你需要自己捕获异常。

  ```ts
  runAsync()
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
  ```

接下来我们通过修改用户名这个简单的场景，来演示 useRequest 手动触发模式，以及 `run` 与 `runAsync` 的区别。

<code src="./demo/manual-run.tsx" />

<!-- ## 格式化数据

`useRequest` 提供了 `formatResult` 配置项，可以对 service 返回的数据做一次格式化。如果配置了 `formatResult`，则其它用到 `data` 的地方均以该返回值为准，比如 `result.data`，`options.onSuccess` 的参数等等。 -->

<!-- <code src="./demo/formatResult.tsx" /> -->

## 取消响应

`useRequest` 提供了 `cancel` 函数，用于**忽略**当前 promise 返回的数据和错误

**注意：调用 `cancel` 函数并不会取消 promise 的执行**

同时 `useRequest` 会在以下时机自动忽略响应：

- 组件卸载时，正在进行的 promise
- 竞态取消，当上一次 promise 还没返回时，又发起了下一次 promise，则会忽略上一次 promise 的响应

<code src="./demo/cancel.tsx" />

## API

```ts
const {
  loading: boolean,
  data?: TData,
  error?: Error,
  params: TParams || [],
  run: (...params: TParams) => void,
  runAsync: (...params: TParams) => Promise<TData>,
  refresh: () => void,
  refreshAsync: () => Promise<TData>,
  mutate: (data?: TData | ((oldData?: TData) => (TData | undefined))) => void,
  cancel: () => void,
} = useRequest<TData, TParams>(
  service: (...args: TParams) => Promise<TData>,
  {
    manual?: boolean,
    defaultParams?: TParams,
    onBefore?: (params: TParams) => void,
    onSuccess?: (data: TData, params: TParams) => void,
    onError?: (e: Error, params: TParams) => void,
    onFinally?: (params: TParams, data?: TData, e?: Error) => void,
  }
);
```

### Result

| 参数         | 说明                                                                                                     | 类型                                                                  |
| ------------ | -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| data         | service 返回的数据                                                                                       | `TData` \| `undefined`                                                |
| error        | service 抛出的异常                                                                                       | `Error` \| `undefined`                                                |
| loading      | service 是否正在执行                                                                                     | `boolean`                                                             |
| params       | 当次执行的 service 的参数数组。比如你触发了 `run(1, 2, 3)`，则 params 等于 `[1, 2, 3]`                   | `TParams` \| `[]`                                                     |
| run          | <ul><li> 手动触发 service 执行，参数会传递给 service</li><li>异常自动处理，通过 `onError` 反馈</li></ul> | `(...params: TParams) => void`                                        |
| runAsync     | 与 `run` 用法一致，但返回的是 Promise，需要自行处理异常。                                                | `(...params: TParams) => Promise<TData>`                              |
| refresh      | 使用上一次的 params，重新调用 `run`                                                                      | `() => void`                                                          |
| refreshAsync | 使用上一次的 params，重新调用 `runAsync`                                                                 | `() => Promise<TData>`                                                |
| mutate       | 直接修改 `data`                                                                                          | `(data?: TData / ((oldData?: TData) => (TData / undefined))) => void` |
| cancel       | 忽略当前 Promise 的响应                                                                                  | `() => void`                                                          |

### Options

| 参数          | 说明                                                                                                                                       | 类型                                                 | 默认值  |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------- | ------- |
| manual        | <ul><li> 默认 `false`。 即在初始化时自动执行 service。</li><li>如果设置为 `true`，则需要手动调用 `run` 或 `runAsync` 触发执行。 </li></ul> | `boolean`                                            | `false` |
| defaultParams | 首次默认执行时，传递给 service 的参数                                                                                                      | `TParams`                                            | -       |
| onBefore      | service 执行前触发                                                                                                                         | `(params: TParams) => void`                          | -       |
| onSuccess     | service resolve 时触发                                                                                                                     | `(data: TData, params: TParams) => void`             | -       |
| onError       | service reject 时触发                                                                                                                      | `(e: Error, params: TParams) => void`                | -       |
| onFinally     | service 执行完成时触发                                                                                                                     | `(params: TParams, data?: TData, e?: Error) => void` | -       |

以上我们介绍了 useRequest 最基础的功能，接下来我们介绍一些更高级的能力。
