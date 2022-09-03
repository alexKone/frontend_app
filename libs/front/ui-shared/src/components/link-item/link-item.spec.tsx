import { render } from '@testing-library/react';

import LinkItem from './link-item';

describe('LinkItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LinkItem />);
    expect(baseElement).toBeTruthy();
  });
});
