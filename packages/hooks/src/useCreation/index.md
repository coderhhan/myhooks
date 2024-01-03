---
nav:
  path: /hooks
---

# useCreation

useCreation 是 useMemo 或 useRef 的替代品
而相比于 useRef，你可以使用 useCreation 创建一些常量，这些常量和 useRef 创建出来的 ref 有很多使用场景上的相似，但对于复杂常量的创建，useRef 却容易出现潜在的性能隐患。

## 代码演示

### 基础用法

<code hideActions='["CSB"]' src="./demo/demo1.tsx" />

<code hideActions='["CSB"]' src="./demo/demo2.tsx" />

## API

```typescript
function useCreation<T>(factory: () => T, deps: any[]): T;
```
