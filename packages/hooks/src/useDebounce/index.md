---
nav:
  path: /hooks
---

# useDebounce

用来处理防抖值的 Hook。

## 代码演示

### 基础用法

<code hideActions='["CSB"]' src="./demo/demo1.tsx" />

## API

```typescript
const debouncedValue = useDebounce(
    value: any,
  wait?: number
);
```

### Params

| 参数  | 说明          | 类型     | 默认值 |
| ----- | ------------- | -------- | ------ |
| value | 需要防抖的值  | `any`    | -      |
| wait  | 等待时间 毫秒 | `number` | 1000   |
