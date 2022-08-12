import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useLocaleStorage from './use-locale-storage';

describe('useLocaleStorage', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useLocaleStorage());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
