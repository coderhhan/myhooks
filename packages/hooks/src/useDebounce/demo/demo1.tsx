/**
 * title: 基础用法
 * desc: debouncedValue 只会在输入结束 500ms 后变化。
 */
import React, { useState } from 'react';
import { useDebounce } from 'uni-hooks';

export default () => {
  const [value, setValue] = useState<string>('usedebounce');
  const debounceValue = useDebounce(value, 500);

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Typed value"
        style={{ width: 280 }}
      />
      <p> value: {`${debounceValue}`}</p>
    </div>
  );
};
