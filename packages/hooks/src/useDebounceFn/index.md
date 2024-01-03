---
nav:
  path: /hooks
---

# useDebounceFn

用来处理防抖函数的 Hook。

## 代码演示

### 基础用法

<code hideActions='["CSB"]' src="./demo/demo1.tsx" />

## API

```typescript
const [ handler ] = useDebounceFn(
  fn: (...args: any[]) => any,
  wait?: number
);
```
### Params

| 参数    | 说明               | 类型                      | 默认值 |
| ------- | ------------------ | ------------------------- | ------ |
| fn      | 需要防抖执行的函数 | `(...args: any[]) => any` | -      |
| wait    | 等待时间 毫秒     | `number`                 |   1000    |
