import { act, renderHook } from '@testing-library/react';
import { sleep } from '../../../src/utils/testingHelpers';

import useDebounceFn from '../index';

let count = 0;
const debounceFn = (gap: number) => {
  count += gap;
};

const hooks = renderHook(() => useDebounceFn(debounceFn, 100));
describe('useDebounceFn', () => {
  it('debounced handler', async () => {
    act(async () => {
      hooks.result.current[0](1);
      hooks.result.current[0](1);
      hooks.result.current[0](1);
      hooks.result.current[0](1);
      expect(count).toBe(0);
      await sleep(300);
      expect(count).toBe(1);

      hooks.result.current[0](4);
      await sleep(100);
      expect(count).toBe(5);

      hooks.result.current[0](4);
      hooks.unmount();
      await sleep(100);
      expect(count).toBe(5);
    });
  });
});
