import { render } from '@testing-library/react';

import SidenavMobile from './sidenav-mobile';

describe('SidenavMobile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SidenavMobile />);
    expect(baseElement).toBeTruthy();
  });
});
