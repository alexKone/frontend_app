import { render } from '@testing-library/react';

import Bottomnav from './bottomnav';

describe('Bottomnav', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Bottomnav />);
    expect(baseElement).toBeTruthy();
  });
});
