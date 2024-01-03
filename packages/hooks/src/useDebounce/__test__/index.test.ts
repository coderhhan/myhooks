import { act, renderHook } from '@testing-library/react';
import { sleep } from '../../utils/testingHelpers';
import useDebounce from '../index';

describe('useDebounce', () => {
  it('useDebounce wait 100ms', async () => {
    let count = 0;
    const { result, rerender } = renderHook(() => useDebounce(count, 100));
    expect(result.current).toBe(0);
    act(() => {
      count = 1;
    });
    rerender();
    await act(async () => {
      await sleep(50);
    });
    expect(result.current).toBe(0);

    await act(async () => {
      await sleep(50);
    });
    expect(result.current).toBe(1);
  });
});
