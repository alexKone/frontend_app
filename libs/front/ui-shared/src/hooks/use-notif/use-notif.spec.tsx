import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useNotif from './use-notif';

describe('useNotif', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useNotif());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
