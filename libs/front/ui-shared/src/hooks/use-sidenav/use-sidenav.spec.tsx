import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useSidenav from './use-sidenav';

describe('useSidenav', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useSidenav());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
